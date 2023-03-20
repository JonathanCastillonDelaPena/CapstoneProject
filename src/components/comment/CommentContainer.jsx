import React, { useState } from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import CommentDataService from "../../dataServices/commentDataService";

const CommentContainer = ({ props }) => {
  const [isReplyBoxHidden, setIsReplyBoxHidden] = useState(false);
  const [replyComment, setReplyComment] = useState([]);
  const [replyCommentCount, setReplyCommentCount] = useState(0);

  const handleReplyBox = () => {
    setIsReplyBoxHidden((previous) => !previous);
    getReplyComment();
  };

  const getReplyComment = async () => {
    await CommentDataService.getReplyComment({post_id: props.post.post_id, parent_comment_id: props.parentComment.comment_id})
      .then((response) => {
        setReplyComment(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(`\nError retrieving reply comment from database.`);
        console.log(err);
      });
  };

  const getReplyCommentCount = async () => {
    await CommentDataService.getReplyCommentCount({post_id: props.post.post_id, parent_comment_id: props.parentComment.comment_id})
      .then((response) => {
        let countArray = response.data;
        setReplyCommentCount(countArray[0].comment_count);
        // console.log(countArray);
      })
      .catch((err) => {
        console.log(
          `\nError retrieving comment count of the post from database.`
        );
        console.log(err);
      });
  };

  function showCommentReplies() {
    return (
      <div className="ms-4">
        <li style={{ listStyleType: "none" }}>
          {replyComment.map((comment) => (
            <Comment key={comment.comment_id} props={comment} />
          ))}
          <CommentInput props={{...props, getReplyCommentCount, getReplyComment}}/>
        </li>
      </div>
    );
  }

  return (
    <div onLoad={getReplyCommentCount}>
      <Comment props={props.parentComment} />
      <div className="comment-options">
        <button type="button" onClick={handleReplyBox}>
          Reply {replyCommentCount === 0 ? "" : replyCommentCount}
        </button>
      </div>
      {isReplyBoxHidden && showCommentReplies()}
    </div>
  );
};

export default CommentContainer;
