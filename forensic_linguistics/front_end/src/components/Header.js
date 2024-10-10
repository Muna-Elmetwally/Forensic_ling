import { Link } from "react-router-dom";
export default function Header() {
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
        <div className="d-flex">
          <Link to="/Signup" className="signup_nav">
            Sign Up
          </Link>
          <Link to="/log-in" className="login_nav">
            Log In
          </Link>
        </div>
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
