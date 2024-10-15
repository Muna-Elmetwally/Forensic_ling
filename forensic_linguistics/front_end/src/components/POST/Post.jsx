import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img
        className="postimg"
        src={require("../../assets/legal (2).jpg")}
        alt="Header-Image"
      />
      <div className="postdetails">
        <div className="postIS">
          <span className="postI">55555555</span>
          <span className="postI">55555555</span>
          <span className="postI">55555555</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor, sit amet consectetur adi
        </span>
        <hr />
        <span className="postDate">one hour ago</span>
      </div>
    </div>
  );
}
