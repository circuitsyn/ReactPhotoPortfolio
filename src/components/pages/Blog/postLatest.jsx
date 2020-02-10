import React from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import * as Markdown from 'react-markdown';

const postLatest = (props) => {
    
    let title = "";
    const length = 300;
    let content = "";
    let time = "";
    content = props.content;
    // pull and format time with moment.js
    title = <h3 className="mb-0 txt-shadow titleFont">{props.title}</h3>;
    time = props.time;
    time = moment(time).format('M.D.YY');
    time = <p className="small text-muted">{time}</p>
    
    return (
        <div className="mt-5">     
            <Container className="text-left latestPostCard" 
            style={{backgroundImage: `url(${props.url})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}}>
                <Row className="m-3 m-sm-0 m-md-0 m-lg-0 m-xl-0">
                    <Col className="p-4 p-sm-5 p-md-5 p-lg-5 p-xl-5 ml-auto textWhiteHoverLatest" xs={12} sm={8} md={8} lg={8} xl={8}>
                        {title}
                        {time}
                        <Markdown className="mb-0 font-weight-bolder" source={content.substr(0, length) + '...'} />
                        <Link to={`/Blog${props.path}`} onClick={props.grabKey} className="float-right m-1 blogBtn btn-sm">
                        Read More!
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default postLatest;