import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/promo_slide_1.jpg";
import img2 from "../../assets/images/promo_slide_2.jpg";
import img3 from "../../assets/images/promo_slide_3.jpg";


const Special_P = () => {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
    };
    return (
      <Slider {...settings}>
        <div className="card-wrap">
          <div className="img-left">
            <img className="animated slideInDown" src={img1} alt="" />
          </div>
          <div className="con-right animated slideInUp">
            <h3 className="animated slideInUp">
              Lorem ipsum dolor sit amet consectetur, a
            </h3>
            <p className="animated slideInUp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              in?
            </p>
            <button className="animated slideInUp">Order Know</button>
          </div>
        </div>
        <div className="card-wrap">
          <div className="img-left">
            <img className="animated slideInDown" src={img2} alt="" />
          </div>
          <div className="con-right animated slideInUp">
            <h3>Lorem ipsum dolor sit amet consectetur, a</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              in?
            </p>
            <button className="btn-3">Order Know</button>
          </div>
        </div>
        <div className="card-wrap">
          <div className="img-left">
            <img className="animated slideInDown" src={img3} alt="" />
          </div>
          <div className="con-right animated slideInUp">
            <h3>Lorem ipsum dolor sit amet consectetur, a</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              in?
            </p>
            <button>Order Know</button>
          </div>
        </div>
        <div className="card-wrap">
          <div className="img-left">
            <img className="animated slideInDown" src={img1} alt="" />
          </div>
          <div className="con-right animated slideInUp">
            <h3>Lorem ipsum dolor sit amet consectetur, a</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              in?
            </p>
            <button>Order Know</button>
          </div>
        </div>
        <div className="card-wrap">
          <div className="img-left">
            <img className="animated slideInDown" src={img3} alt="" />
          </div>
          <div className="con-right animated slideInUp">
            <h3>Lorem ipsum dolor sit amet consectetur, a</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              in?
            </p>
            <button>Order Know</button>
          </div>
        </div>
        <div className="card-wrap">
          <div className="img-left">
            <img className="animated slideInDown" src={img2} alt="" />
          </div>
          <div className="con-right animated slideInUp">
            <h3>Lorem ipsum dolor sit amet consectetur, a</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              in?
            </p>
            <button>Order Know</button>
          </div>
        </div>
      </Slider>
    );
}

export default Special_P
