import "./single.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/Single-post/SinglePost";
export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
