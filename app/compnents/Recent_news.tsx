"use client";
import React from "react";
import "../css/Recent_news.css";

export default function Recent_News() {
  return (
    <section className="recent-news">
      <h2 className="recent-news-title">Recent <span>News</span></h2>
      <p className="recent-news-subtitle">
        Building Black Wealth: Expert Insights on Financial Literacy and
        Fractional Shares Investing
      </p>

      <div className="news-cards">
        {/* Card 1 */}
        <div className="news-card">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
            alt="Financial freedom"
          />
          <div className="news-content">
            <span className="news-time">1 week ago</span>
            <h3 className="news-heading">
              Why Saving Isn’t Enough: The Secret Wealth-Building Strategies
              Every African American Family Needs
            </h3>
            <p className="news-desc">
              In today’s fast-paced business environment, staying ahead requires
              innovation.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="news-card">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
            alt="Financial freedom"
          />
          <div className="news-content">
            <span className="news-time">4 years ago</span>
            <h3 className="news-heading">
              Your Guide to Financial Freedom: A Global Perspective
            </h3>
            <p className="news-desc">
              In today’s fast-paced business environment, staying ahead requires
              innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
