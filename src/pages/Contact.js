import React from "react";
import ContactNav from "../header-footer/ContactNav";
import facebook from "../assets/Facebook_icon.png";
import instagram from "../assets/Instagram-Image.png";
import email from "../img/emailicon.png";
import callicon from "../img/callicon.png";
import "../pages/contact.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import Owldemo2 from "../components/OwlCarouselRegion";

// import {useAsyncFn} from "react";

function Contact() {
  const [city, setcity] = useState();

  const [language, setlanguage] = useState([]);

  const url = "http://ravshandev.uz/api/v1/contact/";

  useEffect(() => {
    Axios.get("http://ravshandev.uz/api/v1/guid/language/")
      .then((res) => {
        setlanguage(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  function refResh() {
    window.location.reload(false);
  }

  useEffect(() => {
    Axios.get(`http://ravshandev.uz/api/v1/guid/city/`)
      .then((response) => {
        setcity(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [data, setdata] = useState({
    name: "",
    check_in_time: "",
    check_out_time: "",
    email: "",
    contact_link: "",
    city: "",
    language: ""
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
    console.log(newdata);
  }

  const contactapi = (e) => {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      contact_link: data.contact_link,
      city: parseInt(data.city),
      check_in_time: data.check_in_time,
      check_out_time: data.check_out_time,
      language: parseInt(data.language)
    }).then((res) => {
      console.log(res.data.id);
    });
    console.log(Contact);
  };

  return (
    <div className="row m-0 text-center">
      <ContactNav />
      <h1 className="text-center mt-5 mb-3 contact-text">Contact</h1>
      <div className="flexicons text-center">

        <div className="col-xl-3 icon-text mt-4">
          <a href={"https://www.facebook.com/profile.php?id=100091562413167"}>
            <img className="icons" src={facebook} alt="" />
            <h4 className="text-dark icons-text">Fasebook</h4>
          </a>
        </div>
        <div className="col-xl-3 icon-text mt-4">
          <a
            href={"https://instagram.com/expert.tour.guide?igshid=ZDdkNTZiNTM="}
          >
            <img className="icons" src={instagram} alt="" />
            <h4 className="text-dark icons-text">Instagram</h4>
          </a>
        </div>
        
        <div className="col-xl-3 icon-text mt-4">
          <a href={"guide.service.uz@gmail.com"}>
            <img className="icons" src={email} alt="" />
            <h4 className="text-dark icons-text">guide@gmail.com</h4>
          </a>
        </div>
        <div className="col-xl-3 icon-text mt-4">
          <a href={"https://t.me/+998500019944"}>
            <img className="icons" src={callicon} alt="" />
            <h4 className="text-dark icons-text">+998 94 0501202</h4>
          </a>
        </div>
      </div>

      <form className="my-5 px-5" onSubmit={(e) => contactapi(e)}>
        <div className="d-flex justify-space-between">
          <input
            onChange={(e) => handle(e)}
            id="name"
            value={data.name}
            type={"text"}
            name="name"
            placeholder="First name"
            className="form-control me-5 border-dark"
          />
          <input
            onChange={(e) => handle(e)}
            id="check_in_time"
            value={data.check_in_time}
            type={"datetime-local"}
            name="date"
            format={format}
            placeholder="time"
            className="form-control ms-5 border-dark"
          />

          <input
            onChange={(e) => handle(e)}
            id="check_out_time"
            value={data.check_out_time}
            type={"datetime-local"}
            name="date"
            format={format}
            placeholder="time"
            className="form-control ms-5 border-dark"
          />
        </div>

        <div className="d-flex justify-space-between mt-4 ">
          <input
            onChange={(e) => handle(e)}
            id="email"
            value={data.email}
            type="email"
            name="email"
            placeholder="Email"
            className="form-control border-dark me-2"
          />
          <input
            onChange={(e) => handle(e)}
            id="contact_link"
            value={data.contact_link}
            type="url"
            name="contact_link"
            placeholder="social media url"
            className="form-control border-dark ms-2"
          />
          
        </div>

        <div className="d-flex mt-4">
          <select
            onChange={(e) => handle(e)}
            className="select-btn form-control border-dark me-2"
            name="city"
            id="city"
          >
            {city &&
              city?.map((item, index) => (
                <option value={item.id}>{item.name}</option>
              ))}
          </select>

          <select
            onChange={(e) => handle(e)}
            className="select-btn form-control border-dark ms-2"
            name="language"
            id="language"
          >
            {language &&
              language?.map((item, index) => (
                <option value={item.id}>{item.name}</option>
              ))}
          </select>
        </div>
      </form>
    <div  onClick={refResh}>
      <button
        type="submit"
        onClick={contactapi}
        className="btn submit-button btn-primary w-25"
      >
        SUBMIT
      </button>
      </div>
      <Owldemo2/>
    </div>
  );
}

export default Contact;
