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
      title: "Analyzing and Authenticating Spoken and Written Evidence",
      content: `
        Forensic linguists are crucial in analyzing both written and spoken evidence 
        to determine authorship, linguistic patterns, and authenticity. They break down 
        texts to study syntax, grammar, word choice, and stylistic elements, engaging in 
        a process known as "linguistic fingerprinting." By analyzing specific language 
        markers like sentence structure, punctuation, and spelling, linguists can often 
        identify or disprove authorship.

        When dealing with spoken evidence, forensic linguists focus on voice analysis, 
        studying accents, dialects, and speech patterns to authenticate voices. This is 
        crucial in cases involving phone threats, wiretaps, or disputed recordings, where 
        the authenticity of the speaker’s identity may play a pivotal role.

        The precision and depth of these analyses often influence legal outcomes by 
        narrowing down suspects, validating testimonies, and revealing inconsistencies in 
        the linguistic traits present in the evidence.
      `,
    },
    {
      title: "Assisting in the Interpretation of Legal Language",
      content: `
        Legal language can be complex and ambiguous. Forensic linguists help clarify 
        the meaning of legal documents such as contracts, statutes, and laws. In civil 
        cases or legal disputes, they ensure that the intent behind legal text is clearly 
        understood by all parties involved.

        Beyond clarification, forensic linguists simplify legal language for the general 
        public. For instance, they make jury instructions or legal agreements more 
        accessible, ensuring that non-legal professionals can comprehend them without 
        misunderstanding. Their work is especially significant for non-native speakers or 
        individuals with limited language comprehension, reducing the risk of legal 
        misunderstandings and ensuring fair trials.
      `,
    },
    {
      title: "Analyzing Discourse in Courtroom Interactions",
      content: `
        In the courtroom, forensic linguists analyze language dynamics, focusing on how 
        questions are framed and how interactions between judges, attorneys, witnesses, 
        and defendants influence trial outcomes. They examine discourse features like 
        politeness strategies, power dynamics, and leading questions to assess whether 
        communication is fair and unbiased.

        Forensic linguists also assess how language is used during interrogations, 
        ensuring that questions aren’t coercive and that witnesses aren’t misled into 
        giving inaccurate testimony. By evaluating these language exchanges, they help 
        ensure justice by highlighting how discourse influences a trial’s proceedings.
      `,
    },
  ];

  return (
    <div className="career-container">
      <h1 className="career-header">What Do Forensic Linguists Do?</h1>
      <ul className="career-list">
        {items.map((item, index) => (
          <CareerItem key={index} title={item.title} content={item.content} />
        ))}
      </ul>
    </div>
  );
};

export default Career;
