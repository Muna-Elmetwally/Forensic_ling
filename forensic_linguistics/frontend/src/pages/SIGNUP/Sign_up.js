import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setRepeat_password] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [career, setCareer] = useState("");
  const [accept, setAccept] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  function resetForm() {
    setFirst_name("");
    setLast_name("");
    setUsername("");
    setEmail("");
    setPassword("");
    setRepeat_password("");
    setPhone("");
    setCountry("");
    setCareer("");
    setAccept(false);
    setStep(1);
  }

  function submit(e) {
    e.preventDefault();
    setAccept(true);

    // Input Validation for Step 1
    if (step === 1) {
      if (username.length < 3 || email === "") {
        return; // Exit if validation fails
      }
      setStep(2); // Proceed to the next step
      return;
    }

    // Input Validation for Step 2
    if (
      password.length < 8 ||
      passwordR !== password ||
      phone === "" ||
      country === "" ||
      career === ""
    ) {
      return; // Exit if validation fails
    }

    setLoading(true);
    // Mock API request for registration axios
    // Check if email or username already exists
    axios
      .get(`http://localhost:5000/users?email=${email}&username=${username}`)
      .then((response) => {
        if (response.data.length > 0) {
          alert("An account with this email or username already exists.");
          return; // Exit if email or username exists
        }

        // If email and username don't exist, proceed with the registration
        return axios.post("http://localhost:5000/users", {
          first_name,
          last_name,
          username,
          email,
          password,
          phone,
          country,
          career,
        });
      })
      .then(() => {
        setMessage("Account created successfully!");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setMessage("There was an error submitting the form.");
      })
      .finally(() => {
        setLoading(false);
        resetForm(); // Call resetForm here
      });
  }

  return (
    <div className="signup-parent">
      <div className="register">
        <form onSubmit={submit} style={{ textAlign: "center" }}>
          {step === 1 && (
            <>
              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                type="text"
                placeholder="First Name"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
                autoComplete="given-name"
                required
                disabled={loading} // Disable when loading
              />
              <label htmlFor="last_name">Last Name</label>
              <input
                id="last_name"
                type="text"
                placeholder="Last Name"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
                required
                disabled={loading} // Disable when loading
              />
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Use setUsername here
                required
                disabled={loading} // Disable when loading
              />
              {username.length < 3 && accept && (
                <p className="error">Username must be at least 3 characters</p>
              )}
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                disabled={loading} // Disable when loading
              />
              <div className="button" style={{ textAlign: "center" }}>
                <button id="button" type="submit" disabled={loading}>
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
                disabled={loading} // Disable when loading
              />
              {password.length < 8 && accept && (
                <p className="error">Password must be at least 8 characters</p>
              )}
              <label htmlFor="passwordR">Repeat Password</label>
              <input
                id="passwordR"
                type="password"
                placeholder="Repeat your Password"
                value={passwordR}
                onChange={(e) => setRepeat_password(e.target.value)}
                autoComplete="new-password"
                required
                disabled={loading} // Disable when loading
              />
              {passwordR !== password && accept && (
                <p className="error">Passwords do not match</p>
              )}
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                required
                disabled={loading} // Disable when loading
              />
              <label htmlFor="country">Country</label>
              <input
                id="country"
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                autoComplete="country-name"
                required
                disabled={loading} // Disable when loading
              />
              <label htmlFor="career">Career</label>
              <input
                id="career"
                type="text"
                placeholder="What do you do for a living?"
                value={career}
                onChange={(e) => setCareer(e.target.value)}
                autoComplete="job-title"
                required
                disabled={loading} // Disable when loading
              />
              <div className="button" style={{ textAlign: "center" }}>
                <button id="button" type="submit" disabled={loading}>
                  {loading ? "Registering..." : "Sign Up"}
                </button>
              </div>
            </>
          )}

          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}
