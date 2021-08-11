import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/team-1.jpg";
import img2 from "../../assets/images/team-2.jpg";
import img3 from "../../assets/images/team-3.jpg";
import img4 from "../../assets/images/team-4.jpg";
import img5 from "../../assets/images/team-5.jpg";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import LanguageIcon from "@material-ui/icons/Language";
import "./slide.scss"
const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div className="chef-section">
        <figure className="img__wrap">
          <img src={img1} alt="No " />
          <p className="img__description">
            <ul className="chef-social">
              <li>
                <MailIcon />
              </li>
              <li>
                <PhoneIcon />
              </li>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <LanguageIcon />
              </li>
            </ul>
          </p>
          <figcaption className="name">Angel Meskat</figcaption>
          <figcaption className="desc">
            Lorem Ipsum is simply dummy text.
          </figcaption>
        </figure>
      </div>
      <div className="chef-section">
        <figure className="img__wrap">
          <img src={img2} alt="No " />
          <p className="img__description">
            <ul className="chef-social">
              <li>
                <MailIcon />
              </li>
              <li>
                <PhoneIcon />
              </li>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <LanguageIcon />
              </li>
            </ul>
          </p>
          <figcaption className="name">John Doe</figcaption>
          <figcaption className="desc">
            Lorem Ipsum is simply dummy text.
          </figcaption>
        </figure>
      </div>
      <div className="chef-section">
        <figure className="img__wrap">
          <img src={img3} alt="No " />
          <p className="img__description">
            <ul className="chef-social">
              <li>
                <MailIcon />
              </li>
              <li>
                <PhoneIcon />
              </li>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <LanguageIcon />
              </li>
            </ul>
          </p>
          <figcaption className="name">Park Ji Sung</figcaption>
          <figcaption className="desc">
            Lorem Ipsum is simply dummy text.
          </figcaption>
        </figure>
      </div>
      <div className="chef-section">
        <figure className="img__wrap">
          <img src={img4} alt="No " />
          <p className="img__description">
            <ul className="chef-social">
              <li>
                <MailIcon />
              </li>
              <li>
                <PhoneIcon />
              </li>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <LanguageIcon />
              </li>
            </ul>
          </p>
          <figcaption className="name">Angel Di Maria</figcaption>
          <figcaption className="desc">
            Lorem Ipsum is simply dummy text.
          </figcaption>
        </figure>
      </div>
      <div className="chef-section">
        <figure className="img__wrap">
          <img src={img5} alt="No " />
          <p className="img__description">
            <ul className="chef-social">
              <li>
                <MailIcon />
              </li>
              <li>
                <PhoneIcon />
              </li>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <LanguageIcon />
              </li>
            </ul>
          </p>
          <figcaption className="name">Angel Meskat</figcaption>
          <figcaption className="desc">
            Lorem Ipsum is simply dummy text.
          </figcaption>
        </figure>
      </div>
      <div className="chef-section">
        <figure className="img__wrap">
          <img src={img1} alt="No " />
          <p className="img__description">
            <ul className="chef-social">
              <li>
                <MailIcon />
              </li>
              <li>
                <PhoneIcon />
              </li>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <LanguageIcon />
              </li>
            </ul>
          </p>
          <figcaption className="name">Angel Meskat</figcaption>
          <figcaption className="desc">
            Lorem Ipsum is simply dummy text.
          </figcaption>
        </figure>
      </div>
      <div className="chef-section">
        <figure className="img__wrap">
          <img src={img2} alt="No " />
          <p className="img__description">
            <ul className="chef-social">
              <li>
                <MailIcon />
              </li>
              <li>
                <PhoneIcon />
              </li>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <LanguageIcon />
              </li>
            </ul>
          </p>
          <figcaption className="name">Angel Meskat</figcaption>
          <figcaption className="desc">
            Lorem Ipsum is simply dummy text.
          </figcaption>
        </figure>
      </div>
    </Slider>
  );
};

export default ImageSlider;
