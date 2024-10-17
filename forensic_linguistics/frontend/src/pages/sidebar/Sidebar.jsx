import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
      {/* Video Section */}
      <div className="sidebarItem">
        <span className="sidebarTitle">WATCH VIDEO</span>
        <video className="sidebarVideo" controls>
          <source src="https://www.example.com/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Illustration Box Section */}
      <div className="illustrationBox">
        {/* <Link to="/explore-more" className="linkStyle"></Link> */}
        {/* internal react */}
        {/* <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="linkStyle"> */}
        {/* external react */}
        <h3 className="boxTitle">Explore More</h3>
        <p className="boxContent">
          Learn about the latest trends in forensic linguistics and how you can
          contribute to this exciting field.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">WATCH VIDEO</span>
        <video className="sidebarVideo" controls>
          <source src="https://www.example.com/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Illustration Box Section */}
      <div className="illustrationBox">
        {/* <Link to="/explore-more" className="linkStyle"></Link> */}
        {/* internal react */}
        {/* <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="linkStyle"> */}
        {/* external react */}
        <h3 className="boxTitle">Explore More</h3>
        <p className="boxContent">
          Learn about the latest trends in forensic linguistics and how you can
          contribute to this exciting field.
        </p>
      </div>
    </div>
  );
}
