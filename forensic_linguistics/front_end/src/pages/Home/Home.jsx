import { useLocation } from "react-router";
import Header from "../../components/Header/Header";
import Posts from "../../components/POSTS/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
