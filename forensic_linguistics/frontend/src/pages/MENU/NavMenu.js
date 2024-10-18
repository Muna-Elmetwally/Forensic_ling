import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./NavMenu.css";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="menu-bar-containerr">
      <button onClick={toggleMenu} className="menu-button">
        <FaBars className="menu-icon" /> More
      </button>
      {isOpen && (
        <ul className="menu-list">
          <li>
            <Link to="/" className="menu-link">
              Home
            </Link>
          </li>
          <li className="dropdown-containerr">
            <Link to="/caseStudies" className="menu-link">
              Case Studies
            </Link>
            <ul className="dropdownn">
              <li>
                <Link to="/caseStudies/Famous" className="dropdownn-link">
                  Famous Studies
                </Link>
              </li>
              <li>
                <Link to="/caseStudies/Solved" className="dropdownn-link">
                  Solved Cases
                </Link>
              </li>
              <li>
                <Link to="/caseStudies/Unsolved" className="dropdownn-link">
                  Unsolved Cases
                </Link>
              </li>
              <li>
                <Link to="/caseStudies/Historical" className="dropdownn-link">
                  Historical Cases
                </Link>
              </li>
              <li>
                <Link to="/caseStudies/Political" className="dropdownn-link">
                  Political Cases
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown-containerr">
            <Link to="/Tools" className="menu-link">
              Forensic Techniques & Tools
            </Link>
            <ul className="dropdownn">
              <li>
                <Link to="/Tools/Techniques" className="dropdownn-link">
                  Techniques
                </Link>
              </li>
              <li>
                <Link to="/Tools/Tools" className="dropdownn-link">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/Tools/Glossary" className="dropdownn-link">
                  Glossary
                </Link>
              </li>
              <li>
                <Link to="/Tools/Genre" className="dropdownn-link">
                  Genre
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown-containerr">
            Expert Interviews & Blogs
            <ul className="dropdownn">
              <li>
                <a
                  href="#sidebar"
                  onClick={(e) => handleScroll(e, "sidebar")}
                  className="dropdownn-link"
                >
                  Interviews
                </a>
              </li>
              <li>
                <a
                  href="#posts"
                  onClick={(e) => handleScroll(e, "posts")}
                  className="dropdownn-link"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#posts"
                  onClick={(e) => handleScroll(e, "posts")}
                  className="dropdownn-link"
                >
                  Podcasts
                </a>
              </li>
              <li>
                <a
                  href="#posts"
                  onClick={(e) => handleScroll(e, "posts")}
                  className="dropdownn-link"
                >
                  Documentries
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown-containerr">
            <Link to="/Resources" className="menu-link">
              Educational Resources
            </Link>
            <ul className="dropdownn">
              <li>
                <Link to="/Resources/Courses" className="dropdownn-link">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/Resources/Books" className="dropdownn-link">
                  Books
                </Link>
              </li>
              <li>
                <Link to="/Resources/ResearchPapers" className="dropdownn-link">
                  Research Papers
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown-containerr">
            <Link to="/University" className="menu-link">
              Top Universities
            </Link>
          </li>
          <li className="dropdown-containerr">
            <Link to="/Career" className="menu-link">
              What do Forensic Linguists do?
            </Link>
          </li>
          {/*  <li>
            <Link to="/Issues" className="menu-link">
              Legal & Ethical Issues
            </Link>
          </li>
          <li className="dropdown-containerr">
            <Link to="/Community" className="menu-link">
              Forum & Community
            </Link>
          </li>
          <li className="dropdownn">
            <Link to="/case-studies/Events" className="dropdownn-link">
              Discussions & Events
            </Link>
          </li>

          <li>
            <Link to="/Services" className="menu-link">
              Services & Consultation
            </Link>
          </li> */}
          <li>
            <Link to="/Dashboard" className="menu-link">
              Dashboard
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuBar;
