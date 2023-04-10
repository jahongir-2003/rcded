import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "../components/OwlCarouselRegion.css";
import rasm1 from '../assets/rasm.png'; 
import rasm2 from '../assets/rasm2.png';
import rasm3 from '../assets/rasm3.png';
import rasm4 from '../assets/rasm4.png';
import rasm5 from '../assets/rasm5.png';
import rasm6 from '../assets/rasm6.png';

class Owldemo2 extends Component {
  render() {
    return (
      <div>
        <div className="container mb-4 p-0">
          <h1 className="text-center my-4">Interesting Place</h1>
          <OwlCarousel keyParams="option"
            itemScope={true}
            items={4}
            className="owl-theme"
            loop={true}
            nav={false}
            dots={false}
            autoplay={true}
            autoplaySpeed={60}
            margin={10}
            options={2}
          >
            <div>
              <img className="images" src={rasm1} alt="" />
            </div>
            <div>
              <img className="images" src={rasm2} alt="" />
            </div>
            <div>
              <img className="images" src={rasm3} alt="" />
            </div>
            <div>
              <img className="images" src={rasm4} alt="" />
            </div>
            <div>
              <img className="images" src={rasm5} alt="" />
            </div>
            <div>
              <img className="images" src={rasm6} alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Owldemo2;
