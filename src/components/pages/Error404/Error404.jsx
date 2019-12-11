import React from 'react';
import './styleError.css';
import Image404 from './404robot.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const Error404 = (props) => {

  // Adding title page name for accessibility dynamically
  document.title = 'Error Page';

  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <h1 id="errorTitle" className="m-1">Error 404: Whoops!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image id="img404" className="m-3" src={Image404} alt="404 robot" rounded />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        Looks like you reached a URL with no content. No worries! Click on my Jarred Sutton Photography Brand link in the top left to take you home! If this keeps happening please do drop me a line and <a className="errorLink" href="/contact">let me know</a>, thanks!
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Error404;