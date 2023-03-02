import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/boy1.png";
import hero from "../../img/hero-banner.png";
import glassesimoji from "../../img/glassesimoji.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const auth = useSelector((state) => state.auth);

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Welcome!</span>
          <span>Buy & Sell Digital Assets In Credore</span>
          <span>
          Coin Credore is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
          </span>
          {console.log(auth.username)}
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Start</button>
        </Link>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={hero} alt="" />
        <img src={hero} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
