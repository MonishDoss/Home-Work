import React from "react";
import "./InstagramPost.css";

function InstagramPost({ username, userImage, postImage, likes, caption, time }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={userImage} alt={username} className="post-user-img" />
        <span className="post-username">{username}</span>
      </div>
      <img src={postImage} alt="post" className="post-image" />
      <div className="post-actions">
        ❤️ 💬 📤
      </div>
      <div className="post-likes">{likes} likes</div>
      <div className="post-caption">
        <span className="post-username">{username}</span> {caption}
      </div>
      <div className="post-time">{time}</div>
    </div>
  );
}

export default InstagramPost;
