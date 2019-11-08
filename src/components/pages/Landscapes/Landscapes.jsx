import React from 'react';
import Gallery from "react-photo-gallery";
import { landscapePhotos } from "./landscapePhotos";

const Landscapes = (props) => {

  return (
    <div>
      <Gallery photos={landscapePhotos} />
    </div>
  );
}

export default Landscapes;