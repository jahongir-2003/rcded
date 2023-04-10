import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactNav from "../header-footer/ContactNav";
import "../components/ComponentA.css";
import { Rating, Typography } from "@mui/material";
import Linkogo from "../pages/Linkogo";
import { getLang } from "../locals";
import Owldemo2 from "./OwlCarouselRegion";

const ComponentA = () => {
  const { id } = useParams();
  const [city, setcity] = useState();


  const Lang = getLang();

  useEffect(() => {
    axios
      .get(`http://ravshandev.uz/${Lang}/api/v1/guid/city/${id}/`)
      .then((response) => {
        setcity(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <ContactNav />
      <Linkogo />

      <div>

        <div className="componentA">
          <div className="int">
            <img
              className="m-3 regionimg"
              src={city?.images[0].get_image}
              alt="#"
            />
            <div className="name-disc">
              <h1 className="ms-3 mt-3 name">{city?.name}</h1>
              <div className="m-3 description">{city?.description}</div>
            </div>
          </div>
          <div className="mt-3">
            {/* <h1 className="ms-3 name">{city?.name}</h1>
            <div className="m-3 description">{city?.description}</div> */}

            <div>
              {city &&
                city?.guids?.map((item, index) => {
                  return (
                    <div className="d-flex mx-5" key={index}>
                      <Link
                        className="text-dark d-flex"
                        to={`/guid/${item.id}`}
                        alt="#"
                      >
                        <img
                          className="mx-3 mb-4 d-flex"
                          style={{
                            width: 80,
                            height: 80,
                            borderRadius: "10px"
                          }}
                          src={item.get_image}
                          alt=""
                        />

                        <div className="d-block align-items-center">
                          <p
                            className=" "
                            style={{ verticalAlign: "baseline" }}
                          >
                            {item.name}
                          </p>

                          <Typography component="legend"></Typography>
                          <Rating
                            className="mx-1 "
                            name="simple-controlled"
                            defaultValue={item.get_rating}
                            city={city?.get_rating}
                            onChange={(city, get_rating) => {
                              setcity(get_rating);
                            }}
                          />
                        </div>
                      </Link>
                      {/* <p className="mt-4">{item.get_rating}</p> */}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <Owldemo2/>
      </div>
    </>
  );
};

export default ComponentA;
