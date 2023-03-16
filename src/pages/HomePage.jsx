import React from "react";
import { useState, useEffect } from "react";

// import Component
import PostCard from "../components/common/PostCard";
import PostForm from "../components/common/PostForm";
import PostDataService from "../dataServices/postDataService";
import Nav from "../components/layout/Nav";
import '../assets/style/global.scss'
import CardProfileMini from "../components/common/CardProfileMini";
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
    <div className="mainBody">
      <Nav />
      <div className="d-md-flex mt-4">
        <div className="LeftContent d-flex flex-column align-items-center" style={{flexBasis: '50%', maxWidth: '50%'}}>
            <CardProfileMini />
        </div>
        <div className="MainContent" style={{flexBasis: '100%', maxWidth: '100%'}}>
          <PostForm user_id={2} />
          {displayPosts}
        </div>
        <div className="RightContent" style={{flexBasis: '70%', maxWidth: '70%'}}>
          <h1>Chat</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
