import React from "react";

//styles
import "./HowWeWork.css";
import Button from "../../StyledComponents/Button";

function HowWeWork() {
  return (
    <div className="how-we-work">
      <img
        src={
          process.env.PUBLIC_URL +
          "/Images/Mobile/bg-pattern-how-we-work-mobile.svg"
        }
        alt="how we work"
        className="how-we-work-mobile"
      />
      <img
        src={
          process.env.PUBLIC_URL +
          "/Images/Desktop/bg-pattern-how-we-work-desktop.svg"
        }
        alt="how we work"
        className="how-we-work-desktop"
      />
      <h1>Find out more about how we work</h1>
      <Button>HOW WE WORK</Button>
    </div>
  );
}

export default HowWeWork;
