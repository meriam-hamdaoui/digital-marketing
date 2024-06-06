import React from "react";
import "./navBar.css";
import trendy from "../../assets/img/trendy-logo-removebg.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import { navLinks } from "./navLinks";

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
            width={"7%"}
            height={"7%"}
            className="d-inline-block align-top img-fluid"
          />
          <span className="agency_name ms-3">TRENDY AGENCY</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 nav_menu"
            style={{ maxHeight: "6rem" }}
            navbarScroll
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                smooth
                to={`#${link.id}`}
                className="nav_link"
              >
                {link.name}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
