import React from 'react';
import Gallery from "react-photo-gallery";
import { landingPhotos } from "./landingPhotos";
import './style.css';

const Home = (props) => {

  const handleHover = (e) => {

    // Detection to make sur eonly overlay is added to highlighted img
    if (e.target.nodeName == 'IMG') {
      e.target.classList.add('overlay');
    }
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