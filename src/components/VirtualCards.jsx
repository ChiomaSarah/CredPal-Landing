import React from "react";
import virtual from "../assets/virtual.svg";
import "../App.css";

const VirtualCards = () => {
  return (
    <section className="container">
      <div className=" d-flex justify-content-center align-items-center vh-100 px-5">
        <div className="row">
          <div className="col-md-7 mb-4">
            <h1>Virtual Cards</h1>
            <p>
              Create a virtual credit or cash card, make secure online
              purchases, keep track of your spending, and have complete
              visibility of where your funds are going. With advanced security
              features, you have the ability to set spending limits and exert
              control over your spending.
            </p>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                style={{ borderRadius: "90px", padding: "16px 24px" }}
              >
                Download App
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <img src={virtual} alt="VirtualCards" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualCards;
