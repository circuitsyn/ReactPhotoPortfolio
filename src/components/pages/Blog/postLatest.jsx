import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import loading from '../../../assets/images/loading.gif'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const postLatest = (props) => {
    
    let cardChoice;
    let text;
    let title;

    console.log('card props', props)
    if (props == 'undefined') {
        cardChoice = <img className="text-center m-auto" src={loading} alt="loading" />
        console.log('propsLatest', props)
    }
    else {
        cardChoice = <Card.Img className="img-fluid w-100" variant="bottom" src={props.url} />
        title = <h1>{props.title}</h1>
        text = <p>{props.content}</p>
        console.log('url card', props);
    }
    
    return (
        <div>     
            <Container>
                <Row>
                    <Col>
                        {cardChoice}
                    </Col>
                    <Col>
                        {title}
                        {text}
                    </Col>
                </Row>
                <Row>
                    <Button href={props.path} variant="primary">Read More..</Button>
                </Row>
            </Container>
            
            


            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.mainImage.fields.file.url} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <hr />
                    <Card.Text>
                        {content.substr(0, length) + '...'}
                    </Card.Text>
                    <Button href={props.path} variant="primary">Read More..</Button>
                </Card.Body>
            </Card> */}
        </div>
    );
}

export default postLatest;