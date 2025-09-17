import react from "react";
import '../css/Serve.css';
import { FaRegCheckCircle } from "react-icons/fa";

export default function Serve() {
  return (
    <div className="serve-container">
        <button className="serve_button"><FaRegCheckCircle  className="in_button"/>Who We Serve</button>
        <p className="serve_para">At Wekeza, we empower communities across every stage of life. From schools shaping the next generation, to youth learning financial skills, to adults building wealth, and cities and financial institutions driving community growth—we provide tailored financial education and consulting that meets each group’s unique needs.</p>
    </div>
  );
}