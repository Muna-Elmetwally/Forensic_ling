import { useState } from "react";
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
  const [accept, setAccept] = useState("fasle");

  function submit(e) {
    e.preventDefault();
    setAccept(true);
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
          />
          <label htmlfor="password">Password</label>
          <input
            id="pass"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          />
          <label htmlfor="country">Country</label>
          <input
            id="country"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <label htmlfor="career">job</label>
          <input
            id="career"
            type="text"
            placeholder="What do you do for living?"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
          />
          <div className="button" style={{ textAlign: "center" }}>
            <button id="button">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
