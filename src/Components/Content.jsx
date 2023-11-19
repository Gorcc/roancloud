import React from "react";
import Logo from "../Styles/logo.svg";
import Carousel from "react-bootstrap/Carousel";
import "../Styles/Content.scss";
const Content = () => {
  return (
    <div className="content-container">
      <div className="content-left">
        <div className="content-welcome">
          <h5>
            {" "}
            <span>⬤</span>Welcome to Roan Cloud
          </h5>
          <div className="welcome-border"></div>
        </div>

        <Carousel slide className="content-carousel">
          <Carousel.Item>
            <h3>
              <strong> Wholesale </strong>
            </h3>
            <p>
              Wholesale is a pivotal aspect of our business, allowing us to buy
              products in large quantities at favorable prices. This empowers us
              to offer a wide range of goods to our customers while maintaining
              healthy profit margins.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>
              <strong>Good Prices</strong>
            </h3>
            <p>
              Our commitment to offering competitive prices ensures that our
              customers receive high-quality products at affordable rates. We
              strive to provide value without compromising on quality, making us
              a reliable choice for cost-effective solutions.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>
              <strong>Greatest Products</strong>
            </h3>
            <p>
              Our selection is curated to offer the finest quality items,
              sourced from trusted manufacturers and suppliers. We take pride in
              providing our customers with a range of exceptional products that
              meet the highest standards of excellence.
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="content-right">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Content;
