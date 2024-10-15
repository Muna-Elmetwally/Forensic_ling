import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerSubtitle1">
          <h1>World Wide Blog</h1>
        </span>
        <span className="headerSubtitle2">Gather All FORENSIC LINGUISTS</span>
      </div>
      <img
        className="headerimg"
        src={require("../../assets/legal (2).jpg")}
        alt="Header-Image"
      />
    </div>
  );
}
