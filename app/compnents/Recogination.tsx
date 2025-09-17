
import React from "react";
import '../css/Recogniation.css';
import Resgination from "./Resignation_slide";
import Reg_slide from "./Reg_slide";

export default function Recognation() {
  return(
    <div className="recogination">
        <div  className="reg_main">
            <div className="reg_left">
                <p className="reg_para1">Recognation</p>
                <hr />
                <p className="reg_para2">Wekeza has been honored by leading organizations for its impact in financial education and innovation. From MBE certifications to recognition by Yale, Silicon Harlem, Benzinga Global Fintech Awards, and Black Ambition, these achievements highlight our commitment to excellence and community empowerment.</p>
            </div>
            <div className="small_slider">
                <Resgination />
            </div>
        </div>
        <div className="reg_right">
            <Reg_slide /> 
        </div>
    </div>
  );
}