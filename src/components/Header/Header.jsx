import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import LanguageIcon from "@material-ui/icons/Language";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./header.css";

const Header = () => {
  return (
    <div className="Up-1">
      <div className="left-1-1">
        <div className="a">
          <MailIcon />
          dawat1245@gmail.com
        </div>
        <div className="a">
          <PhoneIcon />
          Telephone no :- 123456789
        </div>
      </div>
      <div className="right-1">
        <div className="a">
          <FacebookIcon />
        </div>
        <div className="a">
          <RssFeedIcon />
        </div>
        <div className="a">
          <LanguageIcon />
        </div>
        <div className="a">
          <InstagramIcon />
        </div>
        <div className="a">
          <TelegramIcon />
        </div>
     
     

        <button className="btn-3" type="submit">
          BOOK TABLE
        </button>
      </div>
    </div>
  );
};

export default Header;
