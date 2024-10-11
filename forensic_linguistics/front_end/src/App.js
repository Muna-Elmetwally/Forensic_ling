import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Logo from "./components/Logo";
import SignUp from "./Sign_up";
import LogIn from "./Log_in";
import Home from "./Home";
import Footer from "./components/Footer";
import Dashboard from "./dashboard/Dashboard"; // Import the Dashboard component
import { AuthProvider } from "./AuthContext"; // Import the AuthProvider

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
