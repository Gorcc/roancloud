import React from "react";
import AboutImage from "../Styles/image2.webp";
import Header from "./Header";
import "../Styles/About.scss";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const AboutComponent = () => {
  return (
    <div>
      <Header />

      <div className="about-container">
        <div className="contact-title">
          <h1>
            <strong>About Us</strong>
          </h1>
        </div>

        <div className="about-wrap">
          <div className="about-left">
            <p>
              We provide a platform for our consumers to discover and purchase
              the greatest products at direct wholesale pricing. Suppliers can
              also use us to bring their products to market, grow their brands
              and audiences, and keep all of their sales. we are establishing
              special distribution agreement with hundreds of manufacturers
              around the world to bring their products to the market with high
              quailty and reasonable price and we are expanding our network
              every day to be leading trading company in the sectors we actively
              operating. We are both selling the manufacturers’ brands with
              special distribution agreement and with our private labeling in
              our physical and online stores.
            </p>
          </div>
          <div className="about-right">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default AboutComponent;
