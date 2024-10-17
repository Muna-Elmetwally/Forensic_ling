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
            <Link className="header-link" to="/About">
              About
            </Link>
          </li>
          <li className="dropdown-container">
            <Link className="header-link" to="/Techniques">
              Forensic Techniques & Tools
            </Link>
            <ul className="dropdown">
              <li>
                <Link className="header-link" to="/case-studies/Techniques">
                  Techniques
                </Link>
              </li>
              <li>
                <Link className="header-link" to="/case-studies/Tools">
                  Tools
                </Link>
              </li>
              <li>
                <Link className="header-link" to="/case-studies/Glossary">
                  Glossary
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown-container">
            <Link className="header-link" to="/Blogs">
              Expert Interviews & Blogs
            </Link>
            <ul className="dropdown">
              <li>
                <Link className="header-link" to="/case-studies/Interviews">
                  Interviews
                </Link>
              </li>
              <li>
                <Link className="header-link" to="/case-studies/Blogs">
                  Blogs
                </Link>
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
                <Link className="header-link" to="/case-studies/Events">
                  Discussions & Events
                </Link>
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
