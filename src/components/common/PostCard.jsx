import React, { useEffect, useState } from "react";
import CommentDataService from "../../dataServices/commentDataService";
import CommentSection from "../comment/CommentSection";
import UserDataService from "../../dataServices/userDataService";

const PostCard = ({ props }) => {
  const [isCommentBoxVisible, setIsCommentBoxHidden] = useState(false);
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
    await CommentDataService.getCommentCount({ post_id: props.post.post_id })
      .then((response) => {
        let countArray = response.data;
        setCommentCount(countArray[0].comment_count);
        // console.log(countArray);
      })
      .catch((err) => {
        console.log(
          `\nError retrieving comment count of the post from database.`
        );
        console.log(err);
      });
  };

  const [postUser, setPostUser] = useState({});
  const getPoster = async () => {
    await UserDataService.getDetailsByPost({post_id: props.post.post_id })
      .then((response) => {
        const userArr = response.data;
        setPostUser(userArr[0]);
      })
      .catch((err) => {
        console.log(`\nError retrieving post user from database.`);
        console.log(err);
      });
  }
  useEffect(() => {
    getPoster();
  },[]);

  useEffect(() => {
    getCommentCount();
  },[props.post.post_id]);


  // const createdDate = new Date(props.post.created_at);
  //   const formattedDate = createdDate.toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  const createdDate = new Date(props.post.created_at);
const currentDate = new Date();
const diffInMs = currentDate.getTime() - createdDate.getTime();
const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

let message = "";
if (diffInDays === 0) {
  // Less than 24 hours ago
  const hours = createdDate.getHours();
  const minutes = createdDate.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedTime = `${(hours % 12) || 12}:${minutes} ${ampm}`;
  message = `posted today at ${formattedTime}`;
} else if (diffInDays === 1) {
  // Yesterday
  const hours = createdDate.getHours();
  const minutes = createdDate.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedTime = `${(hours % 12) || 12}:${minutes} ${ampm}`;
  message = `posted yesterday at ${formattedTime}`;
} else {
  // More than 1 day ago
  message = `posted ${diffInDays} days ago`;
}

  return (
    <div className="card m-2" ref={props.ref} id={props.post.post_id}>
      <div className="card-body">
        <div className="d-flex">
          <img className="miniProfile" src={postUser.image_url} alt="" />
          <div className="ms-2 mt-2 mb-5">
            <span className="font900">{postUser.first_name} {postUser.last_name}</span>
            <span className="text-muted"> {message}</span>
          </div>
        </div>

        <div className="card-text">
          <p>{props.post.content}</p>
        </div>

        <img src={props.post.image_url} alt="" className="card-img-top" />
          {/* <div className="d-flex">
            <div className="ms-auto mt-2">
              <span className="font700">{commentCount}</span>
              <i class="bi bi-chat-dots-fill font-small-size me-3 mx-1"></i>
              </div>
          </div> */}
      </div>
      <div>
        {/* <button
          className="btn btn-danger"
          onClick={() => handleRemovePost(props.post.post_id, props.post.image_public_id)}
        >
          Delete Post
        </button> */}
        <div className="d-flex justify-content-between border-top border-bottom p-2">
          <button className="btn font700 btn-style-Link" type="button" onClick={handleShowCommentBox}>
            Comment
          </button>
          <button className="btn font700 btn-style-Link" type="button" onClick={handleShowCommentBox}>
              <span className="font700">{commentCount}</span>
              <i className="bi bi-chat-dots-fill font-small-size me-3 mx-1"></i>
          </button>
        </div>
        {isCommentBoxVisible && (
          <CommentSection key={props.post.post_id} props={{...props, getCommentCount}} />
        )}
      </div>
    </div>
  );
};
export default PostCard;
