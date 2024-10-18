import React, { useState, useEffect, useCallback } from "react";
import "./sliderNew.css";

const SliderNew = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: require("../../assets/legal 1.jpg"),
      caption:
        "Welcome to the Forensic Linguistics Journal: Bridging Law and Language. This platform serves as a comprehensive resource dedicated to the intersection of language and law, exploring how linguistic analysis can aid in legal contexts. Our journal aims to highlight the pivotal role of forensic linguistics in legal proceedings, ensuring justice through precise and insightful language analysis. We invite scholars, practitioners, and enthusiasts to engage with our articles, announcements of events, and case studies, which illuminate the complexities of language in legal situations.",
    },
    {
      image: require("../../assets/1.jpg"),
      caption: `
        <h2>What is Forensic Linguistics?</h2>
        <p>
          Forensic linguistics is a fascinating interdisciplinary field that applies linguistic knowledge, methodologies, and analytical techniques to address legal issues. It encompasses a wide range of activities, including the analysis of written texts and spoken discourse, interpretation of legal language, and the provision of expert assistance in criminal investigations. Forensic linguists specialize in areas such as authorship attribution, examining the language used in confessions, and assessing the clarity of legal documents. Their expertise is invaluable, as it can significantly influence court outcomes and contribute to the pursuit of justice.
        </p>
        
        <h2>History of Forensic Linguistics</h2>
        <p>
          The origins of forensic linguistics can be traced back to the early 20th century when linguists began to apply their expertise to resolve legal cases. The discipline gained significant prominence in the late 20th century, especially with high-profile cases involving authorship disputes and the analysis of threatening communications. Over the years, forensic linguistics has evolved into a sophisticated field, incorporating various linguistic methodologies—including sociolinguistics, psycholinguistics, and discourse analysis—to tackle complex legal questions. Today, forensic linguists are essential contributors to legal proceedings, bridging the gap between language and law.
        </p>
      `,
    },
    {
      image: require("../../assets/3.jpg"),
      caption: `
        <h2>Importance of Forensic Linguistics</h2>
        <p>Forensic linguistics is essential for several reasons:</p>
        <ul>
          <li><strong>Enhancing Justice:</strong> By providing expert analysis of language in legal contexts, forensic linguists help ensure that justice is served. Their insights can clarify ambiguities in language, revealing intentions and meanings that may not be immediately apparent.</li>
          <li><strong>Supporting Law Enforcement:</strong> Linguistic analysis can assist law enforcement agencies in criminal investigations. Forensic linguists can analyze threats, ransom notes, and other written communications to identify patterns or authorship, aiding in the apprehension of suspects.</li>
          <li><strong>Improving Legal Language:</strong> Forensic linguists contribute to the clarity and accessibility of legal documents, helping to eliminate jargon and ambiguous terms that can lead to misunderstandings in legal contexts.</li>
          <li><strong>Research and Education:</strong> The field fosters ongoing research that enhances our understanding of language use in law. By educating legal professionals about the nuances of language, forensic linguistics promotes a more informed legal practice.</li>
       <li>  It also can help in preventing many criminal cases not just solving it, through the detection, analysis and predection, <strong>FOR INSTANCE:</strong> it has a great role in terrorism and sexual violence</li>
          </ul>
      `,
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="new-slider">
      <div
        className="new-slider-content"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="new-slide" key={index}>
            <img src={slide.image} alt={slide.caption} />
            <div
              className="new-caption"
              dangerouslySetInnerHTML={{ __html: slide.caption }} // Render HTML safely
            />
          </div>
        ))}
      </div>
      <button className="new-prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="new-next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default SliderNew;
