import React from "react";
import "./navBar.css";
import trendy from "../../assets/img/trendy-logo-removebg.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="navbar-custom navbar navbar-expand-lg navbar-light bg-light bg-body-tertiary"
    >
      <Container fluid className="navbar-container">
        <Navbar.Brand href="#acceuil" className="d-flex align-items-center">
          <img
            src={trendy}
            alt="trendy-logo"
            width={"50rem"}
            height={"50rem"}
            className="d-inline-block align-top img-fluid"
          />
          <span className="agency-name ms-3">TRENDY AGENCY</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 nav-menu"
            style={{ maxHeight: "8rem" }}
            navbarScroll
          >
            <Link smooth to="#acceuil" className="nav-link">
              Acceuil
            </Link>
            <Link smooth to="#about" className="nav-link">
              Qui Sommes-Nous?
            </Link>
            <Link smooth to="#services" className="nav-link">
              Nos Services
            </Link>
            <Link smooth to="#whyUs" className="nav-link">
              Pourquoi Nous?
            </Link>
            <Link smooth to="#packs" className="nav-link">
              Nos Packs
            </Link>
            <Link smooth to="#footer" className="nav-link">
              Contactez-nous
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
