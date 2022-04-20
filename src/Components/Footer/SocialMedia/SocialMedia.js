import React from "react";

//styles
import "./SocialMedia.css";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
  return (
    <div className="social-media">
      <a href="#">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faPinterest} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
}

export default SocialMedia;
