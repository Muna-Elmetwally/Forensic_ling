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
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/case-studies">Case Studies</Link>
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
