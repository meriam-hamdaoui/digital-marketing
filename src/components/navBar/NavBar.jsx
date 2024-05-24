import React from "react";
import "./navBar.css";
import trendy from "../../assets/img/trendy-logo.jpg";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#acceuil" className="d-flex align-items-center">
          <img
            src={trendy}
            alt="trendy-logo"
            width={50}
            height={50}
            className="d-inline-block align-top"
          />
          <span className="trendy-agency-font ms-2">Trendy Agency</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-menu ms-auto">
            <Link smooth to="#acceuil" className="nav-link">
              Acceuil
            </Link>
            <Link smooth to="#about" className="nav-link">
              Qui Somme-Nous?
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
