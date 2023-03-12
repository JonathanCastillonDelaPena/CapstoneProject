import React, { useState } from "react";
import PostDataService from "../../dataServices/postDataService";

const PostForm = ({ user_id }) => {
  let initialPostData = {
    user_id: user_id,
    title: "",
    content: "",
  };
  const [post, setPost] = useState(initialPostData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    PostDataService.create(post)
      .then((response) => {
        console.log(response);
        alert(`Your Post was shared!`);
        setPost(initialPostData);
      })
      .catch((err) => {
        console.log(`\nError adding a post to the database.`);
        console.log(err);
      });
  };

  return (
    <div className="card w-75 m-2">
      <div className="card-body">
        <h4 className="card-title">{user_id}</h4>
        <div className="card-text">
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              className="form-control mb-1"
              placeholder="Your creative Post title..."
              id="title"
              name="title"
              value={post.title}
              onChange={handleInputChange}
            />
            <input
              required
              type="text"
              className="form-control"
              placeholder="Post what's on your mind."
              id="content"
              name="content"
              value={post.content}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-success mt-2">
              Post!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;