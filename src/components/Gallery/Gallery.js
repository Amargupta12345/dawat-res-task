import React from 'react'
import img1 from "../../assets/images/red.png"
import "./gallery.css"

const Gallery = () => {
    return (
      <div className="con-4">
        <h1>Gallery</h1>
        <img src={img1} alt="loaded" />
      </div>
    );
}

export default Gallery
