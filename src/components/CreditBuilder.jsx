import React from "react";
import credit from "../assets/credit.svg";
import "../App.css";

const CreditBuilder = () => {
  return (
    <section className="container" style={{ marginTop: "100px" }}>
      <div className=" d-flex justify-content-center align-items-center px-5">
        <div className="row">
          <div className="col-md-7 mb-4">
            <h1>Credit Builder</h1>
            <p>
              Fund your virtual card and make payments everywhere. Use your
              CredPal virtual card to make purchases both online and offline
              with ease, and benefit from our reward-rich programs.
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
            <img src={credit} alt="scale" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditBuilder;
