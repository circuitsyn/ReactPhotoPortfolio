import React from 'react';
import Gallery from "react-photo-gallery";
import { insectPhotos } from "./insectPhotos";

const Insects = (props) => {

  return (
    <div>
      <Gallery photos={insectPhotos} />
    </div>
  );
}

export default Insects;