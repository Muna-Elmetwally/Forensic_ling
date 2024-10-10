import Header from "./components/Header";
import Logo from "./components/Logo";
import Signup from "./Sign_up";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <div>
        <Header />
        <Logo />
        <Signup />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
