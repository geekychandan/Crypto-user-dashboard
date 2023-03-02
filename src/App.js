import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import CoinsTable from "./components/cointable/CoinsTable";
import { useSelector } from "react-redux";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const auth = useSelector((state) => state.auth);
  return (
    
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar user={auth.username} />
      <Intro />
      <CoinsTable/>
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      {console.log(auth.username)}
    </div>
  );
}

export default App;
