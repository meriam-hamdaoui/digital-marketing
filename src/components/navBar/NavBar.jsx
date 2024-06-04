import React from "react";
import "./navBar.css";
import trendy from "../../assets/img/trendy-logo-removebg.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="navbar_custom navbar navbar-expand-lg navbar-light bg-light bg-body-tertiary"
    >
      <Container fluid className="navbar_container">
        <Navbar.Brand href="#acceuil" className="d-flex align-items-center">
          <img
            src={trendy}
            alt="trendy-logo"
            width={45}
            height={45}
            className="d-inline-block align-top img-fluid"
          />
          <span className="agency_name ms-3">TRENDY AGENCY</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 nav_menu"
            style={{ maxHeight: "8rem" }}
            navbarScroll
          >
            <Link smooth to="#acceuil" className="nav_link">
              Acceuil
            </Link>
            <Link smooth to="#about" className="nav_link">
              Qui Sommes-Nous?
            </Link>
            <Link smooth to="#services" className="nav_link">
              Nos Services
            </Link>
            <Link smooth to="#whyUs" className="nav_link">
              Pourquoi Nous?
            </Link>
            <Link smooth to="#packs" className="nav_link">
              Nos Packs
            </Link>
            <Link smooth to="#footer" className="nav_link">
              Contactez-nous
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
