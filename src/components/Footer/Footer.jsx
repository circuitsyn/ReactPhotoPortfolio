import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const Footer = () => {
  return (
    <div color="blue" className="font-small mt-3">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6">
          <a href="/" className="navbar-brand titleFont pb-0"><span className="titleOr">Jarred Sutton</span><span className="titleBl"> | Photography</span></a>

          <p className="small text-muted">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>

          </Col>
          <Col className="text-right" md="6">
            <h5 className="title">Navigation</h5>
            <ul>
              <li className="list-unstyled">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="list-unstyled">
                <a className="nav-link" href="/Blog">Blog</a>
              </li>
              <li className="list-unstyled">
                <a className="nav-link" href="/Copyright">Copyright</a>
              </li>
              <li className="list-unstyled">
                <a className="nav-link" href="/Contact">Contact</a>
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