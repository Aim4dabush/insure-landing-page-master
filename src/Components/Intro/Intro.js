import React from "react";

//styles
import "./Intro.css";
import Button from "../../StyledComponents/Button";

function Intro() {
  return (
    <div className="intro">
      <img
        src={
          process.env.PUBLIC_URL +
          "/Images/Mobile/bg-pattern-intro-left-mobile.svg"
        }
        alt="left"
        className="left"
      />
      <h1>
        Humanizing <br /> your insurance.
      </h1>
      <p>
        Get your life insurance coverage easier and faster. We blend our
        expertise and technology to help you find the plan that's right for you.
        Ensure you and your loved ones are protected.
      </p>
      <Button>VIEW PLANS</Button>
      <img
        src={
          process.env.PUBLIC_URL +
          "/Images/Mobile/bg-pattern-intro-right-mobile.svg"
        }
        alt="right"
        className="right"
      />
    </div>
  );
}

export default Intro;
