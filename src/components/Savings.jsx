import React from "react";
import savings from "../assets/savings.svg";
import "../App.css";

const Savings = () => {
  return (
    <section className="container">
      <div className=" d-flex justify-content-center align-items-center vh-100 px-5">
        <div className="row">
          <div className="col-md-7 mb-4">
            <h1>Savings</h1>
            <p>
              Simplify your savings journey by setting a budget. Save with ease
              by setting goals, tracking your progress, and enabling automatic
              transfers with your bank account. It’s that easy!
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
            <img src={savings} alt="savings" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Savings;
