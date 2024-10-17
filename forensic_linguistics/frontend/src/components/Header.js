// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../pages/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import "../style.css";

// const Header = ({ isAuthenticated, logOut }) => {
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

// import React from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../pages/AuthContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import Logo from "./Logo"; // Import the Logo component

// export default function Header() {
//   const { isAuthenticated, logOut } = useAuth();

//   return (
//     <div className="Header">
//       <header className="d-flex">
//         <Logo />
//         <nav className="d-flex">
//           <ul className="sections">
//             <li>
//               <Link className="header-link" to="/Home">
//                 Home
//               </Link>
//             </li>
//             <li className="dropdown-container">
//               <Link className="header-link" to="/About">
//                 About
//               </Link>
//             </li>
//             <li className="dropdown-container">
//               <Link className="header-link" to="/Techniqes">
//                 Forensic Techniques & Tools
//               </Link>
//               <ul className="dropdown">
//                 <li>
//                   <Link className="header-link" to="/case-studies/Techniqes">
//                     Techniques
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="header-link" to="/case-studies/Tools">
//                     Tools
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="header-link" to="/case-studies/Glossory">
//                     Glossary
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//             <li className="dropdown-container">
//               <Link className="header-link" to="/Blogs">
//                 Expert Interviews & Blogs
//               </Link>
//               <ul className="dropdown">
//                 <li>
//                   <Link className="header-link" to="/case-studies/Interviews">
//                     Interviews
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="header-link" to="/case-studies/Blogs">
//                     Blogs
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <Link className="header-link" to="/Issues">
//                 Legal & Ethical Issues
//               </Link>
//             </li>
//             <li className="dropdown-container">
//               <Link className="header-link" to="/Community">
//                 Forum & Community
//               </Link>
//               <ul className="dropdown">
//                 <li>
//                   <Link className="header-link" to="/case-studies/Events">
//                     Discussions & Events
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <Link className="header-link" to="/Services">
//                 Services & Consultation
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         {isAuthenticated ? (
//           <button className="logout-nav" onClick={logOut}>
//             Log Out <FontAwesomeIcon icon={faSignOutAlt} />
//           </button>
//         ) : (
//           <div className="d-flex">
//             <Link to="/signup" className="signup_nav">
//               Sign Up
//             </Link>
//             <Link to="/login" className="login_nav">
//               Log In
//             </Link>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// }
