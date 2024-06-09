import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Vector.svg";
import NG from "../assets/NG.svg";
import arrowDown from "../assets/Arrow Chevron Down.svg";
import downloadButton from "../assets/button.svg";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="nav-brand" />
          </Link>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link text-white">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link text-white">
                  What We Do
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <div className="me-3 text-white">FAQ</div>
              <span className="d-flex align-items-center me-3">
                <img src={NG} alt="country" className="me-1" />
                <button className="btn btn-link p-0">
                  <img src={arrowDown} alt="dropdown button" />
                </button>
              </span>
              <button className="btn btn-link p-0">
                <img src={downloadButton} alt="download button" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
