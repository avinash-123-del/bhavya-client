import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="header-main bg-body-tertiary header-main header-c">
      <Container>
        <Link to="/" className="nav-link">
          <img src="/logo.jpg" alt="" height="50px" width="50px" style={{ borderRadius: "50%" }} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header-list">
            <Link to="/" exact className="nav-link" activeclassName="selected">
              Home
            </Link>
            <Link to="/products" className="nav-link" activeclassName="selected">
              Products
            </Link>
            <Link to="/about" className="nav-link" activeclassName="selected">
              About
            </Link>
            <Link to="/contact" className="nav-link" activeclassName="selected">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
