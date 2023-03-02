import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import UserSidebar from "../../Authentication/UserSidebar";
import AuthModal from "../../Authentication/AuthModal";


const navbar = ({user}) => {
  // const user="c"
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Credore</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
                {console.log(user)}
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        {user ? <UserSidebar /> : <button className="button n-button">{<AuthModal />}</button>}
      </div>
    </div>
  );
};

export default navbar;
