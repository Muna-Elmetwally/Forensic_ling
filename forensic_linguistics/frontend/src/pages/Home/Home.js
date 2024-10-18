import "./home.css";
import About from "../About/About";
import Posts from "../posts/Posts";
import Sidebar from "../sidebar/Sidebar";
export default function Home() {
  return (
    <>
      <section id="about">
        <About />
      </section>
      <div className="home">
        <section id="posts">
          <Posts />
        </section>

        <section id="sidebar">
          <Sidebar />
        </section>
      </div>
    </>
  );
}
