import React, { useState } from "react";
import PostDataService from "../../dataServices/postDataService";
import ImageFileSelector from "./ImageFileSelector";
import '../../assets/style/global.css'
// import MediaUploadWidget from "./MediaUploadWidget";

const PostForm = ({ user_id }) => {
  let initialPostData = {
    user_id: user_id,
    title: "",
    content: "",
    image_file: "",
  };
  const [post, setPost] = useState(initialPostData);

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
    <div className="card m-2">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          {/* SmallProfilePic Resuable CSS classname */}
          <img src="https://images.pexels.com/photos/10957721/pexels-photo-10957721.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="primaryPicSample" className="smallMiniProfilePic rounded-circle" />
          {/* {user_id} This is the user ID PROPS */}
          <span className="font-small-size mb-4 ms-2 font700">Jestoni Ceroma</span>
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
            /> */}
{/* TextArea */}
            <div className="form-group">
              
            <ImageFileSelector
                imagePreview={handleImage}
                image={imagePreview.image}
              />
              <textarea
                required
                className="form-control"
                placeholder="Post what's on your mind."
                id="content"
                name="content"
                value={post.content}
                onChange={handleInputChange}
              ></textarea>
            </div>
{/* ImageSelector */}
            <div className="container d-flex align-items-center mt-1">
              
            <button type="submit" className="btn btn-success ms-auto">
              Post!
            </button>
            </div>
            {/* <MediaUploadWidget /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default PostForm;