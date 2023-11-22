import React from "react";
import "../Styles/ContactUs.scss";
import Footer from "./Footer";
import UKIcon from "../Styles/united-kingdom-uk-svgrepo-com.svg";
import USIcon from "../Styles/flag-us-svgrepo-com.svg";
import CanadaIcon from "../Styles/canada-svgrepo-com.svg";

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <div className="conractus-wrap">
        <div className="contactus-left">
          <h1>London Office</h1>
          <div>
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

        <div className="contactus-middle">
          <div className="contactus-element">
            <h4>
              UK <br />
              Warehouse <br />
              <span className="country-icon">
                <img src={UKIcon} alt="" />
              </span>
            </h4>
            <ul>
              <li>ROAN CLOUD LTD</li>
              <li>
                Linc Prep, Unit 25 Cedar Parc Lincoln, Lincolnshire, LN6 4RR{" "}
                <br />
                United Kingdom
              </li>
            </ul>
          </div>
          <div className="contactus-element">
            <h4>
              CA <br />
              Warehouse <br />
              <span className="country-icon">
                <img src={CanadaIcon} alt="" />
              </span>
            </h4>
            <ul>
              <li>ROAN CLOUD LTD</li>
              <li>
                L69 Westmore Dr UNIT 3-4 # 2259 <br />
                M9V 3Y6 Etobicoke Canada
              </li>
            </ul>
          </div>
          <div className="contactus-element">
            <h4>
              USA <br />
              WAREHOUSE <br />
              <span className="country-icon">
                <img src={USIcon} alt="" />
              </span>
            </h4>
            <ul>
              <li>ROAN CLOUD LTD</li>
              <li>
                104 Lake Avenue South UNIT 7 # 1332
                <br />
                11767 Nesconset, New York
                <br />
                United States
              </li>
            </ul>
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
                <a href="/warehouses">Warehouses</a>
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
