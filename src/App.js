import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
// components
import Navbar from "./components/Navbar/Navbar";
import Carousels from "./components/Carousels/Carousels";
import Story from "./components/Story/Story";
import Special from "./components/Packages/Special";
import Image from "./components/ImageSlider/Image";
import Book from "./components/BookTable/Book";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import ImageGallery from "./components/Food/ImageGallery";
import Blogs from "./components/Blog/Blogs";


const App = () => {
  const [loading, setLoading] = useState(false);
  const overide = css`
    display: block;
    border-color: red;
    margin-top: 20%;
    text-align: center;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <PropagateLoader
          color={"#c92c20"}
          loading={loading}
          css={overide}
          size={40}
        />
      ) : (
        <>
         
          <Navbar />
          <Carousels />
          <Story />
          <Special />
          <ImageGallery />
          <Book />
          <Image />
          <Blogs />
          <Gallery />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
