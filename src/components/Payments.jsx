import React from "react";
import payments from "../assets/payments.svg";
import "../App.css";

const Payments = () => {
  return (
    <section className="container" style={{ marginTop: "100px" }}>
      <div className=" d-flex justify-content-center align-items-center vh-100 px-5">
        <div className="row">
          <div className="col-md-7 mb-4">
            <h1>Payments</h1>
            <p>
              Enjoy a secure, reliable and convenient way to pay. Whether you're
              paying for a purchase, subscription or any other type of payment,
              CredPal is designed to make the process fast and easy.
            </p>
            <div>
              <button
                type="button"
                className="btn btn-primary rounded-0"
                style={{ padding: "16px 24px" }}
              >
                Download App
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <img
              src={payments}
              alt="someone wearing shoes"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
