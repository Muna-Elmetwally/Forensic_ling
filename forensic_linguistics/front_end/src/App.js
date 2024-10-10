import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Logo from "./components/Logo";
import SignUp from "./Sign_up";
import logIn from "./Log_in";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <div>
        <Header />
        <Logo />
        <Routes>
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/logIn" element={<Log_in />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
