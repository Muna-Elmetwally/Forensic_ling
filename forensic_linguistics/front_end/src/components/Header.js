import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Import the useAuth hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { isAuthenticated, logOut } = useAuth(); // Call useAuth to access authentication state and logOut function

  return (
    <div className="Header">
      <header className="d-flex">
        <div className="d-flex">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Case Studies</li>
          </ul>
        </div>
        {isAuthenticated ? ( // Check if the user is authenticated
          <button className="logout-nav" onClick={logOut}>
            Log Out <FontAwesomeIcon icon={faSignOutAlt} />
          </button> // Show Log Out button if authenticated
        ) : (
          <div className="d-flex">
            <Link to="/Signup" className="signup_nav">
              Sign Up
            </Link>
            <Link to="/LogIn" className="login_nav">
              Log In
            </Link>
          </div>
        )}
      </header>
      <div>
        <h1>
          Forensic Linguistics: The Middle East Government Journal on Language
          and Law
        </h1>
      </div>
    </div>
  );
}
