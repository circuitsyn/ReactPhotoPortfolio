import React from "react";
import { connect } from 'react-redux';

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
        <h1>Clicked Post!</h1>
        <h1>hey there</h1>
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