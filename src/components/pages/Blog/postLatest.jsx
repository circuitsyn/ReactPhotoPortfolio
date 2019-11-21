import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const postLatest = (props) => {
    console.log('propsLatest', props)
    let cardChoice;

    if (props == 'undefined') {
        cardChoice = <p>loading</p>
        console.log('url', props)
    }
    else {
        cardChoice = <Card.Img variant="bottom" src={props.imageUrl} />
        console.log('url card', props)
    }
    
    return (
        <div>     

            {cardChoice}


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