import React from "react";
import '../assets/style/Global.css';
import Nav from "../components/layout/Nav";

const Profile = () => {
    return(
       <div className="header_wrapper">
        <Nav />
        <header className="mt-5">
            <img src="https://www.denofgeek.com/wp-content/uploads/2020/07/One-Piece-Full-Cast-Header-Image.jpg?fit=2560%2C1440" className="bg"/></header>
        <div className="cols-container">
            <div className="left-col">
                <div className="img-container">
                    <img src="http://images.wikia.com/onepiece/images/e/e6/Luffy_Wax.png" className="pic"/>
                    <span></span>
                </div>
                <h2>Monkey D. Luffy</h2>
                <p>GoMu GoMu User</p>

                <ul className="about">
                    <li><span>1,500,000</span>Bounty</li>
                    <li><span>300</span>Following</li>
                    <li><span>10,074</span>Followers</li>
                </ul>

                <div className="content">
                    <p>Pogi ako</p>

                    <ul>
                        <li><i class="bi bi-twitter"></i></li>
                        <li><i class="bi bi-facebook"></i></li>
                        <li><i class="bi bi-instagram"></i></li>
                    </ul>
                </div>
            </div>
            <div className="right-col">
                <nav>
                    <ul>
                        <li><a href="#">Photos</a></li>
                        <li><a href="#">Galleries</a></li>
                        <li><a href="#">GROUP</a></li>
                        <li><a href="#"></a>ABOUT</li>
                    </ul>
                    <button>Follow</button>
                </nav>
                
                <div className="photos">
                    <img src="http://img1.wikia.nocookie.net/__cb20130407172113/onepiece/es/images/f/f9/Luffy_Vs_Jinbei.jpg" />
                    <img src="https://i.pinimg.com/originals/27/2a/8d/272a8d9c7150bc7c5787b769ac08f509.jpg" />
                    <img src="https://i.ytimg.com/vi/cs1Sna2qPRw/maxresdefault.jpg" />
                    <img src="https://i.pinimg.com/736x/90/8f/4f/908f4f7c4f43f5659464f10def47048f--robins-luffy.jpg" />
                    <img src="https://i.pinimg.com/originals/31/e4/7f/31e47f3437cd8bc8ca3387779529641f.jpg" />
                    <img src="https://i.ytimg.com/vi/a6KKCNpsrhw/maxresdefault.jpg" />
                    <img src="https://i.ytimg.com/vi/lKIvrVzJ8a8/maxresdefault.jpg" />
                    <img src="https://tse2.mm.bing.net/th?id=OIP.rKqxgWshvbz-6XVN9HFcywHaEK&pid=Api&P=0" />
                    <img src="https://tse3.mm.bing.net/th?id=OIP.UuxtImeO9DqLP6EpnraZ6QHaEK&pid=Api&P=0" />
                    <img src="https://i.pinimg.com/originals/d3/35/c4/d335c4a4881b51def18376d7d580a68f.jpg" />
                    <img src="https://i.pinimg.com/originals/d3/35/c4/d335c4a4881b51def18376d7d580a68f.jpg" />
                    <img src="https://i.pinimg.com/originals/d3/35/c4/d335c4a4881b51def18376d7d580a68f.jpg" />
                </div>
            </div>
        </div>
       </div>
    )
};

export default Profile;