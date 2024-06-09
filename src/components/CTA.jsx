import React from "react";
import "../App.css";

const CTA = () => {
  return (
    <section className="text-white h-100" style={{ background: "#006DF7" }}>
      <div className="container text-center">
        <div style={{ padding: "100px" }}>
          <h2>Start Building your credit store today</h2>
          <p style={{ fontSize: "20px" }}>
            Download our app to get started on your credit journey in Africa.
            Make the first move towards a better financial future today.
          </p>

          <div>
            <button
              type="button"
              className="btn btn-light text-primary mt-3"
              style={{ borderRadius: "90px", padding: "16px 24px" }}
            >
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
