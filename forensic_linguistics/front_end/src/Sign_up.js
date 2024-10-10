import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [username, setUser_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setRepeat_password] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [career, setCareer] = useState("");
  const [accept, setAccept] = useState(false); // For error message rendering
  const [flag, setFlag] = useState(false); // Sending APIs
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for API call

  console.log(flag);

  function submit(e) {
    e.preventDefault();
    setAccept(true); // To trigger validation error messages

    // Input validation
    if (
      username.length < 3 ||
      email === "" ||
      password.length < 8 ||
      passwordR !== password
    ) {
      setFlag(false);
      return; // Exit if validation fails
    }

    // If inputs are valid, set the flag to true
    setFlag(true);
    setLoading(true); // Set loading state while making API call

    // Mock API request using axios
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        first_name,
        last_name,
        username,
        email,
        password,
        phone,
        country,
        career,
      })
      .then((response) => {
        console.log("Mock API response:", response.data);
        setMessage("Form submitted successfully!"); // Success message
        setLoading(false); // Stop loading
        // Reset form fields
        setFirst_name("");
        setLast_name("");
        setUser_name("");
        setEmail("");
        setPassword("");
        setRepeat_password("");
        setPhone("");
        setCountry("");
        setCareer("");
        setAccept(false);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setMessage("There was an error submitting the form.");
        setLoading(false); // Stop loading
      });
  }

  return (
    <div className="signup-parent">
      <div className="register">
        <form onSubmit={submit} style={{ textAlign: "center" }}>
          <label htmlFor="first_name">First Name</label>
          <input
            id="first_name"
            type="text"
            placeholder="First Name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            autoComplete="given-name"
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            id="last_name"
            type="text"
            placeholder="Last Name"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
          />
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUser_name(e.target.value)}
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
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
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
          />
          <label htmlFor="country">Country</label>
          <input
            id="country"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            autoComplete="country-name"
          />
          <label htmlFor="career">Career</label>
          <input
            id="career"
            type="text"
            placeholder="What do you do for a living?"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            autoComplete="job-title"
          />
          <div className="button" style={{ textAlign: "center" }}>
            <button id="button" type="submit">
              {loading ? "Submitting..." : "Sign Up"}
            </button>
          </div>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}
