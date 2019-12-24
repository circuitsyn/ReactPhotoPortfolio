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
        <Col className="h-100">   
            <Card className="h-100" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.mainImage.fields.file.url} />
                <Card.Body>
                    <Card.Title className="mb-0 txt-shadow">{props.title}</Card.Title>
                    {time}
                    <hr />
                    {/* <Card.Text> */}
                        <Markdown source={content.substr(0, length) + '...'} />
                    {/* </Card.Text> */}
                    <Link to={`/blog${props.path}`} className="blogBtn btn-sm">
                        Read More!
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    </div>
  );
}

export default postCard;