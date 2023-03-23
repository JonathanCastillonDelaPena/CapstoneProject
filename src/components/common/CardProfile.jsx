import React, { useState, useEffect } from 'react'

export const CardProfile = ({ props }) => {

    const [text, setText] = useState('Add friend');
        let userType = 'user';
        useEffect(() => {
            if (userType === 'user') {
            setText('Edit Profile');
            }
        }, [userType]);

  return (
            <div className="left-col">
                <div className="img-container">
                    <img src={props.image_url} className="pic" />
                    <span></span>
                </div>
                <h2>{props.first_name} {props.last_name}</h2>
                <button className="btn btn-primary ms-auto ">{text}</button>
                <ul className="about">
                    <li><span>300</span>Friends</li>
                    <li><span>10,074</span>Post</li>
                </ul>
                <div className="content">
                    My Other Social Media
                    <ul>
                        <li><i className="bi bi-twitter"></i></li>
                        <li><i className="bi bi-facebook"></i></li>
                        <li><i className="bi bi-instagram"></i></li>
                    </ul>
                </div>
            </div>

  )
}
