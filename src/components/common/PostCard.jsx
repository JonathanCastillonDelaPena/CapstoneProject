import React, { useEffect, useState } from "react";
import CommentDataService from "../../dataServices/commentDataService";
import CommentSection from "../comment/CommentSection";

const PostCard = ({ props }) => {
  const [isCommentBoxHidden, setIsCommentBoxHidden] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  // const handleRemovePost = (post_id, image_public_id) => {
  //   PostDataService.remove({
  //     post_id: post_id,
  //     image_public_id: image_public_id,
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       alert(`Your Post was deleted!`);
  //     })
  //     .catch((err) => {
  //       console.log(`\nError deleting the post in the database.`);
  //       console.log(err);
  //     });
  // };

  const handleShowCommentBox = () => {
    setIsCommentBoxHidden((previous) => !previous);
  };

  const getCommentCount = async () => {
    await CommentDataService.getCommentCount({ post_id: props.post_id })
      .then((response) => {
        let countArray = response.data;
        setCommentCount(countArray[0].comment_count);
        console.log(countArray);
      })
      .catch((err) => {
        console.log(
          `\nError retrieving comment count of the post from database.`
        );
        console.log(err);
      });
  };

  return (
    <div className="card w-50 m-2" onLoad={getCommentCount}>
      <img src={props.image_url} alt="" className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{props.user_id}</h4>
        <h2 className="card-title">{props.title}</h2>
        <div className="card-text">
          <p>{props.content}</p>
        </div>
      </div>
      <div className="card-footer">
        {/* <button
          className="btn btn-danger"
          onClick={() => handleRemovePost(props.post_id, props.image_public_id)}
        >
          Delete Post
        </button> */}
        <div className="d-flex justify-content-center">
          <button type="button" onClick={handleShowCommentBox}>
            Comment {commentCount}
          </button>
        </div>
        {isCommentBoxHidden && (
          <CommentSection key={props.post_id} post_id={props.post_id} />
        )}
      </div>
    </div>
  );
};

export default PostCard;
