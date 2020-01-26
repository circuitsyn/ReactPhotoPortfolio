import React from 'react';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import * as Markdown from 'react-markdown';

const postCard = (props) => {
    let length = 150;
    let content = props.content;
    // pull and format time with moment.js
    let time = "";
    time = props.mainImage.sys.createdAt;
    time = moment(time).format('M.D.YY');
    time = <p className="small text-muted">{time}</p>
  return (
    <div className="mb-3">     
        <Col>   
            <Card className="cardOverstyle" 
            style={{ width: '18rem' },
            {backgroundImage: `url(${props.mainImage.fields.file.url})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
                {/* <Card.Img variant="top" src={props.mainImage.fields.file.url} /> */}
                <Card.Body className="textWhiteHover">
                    <Card.Title className="mb-0 txt-shadow">{props.title}</Card.Title>
                    {time}
                    <hr />
                    {/* content in markdown, produces <p> element with text */}
                    <Markdown className="cover" source={content.substr(0, length) + '...'} />
                    
                    <Link to={`/Blog${props.path}`} onClick={()=>{console.log('CLICKED')}} className="blogBtn btn-sm">
                        Read More!
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    </div>
  );
}

export default postCard;