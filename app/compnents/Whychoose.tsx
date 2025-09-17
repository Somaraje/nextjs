"use client";
import React from "react";
import '../css/Whychoose.css';

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="left-panel">
        <img src="/images/tree.png" alt="Tree Graphic" className="tree-image" />
      </div>

      <div className="right-panel">
        <h2>Why Choose Wealzia?</h2>
        <ul className="benefits">
          <li>Serves the United States, Africa, and the Caribbean</li>
          <li>Multilingual financial education for youth and adults</li>
          <li>Access to financial services</li>
          <li>Global community connections</li>
          <li>Licensed financial and legal professionals</li>
          <li>Partner with schools, cities, and financial institutions</li>
        </ul>

        <div className="app-buttons">
          <img src="/images/gb.png" alt="Google Play" />
          <img src="/images/as.png" alt="App Store" />
        </div>
      </div>
    </section>
  );
}
