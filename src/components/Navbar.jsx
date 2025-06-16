import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavbarMenu = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>Cinemateca</NavbarBrand>
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">Principal</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/peliculas">Películas</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavbarMenu;
