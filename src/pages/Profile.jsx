import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";

// IMPORT
import '../assets/style/global.css';
import Nav from "../components/layout/Nav";
import ModalPost from "../components/layout/ModalPost";
import PostCard from "../components/common/PostCard";
import PostForm from "../components/common/PostForm";
import PostDataService from "../dataServices/postDataService";
import useLoadPosts from "../components/customHooks/useLoadPosts";
import { CardProfile } from "../components/common/CardProfile";
// END IMPORT

const Profile = () => {
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
  const currentUser = {
    user_id: 28,
    first_name: "Long",
    last_name: "Tester",
  };
  const getLatestPost = async () => {
    await PostDataService.getLatest()
      .then((response) => {
        const postArr = response.data;
        setLastFetchedRecord(postArr[0].post_id);
        setSubmittedPost(false);
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

    return(
       <div className="header_wrapper container">
        <Nav />
        <ModalPost props={{ ...currentUser, setSubmittedPost }} />
    {/* Cover Photo */}
        <header className="mt-5 container">
            <img src="https://www.denofgeek.com/wp-content/uploads/2020/07/One-Piece-Full-Cast-Header-Image.jpg?fit=2560%2C1440" className="bg"/></header>
        <div className="cols-container d-md-flex">
    {/* CArdProfile */}
            <CardProfile />

            <div className="right-col mt-3">       
                    <div className="d-flex">
                        <h2 className="display font500">About</h2>
                    </div>
                    <div className="d-flex flex-column justify-content-center border rounded">
                        <div className="container">
                        <PostForm props={{ ...currentUser, setSubmittedPost }} />
                            <hr />
                            {displayPosts}
                            {loading && "Loading more Posts..."}
                            {error && "Error"}
                        </div>                
            </div>
            </div>
        </div>
       </div>
    )
};

export default Profile;