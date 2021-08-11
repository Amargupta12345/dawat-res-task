import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/main_logo.png";
import Header from "../Header/Header";
import SearchIcon from "@material-ui/icons/Search";
import "./navbar.scss";

const Navbar = () => {
  const [navg, setNavg] = useState(false);
  const chnageBackground = () => {
    if (window.scrollY >= 140) {
      setNavg(true);
    } else {
      setNavg(false);
    }
  };

  window.addEventListener("scroll", chnageBackground);
  return (
    <>
      <div>
        <Header style={{ height: "10px" }} />
      </div>
      <div>
        <nav
          className={
            navg
              ? "navbar active-1 navbar-expand-lg navbar-light fixed-top"
              : "navbar navbar-expand-lg navbar-light fixed"
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
      </div>
    </>
  );
};

export default Navbar;
