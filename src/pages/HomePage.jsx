import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import PostCard from "../components/common/PostCard";
import PostForm from "../components/common/PostForm";
import PostDataService from "../dataServices/postDataService";
import PageHomeSideNav from "../components/layout/PageHomeSideNav";
const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
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

    getPosts();
  }, []);

  let displayPosts = <></>;
  if (posts.length !== 0) {
    displayPosts = posts.map((post) => (
      <PostCard props={post} key={post.post_id} />
    ));
  }

  return (
    <div className="container-fluid" >
      <Navbar />
      <div className="d-flex">
        <PageHomeSideNav />
        <div>
          <PostForm user_id={2} />
          {displayPosts}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
