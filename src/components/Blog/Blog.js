import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/blog-1.jpg";
import img2 from "../../assets/images/blog-2.jpg";
import img3 from "../../assets/images/blog-3.jpg";


const Blog = () => {
  
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const getHours = () => {
    const currentHours = new Date();
    return currentHours;
  };

  return (
    <Slider {...settings}>
      <div className="card-wrapper">
        <div class="card">
          <div class="inner-card">
            <div class="img-wrapper">
              <img src={img1} alt="" />
            </div>
            <div class="content">
              <h1>Restaurant welcome day meetup</h1>
              <hr className="hr"/>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, dolore!
              </p>
              <p>
                23 feb ,2021 <span>5comments</span>
              </p>
            </div>
    
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div class="card">
          <div class="inner-card">
            <div class="img-wrapper">
              <img src={img2} alt="" />
            </div>
            <div class="content">
              <h1>Restaurant welcome day meetup</h1>
              <hr className="hr"/>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, dolore!
              </p>
              <p>
                23 feb ,2021 <span>5comments</span>
              </p>
            </div>
    
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div class="card">
          <div class="inner-card">
            <div class="img-wrapper">
              <img src={img3} alt="" />
            </div>
            <div class="content">
              <h1>Restaurant welcome day meetup</h1>
              <hr className="hr"/>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, dolore!
              </p>
              <p>
                23 feb ,2021 <span>5comments</span>
              </p>
            </div>
    
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div class="card">
          <div class="inner-card">
            <div class="img-wrapper">
              <img src={img2} alt="" />
            </div>
            <div class="content">
              <h1>Restaurant welcome day meetup</h1>
              <hr className="hr"/>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, dolore!
              </p>
              <p>
                23 feb ,2021 <span>5comments</span>
              </p>
            </div>
    
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div class="card">
          <div class="inner-card">
            <div class="img-wrapper">
              <img src={img3} alt="" />
            </div>
            <div class="content">
              <h1>Restaurant welcome day meetup</h1>
              <hr className="hr"/>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, dolore!
              </p>
              <p>
                23 feb ,2021 <span>5comments</span>
              </p>
            </div>
    
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div class="card">
          <div class="inner-card">
            <div class="img-wrapper">
              <img src={img1} alt="" />
            </div>
            <div class="content">
              <h1>Restaurant welcome day meetup</h1>
              <hr className="hr"/>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, dolore!
              </p>
              <p>
                23 feb ,2021 <span>5comments</span>
              </p>
            </div>
    
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div class="card">
          <div class="inner-card">
            <div class="img-wrapper">
              <img src={img1} alt="" />
            </div>
            <div class="content">
              <h1>Restaurant welcome day meetup</h1>
              <hr className="hr"/>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, dolore!
              </p>
              <p>
                23 feb ,2021 <span>5comments</span>
              </p>
            </div>
    
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div class="card">
          <div class="inner-card">
            <div class="img-wrapper">
              <img src={img1} alt="" />
            </div>
            <div class="content">
              <h1>Restaurant welcome day meetup</h1>
              <hr className="hr"/>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, dolore!
              </p>
              <p>
                23 feb ,2021 <span>5comments</span>
              </p>
            </div>
    
          </div>
        </div>
      </div>
     
    </Slider>
  );
};

export default Blog;
