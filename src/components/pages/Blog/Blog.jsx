import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './blogStyle.css';
import Card from './postCards';
// // import CardDeck from 'react-bootstrap/CardDeck'
import Latest from './postLatest'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import Loading from '../../Loader/Loader';
import $ from 'jquery';

// if (process.env.NODE_ENV !== 'production') {
// 	console.log('loading dev environments')
// 	require('dotenv').config()
// }

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state= { 
      
    }
  }

  // Actions to perform when component mounts
  componentDidMount(props) {
    // Adding title page name for accessibility dynamically
    // this.props.blog.alterArticleState();
  }

  // loading function to alternate between loading state and data present state if needed
  loading = () => {
    
    // conditional to test and see if data is available to fill posts
    if (this.props.blog.posts.length === 0) {

      return(<Loading />)
    }
    else {

      return(
      <div>
        <Jumbotron id="blogJumbotron" className="" fluid>
            <h1 className="blogTitle display-1">Blog</h1>
        </Jumbotron>

        <hr className="w-50"/>

        <Latest url={this.props.blog.posts[0].fields.mainImage.fields.file.url}
                title={this.props.blog.posts[0].fields.title}
                path={this.props.blog.posts[0].fields.path}
                content={this.props.blog.posts[0].fields.content}
                time={this.props.blog.posts[0].sys.createdAt} />

        <Container>
          <Row>
            <Col>
              <h3 className="blogSubTitle display-3 mb-0 mt-5">
                Recent Posts
              </h3>
              <hr className="mt-1 mb-4"/>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
                { this.props.blog.posts.map(({fields}, i) => <Card key={i} index={i} {...fields} grabKey={this.props.changeArticleState} />
                )}
          </Row>
        </Container>
      </div>
      )
    }
  }

  render() {
    // Adding title page name for accessibility dynamically
    document.title = 'Blog Page';

    return (
      <div>
        {this.loading()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeArticleState: (e) => {
      let updatedArticleNum = $(e.target).attr('articlenum');
      console.log('e.articleNum:', $(e.target).attr('articlenum'))
      dispatch({type: "CHANGE_ARTICLE_NUM", articleNum: updatedArticleNum})
    }
  };
}

function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Blog)