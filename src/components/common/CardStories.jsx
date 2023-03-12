import React from "react";
import StoryContainer from "./CardStoriesContainer";
import '../../assets/style/storyCard.css'
const CardStory = () => {
    return (
        <div className="card">
            <div className="container">
      <div className="row">
        <div className="col-lg-12 layout-spacing">
          <div className="statbox widget box box-shadow">
            <div className="widget-header">
              <div className="row">
                <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                  <h4 className="pb-0">Stories</h4>
                </div>
              </div>
            </div>
            <div className="widget-content widget-content-area">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div id="content_1" className="tabcontent story-area">
                    <StoryContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default CardStory;