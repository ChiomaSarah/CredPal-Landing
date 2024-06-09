import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Vector.svg";
import NG from "../assets/NG.svg";
import arrowDown from "../assets/Chevron.svg";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg pt-4">
        <div className="container px-5">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="nav-brand" className="img-fluid" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ fontSize: "14px" }}>
                <a href="/" className="nav-link text-white">
                  Products
                </a>
              </li>
              <li className="nav-item" style={{ fontSize: "14px" }}>
                <Link to="/services" className="nav-link text-white">
                  Business
                </Link>
              </li>
              <li className="nav-item" style={{ fontSize: "14px" }}>
                <Link to="/products" className="nav-link text-white">
                  What We Do
                </Link>
              </li>
            </ul>

            <div className="d-flex flex-column flex-lg-row mt-3 mt-lg-0">
              <span
                className="me-3 d-flex align-items-center text-white mb-2 mb-lg-0 navbar-text"
                style={{ fontSize: "14px" }}
              >
                FAQ
              </span>
              <div className="d-flex align-items-center me-3 mb-2 mb-lg-0">
                <img src={NG} alt="country" className="me-1 img-fluid" />
                <button className="btn btn-link p-0">
                  <img src={arrowDown} alt="dropdown button" />
                </button>
              </div>
              <div>
                <button
                  className="btn btn-light"
                  style={{
                    borderRadius: "90px",
                    padding: "12px 16px",
                    fontSize: "12px",
                  }}
                >
                  Download the Credpal app now
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
