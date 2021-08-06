import React from 'react'
import ImageSlider  from './ImageSlider'
import "./slide.scss"
const Image = () => {
    return (
        <div className="container mt-5  carousel">
            <h1 className =" slider-title ">Code Chefs</h1>
        <ImageSlider/>
        </div>
    )
}

export default Image
