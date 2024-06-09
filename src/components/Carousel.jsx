import React from "react";
import carousel1 from "../assets/carousel1.svg";
import carousel2 from "../assets/carousel2.svg";
import carousel3 from "../assets/carousel3.svg";
import carousel4 from "../assets/carousel4.svg";
import "../App.css";

const Carousel = () => {
  return (
    <section className="container-fluid">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-6 col-md-3">
          <img src={carousel1} alt="app benefits" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3">
          <img src={carousel2} alt="app benefits" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3">
          <img src={carousel3} alt="app benefits" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3">
          <img src={carousel4} alt="app benefits" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
