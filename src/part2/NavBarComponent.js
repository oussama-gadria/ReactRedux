import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
function NavBarComponent() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand to="/products">MyStore</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            to="/products"
            style={({ isActive }) => ({
              textDecoration: isActive && "underline",
            })}
          >
            products
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
