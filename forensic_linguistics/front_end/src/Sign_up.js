import { useState } from "react";
// import axios from "axios";
export default function Sign_up() {
  //   const [first_name, setFirst_name] = useState("");
  //   const [last_name, setLast_name] = useState("");
  //     const [username, setUser_name] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setRepeat_password] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [career, setCareer] = useState("");
  const [accept, setAccept] = useState(false);
  const [flag, setFlag] = useState(false); //sending APIS
  const [message, setMessage] = useState("");

  console.log(flag);

  function submit(e) {
    e.preventDefault();
    setAccept(true); //for rendering the error messages
    // Validate inputs
    if (
      name.length < 3 ||
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
    setName("");
    setEmail("");
    setPassword("");
    setRepeat_password("");
    setAccept(false);
  }

  return (
    <div className="signup-parent">
      <div className="register">
        <form onSubmit={submit} style={{ textAlign: "center" }}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="family-name" // Added autocomplete
          />
          {name === "" && accept && (
            <p className="error">name must be at least 3 characters</p>
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
