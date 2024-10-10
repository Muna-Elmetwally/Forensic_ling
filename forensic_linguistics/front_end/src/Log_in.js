import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { logIn } = useAuth();

  useEffect(() => {
    // Check local storage to see if user is already logged in
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      logIn(); // Call logIn to update authentication state
      navigate("/home"); // Redirect to home if logged in
    }
  }, [logIn, navigate]);

  function submit(e) {
    e.preventDefault();
    setAccept(true);

    if (email === "" || password.length < 8) {
      return; // Exit if validation fails
    }

    setLoading(true);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        email,
        password,
      })
      .then((response) => {
        console.log("Mock API response:", response.data);

        // Replace this with actual API logic for user validation
        if (response.data.email === email) {
          setMessage("Logged in successfully!");
          logIn(); // Call logIn to update authentication state

          // Store user email in local storage
          localStorage.setItem("userEmail", email);

          navigate("/home");
        } else {
          setMessage("Invalid email or password.");
        }
        setLoading(false);
        // Reset form fields
        setEmail("");
        setPassword("");
        setAccept(false);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setMessage("There was an error submitting the form.");
        setLoading(false);
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
            <button id="button" type="submit">
              {loading ? "Logging..." : "Log In"}{" "}
            </button>
          </div>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}
