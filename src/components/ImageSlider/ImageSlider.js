import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from "../../assets/images/team-1.jpg"
import img2 from "../../assets/images/team-2.jpg"
import img3 from "../../assets/images/team-3.jpg"
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import LanguageIcon from "@material-ui/icons/Language";
const ImageSlider = () => {
let settings ={
    dots :true,
    infinite:true,
    speed :500,
    slidesToShow :4,
    slidesToScroll:1,
    cssEase:"linear"
}
    return (
      <Slider {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img1} alt="load" />
            </div>
            <ul className="social-icon">
              <li>
                <a href="">
                  <MailIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <PhoneIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <FacebookIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <MailIcon className="s" />
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img2} alt="load" />
            </div>
            <ul className="social-icon">
              <li>
                <a href="">
                  <MailIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <PhoneIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <FacebookIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <MailIcon className="s" />
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img3} alt="load" />
            </div>
            <ul className="social-icon">
              <li>
                <a href="">
                  <MailIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <PhoneIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <FacebookIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <MailIcon className="s" />
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img3} alt="load" />
            </div>
            <ul className="social-icon">
              <li>
                <a href="">
                  <MailIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <PhoneIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <FacebookIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <MailIcon className="s" />
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img3} alt="load" />
            </div>
            <ul className="social-icon">
              <li>
                <a href="">
                  <MailIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <PhoneIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <FacebookIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <MailIcon className="s" />
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img3} alt="load" />
            </div>
            <ul className="social-icon">
              <li>
                <a href="">
                  <MailIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <PhoneIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <FacebookIcon className="s" />
                </a>
              </li>
              <li>
                <a href="">
                  <MailIcon className="s" />
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI developer</span>
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    );
}

export default ImageSlider
