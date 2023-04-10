import React from "react";
import "../components/ClusterHover.css";

const ClusterHover = () => {
  // function toggleBtn() {
  //   const Btn = document.querySelector(".btns");
  //   // let add = document.getElementById("add");
  //   const dwada = document.getElementById("dwada");
  //   const remove = document.getElementById("remove");
  //   const btn = document.querySelector(".btns").querySelectorAll("a");
  //   Btn.classList.toggle("open");
  //   if (Btn.classList.contains("open")) {
  //     btn.forEach((e, i) => {
  //       setTimeout(() => {
  //         let bottom = 40 * i;
  //         e.style.bottom = bottom + "px";
  //       }, 1000 * i);
  //     });
  //   } else {
  //     btn.forEach((e, i) => {
  //       e.style.bottom = "0px";
  //     });
  //   }
  // }
  return (
    <div className="cluster">
      <div classname="menu">
        <div classname="button"><img src="" alt=""/></div>
        <div classname="button"><img src="" alt=""/></div>
        <div classname="button"><img src="" alt=""/></div>
      </div>
      {/* <div className="fabs" onClick={toggleBtn()}>
        <div className="action">
          <i className="fas fa-plus" id="dwada"></i>
          <i className="fas fa-time" style={{dispaly:"none"}} id="remove"></i>
        </div>
        <div className="btns">
          <a href="#" className="btn">
            <i className="fab fa-facebook-f"></i>
          </a>

          <a href="#" className="btn">
            <i className="fab fa-twiter"></i>
          </a>

          <a href="#" className="btn">
            <i className="fab fa-whatsapp"></i>
          </a>

          <a href="#" className="btn">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default ClusterHover;
