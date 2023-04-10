import React from "react";
import { useState, useEffect } from "react";
import "../pages/home.css";
// import SimpleSlider from "../components/SimpleSlider";
// import ClusterHover from "../components/ClusterHover";
// import MyNavbar from "../header-footer/MyNavbar";
import Owldemo1 from "../header-footer/OwlCarousel";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Linkogo from "../pages/Linkogo";
import { SITE_LANGUAGE } from "../locals";
import Owldemo2 from "../components/OwlCarouselRegion";
import { API } from "../pages/api";

function Home() {
  const [language, setlanguage] = useState([]);
  const history = useHistory();

  const changeLang = (LANG) => {
    if (LANG !== localStorage.getItem(SITE_LANGUAGE)) {
      localStorage.setItem(SITE_LANGUAGE, LANG);
      // window.location.reload();
    }
  };
  useEffect(() => {
    axios
      .get(`${API}guid/language/`)
      .then((res) => {
        console.log(res.data);
        setlanguage(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="text-center">
      <Owldemo1 />
      <Linkogo />

      <div
        className="constraction d-flex language"
        style={{ flexWrap: "wrap", marginLeft: "5%" }}
      >
        {language &&
          language?.map((item, index) => {
            return (
              <div className="col-xl-md lang-flag">
                <Link
                  onClick={() => changeLang(item.contraction)}
                  to={"/GuideServise"}
                >
                  <div key={index} className="mx-3 my-5 lang-1">
                    <img
                      className="border-dark lang d-flex mb-3"
                      style={{ width: 270, height: 90, flexWrap: "no-wrap" }}
                      src={item.get_image}
                      alt=""
                    />

                    <div className="lang-text">
                      <p className="global-text text-dark">{item.name}</p>
                    </div>
                    <div className="d-none">{item.contraction}</div>
                  </div>
                </Link>
              </div>
            );
          })}

        <div className="px-3" style={{ width: "100%" }}>
          <Owldemo2 />
        </div>
      </div>
    </div>
  );
}

export default Home;
