import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img, title, description }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt={title} />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">forensic linguistics</span>
          <span className="postCat">crime</span>
        </div>
        <span className="postTitle">
          <Link to="/post" className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">{description}</p>
    </div>
  );
}
