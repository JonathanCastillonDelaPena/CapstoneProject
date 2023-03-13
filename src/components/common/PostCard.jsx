import React, { useState } from "react";
import '../../assets/style/reusable.css';

const PostCard = ({ props }) => {
  return (
    <div style={{ backgroundColor: '#eee' }}>
        <div className="container mb-2 w-100">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-start align-items-center">
                    {/* Profile Pic of User Post */}
                    <img
                      className="smallPicProfile rounded-circle"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                      alt="avatar"
                      width="0"
                      height="50"
                    />
                    {/* This Division is for Name and Date */}
                      <div>
                        {/* UserName of the Poster */}
                        {/* <h4 >{props.user_id}</h4> */}
                        {/* {props.title} */}
                        <h2 className="mb-1">Title</h2>

                        {/* Sample Date */}
                        <p className="text-muted small mb-0">
                          Shared publicly - March 06 2023 (SAMPLE DATE)
                        </p>

                      </div>
                  </div>

                    {/* Post Division */}
                      <p className="mt-3 mb-4 pb-2">
                        {props.content}
                      </p>

                    {/* Buttons Need Hover Effects */}
                    <div className="d-flex justify-content-evenly flex-fill border-top">
                      <button className="btn d-flex border-left">
                        <p className="mb-0">
                        <i class="bi bi-hand-thumbs-up"></i>
                          Like
                        </p>
                      </button>
                      
                      <button className="btn d-flex">
                        <p className="mb-0">
                        <i class="bi bi-hand-thumbs-up"></i>
                          Comment
                        </p>
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    // <div className="container">
    //   <div className="card m-2">
    //     <div className="card-body">
    //       <h4 className="card-title">{props.user_id}</h4>
    //       <h2 className="card-title">{props.title}</h2>
    //       <div className="card-text">
    //         <p>{props.content}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )

}
export default PostCard;
