import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const Footer = () => {
  return (
    <div className="font-small mt-3">
      <Container>
        <hr />
      </Container>
      
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6">
          <a href="/" className="navbar-brand navTitleFont pb-0"><span className="titleOr">Jarred Sutton</span><span className="titleBl"> | Photography</span></a>

          <p className="small text-muted">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>

          </Col>
          <Col className="text-right" md="6">
            <h5 className="title titleFont">Navigation</h5>
            <ul>
              <li className="list-unstyled">
                <a className={` ${window.location.pathname === '/' ? 'active footerLink nav-link txt-shadow' : 'inactive footerLink nav-link txt-shadow'} `} href="/">Home</a>
              </li>
              <li className="list-unstyled">
                <a className={` ${window.location.pathname === '/Blog' ? 'active footerLink nav-link txt-shadow' : 'inactive footerLink nav-link txt-shadow'} `} href="/Blog">Blog</a>
              </li>
              <li className="list-unstyled">
                <a className={` ${window.location.pathname === '/About' ? 'active footerLink nav-link txt-shadow' : 'inactive footerLink nav-link txt-shadow'} `} href="/About">About</a>
              </li>
              <li className="list-unstyled">
                <a className={` ${window.location.pathname === '/Copyright' ? 'active footerLink nav-link txt-shadow' : 'inactive footerLink nav-link txt-shadow'} `} href="/Copyright">Copyright</a>
              </li>
              <li className="list-unstyled">
                <a className={` ${window.location.pathname === '/Contact' ? 'active footerLink nav-link txt-shadow' : 'inactive footerLink nav-link txt-shadow'} `} href="/Contact">Contact</a>
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