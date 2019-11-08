import React from 'react';
import Gallery from "react-photo-gallery";
import { winterPhotos } from "./winterPhotos";

const Winter = (props) => {

  return (
    <div>
      <Gallery photos={winterPhotos} />
    </div>
  );
}

export default Winter;