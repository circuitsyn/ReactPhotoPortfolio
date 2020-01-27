import React from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
import loading from '../../../assets/images/loading.gif'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import * as Markdown from 'react-markdown';

const postLatest = (props) => {
    
    let cardChoice = "";
    let title = "";
    const length = 300;
    let content = "";
    let time = "";

    if (props.content === undefined) {
        cardChoice = <img className="text-center m-auto" src={loading} alt="loading" />
    }
    else {
        content = props.content;
        cardChoice = <img id="latestImg" className="p-0 cover" variant="bottom" src={props.url} alt="latest post" />;
        // pull and format time with moment.js
        title = <h3 className="mb-0 txt-shadow">{props.title}</h3>;
        time = props.time;
        time = moment(time).format('M.D.YY');
        time = <p className="small text-muted">{time}</p>
    }
    
    return (
        <div className="mt-5 ml-4 mr-4">     
            <Container className="text-left latestPostCard" fluid>
                <Row>
                    <Col className="p-0" xs={12} sm={3} md={3} lg={3} xl={3}>
                        {cardChoice}
                    </Col>
                    <Col className="ml-auto p-5 textWhiteHoverLatest" xs={12} sm={8} md={8} lg={8} xl={8}>
                        {title}
                        {time}
                        <Markdown className="mb-0 font-weight-bolder" source={content.substr(0, length) + '...'} />
                        <Link to={`/Blog${props.path}`} className="float-right m-1 blogBtn btn-sm">
                        Read More!
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default postLatest;