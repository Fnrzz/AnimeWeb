"use client";

import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const optionsDekstop = {
    height: "400",
    width: "100%",
  };
  const optionsMobile = {
    height: "200",
    width: "100%",
  };
  const optionsTablet = {
    height: "300",
    width: "100%",
  };
  return (
    <div className="w-full">
      <YouTube
        videoId={youtubeId}
        onReady={(event) => event.target.pauseVideo()}
        opts={optionsDekstop}
        className="hidden lg:block"
      />
      <YouTube
        videoId={youtubeId}
        onReady={(event) => event.target.pauseVideo()}
        opts={optionsMobile}
        className="block md:hidden lg:hidden"
      />
      <YouTube
        videoId={youtubeId}
        onReady={(event) => event.target.pauseVideo()}
        opts={optionsTablet}
        className="hidden md:block lg:hidden"
      />
    </div>
  );
};

export default VideoPlayer;
