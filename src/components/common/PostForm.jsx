import React, { useState } from "react";
import PostDataService from "../../dataServices/postDataService";
import ImageFileSelector from "./ImageFileSelector";
import "../../assets/style/global.css";
import { ToastContainer, toast } from "react-toastify";
// import MediaUploadWidget from "./MediaUploadWidget";

const PostForm = ({ props }) => {
  let initialPostData = {
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

    PostDataService.create({ ...post, user_id: props.user_id })
      .then((response) => {
        console.log(response);
        toast.success("Your post was shared!", {
          position: "top-center",
          autoClose: 3100,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        // Clear the Post form.
        setPost(initialPostData);
        setImage({});
        setIsPostSubmitted(true);
        props.setSubmittedPost(true);
        setTimeout(() => window.location.reload(false), 3000);
      })
      .catch((err) => {
        console.log(`\nError adding a post to the database.`);
        console.log(err);
      });
  };

  return (
    <div className="card m-2">
      <ToastContainer />
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          {/* SmallProfilePic Resuable CSS classname */}
          <img
            src={props.image_url}
            alt="primaryPicSample"
            className="smallMiniProfilePic rounded-circle"
          />
          {/* {user_id} This is the user ID PROPS */}

          <span className="font-small-size mb-4 ms-2 font700 font-Color-Black">
            {props.first_name} {props.last_name}
          </span>
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
                  postState={{ isPostSubmitted, setIsPostSubmitted, setImage }}
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
