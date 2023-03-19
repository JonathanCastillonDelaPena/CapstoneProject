import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import PostCard from "../components/common/PostCard";
import PostForm from "../components/common/PostForm";
import PostDataService from "../dataServices/postDataService";
import PageHomeSideNav from "../components/layout/PageHomeSideNav";
const HomePage = () => {
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

  useEffect(() => {
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

    getPosts();
  }, []);

  let displayPosts = <></>;
  if (posts.length !== 0) {
    displayPosts = posts.map((post) => (
      <PostCard props={{post: post, currentUser: currentUser}} key={post.post_id} />
    ));
  }

  return (
    <div className="container-fluid" >
      <Navbar />
      <div className="d-flex">
        <PageHomeSideNav />
        <div>
          <PostForm props={{...currentUser, setPosts}} />
          {displayPosts}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
