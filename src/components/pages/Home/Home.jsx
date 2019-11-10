import React from 'react';
import Gallery from "react-photo-gallery";
import { landingPhotos } from "./landingPhotos";

const Home = (props) => {

  const handleHover = (e) => {
    console.log('It worked!');
    console.log('target: ', e.target)
  }

  return (
    <div>
      <div onMouseOver={handleHover}>
        <Gallery onClick={props.onClick} photos={landingPhotos} />
      </div>
    </div>
  );
}

export default Home;