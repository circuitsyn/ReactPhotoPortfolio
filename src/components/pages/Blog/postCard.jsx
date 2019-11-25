import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const postCard = (props) => {
    // console.log('props', props)
    let length = 150;
    let content = props.content;
    // time = props.time;
    // time = moment(time).format('M.D.YY');
    // time = <p className="small text-muted">{time}</p>
  return (
    <div>     
        <Col>   
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.mainImage.fields.file.url} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <hr />
                    <Card.Text>
                        <p>{content.substr(0, length) + '...'}</p>
                    </Card.Text>
                    <Button className="blogBtn" href={props.path} variant="primary" size="sm">Read More!</Button>
                </Card.Body>
            </Card>
        </Col>
    </div>
  );
}

export default postCard;