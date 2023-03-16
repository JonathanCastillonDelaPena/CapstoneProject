import React from "react";
import PostDataService from "../../dataServices/postDataService";

const PostCard = ({ props }) => {
  const handleRemovePost = (post_id, image_public_id) => {
    PostDataService.remove({
      post_id: post_id,
      image_public_id: image_public_id,
    })
      .then((response) => {
        console.log(response);
        alert(`Your Post was deleted!`);
      })
      .catch((err) => {
        console.log(`\nError deleting the post in the database.`);
        console.log(err);
      });
  };

  return (
    <div className="card m-2">
      <img src={props.image_url} alt="" className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{props.user_id}</h4>
        <h2 className="card-title">{props.title}</h2>
        <div className="card-text">
          <p>{props.content}</p>
        </div>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-danger"
          onClick={() => handleRemovePost(props.post_id, props.image_public_id)}
        >
          Delete Post
        </button>
      </div>

      



    </div>
  );
};


export default PostCard;
