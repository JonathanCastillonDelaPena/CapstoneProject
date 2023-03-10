import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import PostCard from "../components/common/PostCard";
import PostForm from "../components/common/PostForm";
import PostDataService from "../dataServices/postDataService";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  /**
   * Get all the posts from the database.
   */
  const getPosts = () => {
    PostDataService.getAll()
      .then((response) => {
        setPosts(response.data);
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
      <PostCard props={post} key={post.post_id} />
    ));
  }

  return (
    <div>
      <Navbar />
      <div>HomePage</div>
      <PostForm user_id={2} />
      {displayPosts}
    </div>
  );
};

export default HomePage;
