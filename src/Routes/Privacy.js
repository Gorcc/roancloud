import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Content from "../Components/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "../Components/ContactUs";
import "../Styles/base.css"
const Privacy = () => {
  return (
    <div>
      <Header/>
      <div className="privacy-container">
        <h1 className="text-center">Privacy Policy</h1>
      <span>
        Privacy Policy This Privacy Policy governs the manner in which PORTRAS
        LLC collects, uses, maintains, and discloses information collected from
        users (each, a “User”) of the https://portras.com/ website (“Site”).
        This privacy policy applies to the Site and all products and services
        offered by PORTRAS LLC. Personal identification information We may
        collect personal identification information from Users in a variety of
        ways, including, but not limited to when Users visit our site, register
        on the site place an order fill out a form response to a survey
        subscribe to the newsletter, and in connection with other activities,
        services, features or resources we make available on our Site. Users may
        be asked for, as appropriate, name, email address, mailing address,
        phone number, credit card information, social security number Users may,
        however, visit our Site anonymously. We will collect personal
        identification information from Users only if they voluntarily submit
        such information to us. Users can always refuse to supply personally
        identification information, except that it may prevent them from
        engaging in certain Site related activities. Non-personal identification
        information We may collect non-personal identification information about
        Users whenever they interact with our Site. Non-personal identification
        information may include the browser name, the type of computer, and
        technical information about Users means of connection to our Sites, such
        as the operating system and the Internet service providers utilized and
        other similar information. Web browser cookies Our Site may use
        “cookies” to enhance the User experience. User’s web browser places
        cookies on their hard drive for record-keeping purposes and sometimes to
        track information about them. Users may choose to set their web browser
        to refuse cookies or to alert you when cookies are being sent. If they
        do so, note that some parts of the Site may not function properly. How
        we use collected information PORTRAS LLC collects and uses Users
        personal information for the following purposes: To improve customer
        service Your information helps us to more effectively respond to your
        customer service requests and support needs. To personalize user
        experience We may use information in the aggregate to understand how our
        Users as a group use the services and resources provided on our Site. To
        improve our Site We continually strive to improve our website offerings
        based on the information and feedback we receive from you. To process
        transactions We may use the information Users provide about themselves
        when placing an order only to provide service to that order. We do not
        share this information with outside parties except to the extent
        necessary to provide the service. To send periodic emails The email
        address Users provide for order processing, will only be used to send
        them information and updates pertaining to their order. It may also be
        used to respond to their inquiries, and/or other requests or questions.
        If User decides to opt-in to our mailing list, they will receive emails
        that may include company news, updates, related product or service
        information, etc. If at any time the User would like to unsubscribe from
        receiving future emails, we include detailed unsubscribe instructions at
        the bottom of each email or the User may contact us via our Site. How we
        protect your information We adopt appropriate data collection, storage,
        and processing practices and security measures to protect against
        unauthorized access, alteration, disclosure, or destruction of your
        personal information, username, password, transaction information, and
        data stored on our Site. Sensitive and private data exchange between the
        Site and its Users happens over an SSL secured communication channel and
        is encrypted and protected with digital signatures. Changes to this
        privacy policy PORTRAS LLC has the discretion to update this privacy
        policy at any time. When we do, post a notification on the main page of
        our Site, revise the updated date at the bottom of this page, send you
        an email. We encourage Users to frequently check this page for any
        changes to stay informed about how we are helping to protect the
        personal information we collect. You acknowledge and agree that it is
        your responsibility to review this privacy policy periodically and
        become aware of modifications. Your acceptance of these terms By using
        this Site, you signify your acceptance of this policy and terms of
        service. If you do not agree to this policy, please do not use our Site.
        Your continued use of the Site following the posting of changes to this
        policy will be deemed your acceptance of those changes.
      </span>
      </div>
      
      <ContactUs></ContactUs>
    </div>
  );
};

export default Privacy;
