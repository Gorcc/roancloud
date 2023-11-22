import React from "react";
import Header from "../Components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "../Components/ContactUs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import "../Styles/Warehouses.scss";

const Warehouses = () => {
  const cardData = [
    {
      title: "Head Office",
      text: "ROAN CLOUD LTD\nRegistration Number: 15098813 \nPhone Number:  +44 7362049620\n E-mail detail : info@roanclouds.com \n Full & invoice address: Unit 1c3-55,4 Raven Road,E18 1HB,London,United Kingdom ",
    },
    {
      title: "UK WAREHOUSE",
      text: "ROAN CLOUD LTD\nLinc Prep, Unit 25 Cedar Parc\nLincoln, Lincolnshire, LN6 4RR\nUnited Kingdom  ",
    },
    {
      title: "USA WAREHOUSE",
      text: "ROAN CLOUD LTD\n104 Lake Avenue South UNIT 7 # 1332\n11767 Nesconset, New York\nUnited States",
    },
    {
      title: "CANADA WAREHOUSE",
      text: "ROAN CLOUD LTD\n69 Westmore Dr UNIT 3-4 # 2259\nM9V 3Y6 Etobicoke Canada\nCanada",
    },
  ];
  return (
    <>
      <Header />
      <div className="cards-container">
        <div className="contact-title">
          <h1>
            <strong>Warehouses</strong>
          </h1>
        </div>

        <Row xs={1} md={2} className="g-4">
          {cardData.map((card, idx) => (
            <Col key={idx}>
              <Card className="card-width">
                
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>
                    {card.text.split("\n").map((line, lineIdx) => (
                      <React.Fragment key={lineIdx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="warehouses-container"></div>
      </div>
      <ContactUs></ContactUs>
    </>
  );
};

export default Warehouses;
