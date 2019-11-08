import React from 'react';
import Gallery from "react-photo-gallery";
import { cetaceanPhotos } from "./cetaceanPhotos";

const Cetaceans = (props) => {

  return (
    <div>
      <Gallery photos={cetaceanPhotos} />
    </div>
  );
}

export default Cetaceans;