import React, { useState } from "react";
import "./career.css";

const CareerItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="career-item">
      <input
        type="checkbox"
        className="career-checkbox"
        checked={isOpen}
        onChange={toggleAccordion}
      />
      <h2 className="career-title" onClick={toggleAccordion}>
        {title}
      </h2>
      <p className={`career-content ${isOpen ? "open" : "closed"}`}>
        {content}
      </p>
    </li>
  );
};

const Career = () => {
  const items = [
    {
      title: "Languages Used",
      content:
        "This page was written in HTML and CSS. The CSS was compiled from SASS. I used Normalize as my CSS reset and -prefix-free to save myself some headaches. I haven't quite gotten the hang of Slim for compiling into HTML, but someday I'll use it since its syntax complements that of SASS. Regardless, this could all be done in plain HTML and CSS.",
    },
    {
      title: "How it Works",
      content:
        "Using the sibling and checked selectors, we can determine the styling of sibling elements based on the checked state of the checkbox input element. One use, as demonstrated here, is an entirely CSS and HTML accordion element. Media queries are used to make the element responsive to different screen sizes.",
    },
    {
      title: "Points of Interest",
      content:
        "By making the open state default for when :checked isn't detected, we can make this system accessible for browsers that don't recognize :checked. The fallback is simply an open accordion. The accordion can be manipulated with Javascript (if needed) by changing the 'checked' property of the input element.",
    },
  ];

  return (
    <div className="career-container">
      <h1 className="career-header">CSS + HTML only Accordion Element</h1>
      <ul className="career-list">
        {items.map((item, index) => (
          <CareerItem key={index} title={item.title} content={item.content} />
        ))}
      </ul>
    </div>
  );
};

export default Career;
