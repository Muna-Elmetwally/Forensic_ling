import React, { useState, useEffect, useCallback } from "react";
import "./techniques.css";
import slideImage from "../../assets/l2.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slideImage,
      caption: "This is Slide 1",
    },
    {
      image: "../../assets/l2.jpg",
      caption: "This is Slide 2",
    },
    {
      image: "../../assets/l2.jpg",
      caption: "This is Slide 3",
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
    <div className="slider">
      <div
        className="slider__content"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={slide.caption} />
            <div className="caption">{slide.caption}</div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
