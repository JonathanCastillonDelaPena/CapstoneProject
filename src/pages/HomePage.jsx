import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";

// import Component
import PostCard from "../components/common/PostCard";
import PostForm from "../components/common/PostForm";
import PostDataService from "../dataServices/postDataService";
import UserDataService from "../dataServices/userDataService";
import Nav from "../components/layout/Nav";
import "../assets/style/global.scss";
import CardProfileMini from "../components/common/CardProfileMini";
import Footer from "../components/layout/Footer";
import ModalPost from "../components/layout/ModalPost";
import useLoadPosts from "../components/customHooks/useLoadPosts";
// import CardStory from "../components/common/cardStories";

import { Cookies } from "react-cookie";
import SearchResult from "../components/searchBox/SearchResult";
const cookies = new Cookies();

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
  const { username } = cookies.get("_auth_state");
  const [currentUser, setCurrentUser] = useState({});

  const getCurrentUser = async () => {
    await UserDataService.getDetails({ username: username })
      .then((response) => {
        const userArr = response.data;
        setCurrentUser(userArr[0]);
      })
      .catch((err) => {
        console.log(`\nError retrieving current user from database.`);
        console.log(err);
      });
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

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
  const [results, setResults] = useState([]);

  return (
    <div>
      <Nav resultState={{results, setResults}} props={{ ...currentUser, setSubmittedPost }}  />
      {/* Modal */}
      <ModalPost props={{ ...currentUser, setSubmittedPost }} />

      <div className="d-md-flex pt-3 bg-lightCustom mt-5">
        <div
          className="LeftContent d-flex flex-column align-items-center"
          style={{ flexBasis: "50%", maxWidth: "50%" }}
        >
          {/* NeedFix */}
          <CardProfileMini props={{ ...currentUser, setSubmittedPost }} />
        </div>
        <div
          className="MainContent"
          style={{ flexBasis: "100%", maxWidth: "100%" }}
        >
          <SearchResult results={results} />
          {/* New Post */}
          <div className="container w-100 px-3">
            <div className="card boxshadow">
              <div className="mt-3">
                <img className="smallMiniProfilePic rounded-circle ms-3 boxshadow" src={currentUser.image_url} alt="" />
                  <button className='text-decoration w-75 ms-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                   <input className="form-control textinputrounded boxshadow" type="text" placeholder="Your Post Here" disabled/>
                  </button>
              </div>
              <div className="container mt-4 w-100 border-top p-2"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <button className="btn w-50" >
                <i className="bi bi-camera-fill me-1"></i>
                  <span className="textshadow">Upload</span>
                </button>
                <button className="btn w-50" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <i class="bi bi-chat-square-dots-fill me-1"></i>
                  <span className="textshadow">Post</span>
                </button>
              </div>
            </div>
          </div>

          {/* <PostForm props={{ ...currentUser, setSubmittedPost }} /> */}
          {/*END New Post */}
          <div className="container">
            {displayPosts}
            {loading && "Loading more Posts..."}
            </div>
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
