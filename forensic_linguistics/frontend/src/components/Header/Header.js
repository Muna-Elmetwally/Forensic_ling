// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../pages/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo/Logo";
import "../../style.css";

export default function Header() {
  const { isAuthenticated, logOut } = useAuth();

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link className="header-link" to="/">
              Home
            </Link>
          </li>
          <li className="dropdown-container">
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="header-link"
            >
              About
            </a>
          </li>
          <li className="dropdown-container">
            <a
              className="header-link"
              href="https://www.lsadc.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Forensic Techniques & Tools
            </a>
            <ul className="dropdown">
              <li>
                <a
                  className="header-link"
                  href="https://scholar.google.com.eg/scholar?q=Forensic+Linguistics+Techniques&hl=en&as_sdt=0&as_vis=1&oi=scholart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Techniques
                </a>
              </li>
              <li>
                <a
                  className="header-link"
                  href="https://aliastechnology.com/alias-overview/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  className="header-link"
                  href="https://scholar.google.com.eg/scholar?q=Forensic+Linguistics+Glossary&hl=en&as_sdt=0&as_vis=1&oi=scholart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Glossary
                </a>
              </li>
            </ul>
          </li>

          <li className="dropdown-container">
            <Link className="header-link" to="/Blogs">
              Expert Interviews & Blogs
            </Link>
            <ul className="dropdown">
              <li>
                <a
                  href="#sidebar"
                  onClick={(e) => handleScroll(e, "sidebar")}
                  className="header-link"
                >
                  Interviews
                </a>
              </li>
              <li>
                <a
                  href="#posts"
                  onClick={(e) => handleScroll(e, "posts")}
                  className="header-link"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link className="header-link" to="/Legal">
              Legal & Ethical Issues
            </Link>
          </li>
          <li className="dropdown-container">
            <Link className="header-link" to="/Community">
              Forum & Community
            </Link>
            <ul className="dropdown">
              <li>
                <a
                  href="#sidebar"
                  onClick={(e) => handleScroll(e, "sidebar")}
                  className="header-link"
                >
                  Discussions & Events
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link className="header-link" to="/Services">
              Services & Consultation
            </Link>
          </li>
          <li>
            {isAuthenticated ? (
              <button className="logout-nav" onClick={logOut}>
                Log Out <FontAwesomeIcon icon={faSignOutAlt} />
              </button>
            ) : (
              <div className="d-flex">
                <Link to="/signup" className="signup_nav">
                  Sign-Up
                </Link>
                <Link to="/login" className="login_nav">
                  Log-In
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
