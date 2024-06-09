import React from "react";
import "../App.css";

const CTA = () => {
  return (
    <section
      className="container-fluid text-white"
      style={{ background: "#006DF7" }}
    >
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center px-5">
          <h1>Start Building your credit store today</h1>
          <p>
            Download our app to get started on your credit journey in Africa.
            Make the first move towards a better financial future today.
          </p>
          <div>
            <button type="button" className="btn btn-light text-primary">
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
