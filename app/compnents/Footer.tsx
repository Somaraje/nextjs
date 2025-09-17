"use client";
import React from "react";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section */}
        <div className="footer-left">
          Wekeza
          {/* <img src="/images/logo.png" alt="Wekeza Logo" className="footer-logo" /> */}
          <p>
            Wekeza is a financial technology and financial education company,
            not a bank. Brokerage services are provided by Choice Trade.
            All logos used herein are the property of their copyright holders.
            Investing involves risk, including the potential loss of principal.
          </p>

          {/* Subscription box */}
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email address" />
            <button>&#8594;</button>
          </div>
        </div>

        {/* Center section */}
        <div className="footer-center">
          <h4>Index</h4>
          <ul>
            <li>Disclosures</li>
            <li>Privacy Policy</li>
            <li>Our Story</li>
            <li>Team</li>
            <li>Wekeza Blog</li>
          </ul>
        </div>

        {/* Right section */}
       <div style={{display: 'flex', gap: '35%'}}>
         <div className="footer-right">
          <h4>Countries</h4>
          <ul>
            <li>Senegal</li>
            <li>South Africa</li>
            <li>Tanzania</li>
            <li>United Kingdom</li>
            <li>United States</li>
          </ul>
        </div>
        <div className="footer-right_column2">
          <h4>Counties</h4>
          <ul>
            <li>Barbados</li>
            <li>Ghana</li>
            <li>Guyana</li>
            <li>Jamaica</li>
            <li>Kenya</li>
            <li>Nigeria</li>
          </ul>
        </div>
       </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2022. All rights and trademarks are reserved.</p>
        <div className="languages">
          <span>En.</span>
          <span>Fr.</span>
          <span>Es.</span>
        </div>
      </div>
    </footer>
  );
}



