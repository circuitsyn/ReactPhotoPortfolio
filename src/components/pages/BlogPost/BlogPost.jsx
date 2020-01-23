import React from "react";

const BlogPost = (props) => {

  // Adding title page name for accessibility dynamically
  document.title = 'Jarred Sutton Photography';

  console.log('BlogPost props:', props)

  return (
    <div>
      <h1>Clicked Post!</h1>
      <h1>hey there</h1>
    </div>
  );
}

export default BlogPost;