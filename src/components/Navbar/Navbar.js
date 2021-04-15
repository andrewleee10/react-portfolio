import React, { useState } from 'react';
import {
  Collapse,
  Navbar as NavigationBar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <NavigationBar color="light" light expand="md">
        <NavbarBrand href="/react-portfolio/">Andrew Lee</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/react-portfolio/">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio/">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/">Contact</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <NavLink href="https://github.com/andrewleee10">Github</NavLink>
          </NavbarText>
          <NavbarText>
            <NavLink href="https://www.linkedin.com/in/andrew-lee-94910a161/">LinkedIn</NavLink>
          </NavbarText>
        </Collapse>
      </NavigationBar>
    </div>
  );
}

export default Navbar;