import React, { useState } from 'react';
import navIcon from '../../assets/Icons/camera.png';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      {/* <Navbar className="navBar" color="faded" light>
        <NavbarBrand href="/" className="mr-auto titleFont"><span className="titleOr">Jarred Sutton</span> | Photography</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar> */}


      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-light p-4">
            <h5 className="text-white h4">Blog</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-light bg-light pb-0 pt-1">
          <a href="/" class="navbar-brand titleFont"><span className="titleOr">Jarred Sutton</span> | Photography</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <img className="navIcon" src={navIcon} alt="camera" />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;