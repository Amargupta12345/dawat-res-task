import React from "react";
import img1 from "../../assets/images/main_logo.png";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import LanguageIcon from "@material-ui/icons/Language";
import "./footer.css";

const Footer = () => {
  return (
    <div className="con-5 mt-5">
      <div className="logo">
        <img src={img1} alt="" />
        <br />
        <br />
        <br />
        <h5>kalyan east chakki nakaa kaaatemanivali kalyan (w) 45245252</h5>
        <p>suryanaaraya455@gmail.com</p>
        <p>12552545655-25</p>
        <div className="icon">
          <MailIcon className="a" />
          <PhoneIcon className="a" />
          <FacebookIcon className="a" />
          <RssFeedIcon className="a" />
          <LanguageIcon className="a" />
          <MailIcon className="a" />
          <PhoneIcon className="a" />
          <FacebookIcon className="a" />
          <RssFeedIcon className="a" />
        </div>
      </div>
      <div className="left-con">
        <p>Terms & Conditions Privavy Contact Site Map</p>
      </div>
      <div className="right-con">
        <p>&copy; 2021 Dawat Resturant || All Rights Resereved</p>
      </div>
    </div>
  );
};

export default Footer;
