import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Logo from "./components/Logo";
import SignUp from "./Sign_up";
import LogIn from "./Log_in";
import Footer from "./components/Footer";
import { AuthProvider } from "./AuthContext"; // Import the AuthProvider

export default function App() {
  return (
    <AuthProvider>
      <div>
        <div>
          <Header />
          <Logo />
          <Routes>
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}
