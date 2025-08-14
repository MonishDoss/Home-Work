import React from "react";
import "./Stories.css";

function Stories({ stories }) {
  return (
    <div className="stories-container">
      {stories.map((story, idx) => (
        <div key={idx} className="story">
          <div className="story-ring">
            <img src={story.image} alt={story.username} className="story-img" />
          </div>
          <span className="story-username">{story.username}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
