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
    <div className=" con-10">
      <div className=" text-center main-heading">
        <h1>Todays Menu's</h1>
        <img src={img1} alt="load" />
      </div>

      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-center mx-2">
          <button
            className="btn btn-new"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button className="btn btn-new" onClick={() => filterItem("lunch")}>
            Lunch
          </button>
          <button className="btn btn-new" onClick={() => filterItem("evening")}>
            Evening
          </button>
          <button className="btn btn-new" onClick={() => filterItem("dinner")}>
            Dinner
          </button>
          <button className="btn btn-new" onClick={() => setItems(Menu)}>
            All
          </button>
        </div>
      </div>

      {/* my main items section  */}
      <div className="menu-items container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const { id, name, image, description, price } = elem;

                return (
                  <div class="menucard-section animated zoomIn">
                    <ul>
                      <li>
                        <img alt="No" src={image} />
                        <div>
                          <h4>{name}</h4>
                          <ul class="items-ul">
                            <li class="m0p0">ingredients</li>
                            <li class="m0p0">ingredients</li>
                            <li class="m0p0">ingredients</li>
                            <li class="m0p0">ingredients</li>
                            <li class="m0p0">ingredients</li>
                            <li class="m0p0">ingredients</li>
                          </ul>
                        </div>
                        <h4>{price}</h4>
                      </li>
                    </ul>
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


