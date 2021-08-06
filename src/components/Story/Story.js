import React from "react";
import img1 from "../../assets/images/about_sign.png";
import "./story.css";

const Story = () => {
  return (
    <div className="con-1">
      <h1 className="animated fadeInUp">Our Story</h1>
      <div className="left-1 animated bounceInLeft">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        ratione, labore non tenetur quod iste iure exercitationem voluptatibus.
        Ea veritatis officia quo impedit incidunt accusantium dolore rem nulla
        consequatur! Voluptates modi voluptate reiciendis quas fuga cupiditate
        voluptatem nam iste, eos inventore, amet fugiat tempora molestiae nulla
        porro numquam quos aliquam perferendis
      </div>
      <div className="right-1 animated bounceInRight">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
        dignissimos asperiores perspiciatis illum quisquam distinctio harum,
        architecto nulla at quo dolores rem suscipit esse dicta quod ut quis
        sapiente ea porro voluptate necessitatibus provident inventore
        assumenda. Voluptatibus quidem minima assumenda cum id dolorem alias
        exercitationem rem nostrum odit reprehenderit, facere aut laudantium
      </div>
      <div className="img1">
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default Story;
