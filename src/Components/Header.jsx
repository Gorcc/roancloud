import React from 'react'
import Logo from "../Styles/logo.svg"
import "../Styles/Header.scss"
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = ({page}) => {
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground)
  }) 

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {

    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  return (
    <div className="header-container">
    <Navbar
      className={page === 'main' ? (navbar ? 'header-overlay navbar-active' : 'header-overlay') : 'header-overlay navbar-active'}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">
          <img className="logoImg" src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="/">Homepage</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/warehouses">Warehouses</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default Header