import React from "react";
import Header from "../Components/Header";
import "../Styles/Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactComponent from "../Components/Contact";
import ContactUs from "../Components/ContactUs";

import {
  faMapLocation,
  faPhoneVolume,
  faEnvelopesBulk,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
    <Header></Header>
      <ContactComponent></ContactComponent>
      <ContactUs></ContactUs>
    </>
  );
};

export default Contact;
