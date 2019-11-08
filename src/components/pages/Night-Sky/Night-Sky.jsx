import React from 'react';
import Gallery from "react-photo-gallery";
import { nightSkyPhotos } from "./nightSkyPhotos";

const NightSky = (props) => {

  return (
    <div>
      <Gallery photos={nightSkyPhotos} />
    </div>
  );
}

export default NightSky;