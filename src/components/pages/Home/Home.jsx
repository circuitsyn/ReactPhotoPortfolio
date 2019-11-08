import React from 'react';
import Gallery from "react-photo-gallery";
import { landingPhotos } from "./landingPhotos";

const Home = (props) => {

  return (
    <div>
      <Gallery onClick={props.onClick} photos={landingPhotos} />
    </div>
  );
}

export default Home;