import React, { useState, useEffect, useCallback } from "react";
import "./sliderNew.css";

const SliderNew = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: require("../../assets/legal 1.jpg"),
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
    <div className="new-slider">
      <div
        className="new-slider-content"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="new-slide" key={index}>
            <img src={slide.image} alt={slide.caption} />
            <div className="new-caption">{slide.caption}</div>
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
