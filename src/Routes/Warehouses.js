import React from "react";
import Header from "../Components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "../Components/ContactUs";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../Styles/Warehouses.scss";
import globalwarehouse from "../Styles/globalwarehouse 1.svg"
import sellerfufillment from "../Styles/sellerfufillment.svg"

const Warehouses = () => {
  return (
    <>
    <Header />
    <div className="cards-container">
      <div className="contact-title">
        <h1>
          <strong>Warehouses</strong>
        </h1>
      </div>
     
      <CardGroup className="mb-5 " >
        <Card>
          <Card.Img variant="top" className="p-5"src={globalwarehouse} />
          <Card.Body>
            <Card.Title>Global Warehouse OK.</Card.Title>
            <Card.Text>
              info@global-warehouse.co.uk <br />
              <a href="https://global-warehouse.co.uk/" target="_blank">
                https://global-warehouse.co.uk/{" "}
              </a>
              <br /> Whats App : +44 7464 202 963
              <br /> Global Warehouse -Unit 60 Park Royal Works RETURNS GW 485,
              21 Park Royal Road, London NW10 7LQ
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" className="p-5" src={sellerfufillment} />
          <Card.Body>
            <Card.Title>Sellerfulfilment Warehouse OK</Card.Title>
            <Card.Text>
              Phone +18722804258
              <br />
              <a href="https://sellerfulfilment.com/" target="_blank">
                https://sellerfulfilment.com/
              </a>
              <br />
              5658 W FILLMORE ST#FBA920 CHICAGO
              <br />
              Zip :60644-5503 State: Illinois
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <div className="warehouses-container"></div>

     
    </div>
     <ContactUs></ContactUs>
     </>
  );
};

export default Warehouses;
