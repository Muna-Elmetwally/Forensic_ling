import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./pages/Sign_up";
import LogIn from "./pages/Log_in";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashboard"; // Import the Dashboard component
import { AuthProvider } from "./pages/AuthContext"; // Import the AuthProvider
import SearchBar from "./components/SearchBar";
import About from "./pages/About";
import MenuBar from "./pages/NavMenu";
import PostDetails from "./pages/PostDetails"; // The new PostDetails component
import Post from "./pages/post/Post";
import "./style.css";

export default function App() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <SearchBar />
        <div className="app-container">
          {/* MenuBar always remains visible */}
          <div className="menu-bar-container">
            <MenuBar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="SearchBar" element={<SearchBar />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/About" element={<About />} />
            <Route path="/posts" element={<Post />} />
            <Route path="/post" element={<PostDetails />} />{" "}
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </AuthProvider>
  );
}
