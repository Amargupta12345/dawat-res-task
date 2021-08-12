import React, { useState, useEffect } from "react";
import logo from "../../assets/images/main_logo.png";
import Header from "../Header/Header";
import SearchIcon from "@material-ui/icons/Search";
import img1 from "../../assets/images/promo_slide_1.jpg";
import img2 from "../../assets/images/promo_slide_2.jpg";
import img3 from "../../assets/images/promo_slide_3.jpg";
import { Link } from "react-scroll";
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
      <header  id="home">
        <div className="fixed-top">
          <Header />
          <hr />

          <nav
            className={
              navg
                ? "navbar navbar-expand-lg navbar-light active-1 fixed-top      "
                : "navbar navbar-expand-lg navbar-light "
            }
          >
            <div class="container">
              <hr />
              <a class="navbar-brand" href="#">
                <img src={logo} alt="" />
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
                      <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-80}
                      >
                        Home
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <Link
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-80}
                      >
                        About Us
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <Link
                        activeClass="active"
                        to="Offer"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-80}
                      >
                        Offer
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <Link
                        activeClass="active"
                        to="Menu"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-80}
                      >
                        Menu
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <Link
                        activeClass="active"
                        to="Team"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-80}
                      >
                        Team
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <Link
                        activeClass="active"
                        to="Blog"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-80}
                      >
                        Blog
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <Link
                        activeClass="active"
                        to="Gallery"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-80}
                      >
                        Gallery
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <Link
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-80}
                      >
                        Contact
                      </Link>
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

        <div
          class="carousel slide"
          data-ride="carousel"
          id="carouselExampleIndicators"
        >
          <ol class="carousel-indicators">
            <li
              class="active"
              data-slide-to="0"
              data-target="#carouselExampleIndicators"
            ></li>
            <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
            <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
            
              <div class="carousel-caption d-none d-md-block">
                <h4 class="animated bounceInRight">Welcome To DAWAT</h4>
                <p class="animated bounceInLeft">
                  CAFE & RESTAURANT RESERVATION 
                </p>
                <p class="animated bounceInRight">
                  <a href="#">Book Table</a>
                </p>
              </div>
            </div>
            <div class="carousel-item">
       
              <div class="carousel-caption d-none d-md-block">
                <h4 class="animated slideInDown"> Our Menus </h4>
                <p class="animated fadeInUp">
                  SEE WHAT'S NEW TODAY TODAYS 
                </p>
                <p class="animated zoomIn">
                  <a href="#">Reservation Now</a>
                </p>
              </div>
            </div>
            <div class="carousel-item">
             
              <div class="carousel-caption d-none d-md-block">
                <h4 class="animated zoomIn"> Get Ready </h4>
                <p class="animated fadeInLeft">
                  TO JOIN WITH US BOOK A TABLE 
                </p>
                <p class="animated zoomIn">
                  <a href="#">More Info</a>
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            data-slide="prev"
            href="#carouselExampleIndicators"
            role="button"
          >
            <span aria-hidden="true" class="carousel-control-prev-icon"></span>{" "}
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            data-slide="next"
            href="#carouselExampleIndicators"
            role="button"
          >
            <span aria-hidden="true" class="carousel-control-next-icon"></span>{" "}
            <span class="sr-only">Next</span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
