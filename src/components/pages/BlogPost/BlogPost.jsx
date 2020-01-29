import React from "react";
import { connect } from 'react-redux';
import Jumbotron from 'react-bootstrap/Jumbotron';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state= { 
      
    }
  }

  // Actions to perform when component mounts
  componentDidMount(props) {
    document.title = 'Jarred Sutton Photography';
    // Adding title page name for accessibility dynamically
    this.props.blog.alterArticleState();
  }


  render() {

    return (
      <div>
        <Jumbotron id="blogJumbotron" style={{backgroundImage: `url(${this.props.blog.posts[this.props.blog.articleNum].fields.mainImage.fields.file.url})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}} fluid>
            <h1 className="blogTitle display-1">{this.props.blog.posts[this.props.blog.articleNum].fields.title}</h1>
        </Jumbotron>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog
  }
}
export default connect(mapStateToProps)(BlogPost)