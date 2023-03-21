import React from "react";
import { useState, useEffect } from "react";

// import Component
import PostCard from "../components/common/PostCard";
import PostForm from "../components/common/PostForm";
import PostDataService from "../dataServices/postDataService";
import Nav from "../components/layout/Nav";
import '../assets/style/global.scss'
import CardProfileMini from "../components/common/CardProfileMini";
import Footer from "../components/layout/Footer";
// import CardStory from "../components/common/cardStories";

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
    <div>
      <Nav />
      
      <div className="d-md-flex pt-3 bg-lightCustom mt-5">
        <div className="LeftContent d-flex flex-column align-items-center" style={{flexBasis: '50%', maxWidth: '50%'}}>
            <CardProfileMini />
        </div>

        <div className="MainContent px-5" style={{flexBasis: '100%', maxWidth: '100%'}}>
          <PostForm props={{...currentUser, setPosts}} />
          {displayPosts}
        </div>

        <div className="RightContent" style={{flexBasis: '70%', maxWidth: '70%'}}>
          <h1>Chat</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
