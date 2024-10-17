import React, { useState } from "react";
import "./caseStudies.css";

const slides = [
  {
    id: 1,
    image: "https://via.placeholder.com/600x400", // Replace with your image URLs
    title: "Case Study 1",
    description:
      "This is a detailed description of Case Study 1, explaining the process, results, and insights.",
    keywords: [
      { text: "Keyword 1", url: "https://example.com/1" },
      { text: "Keyword 2", url: "https://example.com/2" },
      { text: "Keyword 3", url: "https://example.com/3" },
      { text: "Keyword 4", url: "https://example.com/4" },
    ],
  },
  {
    id: 2,
    image: "https://via.placeholder.com/600x400", // Replace with your image URLs
    title: "Case Study 2",
    description:
      "This is a detailed description of Case Study 2, explaining the process, results, and insights.",
    keywords: [
      { text: "Keyword 1", url: "https://example.com/1" },
      { text: "Keyword 2", url: "https://example.com/2" },
      { text: "Keyword 3", url: "https://example.com/3" },
      { text: "Keyword 4", url: "https://example.com/4" },
    ],
  },
  {
    id: 3,
    image: "https://via.placeholder.com/600x400", // Replace with your image URLs
    title: "Case Study 3",
    description:
      "This is a detailed description of Case Study 3, explaining the process, results, and insights.",
    keywords: [
      { text: "Keyword 1", url: "https://example.com/1" },
      { text: "Keyword 2", url: "https://example.com/2" },
      { text: "Keyword 3", url: "https://example.com/3" },
      { text: "Keyword 4", url: "https://example.com/4" },
    ],
  },
  {
    id: 4,
    image: "https://via.placeholder.com/600x400", // Replace with your image URLs
    title: "Case Study 4",
    description:
      "This is a detailed description of Case Study 4, explaining the process, results, and insights.",
    keywords: [
      { text: "Keyword 1", url: "https://example.com/1" },
      { text: "Keyword 2", url: "https://example.com/2" },
      { text: "Keyword 3", url: "https://example.com/3" },
      { text: "Keyword 4", url: "https://example.com/4" },
    ],
  },
  {
    id: 5,
    image: "https://via.placeholder.com/600x400", // Replace with your image URLs
    title: "Case Study 5",
    description:
      "This is a detailed description of Case Study 5, explaining the process, results, and insights.",
    keywords: [
      { text: "Keyword 1", url: "https://example.com/1" },
      { text: "Keyword 2", url: "https://example.com/2" },
      { text: "Keyword 3", url: "https://example.com/3" },
      { text: "Keyword 4", url: "https://example.com/4" },
    ],
  },
];

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="case-studies">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} className="slide-image" />
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <div className="keywords">
              {slide.keywords.map((keyword, idx) => (
                <a
                  key={idx}
                  href={keyword.url}
                  className="keyword"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {keyword.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="navigation">
        <button onClick={prevSlide} className="nav-button">
          Previous
        </button>
        <button onClick={nextSlide} className="nav-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;
