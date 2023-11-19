import React from "react";
import "../Styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h5>
          Copyrights © 2023 · <strong>Roan Cloud</strong> · All Rights Reserved.
        </h5>
      </div>
      <div className="footer-right">
        <a href="/privacy-policy">Privacy Policy</a>
        <span>/</span>
        <a href="/terms-conditions">Terms & Conditions</a>

        
      </div>
    </div>
  );
};

export default Footer;
