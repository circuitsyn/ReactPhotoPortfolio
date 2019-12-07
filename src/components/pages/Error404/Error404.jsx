import React from 'react';

const Error404 = (props) => {

  // Adding title page name for accessibility dynamically
  document.title = 'Error Page';

  return (
    <div>
      <h1>Error 404</h1>
    </div>
  );
}

export default Error404;