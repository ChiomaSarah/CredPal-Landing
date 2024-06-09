import React from "react";
import footer from "../assets/footer.svg";
import "../App.css";

const Footer = () => {
  return (
    <section className="container">
      <div className=" d-flex justify-content-center align-items-center vh-100 px-5">
        <div>
          <img src={footer} alt="page footer" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
