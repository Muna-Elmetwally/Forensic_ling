import React from "react";
import "./university.css";
const universities = [
  {
    name: "University of Oxford",
    info: "Take your Master's in Forensic Linguistics and Speech Science in one of the best Linguistics Departments in the world. They are placed 3rd in the QS World Rankings 2024.",
    reason:
      "Join a world-leading department with links to intelligence, investigative, and evidential research centres and projects, learn from experts in the two fields of forensic linguistics and forensic speech science, and benefit from their practical experience,Focus your degree on the topics that interest you the most, Use your degree to enter or enhance your career in the security, protection, or intelligence sectors, Gain hands-on experience using our outstanding resources including tools and labs equipped for eye-tracking, phonetics, and corpus linguistics, Join events hosted by FACTOR (Forensic Linguistics, Cybersecurity, and Technology Research) with activities and talks that complement and enhance your course",
    website:
      "https://www.lancaster.ac.uk/study/postgraduate/postgraduate-courses/forensic-linguistics-and-speech-science-msc/2024/",
  },
  {
    name: "Aston University",
    info: "The Aston Institute for Forensic Linguistics is the leading hub for forensic linguistics worldwide. Set up as the Centre for Forensic Linguistics in 2008 by Malcolm Coulthard, it was expanded into a research institute with investment from Research England in 2019.",
    reason:
      "They are a thriving and lively community of over thirty members, from PhD students to professors, and thier research is innovative, applied, interdisciplinary and impactful. In addition to conducting cutting-edge research, our members teach on the Aston MA in Forensic Linguistics, a programme that consistently enables graduates to secure careers in policing, intelligence analysis and related fields. They also run CPD courses and provide investigative assistance and expert evidence in criminal and civil cases.",
    website: "https://www.aston.ac.uk/research/forensic-linguistics",
  },
  {
    name: "Hofstra University",
    info: "Forensic Linguistics, the scientific study of language, is a vital investigative tool for law enforcement and intelligence experts in the United States and around the world. The Master of Arts (MA) in Forensic Linguistics, the first program of its kind in the Western Hemisphere, will teach you how to use a linguist’s core tools, including phonetics, syntax, semantics and sociolinguistics, to analyze language in legal and other real-world settings",
    reason:
      "Learn from brilliant scholars who have worked with the FBI and consulted on an extensive array of criminal cases and counterterrorism efforts. Our program combines a broad-based academic experience with applied workshops and internship opportunities working on ongoing cases. Full-time students typically complete the program in two years. Scholarships are available for qualified candidates.",
    website:
      "https://www.hofstra.edu/graduate/programs/liberal-arts-sciences/forensic-linguistics.html",
  },
  // Add more universities here...
];

const UniversityCard = ({ name, info, reason, website }) => {
  return (
    <div className="university-card">
      <a
        href={website}
        className="university-title"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>{name}</h2>
      </a>
      <p>{info}</p>
      <p>
        <strong>Why it's great:</strong> {reason}
      </p>
      <a
        href={website}
        className="know-more-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Know More
      </a>
    </div>
  );
};

const University = () => {
  return (
    <div className="university-list">
      <h1>Top Universities in Forensic Linguistics</h1>
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
