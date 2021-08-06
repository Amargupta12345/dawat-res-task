import React from 'react'
import Navbar from "./components/Navbar/Navbar"
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
  return (
    <div>
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
    </div>
  );
}

export default App
