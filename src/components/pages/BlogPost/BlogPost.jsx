import React from "react";
import { connect } from 'react-redux';
import moment from 'moment';
import * as Markdown from 'react-markdown';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Loading from '../../Loader/Loader';
import Disqus from "disqus-react";
import "./BlogPostStyle.css"

const imagesWithoutPTags = (props) => {
  const element = props.children[0];
  return element.type === 'img' ? { ...element } : <p {...props} />;
};

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
          <h1 className="blogTitle display-1 p-3">{this.props.blog.posts[key].fields.title}</h1>
          {time}
          </Jumbotron>

          <Container id="blogPostContainer" className="p-4 p-md-5 p-lg-5 p-xl-5">
            <Container id="innerblogPostContainer" className="p-4 p-md-5 p-lg-5 p-xl-5">
              <Row>
                  <Markdown className="blogPostImgGrp col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center" source={content} escapeHtml={false}
                  renderers={{paragraph: imagesWithoutPTags}} />
              </Row>
            </Container>
          </Container>
          
        </div>
      )
    }
  }
  
  render() {

    // Disqus commenting engine configuration
    const disqusShortname = "your-site-shortname" //found in your Disqus.com dashboard
    const disqusConfig = {
      url: "http://localhost:3000", //this.props.pageUrl
      identifier: "article-id", //this.props.uniqueId
      title: "Title of Your Article" //this.props.title
    }

    return (
      <div>
        {this.loading()}
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
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