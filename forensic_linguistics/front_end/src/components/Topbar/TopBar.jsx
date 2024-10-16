import "./topbar.css";
export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-x-twitter"></i>
        <i className="topIcon fa-solid fa-envelope-circle-check"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">
            Write & Blog <i className="writeicon fa-solid fa-pen-to-square"></i>
          </li>
          <li className="topListItem">Events</li>

          <li className="topListItem">About</li>

          <li className="topListItem">News</li>

          <li className="topListItem">Research Papers</li>
          {/* <li className="topListItem">
            LogOut
            <i className="logout icon fa-solid fa-right-from-bracket"></i>{" "}
          </li> */}
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topimg"
          src={require("../../assets/legal (2).jpg")}
          alt="search"
        />
        <i className="SearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
      <button className="logout-button">
        LogOut <i className="logouticon fa-solid fa-right-from-bracket"></i>
      </button>
    </div>
  );
}
