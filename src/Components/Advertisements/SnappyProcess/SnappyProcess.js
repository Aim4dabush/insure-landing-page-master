import React from "react";

//styles
import "./SnappyProcess.css";

function SnappyProcess() {
  return (
    <div className="snappy-process">
      <img
        src={process.env.PUBLIC_URL + "/Images/icon-snappy-process.svg"}
        alt="snappy process"
      />
      <h2>Snappy Process</h2>
      <p>
        Our application process can be completed in minutes, not hours. Don't
        get stuck filling in tedious forms.
      </p>
    </div>
  );
}

export default SnappyProcess;
