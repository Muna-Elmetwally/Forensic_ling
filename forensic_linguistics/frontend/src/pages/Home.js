import "./home.css";
import About from "./About";
import Posts from "./posts/Posts";
import Sidebar from "./sidebar/Sidebar";
export default function Home() {
  return (
    <>
      <About />
      <div className="home">
        <Posts />
        <Sidebar />
        {/* hmhbhmjh */}
      </div>
    </>
  );
}

// import React from "react";
// import About from "./About";
// // import Footer from "../components/Footer";

// export default function Home() {
//   return (
//     <div>
//       <About />
//       {/* <Footer /> */}
//     </div>
//   );
// }
