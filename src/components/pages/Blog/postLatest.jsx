import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import loading from '../../../assets/images/loading.gif'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const postLatest = (props) => {
    
    let cardChoice = "";
    let title = "";
    const length = 300;
    let content = "";

    if (props.content === undefined) {
        cardChoice = <img className="text-center m-auto" src={loading} alt="loading" />
    }
    else {
        content = props.content;
        cardChoice = <Card.Img className="img-fluid w-100" variant="bottom" src={props.url} />
        title = <h3>{props.title}</h3>
    }
    
    return (
        <div>     
            <Container className="text-left latestPostCard">
                <Row>
                    <Col xs={12} sm={3} md={3} lg={3} xl={3}>
                        {cardChoice}
                    </Col>
                    <Col xs={12} sm={9} md={9} lg={9} xl={9}>
                        {title}
                        <p>{content.substr(0, length) + '...'}</p>
                    </Col>
                </Row>
                <Row>
                    <Button className="ml-auto m-1" href={props.path} variant="primary">Read More!</Button>
                </Row>
            </Container>
        </div>
    );
}

export default postLatest;