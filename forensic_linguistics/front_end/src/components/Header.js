import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../pages/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const { isAuthenticated, logOut } = useAuth();

  return (
    <div className="Header">
      <header className="d-flex">
        <nav className="d-flex">
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li className="dropdown-container">
              <Link to="/About">About</Link>
            </li>
            <li className="dropdown-container">
              <Link to="/Techniqes">Forensic Techniques & Tools</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/case-studies/Techniqes">Techniques</Link>
                </li>
                <li>
                  <Link to="/case-studies/Tools">Tools</Link>
                </li>
                <li>
                  <Link to="/case-studies/Glossory">Glossary</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown-container">
              <Link to="/Blogs">Expert Interviews & Blogs</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/case-studies/Interviews">Interviews</Link>
                </li>
                <li>
                  <Link to="/case-studies/Blogs">Blogs</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Issues">Legal & Ethical Issues</Link>
            </li>
            <li className="dropdown-container">
              <Link to="/Community">Forum & Community</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/case-studies/Events">Discussions & Events</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Services">Services & Consultation</Link>
            </li>
          </ul>
        </nav>

        {isAuthenticated ? (
          <button className="logout-nav" onClick={logOut}>
            Log Out <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        ) : (
          <div className="d-flex">
            <Link to="/signup" className="signup_nav">
              Sign Up
            </Link>
            <Link to="/login" className="login_nav">
              Log In
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
