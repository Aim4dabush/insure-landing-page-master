import React from "react";

//styles
import "./PeopleFirst.css";

function PeopleFirst() {
  return (
    <div className="people-first">
      <img
        src={process.env.PUBLIC_URL + "Images/icon-people-first.svg"}
        alt=""
      />
      <h2>People First</h2>
      <p>
        Our plans aren't full of conditions and clauses to prevent payouts. We
        make sure you're covered when you need it.
      </p>
    </div>
  );
}

export default PeopleFirst;
