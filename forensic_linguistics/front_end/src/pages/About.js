import React, { useState } from "react";
import "./About.css";
import Details from "./Details"; // Import the paragraph component

const About = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleLearnMore = () => {
    setShowDetails(true);
  };

  return (
    <div className="about-content">
      <h1>
        <span className="first">WELCOME TO THE FIRST.....</span>
        <br />
        Forensic Linguistics: The Middle East Government Journal on Language and
        Law
      </h1>
      <div>
        <p>
          Let's dive into Understanding the intersection of language and law
          through forensic linguistics and how this field can solve crimes and
          maybe prevent it.
        </p>
      </div>
      <button onClick={handleLearnMore}>Learn More</button>
      {showDetails && <Details />}
    </div>
  );
};

export default About;
