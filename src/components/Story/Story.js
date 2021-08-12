import React from "react";
import img1 from "../../assets/images/about_sign.png";
import stroy from "../../assets/images/story.png";
import "./story.css";

const Story = () => {
  return (
    <div className="con-1" id="About">
      <h1 className="animated fadeInUp">Our Story</h1>
      <div className="left-1 animated bounceInLeft">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        ratione, labore non tenetur quod iste iure exercitationem voluptatibus.
        Ea veritatis officia quo impedit incidunt accusantium dolore rem nulla
        impedit provident natus, culpa voluptate, sit quisquam exercitationem
        earum totam sint officia dignissimos laborum qui architecto minima
        aliquam perferendis est tempora consequatur vitae libero accusamus
        dolorem? Ab placeat provident aspernatur non nam. Quae, omnis numquam in
      </div>
 
      <div className="img1">
        <img className="c-image"  src={img1} alt="" />
      </div>
    </div>
  );
};

export default Story;
