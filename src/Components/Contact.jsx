import React from "react";
import "../Styles/Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleMapComponent from "../Components/GoogleMap";
import emailjs from "@emailjs/browser";
import {
  faMapLocation,
  faPhoneVolume,
  faEnvelopesBulk,
} from "@fortawesome/free-solid-svg-icons";

const ContactComponent = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        'service_ffqiujw',
        'template_ovafn2o',
        e.target,
        'FNsSt-veQ0gWAmhs3'
      );
  };

  return (
    <div>

      <div className="contact-container">
        <div className="contact-title">
          <h1>
            <strong>Contact</strong>
          </h1>
        </div>
        <div className="contact-div">
          <div className="contact-card">
            <FontAwesomeIcon
              size="2xl"
              icon={faMapLocation}
              style={{ color: "#cfcfcf" }}
            />
            <h2>Adress</h2>
            <p>
              LTD 4 Raven Road, Unit 1c3-55 London E18 1HB United
              Kingdom
            </p>
          </div>
          <div className="contact-card">
            <FontAwesomeIcon
              size="2xl"
              icon={faPhoneVolume}
              style={{ color: "#cfcfcf" }}
            />
            <h2>Telephone</h2>
            <p> United Kingdom: +44 736 2049620 </p>
            <p> USA: +1 917 7650830</p>
          </div>

          <div className="contact-card">
            <FontAwesomeIcon
              size="2xl"
              icon={faEnvelopesBulk}
              style={{ color: "#cfcfcf" }}
            />
            <h2>E-Mail</h2>
            <p>info@roanclouds.com</p>
          </div>
        </div>
        <div className="form-and-map">
          <div className="mail-form-div">
            <h1>Contact Us</h1>
            <p>Contact us to learn more about RoanCloud.</p>
            <form onSubmit={sendEmail}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label for="name">Name</label>

                    <input type="text" id="name" name="name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label for="mail">E-Mail</label>
                    <input type="email" id="mail" name="email_from" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="text" id="phone" name="phone_number" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label for="title">Subject</label>
                    <input type="text" id="title" name="subject_title" />
                  </div>
                </div>

                <div className="col-xs-12 col-md-12">
                  <div className="form-group">
                    <label for="comment">Message</label>
                    <textarea type="text" id="comment" name="mail_context" />
                  </div>
                </div>

                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactComponent;
