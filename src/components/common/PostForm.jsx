import React, { useState } from "react";
import PostDataService from "../../dataServices/postDataService";
import '../../assets/style/reusable.css';
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
        <div className="d-flex align-items-center mb-3">
          {/* SmallProfilePic Resuable CSS classname */}
          <img src="https://images.pexels.com/photos/10957721/pexels-photo-10957721.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="primaryPicSample" className="smallPicProfile rounded-circle" />
          {/* {user_id} This is the user ID PROPS */}
          <h4 className="card-title">Jestoni Ceroma Sample Name</h4>
        </div>
        <div className="card-text">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
            {/* <input
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
            /> */}
              <textarea
            required
            className="form-control mb-2"
            placeholder="What's on your mind?"
            id="content"
            name="content"
            value={post.content}
            onChange={handleInputChange}
            rows="3"
          ></textarea>
            </div> 
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
