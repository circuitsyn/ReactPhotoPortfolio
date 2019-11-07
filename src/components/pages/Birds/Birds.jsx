import React from 'react';
import Gallery from "react-photo-gallery";
import { photosBirds } from "./photosBirds";

const Birds = (props) => {

  return (
    <div>
      <Gallery photos={photosBirds} />
    </div>
  );
}

export default Birds;