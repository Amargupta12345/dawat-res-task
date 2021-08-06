import React, { useState } from "react";
import Menu from "./MenuItem";
import img1 from "../../assets/images/red.png"
import "./image.css"


const ImageGallery = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };

  return (
  
      <div className=" con-10">
        <div className=" text-center main-heading">
          <h1>Todays Menu's</h1>
          <img src={img1} alt="load" />
        </div>

        <div className="menu-tabs container">
          <div className="menu-tab d-flex justify-content-around">
            <button
              className="btn btn-new"
              onClick={() => filterItem("breakfast")}
            >
              Breakfast
            </button>
            <button className="btn btn-new" onClick={() => filterItem("lunch")}>
              Lunch
            </button>
            <button
              className="btn btn-new"
              onClick={() => filterItem("evening")}
            >
              Evening
            </button>
            <button
              className="btn btn-new"
              onClick={() => filterItem("dinner")}
            >
              Dinner
            </button>
            <button className="btn btn-new" onClick={() => setItems(Menu)}>
              All
            </button>
          </div>
        </div>

        {/* my main items section  */}
        <div className="menu-items container-fluid mt-5">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row my-5">
                {items.map((elem) => {
                  const { id, name, image, description, price } = elem;

                  return (
                    <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                      <div className="row Item-inside">
                        {/* for images */}
                        <div className="col-12 col-md-12 col-lg-4 img-div">
                          <img src={image} alt={name} className="img-fluid" />
                        </div>

                        {/* menu items description */}
                        <div className="col-12 col-md-12 col-lg-8">
                          <div className="main-title pt-4 pb-3">
                            <h1>{name}</h1>
                            <p>{description}</p>
                          </div>
                          <div className="menu-price-book">
                            <div className="price-book-divide d-flex justify-content-between ">
                              <h2>Price : {price}</h2>
                              <a href="#">
                                <button className="btn btn-new-1">
                                  Order Now
                                </button>
                              </a>
                            </div>
                            <p>*Prices may vary on Date.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ImageGallery;
