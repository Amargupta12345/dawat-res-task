import React from 'react'
import Blog from "./Blog"
import img1 from "../../assets/images/red.png"
import "./blog.css";


const Blogs = () => {
    
    return (
        <>
      <div className="con-6  text-center mt-5  carousel">
        <h1 className=" slider-title ">Latests News</h1>
        <img src={img1} alt="load"/>
        <div className="container">
        <Blog />
        </div>
      </div>
      <div class="light-box">
    <div class="box-wrapper">
      <div class="box">
        <span class="close-btn">&times</span>
        <img src="" alt="" class="light-img"/>
      </div>
    </div>
  </div>
</>
    );
}

export default Blogs
