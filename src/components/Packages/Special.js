import React from "react";
import Special_P from "./Special_P";
import img1 from "../../assets/images/red.png";
import "./special.scss";
const Special = () => {
  return (
    <div className="con-2  carousel">
      <h1 className="slider-title-1 animated fadeInLeft ">Special Package</h1>
      <div className="text-center">
        <img  src={img1} alt="load" />
      </div>
      <Special_P />
    </div>
  );
};

export default Special;
