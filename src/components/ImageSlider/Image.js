import React from 'react'
import ImageSlider  from './ImageSlider'
import img1 from "../../assets/images/red.png";

const Image = () => {
    return (
      <div className="con-9 container carousel" id="Team">
        <h1 className="slider-title">Our Chefs</h1>
        <div className="disk">
          <img src={img1} alt="load" />
        </div>
        <ImageSlider />
      </div>
    );
}

export default Image
