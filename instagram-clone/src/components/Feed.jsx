import React from "react";
import Stories from "./Stories/Stories";
import InstagramPost from "./InstagramPost/InstagramPost";
import storiesData from "../data/storiesData";
import posts from "../data/sampleData";

function Feed() {
  return (
    <div className="ig-feed">
      <Stories stories={storiesData} />
      {posts.map((post, idx) => (
        <InstagramPost key={idx} {...post} />
      ))}
    </div>
  );
}

export default Feed;
