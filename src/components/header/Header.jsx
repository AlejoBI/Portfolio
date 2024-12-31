import React from "react";

import { Link } from "react-router-dom";

import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
      <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
        <Navbar.Brand as={Link} to="/">
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {navigation.map((item) => (
              <Nav.Link key={item.name} as={Link} to={item.href}>
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Header;
