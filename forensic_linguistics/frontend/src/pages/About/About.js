import "./About.css";
import SliderNew from "../what is FL/SiderNew";
import React from "react";

export default function About() {
  return (
    <div className="About">
      <div className="AboutTitles">
        <span className="AboutTitleSm">Forensic Linguistics Journal:</span>
        <span className="AboutTitleLg">Bridging Law and Language </span>
      </div>
      <img
        className="AboutImg"
        src={require("../../assets/l3.jpg")}
        alt="Forensic Linguistics Journal: Bridging Law and Language "
      />
      <div>
        <SliderNew />
      </div>
    </div>
  );
}
