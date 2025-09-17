import react from 'react';
import '../css/Learn.css';
import AutoSlider from './Autoslider';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";


export default function Learn() {
  return (
    <div className="Learn">
      <div className='learn_left_part'>
        <button className='learn_btn'><IoIosCheckmarkCircleOutline  className='Learn_button_1'/>Wekeza</button>
        <div className='Learn_head_left'><h1 className='Learn_head'>Learn. Connect. Prosper.</h1></div>
        <div className='Learn_head_para'><p className='Learn_para'>We provide tailored business consulting and growth solutions to help organizations innovate, build meaningful connections, and achieve long-term success.</p></div>
        <button className='Learn_but_2'><CiCirclePlus className='Learn_icon_click'/>Click To Get Started</button>
      </div>
      <div className='learn_right_part'>
        <AutoSlider />
      </div>
    </div>
  );
}       