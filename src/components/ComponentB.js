import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Linkogo from "../pages/Linkogo";
import Birnima from "../pages/Birnima";
import "../components/componentB.css";
import { getLang } from "../locals";
import ContactNav from "../header-footer/ContactNav";
import { format } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ComponentB = (props) => {
  const { id } = useParams();
  const [city, setcity] = useState();
  const [cityone, setcityone] = useState();
  const Lang = getLang();



  const notify = () => toast("Wow so easy!");

  const [language, setlanguage] = useState([]);

  const url = "http://ravshandev.uz/api/v1/contact/";


  function refResh() {
    window.location.reload(false);
  }

  useEffect(() => {
    Axios.get("http://ravshandev.uz/api/v1/guid/language/")
      .then((res) => {
        setlanguage(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    Axios.get(`http://ravshandev.uz/api/v1/guid/city/`)
      .then((response) => {
        setcity(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    Axios.get(`http://ravshandev.uz/${Lang}/api/v1/guid/${id}/`)
      .then((response) => {
        setcityone(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
    console.log(ComponentB);
  };

  return (
    <>
      <ContactNav />
      <Linkogo />
      <div className="container-fluid guid-w p-0">
        <div className="guid-w-i">
          <div className="media-guid-image">
            <img
              className="guid-image"
              style={{ width: 250, height: 250, borderRadius: 8 }}
              src={cityone?.get_image}
              alt="#"
            />
          </div>
          <div className="d-flex">
            <div className="text-bio mt-3">
              <p style={{ fontWeight: "900", fontSize: "24px" }}>
                {cityone?.name}
              </p>
              <p className="bio">{cityone?.bio}</p>
            </div>

            <Birnima className="bironima" />
          </div>
        </div>
        <div className="">
          {cityone &&
            cityone?.works?.map((item, index) => {
              return (
                <div className="works">
                  <img
                    className="works-img "
                    height="240"
                    src={cityone?.works?.get_image}
                    alt=""
                  />
                  <video className="works-video" height="240" controls>
                    <source src={cityone?.get_video} type="" />
                  </video>
                </div>
              );
            })}
        </div>
        <div className="">
          <h3 className="text-center mt-5">Comunication</h3>

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
                type={"email"}
                name="email"
                placeholder="Email"
                className="form-control border-dark me-2"
              />
              <input
                onChange={(e) => handle(e)}
                id="contact_link"
                value={data.contact_link}
                type={"contact_link"}
                name="contact_link"
                placeholder="Link"
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

        <div onClick={refResh}>
        <button
            type="submit"
            onClick={contactapi}
            className="btn suriw submit-button btn-primary text-center w-25"
          >
            SUBMIT
          </button>
        </div>

          {/* <form className="my-5">
            <div className="d-flex justify-space-between">
              <input
                type={"text"}
                name="firstName"
                placeholder="First name"
                className="form-control me-5 border-dark"
              />
              <input
                type={"date"}
                name="firstdate"
                placeholder="Last name"
                className="form-control ms-5 border-dark"
              />
            </div>

            <div className="d-flex justify-space-between mt-4">
              <input
                type={"email"}
                name="email"
                placeholder="Email"
                className="form-control me-5 border-dark"
              />
              <input
                type={"date"}
                name="lastdate"
                placeholder="Link"
                className="form-control ms-5 border-dark"
              />
            </div>
            <input
              type={"text"}
              name="country"
              placeholder="Where are you from?"
              className="form-control mt-4 border-dark"
            />
            <textarea
              className="form-control mt-4 h-50 textarea border-dark"
              name="textarea"
              id="textarea"
            />

            <botton className="btn btn-primary text-white w-50 guid-buton">
              Send
            </botton>
          </form> */}
        </div>
      </div>
    </>
  );
};
export default ComponentB;
