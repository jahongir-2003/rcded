import React, { Component } from "react";
import "../header-footer/ContactNav.css";
import { Link } from "react-router-dom";
import twitterwi from "../assets/twitterblueicon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import facebook from "../assets/Facebook_icon.png";
import telegram from "../assets/telegram-icon.png";
import instagram from "../assets/Instagram-Image.png";
import menuicon from "../img/menu-icon.png";

class ContactNav extends Component {
  render() {
    return (
      <div className="container-fluid bg-secondary">
        <nav className="navbar navbar-expand-md container">
          <a className="navbar-brand" href={"/"}>
            Guideus
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <img className="menu-icon" src={menuicon} alt="" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
            
              <li className="nav-item">
                <a className="nav-link" href={"contact"}>
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">en/ru</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  +998 94 050 12 02
                </a>
              </li>
              <li style={{marginRight:"-7%"}}>
                <div  className="navicon bg-transparent">
                  <a href="https://www.facebook.com/profile.php?id=100091562413167">
                    <img className="facebook" src={facebook} alt="" />
                  </a>
                  <a href="https://t.me/+998500019944">
                    <img className="telegram" src={telegram} alt="" />
                  </a>
                  <a href="https://instagram.com/expert.tour.guide?igshid=ZDdkNTZiNTM=">
                    <img className="instagram" src={instagram} alt="" />
                  </a>
                  <a href="https://wa.me/qr/ZNXWW65DCEKUN1">
                    <img className="twiwhiicon" src={twitterwi} alt="" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        </nav>
      </div>
    );
  }
}

export default ContactNav;
