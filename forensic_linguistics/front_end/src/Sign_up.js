import { useState } from "react";
// import axios from "axios";
export default function Sign_up() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [username, setUser_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setRepeat_password] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [career, setCareer] = useState("");
  const [accept, setAccept] = useState(false);
  const [flag, setFlag] = useState(false); //sending APIS
  const [message, setMessage] = useState("");

  console.log(flag);

  function submit(e) {
    e.preventDefault();
    setAccept(true); //for rendering the error messages
    // Validate inputs
    if (
      username.length < 3 ||
      email === "" ||
      password.length < 8 ||
      passwordR !== password
    ) {
      setFlag(false);
      return; // Exit early if validation fails
    }

    // Set flag to true if inputs are valid
    setFlag(true);
    // For now, we'll just show a success message
    setMessage("Form submitted successfully!");
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
            autoComplete="given-name" // Added autocomplete
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            id="last"
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
            autoComplete="family-name" // Added autocomplete
          />
          {username === "" && accept && (
            <p className="error">Username must be at least 3 characters</p>
          )}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email" // Added autocomplete
          />
          <label htmlFor="password">Password</label>
          <input
            id="pass"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password" // Added autocomplete
          />
          {password.length < 8 && accept && (
            <p className="error">Password must be at least 8 characters</p>
          )}
          <label htmlFor="passwordR">Repeat Password</label>
          <input
            id="passwordR"
            type="password"
            placeholder="Repeat your Password"
            value={passwordR} /* Use the state variable here */
            onChange={(e) =>
              setRepeat_password(e.target.value)
            } /* Update the state on input change */
            autoComplete="new-password" // Added autocomplete
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
            autoComplete="tel" // Added autocomplete
          />
          <label htmlFor="country">Country</label>
          <input
            id="country"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            autoComplete="country-name" // Added autocomplete
          />
          <label htmlFor="career">job</label>
          <input
            id="career"
            type="text"
            placeholder="What do you do for living?"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            autoComplete="job-title" // Added autocomplete
          />
          *
          <div className="button" style={{ textAlign: "center" }}>
            <button id="button">Sign Up</button>
          </div>
          {message && <p className="message">{message}</p>}{" "}
          {/* Displaying success/error messages */}
        </form>
      </div>
    </div>
  );
}
