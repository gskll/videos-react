import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video }) => {
  const { title, thumbnails } = video.snippet;

  return (
    <div className="item video-item">
      <img
        className="ui image"
        src={thumbnails.medium.url}
        alt={`${title} thumbnail`}
      />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
