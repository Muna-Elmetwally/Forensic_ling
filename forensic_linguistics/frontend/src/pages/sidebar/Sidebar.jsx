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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwm_k6LR5bRe6jwG716RmEKR_tEFAZEgXMA&s"
          alt="upcoming events"
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
          width="100%"
          height="315"
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
          width="100%"
          height="315"
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
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/-01uO3uTrgk" // third video
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
