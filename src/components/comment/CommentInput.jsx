import React, { useState } from "react";
import CommentDataService from "../../dataServices/commentDataService";

const CommentInput = ({ props }) => {
  const [comment, setComment] = useState("");

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleError1425 = (errorNumber, props) => {
    // MySQL error {code: ER_NO_REFERENCED_ROW, errno: 1452}
    // This error results in referencing a non existent row.
    // When this happen, alert the user then refresh the comment section.
    if (errorNumber === 1452) {
      alert(`The comment you were replying to must have been deleted.`);

      setComment("");
      props?.getCommentCount();
      props?.getParentComment();
    }
  };

  const sendParentComment = async (props) => {
    const data = {
      post_id: props.post.post_id,
      user_id: props.currentUser.user_id,
      comment: comment,
    };
    await CommentDataService.createParentComment(data)
      .then((response) => {
        alert(`Your Comment was shared!`);
        setComment("");
        props?.getCommentCount();
        props?.getParentComment();
      })
      .catch((err) => {
        console.log(
          `\nError adding parent comment to the post in the database.`
        );
        console.log(err);
      });
  };

  const sendReplyComment = async (props) => {
    const data = {
      parent_comment_id: props.parentComment.comment_id,
      post_id: props.post.post_id,
      user_id: props.currentUser.user_id,
      comment: comment,
    };
    await CommentDataService.createReplyComment(data)
      .then((response) => {
        alert(`Your Comment was shared!`);
        setComment("");
        props?.getReplyCommentCount();
        props?.getReplyComment();
      })
      .catch((err) => {
        console.log(
          `\nError adding reply comment to the post in the database.`
        );
        // console.log(err.response.data.errno);
        handleError1425(err.response.data.errno, props);
      });
  };

  const sendComment = (props) => {
    !Object.entries(props.parentComment).length
      ? sendParentComment(props)
      : sendReplyComment(props);
  };

  const handleCommentSubmit = (event, props) => {
    event.preventDefault();

    sendComment(props);
  };

  return (
    <div className="d-flex pt-3 mt-2 px-2">
      <img
        className="rounded-circle smallMiniProfilePicComment mx-2 mt-1"
        src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="..."
      />
      <form
        onSubmit={(event) => handleCommentSubmit(event, props)}
        className='form-outline w-100 mb-2 me-2'
      >
        <input
          required
          className="form-control flex-fill rounded5"
          type="text"
          value={comment}
          onChange={handleInputChange}
          placeholder={!Object.entries(props.parentComment).length ? "Write a comment.": "Write a reply." }
        />
        {/* <textarea
                required
                className="form-control shadow-none textarea flex-fill"
                placeholder="Write a comment"
                value={comment}
                onChange={handleInputChange}
        ></textarea> */}
      </form>
    </div>
  );
};

export default CommentInput;
