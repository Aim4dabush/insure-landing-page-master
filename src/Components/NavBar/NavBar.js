import React, { useState } from "react";

//styles
import "./NavBar.css";

function NavBar() {
  const [open, setOpen] = useState(true);
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/Images/logo.svg"} alt="logo" />
      </div>
      <div className="nav-links" style={{ display: !open ? "none" : "flex" }}>
        <ul>
          <li>
            <a href="#">HOW WE WORK</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">ACCOUNT</a>
          </li>
          <li>
            <a href="#" className="active">
              VIEW PLANS
            </a>
          </li>
        </ul>
        <img
          src={
            process.env.PUBLIC_URL + "/Images/Mobile/bg-pattern-mobile-nav.svg"
          }
          alt="mobile nav pattern"
          className="mobile-nav-pattern"
        />
      </div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="toggle"
      >
        {!open ? (
          <img
            src={process.env.PUBLIC_URL + "/Images/icon-hamburger.svg"}
            alt="hamburger"
            className="hamburger"
          />
        ) : (
          <img
            src={process.env.PUBLIC_URL + "/Images/icon-close.svg"}
            alt="close"
            className="close"
          />
        )}
      </div>
    </div>
  );
}

export default NavBar;
