import React from 'react';
import Image404 from './404robot.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

const Error404 = (props) => {

  // Adding title page name for accessibility dynamically
  document.title = 'Error Page';

  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <h1>Error 404: Whoops!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={Image404} alt="404 robot" rounded />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Error404;