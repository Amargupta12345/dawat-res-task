import React from 'react'
import img1  from "../../assets/images/promo_slide_1.jpg"
import img2  from "../../assets/images/promo_slide_2.jpg"
import img3  from "../../assets/images/promo_slide_3.jpg"
import "./carousel.css"

const Carousels = () => {
    return (
   <div className="carousel slide con-8" data-ride="carousel" id="carouselExampleIndicators">
		<ol className="carousel-indicators">
			<li className="active" data-slide-to="0" data-target="#carouselExampleIndicators"></li>
			<li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
			<li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
		</ol>
		<div className="carousel-inner">
			<div className="carousel-item active">
				<img alt="First slide" className="d-block w-100" src={img1}/>
				<div className="carousel-caption d-none d-md-block">
					<h5 className="animated bounceInRight" >Web Development</h5>
					<p className="animated bounceInLeft" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
					<p className="animated bounceInRight" ><a href="#">More Info</a></p>
				</div>
			</div>
			<div className="carousel-item">
				<img alt="Second slide" className="d-block w-100" src={img2}/>
				<div className="carousel-caption d-none d-md-block">
					<h5 className="animated slideInDown">web design</h5>
					<p className="animated fadeInUp" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
					<p className="animated zoomIn"><a href="#">More Info</a></p>
				</div>
			</div>
			<div className="carousel-item">
				<img alt="Third slide" className="d-block w-100" src={img3}/>
				<div className="carousel-caption d-none d-md-block">
					<h5 className="animated zoomIn" >Digital Marketing</h5>
					<p className="animated fadeInLeft" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
					<p className="animated zoomIn" ><a href="#">More Info</a></p>
				</div>
			</div>
		</div><a className="carousel-control-prev" data-slide="prev" href="#carouselExampleIndicators" role="button"><span aria-hidden="true" className="carousel-control-prev-icon"></span> <span className="sr-only">Previous</span></a> <a className="carousel-control-next" data-slide="next" href="#carouselExampleIndicators" role="button"><span aria-hidden="true" className="carousel-control-next-icon"></span> <span className="sr-only">Next</span></a>
	</div>
    )
}

export default Carousels
