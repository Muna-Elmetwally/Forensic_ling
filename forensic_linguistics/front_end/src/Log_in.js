import { useState } from "react";
import axios from "axios";

export default function logIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [accept, setAccept] = useState(false); // For error message rendering
  const [flag, setFlag] = useState(false); // Sending APIs
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for API call

  console.log(flag);

  function submit(e) {
    e.preventDefault();
    setAccept(true); // To trigger validation error messages

    // Input validation
    if (email === "" || password.length < 8) {
      setFlag(false);
      return; // Exit if validation fails
    }

    // If inputs are valid, set the flag to true
    setFlag(true);
    setLoading(true); // Set loading state while making API call

    // Mock API request using axios
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        email,
        password,
      })
      .then((response) => {
        console.log("Mock API response:", response.data);
        setMessage("Form submitted successfully!"); // Success message
        setLoading(false); // Stop loading
        // Reset form fields
        setEmail("");
        setPassword("");
        setAccept(false);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setMessage("There was an error submitting the form.");
        setLoading(false); // Stop loading
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
              {loading ? "Submitting..." : "log-In"}
            </button>
          </div>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}
