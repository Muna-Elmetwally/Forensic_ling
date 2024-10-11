import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Logo from "./components/Logo";
import SignUp from "./pages/Sign_up";
import LogIn from "./pages/Log_in";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Dashboard from "./pages/dashboard/Dashboard"; // Import the Dashboard component
import { AuthProvider } from "./pages/AuthContext"; // Import the AuthProvider

export default function App() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <Logo />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  );
}
