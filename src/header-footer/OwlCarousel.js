import React, {Component} from "react";
import OwlCarousel from "react-owl-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "../header-footer/owl.css";
import MyNavbar from "./MyNavbar";
import carimg1 from '../img/rasmni oizdesi.png';
import carimg2 from '../img/rasmni pizdesi 2.png';
import carimg3 from '../img/pizdes rasm3.png';

class Owldemo1 extends Component {
  render() {
    return (
      <div>
        <MyNavbar/>
        <div className="container-fluid p-0 position-relative">
          <OwlCarousel
            items={1}
            className="owl-theme"
            loop={true}
            nav={false}
            dots={false}
            autoplay={true}
            autoplaySpeed={60}
            margin={8}
          >
            <div>
              {/* <h1 className="owltext">UZBEKISTAN</h1> */}
              <p className="visit">Visit Uzbekistan</p>
              <img className="img" src={carimg1} alt="" />
              <button type="submit" className="callBtn"><a href={"/contact"}><p className="callBtnText">Contact</p></a></button>
            </div>
            <div>
              {/* <h1 className="owltext">UZBEKISTAN</h1> */}
              <p className="visit">Visit Uzbekistan</p>
              <img className="img" src={carimg2} alt="" />
              <button type="submit" className="callBtn"><a href={"/contact"}><p className="callBtnText">Contact</p></a></button>
            </div>
            <div>
              {/* <h1 className="owltext">UZBEKISTAN</h1> */}
              <p className="visit">Visit Uzbekistan</p>
              <img className="img" src={carimg3} alt="" />
              <button type="submit" className="callBtn"><a href={"/contact"}><p className="callBtnText">Contact</p></a></button>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Owldemo1;

// import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import header from "../assets/header.jpg";
// import registon from "../assets/registon.png";
// import registon1 from "../assets/registonfoto.png";
// import registon2 from "../assets/registonPhoto.png";

// function Owldemo1 () {
//     return (
//       <>
//         <OwlCarousel
//           className="owl-theme"
//           loop
//           margin={10}
//           autoplaySpeed={60}
//           nav>
//           <div class="item">
//             <img className="img" src={header} alt="" />
//           </div>
//           <div class="item">
//             <img className="img" src={registon} alt="" />
//           </div>
//           <div class="item">
//             <img className="img" src={registon1} alt="" />
//           </div>
//           <div class="item">
//             <img className="img" src={registon2} alt="" />
//           </div>
//         </OwlCarousel>
//         <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
//         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css.bootstrap.min.css"></script>
//       </>
//     );
// }
// export default Owldemo1;
