import React from 'react';
import Gallery from "react-photo-gallery";
import { birdsPhotos } from "./birdsPhotos";

const Birds = (props) => {

  return (
    <div>
      <Gallery photos={birdsPhotos} />
    </div>
  );
}

export default Birds;