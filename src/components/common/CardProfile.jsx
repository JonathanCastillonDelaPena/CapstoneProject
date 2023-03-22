import React from 'react'

export const CardProfile = () => {
  return (
            <div className="left-col">
                <div className="img-container">
                    <img src="http://images.wikia.com/onepiece/images/e/e6/Luffy_Wax.png" className="pic"/>
                    <span></span>
                </div>
                <h2>User Name</h2>
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
