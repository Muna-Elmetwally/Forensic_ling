// src/University.js

import React from "react";
import "./university.css";

const universities = [
  {
    name: "University of Oxford",
    info: "One of the oldest and most prestigious universities, with a strong forensic linguistics program.",
    reason:
      "World-class faculty and cutting-edge research in forensic linguistics.",
    website: "https://www.ox.ac.uk/",
  },
  {
    name: "University of Cambridge",
    info: "Known for its outstanding research in linguistics and applied linguistics.",
    reason:
      "Renowned for bridging theoretical and practical forensic linguistics.",
    website: "https://www.cam.ac.uk/",
  },
  {
    name: "Georgetown University",
    info: "Offers strong programs in linguistics with applications to forensic contexts.",
    reason: "Focus on sociolinguistics and legal applications.",
    website: "https://www.georgetown.edu/",
  },
  // Add more universities here...
];

const UniversityCard = ({ name, info, reason, website }) => {
  return (
    <div className="university-card">
      <h2
        className="university-title"
        onClick={() => window.open(website, "_blank")}
      >
        {name}
      </h2>
      <p>{info}</p>
      <p>
        <strong>Why it's great:</strong> {reason}
      </p>
      <button
        className="know-more-button"
        onClick={() => window.open(website, "_blank")}
      >
        Know More
      </button>
    </div>
  );
};

const University = () => {
  return (
    <div className="university-list">
      <h1>Top 10 Universities in Forensic Linguistics</h1>
      {universities.map((uni, index) => (
        <UniversityCard
          key={index}
          name={uni.name}
          info={uni.info}
          reason={uni.reason}
          website={uni.website}
        />
      ))}
    </div>
  );
};

export default University;
