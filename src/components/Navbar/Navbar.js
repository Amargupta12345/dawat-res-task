import React ,{useState, useEffect} from "react";
import img1 from "../../assets/images/main_logo.png";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import LanguageIcon from "@material-ui/icons/Language";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SearchIcon from "@material-ui/icons/Search";
import "./navbar.css";

const Navbar = () => {

const [navg, setNavg] = useState(false);
const chnageBackground =()=>{
  if (window.scrollY >= 120) {
    setNavg(true);
  } else {
    setNavg(false);
  }
}

window.addEventListener('scroll' , chnageBackground);
  return (
    <>
      <div className="Up-1">
        <div className="left-1">
          <MailIcon />
          dawat1245@gmail.com
          <PhoneIcon />
          Telephone no :- 123456789
        </div>
        <div className="right-1">
          <FacebookIcon />
          <RssFeedIcon />
          <LanguageIcon />
          <InstagramIcon />
          <TelegramIcon />
          <LinkedInIcon />
          <GitHubIcon />
          <button className="btn-2" type="">
            BOOK TABLE
          </button>
        </div>
      </div>

      <nav
        className={
          navg
            ? "navbar active-1 navbar-expand-lg navbar-light fixed-top"
            : "navbar navbar-expand-lg navbar-light fixed-top"
        }
      >
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={img1} alt="load" />
          </a>
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler"
            data-target="#navbarSupportedContent"
            data-toggle="collapse"
            type="button"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  OFFER
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  MENU
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  TEAM
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  BLOG
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  GALLERY
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  CONTACT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <SearchIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
