"use client"; 
import React from "react";
import '../css/VideoOverlay.css';
import { FaPlay } from "react-icons/fa";


export default function VideoOverlay() {
  return (
    <div className="video-overlay-container">
      <div className="video-wrapper">
        <iframe
          className="bg-video"
          src="https://www.youtube.com/embed/ouvbeb2wSGA?autoplay=1&mute=1&loop=1&playlist=ouvbeb2wSGA&controls=0&modestbranding=1&showinfo=0"
          title="Financial Education"
          frameBorder="0"
          allow="autoplay; fullscreen"
        ></iframe>
      </div>

      {/* Overlay Text */}
      <div className="overlay-text">
        <h1>Wekeza Financial Education</h1>
        <p>Revolutionizes Multilingual</p>
        <button className="overlay-btn"><FaPlay />
</button>
      </div>
    </div>
  );
}
