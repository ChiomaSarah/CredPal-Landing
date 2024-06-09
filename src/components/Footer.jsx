import React from "react";
import footer from "../assets/footer.svg";
import "../App.css";

const Footer = () => {
  return (
    <section className="container-fluid p-0">
      <div className="vh-100 d-flex align-items-end">
        <img src={footer} alt="page footer" className="img-fluid w-100" />
      </div>
    </section>
  );
};

export default Footer;
