export default function Sign_up() {
  return (
    <div>
      <form>
        <label htmlfor="first_name">First Name</label>
        <input id="first_name" type="text" placeholder="First Name" />
        <label htmlfor="last_name">Last Name</label>
        <input id="last" type="text" placeholder="Last Name" />
        <label htmlfor="email">Email</label>
        <input id="email" type="email" placeholder="Email" />
        <label htmlfor="password">Password</label>
        <input id="pass" type="password" placeholder="Password" />
        <label htmlfor="confirm_password">Confirm Password</label>
        <input id="fconf_pass" type="password" placeholder="Confirm Password" />
        <label htmlfor="phone">Phone</label>
        <input id="phone" type="tel" placeholder="Phone" />
        <label htmlfor="address">Country</label>
        <input id="address" type="text" placeholder="Country" />
        <button id="button">Sign Up</button>
      </form>
    </div>
  );
}
