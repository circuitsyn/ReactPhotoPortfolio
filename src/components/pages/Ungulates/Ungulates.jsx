import React from 'react';
import Gallery from "react-photo-gallery";
import { ungulatePhotos } from "./ungulatePhotos";

const Ungulates = (props) => {

  return (
    <div>
      <Gallery photos={ungulatePhotos} />
    </div>
  );
}

export default Ungulates;