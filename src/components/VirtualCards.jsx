import React from "react";
import virtual from "../assets/virtual.svg";
import "../App.css";

const VirtualCards = () => {
  return (
    <section className="container">
      <div className=" d-flex justify-content-center align-items-center vh-100 px-5">
        <div className="row">
          <div className="col-md-6">
            <h1>Virtual Cards</h1>
            <p>
              Create a virtual credit or cash card, make secure online
              purchases, keep track of your spending, and have complete
              visibility of where your funds are going. With advanced security
              features, you have the ability to set spending limits and exert
              control over your spending.
            </p>
            <div>
              <button type="button" className="btn btn-primary">
                Download App
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={virtual} alt="VirtualCards" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualCards;
