import React from "react";
import { useState, useEffect } from "react";
import useLoadPosts from "../components/customHooks/useLoadPosts";

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

  const [pageNumber, setPageNumber] = useState(1);
  useLoadPosts(pageNumber);

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
    <div className="mainBody">
      <Nav />
      <div className="d-md-flex mt-5 pt-3">
        <div className="LeftContent d-flex flex-column align-items-center" style={{flexBasis: '50%', maxWidth: '50%'}}>
            <CardProfileMini />
        </div>
        <div className="MainContent" style={{flexBasis: '100%', maxWidth: '100%'}}>
          <PostForm props={{...currentUser, setPosts}} />
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
