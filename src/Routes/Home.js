import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Content from "../Components/Content";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from "../Components/ContactUs";
const Home = () => {


  return (
    <div>
      <Header page= "main" />
      <Hero></Hero>
      <Content></Content>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
