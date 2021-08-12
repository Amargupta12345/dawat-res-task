import React from 'react'
import Blog from "./Blog"
import img1 from "../../assets/images/red.png"
import "./blog.css";


const Blogs = () => {
    
    return (
        <>
      <div className="con-6  text-center mt-5  carousel" id="Blog">
        <h1 className=" slider-title ">Latest News</h1>
        <img src={img1} alt="load"/>
        <div className="container">
        <Blog />
        </div>
      </div>
</>
    );
}

export default Blogs
