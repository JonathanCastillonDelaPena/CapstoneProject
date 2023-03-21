import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import useLoadPosts from "../components/customHooks/useLoadPosts";

// import Component
import PostCard from "../components/common/PostCard";
import PostForm from "../components/common/PostForm";
import PostDataService from "../dataServices/postDataService";
import Nav from "../components/layout/Nav";
import "../assets/style/global.scss";
import CardProfileMini from "../components/common/CardProfileMini";
import Footer from "../components/layout/Footer";
// import CardStory from "../components/common/cardStories";

const HomePage = () => {
  // const [posts, setPosts] = useState([]);
  const [submittedPost, setSubmittedPost] = useState(false);

  const [lastFetchedRecord, setLastFetchedRecord] = useState(0);
  const [limit, setLimit] = useState(5);
  const { _posts, hasMore, loading, error, setPosts } = useLoadPosts(
    limit,
    lastFetchedRecord
  );

  const observer = useRef();
  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // console.log("visible");
          // console.log(node);
          setLastFetchedRecord(node.id - 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );

  // The data of the current user.
  // This is just temporary and should be changed
  // to be dynamic.
  // Note: this user data must be in your local database.
  // Note: this data is only partial.
  const currentUser = {
    user_id: 14,
    first_name: "Long",
    last_name: "Takun",
  };

  // const getPosts = async () => {
  //   await PostDataService.getAll()
  //     .then((response) => {
  //       setPosts(response.data);
  //       // console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(`\nError retrieving posts from database.`);
  //       console.log(err);
  //     });
  // };

  const getLatestPost = async () => {
    await PostDataService.getLatest()
      .then((response) => {
        const postArr = response.data;
        setLastFetchedRecord(postArr[0].post_id);
        setSubmittedPost(false);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(`\nError retrieving latest post from database.`);
        console.log(err);
      });
  };

  useEffect(() => {
    if (submittedPost) {
      setPosts([]);
    }
    getLatestPost();
  }, [submittedPost]);

  let displayPosts = <></>;
  if (_posts.length !== 0) {
    displayPosts = _posts.map((post, index) => {
      if (_posts.length === index + 1) {
        return (
          <PostCard
            props={{
              post: post,
              currentUser: currentUser,
              ref: lastPostElementRef,
            }}
            key={post.post_id}
          />
        );
      } else {
        return (
          <PostCard
            props={{ post: post, currentUser: currentUser }}
            key={post.post_id}
          />
        );
      }
    });
  }

  return (
    <div>
      <Nav />
      
      <div className="d-md-flex pt-3 bg-lightCustom mt-5">
        <div className="LeftContent d-flex flex-column align-items-center" style={{flexBasis: '50%', maxWidth: '50%'}}>
            <CardProfileMini />
        </div>
        <div
          className="MainContent"
          style={{ flexBasis: "100%", maxWidth: "100%" }}
        >
          <PostForm props={{ ...currentUser, setSubmittedPost }} />
          {displayPosts}
          {loading && "Loading more Posts..."}
          {error && "Error"}
        </div>
        <div
          className="RightContent"
          style={{ flexBasis: "70%", maxWidth: "70%" }}
        >
          <h1>Chat</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
