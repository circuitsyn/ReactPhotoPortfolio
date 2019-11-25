import React from 'react';
import dotenv from "dotenv";
import * as contentful from 'contentful';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './blogStyle.css';
import Card from './postCard';
import Latest from './postLatest'
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

  // API call to get content data
  client = contentful.createClient({
    space: process.env.REACT_APP_CONTENT_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENT_API_KEY
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  // get posts and push it to the state as well as the latest post
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items,
      latestUrl: response.items[0].fields.mainImage.fields.file.url,
      latestTitle: response.items[0].fields.title,
      latestPath: response.items[0].fields.path,
      latestContent: response.items[0].fields.content
    })
    console.log('response items', response.items)
    console.log('latestUrl-Blog',this.state.latestTitle)
  }

  render() {

    return (
        <div>
            <Jumbotron className="m-1" fluid>
                <h1 className="blogTitle">Blog</h1>
            </Jumbotron> 

            {/* <Container className="p-0 m-1">
              <Row className="m-auto"> */}
                <Latest url={this.state.latestUrl} title={this.state.latestTitle} path={this.state.latestPath} content={this.state.latestContent} />
              {/* </Row>
            </Container> */}

            <Container className="p-0 m-1">
              <Row className="m-auto">
                { this.state.posts.map(({fields}, i) =>
                <Card key={i} {...fields} />
              )}
              </Row>
            </Container>
        </div>
    )
  }
}

export default Blog