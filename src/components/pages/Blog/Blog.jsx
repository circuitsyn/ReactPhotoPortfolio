import React from 'react';
import dotenv from "dotenv";
import * as contentful from 'contentful';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './blogStyle.css';
import Card from './postCard';
import Latest from './postLatest'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';

if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}

class Blog extends React.Component {
  state = {

  }

  render() {
    // Adding title page name for accessibility dynamically
    document.title = 'Blog Page';

    return (
        <div>
            <Jumbotron className="m-1 ml-4 mr-4" fluid>
                <h1 className="blogTitle display-1">Blog</h1>
            </Jumbotron>

            <Latest url={this.props.blog.posts[0].fields.mainImage.fields.file.url} title={this.props.blog.posts[0].fields.title} path={this.props.blog.posts[0].fields.path} content={this.props.blog.posts[0].fields.content} time={this.props.blog.posts[0].sys.createdAt} />

            <Container>
              <Row>
                <Col>
                  <h3 className="blogSubTitle display-3 mb-3 mt-3">
                    Recent Posts
                  </h3>
                </Col>
              </Row>
            </Container>

            <Container className="" fluid>
              <Row className="d-flex justify-content-center">
                { this.props.blog.posts.map(({fields}, i) =>
                <Card key={i} {...fields} />
              )}
              </Row>
            </Container>
        </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog
  }
}
export default connect(mapStateToProps)(Blog)