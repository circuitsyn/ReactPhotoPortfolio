import React from "react";
import { connect } from 'react-redux';
import moment from 'moment';
import * as Markdown from 'react-markdown';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
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
  }

  // loading function to alternate between loading state and data present state if needed
  loading = () => {
    
    // conditional to test and see if data is available to fill posts
    if ((this.props.blog.posts === undefined) || (this.props.blog.posts <= 0))  {

      return(<Loading />)
    }
    else {
      let key = this.props.blog.articleNum;
      // console.log('blogPost Key:', key)
      
      let content = this.props.blog.posts[key].fields.content;
      console.log('content', content)
      let time = "";
      time = this.props.blog.posts[key].sys.createdAt;
      time = moment(time).format('M.D.YY');
      time = <p id="latestTime" className="txt-shadow font-weight-bolder">{time}</p>

      return(
        <div>
          <Jumbotron className="text-center" id="blogJumbotron" style={{backgroundImage: `url(${this.props.blog.posts[key].fields.mainImage.fields.file.url})`, backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'}} fluid>
              <h1 className="blogTitle display-1">{this.props.blog.posts[key].fields.title}</h1>
              {time}

          </Jumbotron>

          <Container id="blogPostContainer" className="p-5">
            <Row>
                <Markdown className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center" source={content} />
            </Row>
          </Container>
          
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