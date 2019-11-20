import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const postCard = (props) => {
    console.log('props', props)
  return (
    <div>        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.mainImage.fields.file.url} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {/* {props.content} */}
                </Card.Text>
                <Button href={props.path} variant="primary">Read More..</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default postCard;