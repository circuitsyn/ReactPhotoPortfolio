import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="font-small mt-3">
      <Container>
        <hr />
      </Container>
      
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6">
          <Link to={"/"} className="navbar-brand navTitleFont pb-0">
            <span className="titleOr">Jarred Sutton</span><span className="titleBl"> | Photography</span>
          </Link>   

          <p className="small text-muted">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>

          </Col>
          <Col className="text-right" md="6">
            <h3 className="title titleFont">Navigation</h3>
            <ul>
              <li className="list-unstyled">
                <Link to={"/"} className={` ${window.location.pathname === '/' ? 'active footerLink nav-link txt-shadow' : 'inactive footerLink nav-link txt-shadow'} `}>
                  Home
                </Link>   
              </li>
              <li className="list-unstyled">
                <Link to={"/Blog"} className={` ${window.location.pathname === '/Blog' ? 'active footerLink nav-link txt-shadow' : 'inactive footerLink nav-link txt-shadow'} `}>
                  Blog
                </Link> 
              </li>
              <li className="list-unstyled">
                <Link to={"/About"} className={` ${window.location.pathname === '/About' ? 'active footerLink nav-link txt-shadow' : 'inactive footerLink nav-link txt-shadow'} `}>
                  About
                </Link> 
              </li>
              <li className="list-unstyled">
                <Link to={"/Copyright"} className={` ${window.location.pathname === '/Copyright' ? 'active footerLink nav-link txt-shadow' : 'inactive footerLink nav-link txt-shadow'} `}>
                  Copyright
                </Link>
              </li>
              <li className="list-unstyled">
                <Link to={"/Contact"} className={` ${window.location.pathname === '/Contact' ? 'active footerLink nav-link txt-shadow' : 'inactive footerLink nav-link txt-shadow'} `}>
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      {/* <div className="footer text-center">
      </div> */}
      </div>
  );
}

export default Footer;