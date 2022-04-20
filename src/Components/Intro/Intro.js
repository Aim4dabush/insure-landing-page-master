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
        className="mobile-left"
      />
      <img
        src={
          process.env.PUBLIC_URL +
          "/Images/Desktop/bg-pattern-intro-left-desktop.svg"
        }
        alt="left"
        className="desktop-left"
      />

      <div className="intro-content">
        <h1>
          <hr />
          Humanizing <br /> your insurance.
        </h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <Button>VIEW PLANS</Button>
      </div>

      <img
        src={
          process.env.PUBLIC_URL +
          "/Images/Mobile/bg-pattern-intro-right-mobile.svg"
        }
        alt="right"
        className="mobile-right"
      />
      <img
        src={
          process.env.PUBLIC_URL +
          "/Images/Desktop/bg-pattern-intro-right-desktop.svg"
        }
        alt="right"
        className="desktop-right"
      />
    </div>
  );
}

export default Intro;
