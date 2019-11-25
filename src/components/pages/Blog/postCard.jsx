import React from 'react';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const postCard = (props) => {
    let length = 150;
    let content = props.content;
    // pull and format time with moment.js
    let time = "";
    time = props.mainImage.sys.createdAt;
    time = moment(time).format('M.D.YY');
    time = <p className="small text-muted">{time}</p>
  return (
    <div>     
        <Col>   
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.mainImage.fields.file.url} />
                <Card.Body>
                    <Card.Title className="mb-0">{props.title}</Card.Title>
                    {time}
                    <hr />
                    <Card.Text>
                        {content.substr(0, length) + '...'}
                    </Card.Text>
                    <Button className="blogBtn" href={props.path} variant="primary" size="sm">Read More!</Button>
                </Card.Body>
            </Card>
        </Col>
    </div>
  );
}

export default postCard;