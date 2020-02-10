import React from 'react';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import * as Markdown from 'react-markdown';

const postCards = (props) => {

    let length = 150;
    let content = props.content;
    // pull and format time with moment.js
    let time = "";
    time = props.mainImage.sys.createdAt;
    time = moment(time).format('M.D.YY');
    time = <p className="small text-muted">{time}</p>
  return (   
        <Col className="mt-2 mb-2" xs={12} sm={6} md={6} lg={4} xl={4}>   
            <Card className="cardOverstyle h-100"
            style={{backgroundImage: `url(${props.mainImage.fields.file.url})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
                <Card.Body className="textWhiteHover">
                    <Card.Title className="mb-0 txt-shadow titleFont">{props.title}</Card.Title>
                    {time}
                    <hr />
                    {/* note: content in markdown, produces <p> element with text */}
                    <Markdown className="" source={content.substr(0, length) + '...'} />
                    <Link to={`/Blog${props.path}`} articlenum={props.index} onClick={props.grabKey} className="cardLink blogBtn btn-sm">
                        Read More!
                    </Link>
                </Card.Body>
            </Card>
        </Col>
  );
}

export default postCards;