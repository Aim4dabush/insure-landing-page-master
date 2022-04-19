import React from "react";

//styles
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div className="social-media">
      <img
        src={process.env.PUBLIC_URL + "/Images/icon-facebook.svg"}
        alt="facebook"
      />
      <img
        src={process.env.PUBLIC_URL + "/Images/icon-twitter.svg"}
        alt="twitter"
      />
      <img
        src={process.env.PUBLIC_URL + "/Images/icon-pinterest.svg"}
        alt="pinterest"
      />
      <img
        src={process.env.PUBLIC_URL + "/Images/icon-instagram.svg"}
        alt="instagram"
      />
    </div>
  );
}

export default SocialMedia;
