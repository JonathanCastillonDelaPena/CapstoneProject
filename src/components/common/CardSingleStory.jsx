import React from "react";
import '../../assets/style/storyCard.css'
const SingleStory = ({ imageUrl, userImageUrl, userName }) => {
    return (
        <div class="single-story">
            <img src="https://avt.mkklcdnv6temp.com/3/f/20-1583501117.jpg" className="single-story-bg" />
            <div class="story-author">
            <p>Jestoni</p>
            </div>
        </div>
    )
}

export default SingleStory;