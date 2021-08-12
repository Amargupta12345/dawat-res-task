import React, { useState } from "react";
import Menu from "./MenuItem";
import img1 from "../../assets/images/red.png";
import "./image.scss";

const ImageGallery = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };

  return (
    <div className=" con-10" id="Menu">
      <div className=" text-center main-heading">
        <h1>Todays Menu's</h1>
        <img src={img1} alt="load" />
      </div>

      {/* <div className="menu-tabs container"> */}
      {/* <div className="menu-tab d-flex justify-content-center mx-2"> */}
      {/* <button */}
      {/* className="btn btn-new" */}
      {/* onClick={() => filterItem("breakfast")} */}
      {/* > */}
      {/* Breakfast */}
      {/* </button> */}
      {/* <button className="btn btn-new" onClick={() => filterItem("lunch")}> */}
      {/* Lunch */}
      {/* </button> */}
      {/* <button className="btn btn-new" onClick={() => filterItem("evening")}> */}
      {/* Evening */}
      {/* </button> */}
      {/* <button className="btn btn-new" onClick={() => filterItem("dinner")}> */}
      {/* Dinner */}
      {/* </button> */}
      {/* <button className="btn btn-new" onClick={() => setItems(Menu)}> */}
      {/* All */}
      {/* </button> */}
      {/* </div> */}
      {/* </div> */}

      <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
        <div class="food-menu-list-menu">
          <ul>
            <li class="filter active" onClick={() => setItems(Menu)}>
              All
            </li>
            <li class="filter" onClick={() => filterItem("breakfast")}>
              Breakfast
            </li>
            <li class="filter" onClick={() => filterItem("lunch")}>
              Lunch
            </li>
            <li class="filter" onClick={() => filterItem("dinner")}>
              Dinner
            </li>
            <li class="filter" onClick={() => filterItem("evening")}>
              Coffe
            </li>
            <li class="filter" onClick={() => filterItem("evening")}>
              Snacks
            </li>
          </ul>
        </div>
      </div>

      {/* my main items section  */}
      <div className="menu-items container-fluid">
        <div className="row">
          <div className="col-9 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const { id, name, image, description, price } = elem;

                return (
                  <>
                    <div
                      class="mix col-md-6 col-lg-6 col-sm-12 col-xs-12 single-menu breakfast coffee snacks"
                      style={{ display: "inline-block" }}
                      data-bound=""
                    >
                      <div class="single-menu-details">
                        <div class="food-menu-img">
                          <img src={image} alt="" />
                        </div>
                        <div class="food-menu-details">
                          <h3>
                           {name}
                            <span class="menu-price">{price}</span>
                          </h3>
                          <p class="menu-speacification">
                            <span>- Juice Fruit</span> <span>- Checken</span>{" "}
                            <span>- Cherry</span>
                          </p>
                          <p class="menu-speacification">
                            <span>- Vegetable</span> <span>- Milk</span>{" "}
                            <span>- Potato</span>
                          </p>
                          <p class="menu-speacification">
                            <span>- Tomato</span> <span>- Chilli</span>{" "}
                            <span>- Sesame</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
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
