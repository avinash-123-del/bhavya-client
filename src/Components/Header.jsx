import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleCollapse = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="header-main bg-body-tertiary header-c" expanded={expanded}>
      <Container>
        <Link to="/" className="nav-link">
          <img src="/logo.jpg" alt="" height="50px" width="50px" style={{ borderRadius: "50%" }} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header-list" onClick={handleCollapse}>
            <Link to="/" exact className="nav-link" activeClassName="selected">
              Home
            </Link>
            <Link to="/products" className="nav-link" activeClassName="selected">
              Products
            </Link>
            <Link to="/about" className="nav-link" activeClassName="selected">
              About
            </Link>
            <Link to="/contact" className="nav-link" activeClassName="selected">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
