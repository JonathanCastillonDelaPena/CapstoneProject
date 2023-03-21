import React, { useState, useEffect } from 'react';
import PostForm from '../common/PostForm';
import PostCard from '../common/PostCard';
import PostDataService from '../../dataServices/postDataService';
import ImageFileSelector from '../common/ImageFileSelector';
import '../../assets/style/global.css';
function ModalPost() {
    const [posts, setPosts] = useState([]);

  // The data of the current user.
  // This is just temporary and should be changed
  // to be dynamic.
  // Note: this user data must be in your local database.
  // Note: this data is only partial.
  const currentUser = {
    user_id: 14,
    first_name: "Long",
    last_name: "Takun"
  }
  
  const getPosts = async () => {
    await PostDataService.getAll()
      .then((response) => {
        setPosts(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(`\nError retrieving posts from database.`);
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  let displayPosts = <></>;
  if (posts.length !== 0) {
    displayPosts = posts.map((post) => (
      <PostCard props={{post: post, currentUser: currentUser}} key={post.post_id} />
    ));
  }
  return (
    // <div classNameName ="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //     <div classNameName ="modal-dialog">
    //         <div classNameName ="modal-content">
    //         <div classNameName ="modal-header">
    //             <h1 classNameName ="modal-title fs-5" id="exampleModalLabel">Create Post</h1>
    //             <button type="button" classNameName ="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //         </div>
    //         <div classNameName ="modal-body">
                
    //         </div>
    //         <div classNameName ="modal-footer">
    //             <button type="button" classNameName ="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //             <button type="button" classNameName ="btn btn-primary">Save changes</button>
    //         </div>
    //         </div>
    //     </div>
    // </div> 
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 font700 font-Color-Black" id="staticBackdropLabel">Create post</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <PostForm props={{...currentUser, setPosts}} />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    
  )
}

export default ModalPost