import react from 'react'; 
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import '../css/Navbar.css';
import { MdOutlinePermPhoneMsg } from "react-icons/md";



export default function Navbar() {
  return (
    <div className="Navbar">
      {/* Left side */}
      <div className="logo">WEKEZA</div>

      {/* Center part (links + button) */}
      <div className="center">
        <ul className="nav-links">
          <li className="items"><a href="#">Home</a></li>
          <li className="items"><a href="#">What We Provide</a></li>
          <li className="items"><a href="#">Media</a></li>
          <li className="items"><a href="#">Pricing</a></li>
          <li className="items"><a href="#">Countries</a></li>
          <li className="items"><a href="#">Praise</a></li>
          <li className="items"><a href="#">About</a></li>
        </ul>
        <button className="btn_items"><MdOutlinePermPhoneMsg  className='phone_icon'/>Click To Get Started</button>
      </div>

      {/* Right side (icons) */}
      <div className="Icon_list">
        <div className="all_items"><a href="#"><FaInstagram /></a></div>
        <div className="all_items"><a href="#"><FaXTwitter /></a></div>
        <div className="all_items"><a href="#"><FaFacebook /></a></div>
        <div className="all_items"><a href="#"><FaYoutube /></a></div>
      </div>
    </div>
  );
}