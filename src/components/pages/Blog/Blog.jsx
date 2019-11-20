import React from 'react';
import dotenv from "dotenv";
import * as contentful from 'contentful';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './blogStyle.css';
import Card from './postCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}

class Blog extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: process.env.REACT_APP_CONTENT_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENT_API_KEY
  })

  

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  render() {
    return (
        <div>
            <Jumbotron className="m-1" fluid>
                <h1 className="blogTitle">Blog</h1>
            </Jumbotron>
            <Container className="p-0 m-1">
              <Row className="m-auto">
                { this.state.posts.map(({fields}, i) =>
                <Card key={i} {...fields} />
              )}
              </Row>
            </Container>
            { this.state.posts.map(({fields}, i) =>
            <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
            )}
            </div>
    )
  }
}

export default Blog