import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./pages/Sign_up";
import LogIn from "./pages/Log_in";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import { AuthProvider } from "./pages/AuthContext"; // Import the AuthProvider
import SearchBar from "./components/SearchBar";
import About from "./pages/About";
import MenuBar from "./pages/NavMenu";
import PostDetails from "./pages/PostDetails"; // The new PostDetails component
import Post from "./pages/post/Post";
import Services from "./pages/services/Services"; // Import your Services component
import Career from "./pages/career/Career";
import UniversityPage from "./pages/University/University";
import CaseStudies from "./pages/case studies/caseStudies";
import Legal from "./pages/Legal/Legal";

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
            <Route path="/post" element={<PostDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/University" element={<UniversityPage />} />
            <Route path="/CaseStudies" element={<CaseStudies />} />
            <Route path="/Legal" element={<Legal />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </AuthProvider>
  );
}
