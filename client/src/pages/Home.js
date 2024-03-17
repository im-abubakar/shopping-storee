import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel/>


      
      <div className="container">
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />

      <Outlet />
    </>
  );
};

export default Home;
