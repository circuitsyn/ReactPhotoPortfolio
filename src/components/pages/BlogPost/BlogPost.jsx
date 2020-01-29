import React from "react";
import { connect } from 'react-redux';
import moment from 'moment';
import * as Markdown from 'react-markdown';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Loading from '../../Loader/Loader';

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

  // loading function to alternate between loading state and data present state if needed
  loading = () => {
    
    // conditional to test and see if data is available to fill posts
    if (this.props.blog.posts.length === 0) {

      return(<Loading />)
    }
    else {

      let time = "";
      time = this.props.blog.posts[this.props.blog.articleNum].sys.createdAt;
      time = moment(time).format('M.D.YY');
      time = <p id="latestTime" className="txt-shadow font-weight-bolder">{time}</p>

      return(
        <div>
        <Jumbotron className="text-center" id="blogJumbotron" style={{backgroundImage: `url(${this.props.blog.posts[this.props.blog.articleNum].fields.mainImage.fields.file.url})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}} fluid>
            <h1 className="blogTitle display-1">{this.props.blog.posts[this.props.blog.articleNum].fields.title}</h1>
            {time}

        </Jumbotron>
      </div>
      )
    }
  }
  
  render() {

    

    return (
      <div>
        {this.loading()}
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