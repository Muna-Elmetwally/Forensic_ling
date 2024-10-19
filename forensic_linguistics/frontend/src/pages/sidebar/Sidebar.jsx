import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  return (
    <div className="ssidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle"> Events</span>
        <img
          src="https://scontent.faly1-2.fna.fbcdn.net/v/t39.30808-6/441501222_877382361099251_2635033410179027257_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEOeyQUPyWpxgV3eY1aqbCuLz1XMh1IbPUvPVcyHUhs9VU0zoalxMJs1y3PZTq60l5SEwkphneX7dXO25msVZvF&_nc_ohc=z7ZMorFAvX4Q7kNvgFd4F9Z&_nc_zt=23&_nc_ht=scontent.faly1-2.fna&_nc_gid=Ao00Z3_Koj1F6khZvlHFCJe&oh=00_AYDtJWcGnqsqZa8JP-ptyw4wUS1MItXmh7YQqImxJoC6NA&oe=6717A4DE"
          alt=""
        />
        <p>
          Don't miss this event, we will discuss different topics about
          authorship analysis. If you are interested just follow for more
          details.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">hate speech</li>
          <li className="sidebarListItem">AI</li>
          <li className="sidebarListItem">political</li>
          <li className="sidebarListItem">historical</li>
          <li className="sidebarListItem">sexual assaults</li>
          <li className="sidebarListItem">corpus analysis</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <FontAwesomeIcon icon={faSquareFacebook} className="sidebarIcon" />
          <FontAwesomeIcon icon={faSquareInstagram} className="sidebarIcon" />
          <FontAwesomeIcon icon={faXTwitter} className="sidebarIcon" />
          <FontAwesomeIcon icon={faEnvelope} className="sidebarIcon" />
        </div>
      </div>

      {/* Video Section */}
      <div className="sidebarItem">
        <span className="sidebarTitle">WATCH HERE</span>

        {/* First Video */}
        <iframe
          className="sidebarVideo"
          width="100%" // Adjust width
          height="315" // Adjust height as
          src="https://www.youtube.com/embed/rmO-imjxeqY?start=53" // First video
          title="Authorship Analysis in Forensic Linguistics"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>
          <strong>Author Interview:</strong> Alison May on Forensic Linguistics
          <br />
          Discusses different topics related to authorship analysis.
        </p>

        {/* Second Video */}
        <iframe
          className="sidebarVideo"
          width="100%" // Adjust width
          height="315" // Adjust height
          src="https://www.youtube.com/embed/yt24N1Awu9E" // Second video
          title="Unabomber Criminal Case"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>
          <strong>Unabomber Case: </strong>How do you catch a twisted genius who
          aspires to be the perfect anonymous killer?
        </p>
        {/* Third Video */}
        <iframe
          className="sidebarVideo"
          width="100%" // Adjust width
          height="315" // Adjust height
          src="https://www.youtube.com/embed/-01uO3uTrgk" // Second video
          title="Rob Leonard"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>Rob Leonard - The Groundbreaking Science of Forensic Linguistics</p>
      </div>
    </div>
  );
}
