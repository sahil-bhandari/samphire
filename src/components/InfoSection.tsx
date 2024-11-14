import React from "react";
import "../css/InfoSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const InfoSection: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="row"></div>
      <div className="contact-options">
        <div className="contact-box">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Gharse Towers, opposite Don Bosco School, Panaji, Goa</p>
        </div>
        <div className="contact-box">
          <FontAwesomeIcon icon={faPhone} />
          <a href="tel:+917057551122">+91 7057551122</a>
        </div>
        <div className="contact-box">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:samphirespa@gmail.com">samphirespa@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
