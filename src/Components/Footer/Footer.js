import React from "react";

//styles
import "./Footer.css";

//components
import Contact from "./Contact/Contact";
import HelpMe from "./HelpMe/HelpMe";
import Others from "./Others/Others";
import OurCompany from "./OurCompany/OurCompany";
import SocialMedia from "./SocialMedia/SocialMedia";

function Footer() {
  return (
    <div className="footer">
      <img
        src={
          process.env.PUBLIC_URL + "/Images/Mobile/bg-pattern-footer-mobile.svg"
        }
        alt="footer pattern"
        className="footer-pattern"
      />
      <img
        src={process.env.PUBLIC_URL + "/Images/logo.svg"}
        alt="logo"
        className="footer-logo"
      />
      <SocialMedia />
      <hr />
      <OurCompany />
      <HelpMe />
      <Contact />
      <Others />
    </div>
  );
}

export default Footer;
