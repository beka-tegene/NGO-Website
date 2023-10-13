import React from "react";
import GalleryAll from "../components/Gallery/GalleryAll";
import Layout from "../components/Landing/Layout";
import Footer from "../components/Landing/Footer";

const AllGallery = () => {
  return (
    <div>
      <Layout />
      <GalleryAll />
      <Footer />
    </div>
  );
};

export default AllGallery;
