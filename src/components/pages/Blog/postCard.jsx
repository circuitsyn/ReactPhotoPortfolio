import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const postCard = (props) => {
    // console.log('props', props)
    let length = 150;
    let content = props.content;
  return (
    <div>        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.mainImage.fields.file.url} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <hr />
                <Card.Text>
                    <p>{content.substr(0, length) + '...'}</p>
                </Card.Text>
                <Button href={props.path} variant="primary">Read More</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default postCard;