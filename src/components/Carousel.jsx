import React from "react";
import carousel from "../assets/carousel.svg";
import "../App.css";

const Carousel = () => {
  return (
    <section className="container">
      <div className=" d-flex justify-content-center align-items-center vh-100 px-5">
        <div className="row">
          <img src={carousel} alt="app benefits" />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
