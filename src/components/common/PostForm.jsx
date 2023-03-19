import React, { useState } from "react";
import PostDataService from "../../dataServices/postDataService";
import ImageFileSelector from "./ImageFileSelector";
// import MediaUploadWidget from "./MediaUploadWidget";

const PostForm = ({ props }) => {
  let initialPostData = {
    user_id: props.user_id,
    title: "",
    content: "",
    image_file: "",
  };
  const [post, setPost] = useState(initialPostData);
  const [isPostSubmitted, setIsPostSubmitted] = useState(false);

  // Include this states when using the ImageFileSelector component
  const [imagePreview] = useState({});
  const [, setImage] = useState({});

  // Include this function when using the ImageFileSelector component
  const handleImage = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {

        setImage({
          src: URL.createObjectURL(imageFile),
          alt: imageFile.name,
        });
      
      // Change this setter depending on context
      setPost({
        ...post,
        ["image_file"]: imageFile,
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const getPosts = async () => {
    await PostDataService.getAll()
      .then((response) => {
        props.setPosts(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(`\nError retrieving posts from database.`);
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    PostDataService.create(post)
      .then((response) => {
        console.log(response);
        alert(`Your Post was shared!`);

        // Clear the Post form.
        setPost(initialPostData);
        setImage({});
        setIsPostSubmitted(true);
        getPosts();
      })
      .catch((err) => {
        console.log(`\nError adding a post to the database.`);
        console.log(err);
      });
  };

  return (
    <div className="card w-75 m-2">
      <div className="card-body">
        <h4 className="card-title">
          {props.first_name} {props.last_name}
        </h4>
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
            <ImageFileSelector
              imagePreview={handleImage}
              postState={{isPostSubmitted, setIsPostSubmitted}}
              image={imagePreview.image}
            />
            <button type="submit" className="btn btn-success mt-2">
              Post!
            </button>
            {/* <MediaUploadWidget /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
