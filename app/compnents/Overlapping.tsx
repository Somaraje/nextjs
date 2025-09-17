"use client";
import React from "react";
import "../css/Overlapping.css";
import { CiCirclePlus } from "react-icons/ci";


export default function OverlappingSections() {
  return (
    <div className="overlap-container">
      <section className="overlap-section section1">
        <div className="left_part_section1">
          <span className="number">01</span>
          <h1 className="over_head1">
            Sabrina Lamb Founder and Chief Executive Officer
          </h1>
          <p className="over_para1">
            Sabrina is the Founder and Chief Executive Officer of WorldofMoney.org, a non-profit dedicated to providing 120 annual immersive hours of classroom and online youth financial education in the United States and Africa. She contributed to Ghana’s original Ministry of Finance Digital Financial Services Policy.
          </p>
          {/* <button className="over_button1"> <CiCirclePlus />Learn More</button>
           */}
           <button className="over_button1"><CiCirclePlus />Learn More</button>
        </div>
        <div className="right_part_section1">
          <span className="team_span">Leadership Team</span>
          <img src="/images/learn_slider1.jpg" alt="Sabrina Lamb" />
        </div>
      </section>

      <section className="overlap-section section2">
        <div className="left_part_section1">
          <span className="number">02</span>
          <h1 className="over_head1">
            Sabrina Lamb Founder and Chief Executive Officer
          </h1>
          <p className="over_para1">
            Sabrina is the Founder and Chief Executive Officer of WorldofMoney.org, a non-profit dedicated to providing 120 annual immersive hours of classroom and online youth financial education in the United States and Africa. She contributed to Ghana’s original Ministry of Finance Digital Financial Services Policy.
          </p>
          <button className="over_button1"><CiCirclePlus />Learn More</button>
        </div>
        <div className="right_part_section1">
          <span className="team_span">Leadership Team</span>
          <img src="/images/learn_slider1.jpg" alt="Sabrina Lamb" />
        </div>
      </section>

      <section className="overlap-section section3">
        <div className="left_part_section1">
          <span className="number">03</span>
          <h1 className="over_head1">
            Sabrina Lamb Founder and Chief Executive Officer
          </h1>
          <p className="over_para1">
            Sabrina is the Founder and Chief Executive Officer of WorldofMoney.org, a non-profit dedicated to providing 120 annual immersive hours of classroom and online youth financial education in the United States and Africa. She contributed to Ghana’s original Ministry of Finance Digital Financial Services Policy.
          </p>
          <button className="over_button1"><CiCirclePlus />Learn More</button>
        </div>
        <div className="right_part_section1">
          <span className="team_span">Leadership Team</span>
          <img src="/images/learn_slider1.jpg" alt="Sabrina Lamb" />
        </div>
      </section>
    </div>
  );
}
