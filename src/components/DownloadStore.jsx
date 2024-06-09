import React from "react";
import ios from "../assets/ios.svg";
import android from "../assets/android.svg";
import phone from "../assets/phone.svg";
import "../App.css";

const DownloadStore = () => {
  return (
    <section
      className="container-fluid h-100"
      style={{ background: "#F1F5FF", marginTop: "100px" }}
    >
      <div className="px-5">
        <div className="row ms-5">
          <div className="col-md-7" style={{ marginTop: "152px" }}>
            <h1>Join CreditPal today</h1>
            <p>
              Download the CredPal app and join millions of satisfied customers
              who are already using CredPal to access credit, make payments,
              invest & many more!
            </p>
            <div className="btn-group">
              <button type="button" className="btn">
                <img src={ios} alt="appstore-logo" className="img-fluid" />
              </button>
              <button type="button" className="btn">
                <img src={android} alt="playstore-logo" className="img-fluid" />
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <img src={phone} alt="phone-logo" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadStore;
