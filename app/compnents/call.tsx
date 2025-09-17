"use client";
import React from "react";
import "../css/call.css"; // Make sure this file exists

export default function Call() {
  return (
    <a href="tel:+1234567890" className="call-button" aria-label="Call Now">
      📞
    </a>
  );
}
