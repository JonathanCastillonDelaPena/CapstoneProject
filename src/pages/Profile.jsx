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
import UserDataService from "../dataServices/userDataService";
import useLoadPosts from "../components/customHooks/useLoadPosts";
import { CardProfile } from "../components/common/CardProfile";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

// END IMPORT

const Profile = () => {
  // const [submittedPost, setSubmittedPost] = useState(false);
  // const [lastFetchedRecord, setLastFetchedRecord] = useState(0);
  // const [limit, setLimit] = useState(5);
  // const { _posts, hasMore, loading, error, setPosts } = useLoadPosts(
  //   limit,
  //   lastFetchedRecord
  // );
  // const observer = useRef();
  // const lastPostElementRef = useCallback(
  //   (node) => {
  //     if (loading) return;
  //     if (observer.current) observer.current.disconnect();

  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting) {
  //         // console.log("visible");
  //         // console.log(node);
  //         setLastFetchedRecord(node.id - 1);
  //       }
  //     });

  //     if (node) observer.current.observe(node);
  //   },
  //   [loading]
  // );
  // // const currentUser = {
  // //   user_id: 28,
  // //   first_name: "Long",
  // //   last_name: "Tester",
  // // };
  // const getLatestPost = async () => {
  //   await PostDataService.getLatest()
  //     .then((response) => {
  //       const postArr = response.data;
  //       setLastFetchedRecord(postArr[0].post_id);
  //       setSubmittedPost(false);
  //     })
  //     .catch((err) => {
  //       console.log(`\nError retrieving latest post from database.`);
  //       console.log(err);
  //     });
  // };
  // useEffect(() => {
  //   if (submittedPost) {
  //     setPosts([]);
  //   }
  //   getLatestPost();
  // }, [submittedPost]);

  // let displayPosts = <></>;
  // if (_posts.length !== 0) {
  //   displayPosts = _posts.map((post, index) => {
  //     if (_posts.length === index + 1) {
  //       return (
  //         <PostCard
  //           props={{
  //             post: post,
  //             currentUser: currentUser,
  //             ref: lastPostElementRef,
  //           }}
  //           key={post.post_id}
  //         />
  //       );
  //     } else {
  //       return (
  //         <PostCard
  //           props={{ post: post, currentUser: currentUser }}
  //           key={post.post_id}
  //         />
  //       );
  //     }
  //   });
  // }

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
  const { username } = cookies.get("_auth_state");
  const [currentUser, setCurrentUser] = useState({});

  // let currentUser = {
  //   user_id: 14,
  //   first_name: "Long",
  //   last_name: "Takun",
  // };
  

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
  }

  useEffect(() => {
    getCurrentUser();
  },[]);
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

  const [results, setResults] = useState([]);

    return(
       <div className="header_wrapper">
        <Nav resultState={{results, setResults}} props={{ ...currentUser, setSubmittedPost }}  />
        <ModalPost props={{ ...currentUser, setSubmittedPost }} />
    {/* Cover Photo */}
        <header className="mt-5 container">
            <img src="https://www.denofgeek.com/wp-content/uploads/2020/07/One-Piece-Full-Cast-Header-Image.jpg?fit=2560%2C1440" className="bg"/></header>
        <div className="cols-container d-lg-flex">
    {/* CArdProfile */}
            <CardProfile props={{ ...currentUser, setSubmittedPost }} />

            <div className="right-col mt-3">       
                    <div className="d-flex">
                        <h2 className="display font500">About</h2>
                    </div>
                    <div className="d-flex flex-column justify-content-center rounded">
                        <div className="container">
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

                        {/* <PostForm props={{ ...currentUser, setSubmittedPost }} /> */}
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