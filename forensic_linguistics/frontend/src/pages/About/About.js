import "./About.css";
import SliderNew from "../what is FL/SiderNew";
import React from "react";

export default function About() {
  return (
    <div className="About">
      <div className="AboutTitles">
        <span className="AboutTitleSm">React & Node</span>
        <span className="AboutTitleLg">
          Gather All Forensic Linguists World Wide
        </span>
      </div>
      <img className="AboutImg" src={require("../../assets/l3.jpg")} alt="" />
      {/* <div>
        <p className="about-paragraph">
          This is the additional paragraph that will appear when you click
          "Learn More".
        </p>
      </div> */}
      <div>
        <SliderNew />
      </div>
    </div>
  );
}
