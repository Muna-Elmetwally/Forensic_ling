import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Cookies from "js-cookie";
import "./Login.css";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { logIn } = useAuth();

  useEffect(() => {
    const storedEmail = Cookies.get("userEmail");
    if (storedEmail) {
      logIn();
      navigate("/home");
    }
  }, [logIn, navigate]);

  function submit(e) {
    e.preventDefault();
    setAccept(true);
    setMessage(""); // Clear previous messages

    if (email === "" || password.length < 8) {
      return; // Exit if validation fails
    }

    setLoading(true);

    axios
      .get(`http://localhost:5000/users?email=${email}&password=${password}`)
      .then((response) => {
        if (response.data.length > 0) {
          setMessage("Logged in successfully!");
          logIn();
          // Store user email in local storage and cookies
          localStorage.setItem("userEmail", email);
          Cookies.set("userEmail", email, { expires: 30 });
          navigate("/");
        } else {
          setMessage("Invalid email or password.");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setMessage("There was an error logging in.");
      })
      .finally(() => {
        setLoading(false);
        setEmail("");
        setPassword("");
        setAccept(false);
      });
  }

  return (
    <div className="logIn-parent">
      <div className="register">
        <form onSubmit={submit} style={{ textAlign: "center" }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
          {password.length < 8 && accept && (
            <p className="error">Password must be at least 8 characters</p>
          )}
          <div className="button" style={{ textAlign: "center" }}>
            <button id="button" type="submit" disabled={loading}>
              {loading ? "Logging..." : "Log In"}
            </button>
          </div>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}
