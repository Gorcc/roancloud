import React from "react";
import "../Styles/ContactUs.scss";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <div className="conractus-wrap">
        <div className="contactus-left">
          <h1>Contact Us</h1>
          <div>
            <p>We would be glad to serve you with our professional team.</p>

            <div className="adress-div">
              <div className="adress-info-border"></div>
              <div className="adress-infos">
                <p className="adress-info">
                  4 Raven Road, Unit 1c3-55 London E18 1HB United Kingdom
                </p>
                <p className="adress-info">info@roanclouds.com</p>
                <p className="adress-info">
                  United Kingdom: +44 7362049620 <br />
                  USA: +1 917 7650830
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contactus-right">
          <div className="contactus-element">
            <h4>Corporate</h4>
            <ul>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
          <div className="contactus-element">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Warehouses</a>
              </li>
            </ul>
          </div>
          <div className="contactus-element">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="#">Amazon</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
