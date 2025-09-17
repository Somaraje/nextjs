"use client";
import React, { useEffect, useState } from "react";
import "../css/slider.css";

const newsImages: string[] = [
  "/images/learn_slider1.jpg",
  "/images/learn_slider2.jpg",
  "/images/learn_slider3.jpg",
];

export default function NewsSlider(): React.ReactElement {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % newsImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="news-slider">
      <div
        className="news-slides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {newsImages.map((img, index) => (
          <div className="news-slide" key={index}>
            <img src={img} alt={`News ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
