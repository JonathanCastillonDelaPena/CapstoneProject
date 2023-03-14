import React from "react";
import { useState, useEffect } from "react";
import PostCard from "../components/common/PostCard";
import PostForm from "../components/common/PostForm";
import PostDataService from "../dataServices/postDataService";
import Nav from "../components/layout/Nav";
import '../assets/style/global.scss'
// import CardStory from "../components/common/cardStories";
const HomePage = () => {
  const [posts, setPosts] = useState([]);

  /**
   * Get all the posts from the database.
   */
  const getPosts = async () => {
    await PostDataService.getAll()
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
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
    <div className="container-fluid">
      <Nav />
      <div className="d-flex flex-column justify-content-center align-items-center">
        
          <PostForm user_id={2} />
          {displayPosts}
       
      </div>
    </div>
  );
};

export default HomePage;
