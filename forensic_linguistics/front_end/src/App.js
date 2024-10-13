import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Logo from "./components/Logo";
import SignUp from "./pages/Sign_up";
import LogIn from "./pages/Log_in";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Dashboard from "./pages/dashboard/Dashboard"; // Import the Dashboard component
import { AuthProvider } from "./pages/AuthContext"; // Import the AuthProvider
import SearchBar from "./components/SearchBar";
// import "./style.css";

export default function App() {
  return (
    <AuthProvider>
      <div>
        <div>
          <Header />
          <SearchBar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </AuthProvider>
  );
}
