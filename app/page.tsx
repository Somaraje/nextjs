import Image from "next/image";
import Navbar from "./compnents/Navbar";
import Learn from "./compnents/Learn";
import VideoOverlay from "./compnents/VideoOverlay";
import Serve from "./compnents/Serve";  
import Sli from "./compnents/Sli";
import WhyChoose from "./compnents/Whychoose";
import React from "react";  
import Recognation from "./compnents/Recogination";
import Recent_news from "./compnents/Recent_news";
import OverlappingSections from "./compnents/Overlapping";
import AvalabileIn from "./compnents/AvalabileIn";
import Footer from "./compnents/Footer";
import Call from "./compnents/call";

export default function Home() {
  return (
    <div>
      <Call />
      < Navbar />
      <Learn/>
      <VideoOverlay/>
      <Serve/>
      <Sli />
      <WhyChoose/>
      <OverlappingSections/>
      <Recognation/>
      <Recent_news/>
      <AvalabileIn/>
      <Footer/>
    </div>
  );
}
