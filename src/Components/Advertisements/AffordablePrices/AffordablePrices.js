import React from "react";

//styles
import "./AffordablePrices.css";

function AffordablePrices() {
  return (
    <div className="affordable-prices">
      <img
        src={process.env.PUBLIC_URL + "/Images/icon-affordable-prices.svg"}
        alt="affordable prices"
      />
      <h2>Afffordable Prices</h2>
      <p>
        We don't want you worrying about high monthly costs. Our prices may be
        low, but we still offer the best coverage possible.
      </p>
    </div>
  );
}

export default AffordablePrices;
