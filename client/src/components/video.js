import React from "react";
import videoBg from "../video/drone.mp4";
import "./video.css";

const video = () => {
  return (
    <div className="videoContainer">
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        webkit-playsinline
        playsinline="playsinline"
      />
      <div className="overlay"></div>
    </div>
  );
};

export default video;
