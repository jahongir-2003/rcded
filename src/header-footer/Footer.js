import React, { Component } from "react";
import "../header-footer/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import callicon from "../img/callicon.png";
import rasm1 from "../assets/rasm.png";
import rasm2 from "../assets/rasm2.png";
import rasm3 from "../assets/rasm3.png";
import rasm4 from "../assets/rasm4.png";
import rasm5 from "../assets/rasm5.png";
import rasm6 from "../assets/rasm6.png";
import { Link } from "react-router-dom";
import email from "../img/emailicon.png";
import facebook from "../assets/Facebook_icon.png";
import telegram from "../assets/telegram-icon.png";
import instagram from "../assets/Instagram-Image.png";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid back bg-gradient">
        <div className="container">
          <div className="row text-white">
            <div className="col-xl-3">
              <h3 className="footer-title">About</h3>
              <p>My name is Rustam</p>
              <p>Is name is Rustam sdcsjdv</p>
              <p>dy name is Rustam caned add</p>
            </div>
            <div className="col-xl-3 mbottom">
              <h3 className="footer-title">City</h3>
              <Link className="d-block" to="#">
                Toshkent
              </Link>
              <Link className="d-block" to="#">
                Andijon
              </Link>
              <Link className="d-block" to="#">
                Samarqand
              </Link>
              <Link className="d-block" to="#">
                Namangan
              </Link>
              <Link className="d-block" to="#">
                Buxoro
              </Link>
            </div>
            <div className="col-xl-3 mb-3">
              <h3 className="footer-title">Contact</h3>
              <span className="d-flex align-items-center">
                <img className="facebook" src={facebook} alt="" />
                <a className="text-decoration-none" href="https://www.facebook.com/profile.php?id=100091562413167">
                  Fasebook
                </a>
              </span>
              <span className="d-flex align-items-center mt-1">
                <img className="instagram" src={instagram} alt="" />
                <a className="text-decoration-none" href="https://instagram.com/expert.tour.guide?igshid=ZDdkNTZiNTM=">
                  Instagram
                </a>
              </span>
              <span className="d-flex align-items-center mt-1">
                <img className="telegram" src={telegram} alt="" />
                <a className="text-decoration-none" href="https://t.me/+998500019944">
                  Telegram
                </a>
              </span>
              <span className="d-flex align-items-center mt-1">
                <img className="call" src={callicon} alt="" />
                <a className="text-decoration-none" href="tel:+998 05 001 99 44">
                +998 05 001 99 44
                </a>
              </span>
              <span className="d-flex align-items-center mt-1">
                <img className="email" src={email} alt="" />
                <a className="text-decoration-none" href="guide.service.uz@gmail.com">
                  Email@gmail.com
                </a>
              </span>
            </div>
            <div className="col-xl-3">
              <h3 className="footer-title">Instagram</h3>
              <div>
                <img className="uzimg" src={rasm1} alt="" />
                <img className="uzimg mx-3" src={rasm2} alt="" />
                <img className="uzimg" src={rasm3} alt="" />
              </div>
              <div className="mt-3">
                <img className="uzimg" src={rasm4} alt="" />
                <img className="uzimg mx-3" src={rasm5} alt="" />
                <img className="uzimg" src={rasm6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
