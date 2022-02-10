import React from "react";
// Styles
import "./Header.css";

// React Router DOM
import { NavLink } from "react-router-dom";

//react bootstrap
import { Container, Navbar, Nav } from "react-bootstrap";

// Material-ui

const Header = () => {
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#fff" }}
        fixed="top"
        expand="lg"
        position="fixed"
        className="navbar navbar-expand-lg"
      >
        <Container fluid style={{ backgroundColor: "#fff" }}>
          <NavLink className="mainlogo" to="/">
            &#60;&nbsp;Crud
            <span style={{ color: "#15317E" }}>App &#62;</span>
          </NavLink>
          <Navbar.Toggle className="menuIcon" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "250px" }}
              navbarScroll
            >
              <NavLink to="/">
                Home&nbsp;<i className="fas fa-home"></i>
              </NavLink>
              &nbsp;
              <NavLink to="/add">
                Add User&nbsp;<i className="fas fa-user-plus"></i>
              </NavLink>
              &nbsp;
              <NavLink to="/all">
                All User&nbsp;<i className="fas fa-users"></i>
              </NavLink>
              &nbsp;&nbsp;
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Header;
