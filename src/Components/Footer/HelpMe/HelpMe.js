import React from "react";

//styles
import "./HelpMe.css";

function HelpMe() {
  return (
    <div className="help-me">
      <h4>HELP ME</h4>
      <ul>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">TERMS OF USE</a>
        </li>
        <li>
          <a href="#">PRIVACY POLICY</a>
        </li>
        <li>
          <a href="#">COOKIES</a>
        </li>
      </ul>
    </div>
  );
}

export default HelpMe;
