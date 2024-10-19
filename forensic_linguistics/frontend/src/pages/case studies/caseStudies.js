import React, { useState } from "react";
import "./caseStudies.css";

const slides = [
  {
    id: 1,
    image:
      "https://s.hdnux.com/photos/01/21/73/07/21475779/10/ratio3x2_1920.jpg", // Unabomber
    title: "The Unabomber Case ",
    description:
      "Forensic linguistics played a crucial role in solving the case of Ted Kaczynski, the Unabomber, who sent a series of mail bombs over nearly two decades. By analyzing the language in his manifesto, experts identified distinctive linguistic patterns and vocabulary that ultimately led to his arrest.",
    keywords: [
      {
        text: "FBI INVESTEGATION",
        url: "https://www.fbi.gov/history/famous-cases/unabomber",
      },
      {
        text: "Ted Kaczynski/NEW YORK TIMES",
        url: "https://www.nytimes.com/2023/06/10/us/ted-kaczynski-dead.html",
      },
      {
        text: "Forensic Linguistics",
        url: "http://www.rogershuy.com/pdf/Linguistic_Profiling.pdf",
      },
      {
        text: "SOLVED CASE",
      },
    ],
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32TnVUXYx7tmPeCW7TU0_rF-4Fd6BMuDh1WRam4EyHCU-ITaf", // Zodiac Killer
    title: "The Zodiac Killer",
    description:
      "The Zodiac Killer, active in the late 1960s and early 1970s, sent taunting letters to newspapers that included ciphers and cryptograms. Despite extensive investigations, the killer has never been caught, and linguistic analysis of these letters continues to attract attention and debate.",
    keywords: [
      {
        text: "Zodiac Killer",
        url: "https://ijels.com/upload_document/issue_files/57IJELS-110202025-TheSimilarities.pdf",
      },
      {
        text: "Cryptograms",
        url: "https://www.discovermagazine.com/the-sciences/how-mathematicians-cracked-the-zodiac-killers-cipher",
      },
      {
        text: "UNSOLVED CASE",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://i.dailymail.co.uk/1s/2019/01/04/18/8138772-0-image-a-54_1546628207666.jpg", // The Scream
    title: "The JonBenét Ramsey Case",
    description:
      "In 1996, six-year-old JonBenét Ramsey was found murdered in her home in Boulder, Colorado. A ransom note, found at the scene, was central to the investigation. Forensic linguistics experts were called in to analyze the note for stylistic elements, grammar, and word choices that might provide clues about the author. ",
    keywords: [
      {
        text: "Ransom note",
        url: "https://www.coursesidekick.com/information-systems/1412920",
      },
      {
        text: "JonBenét Ramsey",
        url: "https://www.netflix.com/eg-en/title/80142316",
      },
      {
        text: "FAMOUS CASE",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://i.ytimg.com/vi/4VGPp57j2o4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYzCV8-oGAUSMuxmWCVP1d44rYiA", // Lindbergh Kidnapping
    title: "The Lindbergh Kidnapping",
    description:
      "The 1932 kidnapping of Charles Lindbergh Jr. led to a high-profile investigation where ransom notes were analyzed for linguistic clues. Forensic linguistics helped identify the author of the notes, leading to the conviction of Bruno Hauptmann.",
    keywords: [
      {
        text: "Lindbergh Kidnapping",
        url: "https://www.fbi.gov/history/famous-cases/lindbergh-kidnapping",
      },
      {
        text: "EVIDENCE",
        url: "https://www.nj.gov/state/archives/slcsp001.html",
      },
      {
        text: "Forensic Linguistics",
        url: "https://handwriting.feedbucket.com/articles/2023/09/27/famous-cases-solved-with-handwriting-analysis/",
      },
      {
        text: "HISTORICAL CASE",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://turkiye.un.org/sites/default/files/styles/hero_header_2xl_1x/public/2023-11/gaza1nov.png?itok=qRfQk2gS", // RFK Assassination
    title: "The Struggle Between Israelis and Palestinians",
    description:
      "How the struggle between Israelis and Palestinians is represented in the western news discourse through building a relationship between language and ideology. The study provides a picture of how Palestinians are depicted in the West. ",
    keywords: [
      {
        text: "CRISIS",
        url: "https://academic.oup.com/book/460/chapter-abstract/135241918?redirectedFrom=fulltext",
      },
      {
        text: "Discourse Analysis",
        url: "https://www.researchgate.net/publication/363781592_Israeli-Palestinian_struggle_A_critical_discourse_analysis",
      },
      {
        text: "POLITICAL CASE",
      },
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
    <div className="case-studies-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`case-slide ${
            index === currentSlide ? "active-slide" : ""
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="case-slide-image"
          />
          <div className="case-slide-content">
            <h2 className="case-slide-title">{slide.title}</h2>
            <p className="case-slide-description">{slide.description}</p>
            <div className="case-keywords">
              {slide.keywords.map((keyword, idx) => (
                <a
                  key={idx}
                  href={keyword.url}
                  className="case-keyword"
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
      <div className="case-navigation">
        <button onClick={prevSlide} className="case-nav-button">
          Previous
        </button>
        <button onClick={nextSlide} className="case-nav-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;
