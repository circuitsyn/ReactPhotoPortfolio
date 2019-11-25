import React from 'react';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import loading from '../../../assets/images/loading.gif'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

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
        cardChoice = <img className="p-0 cover" variant="bottom" src={props.url} />;
        title = <h3 className="mb-0">{props.title}</h3>;
        time = props.time;
        time = moment(time).format('M.D.YY');
        time = <p className="small text-muted">{time}</p>
    }
    
    return (
        <div>     
            <Container className="text-left latestPostCard m-1" fluid>
                <Row>
                    <Col className="p-0" xs={12} sm={3} md={3} lg={3} xl={3}>
                        {cardChoice}
                    </Col>
                    <Col xs={12} sm={9} md={9} lg={9} xl={9}>
                        {title}
                        {time}
                        <p className="mb-0">{content.substr(0, length) + '...'}</p>
                        <Button className="float-right m-1 blogBtn" href={props.path} size="sm">Read More!</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default postLatest;