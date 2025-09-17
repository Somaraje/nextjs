"use client";
import React from "react";
import "../css/AvalabileIn.css";

export default function AvalabileIn() {
  return (
    <section className="available-section">
      <h2 className="available-title">Available<span>In</span></h2>

      <div className="available-grid">
        <div className="available-card-one">
          <span className="card-number">01</span>
          <h3>United States</h3>
          <p>
            Empowering communities in the U.S. with financial education,
            business consulting, and growth opportunities tailored to local needs.
          </p>
        </div>

        <div className="available-card-two">
          <span className="card-number">02</span>
          <h3>African Diaspora</h3>
          <p>
            Connecting the African diaspora with tools, resources, and strategies
            to build wealth, strengthen communities, and prosper globally.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>scroll</span>
        <div className="dot"></div>
      </div>
    </section>
  );
}
