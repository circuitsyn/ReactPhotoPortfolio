import React from 'react';
import Gallery from "react-photo-gallery";
import { waterFeaturePhotos } from "./waterFeaturePhotos";

const WaterFeatures = (props) => {

  return (
    <div>
      <Gallery photos={waterFeaturePhotos} />
    </div>
  );
}

export default WaterFeatures;