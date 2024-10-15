import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerSubtitle1">blog</span>
        <span className="headerSubtitle2">r</span>
      </div>
      <img
        className="headerimg"
        src={require("../../assets/legal (2).jpg")}
        alt="Header-Image"
      />
    </div>
  );
}
