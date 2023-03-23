import React, { useState, useEffect } from 'react'

export const CardProfile = () => {

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
                    <img src="http://images.wikia.com/onepiece/images/e/e6/Luffy_Wax.png" className="pic"/>
                    <span></span>
                </div>
                <h2>User Name</h2>
                <button className="btn btn-primary ms-auto ">{text}</button>
                <ul className="about">
                    <li><span>300</span>Friends</li>
                    <li><span>10,074</span>Post</li>
                </ul>
                <div className="content">
                    My Other Social Media
                    <ul>
                        <li><i class="bi bi-twitter"></i></li>
                        <li><i class="bi bi-facebook"></i></li>
                        <li><i class="bi bi-instagram"></i></li>
                    </ul>
                </div>
            </div>

  )
}
