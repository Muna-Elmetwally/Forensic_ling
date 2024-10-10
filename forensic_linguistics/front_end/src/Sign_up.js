import { useState } from "react";
import axios from "axios";
export default function Sign_up() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [username, setUser_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeat_password] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [career, setCareer] = useState("");
  const [accept, setAccept] = useState(false);
  const [flag, setFlag] = useState(true); //sending APIS

  function submit(e) {
    e.preventDefault();
    setAccept(true); //for rendering the error messages
    if (
      username === "" ||
      email === "" ||
      password.length < 8 ||
      repeat_password !== password
    ) {
      setFlag(false);
    }
    if (flag) {
      // Send the data to the backend
      let res = axios
        .post("http://127.0.0.1:8000/register", {
          //sending the data to the backend > key: value
          first_name: first_name,
          last_name: last_name,
          username: username,
          email: email,
          password: password,
          repeat_password: repeat_password,
          phone: phone,
          country: country,
          career: career,
        })
        .then((t) => console.log(t));
    }
  }

  return (
    <div className="signup-parent">
      <div className="register">
        <form
          onSubmit={submit}
          id="form"
          action="/"
          method="get"
          style={{ textAlign: "center" }}
        >
          <label htmlfor="first_name">First Name</label>
          <input
            id="first_name"
            type="text"
            placeholder="First Name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            autoComplete="given-name" // Added autocomplete
          />
          <label htmlfor="last_name">Last Name</label>
          <input
            id="last"
            type="text"
            placeholder="Last Name"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
          />
          <label htmlfor="username">Username</label>
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
          <label htmlfor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email" // Added autocomplete
          />
          <label htmlfor="password">Password</label>
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
          <label htmlFor="repeat_password">Repeat Password</label>
          <input
            id="repeatpassword"
            type="password"
            placeholder="Repeat your Password"
            value={repeat_password} /* Use the state variable here */
            onChange={(e) =>
              setRepeat_password(e.target.value)
            } /* Update the state on input change */
            autoComplete="new-password" // Added autocomplete
          />
          {repeat_password !== password && accept && (
            <p className="error">Passwords do not match</p>
          )}
          <label htmlfor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel" // Added autocomplete
          />
          <label htmlfor="country">Country</label>
          <input
            id="country"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            autoComplete="country-name" // Added autocomplete
          />
          <label htmlfor="career">job</label>
          <input
            id="career"
            type="text"
            placeholder="What do you do for living?"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            autoComplete="job-title" // Added autocomplete
          />
          <div className="button" style={{ textAlign: "center" }}>
            <button id="button">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
