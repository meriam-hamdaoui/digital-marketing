import React from "react";
import "./navBar.css";
import trendy from "../../assets/img/trendy-logo-removebg.png";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="navbar-custom d-flex justify-content-center align-items-center"
    >
      <div className="navbar-container d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#acceuil" className="d-flex align-items-center">
          <img
            src={trendy}
            alt="trendy-logo"
            width={"50rem"}
            height={"50rem"}
            className="d-inline-block align-top"
          />
          <span className="agency-name ms-3">TRENDY AGENCY</span>
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
      </div>
    </Navbar>
  );
};

export default NavBar;
