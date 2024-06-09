import React from "react";
import "../App.css";
import Header from "./Header";
import iPhone from "../assets/iPhone 12 Pro mockup.svg";
import balance from "../assets/balance.svg";
import earnings from "../assets/earnings.svg";
import spotify from "../assets/spotify.svg";

function Hero() {
  return (
    <section className="text-white h-100" style={{ background: "#006DF7" }}>
      <Header />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="hero-text">One App, all your Financial Needs</h1>
            <p>
              Take control of your finances on the go! Make payments, save,
              invest, and access credit - all with one easy-to-use app.
            </p>
          </div>
          <div
            className="col-md-6 text-center position-relative "
            style={{ marginTop: "100px" }}
          >
            <img src={iPhone} alt="iphone" className="img-fluid" />
            <img
              src={balance}
              alt="overlay1"
              className="position-absolute"
              style={{ top: "-8%", left: "38.2%" }}
            />
            <img
              src={earnings}
              alt="overlay2"
              className="position-absolute"
              style={{ top: "34.5%", left: "7%" }}
            />
            <img
              src={spotify}
              alt="overlay3"
              className="position-absolute"
              style={{ top: "68%", left: "35.3%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
