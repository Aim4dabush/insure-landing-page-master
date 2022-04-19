import React from "react";

//styles
import "./Advertisements.css";

//components
import AffordablePrices from "./AffordablePrices/AffordablePrices";
import PeopleFirst from "./PeopleFirst/PeopleFirst";
import SnappyProcess from "./SnappyProcess/SnappyProcess";

function Advertisements() {
  return (
    <div className="advertisements">
      <hr />
      <h1>We're different</h1>
      <SnappyProcess />
      <AffordablePrices />
      <PeopleFirst />
    </div>
  );
}

export default Advertisements;
