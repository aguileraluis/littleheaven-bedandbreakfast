import React from "react";
import videoBg from "../video/drone.mp4";
import "./video.css";

const video = () => {
  return (
    <div>
      <video src={videoBg} autoPlay loop muted />
      <div className="overlay"></div>
    </div>
  );
};

export default video;
