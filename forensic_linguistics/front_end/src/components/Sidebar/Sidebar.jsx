import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <div className="sidebarimg">
          <img
            style={{ width: "80%", height: "100%" }}
            src={require("../../assets/legal (2).jpg")}
            alt="search"
          />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          neque nesciunt natus provident aut, aliquid iste molestiae nam vel
          maiores quidem dolore cum quo, autem nulla, tenetur numquam assumenda
          quaerat.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">categories </span>
        <ul className="sidebarListItem">
          <li className="sidebarListItem">life </li>
          <li className="sidebarListItem">life </li>
          <li className="sidebarListItem">life </li>
          <li className="sidebarListItem">life </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
