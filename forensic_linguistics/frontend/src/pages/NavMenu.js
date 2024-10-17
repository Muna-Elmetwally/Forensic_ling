import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./NavMenu.css";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <Link to="/Blogs" className="menu-link">
              Expert Interviews & Blogs
            </Link>
            <ul className="dropdownn">
              <li>
                <Link to="/Blogs/Interviews" className="dropdownn-link">
                  Interviews
                </Link>
              </li>
              <li>
                <Link to="/Blogs/Blogs" className="dropdownn-link">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/Blogs/Podcasts" className="dropdownn-link">
                  Podcasts
                </Link>
              </li>
              <li>
                <Link to="/Blogs/Documentries" className="dropdownn-link">
                  Documentaries
                </Link>
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
            <Link to="/TopUni" className="menu-link">
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
