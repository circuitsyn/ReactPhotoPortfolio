import React from 'react';
import Gallery from "react-photo-gallery";
import { landingPhotos } from "./landingPhotos";
import './style.css';
import $ from 'jquery';



const Home = (props) => {
  // Adding title page name for accessibility dynamically
  document.title = 'Jarred Sutton Photography';
  
  const handleHover = (e) => {

    // Detection to make sure only overlay is added to highlighted img
    if (e.target.nodeName === 'IMG') {
      e.target.classList.add('fade-in');
      let overlayURL = $(e.target).attr('overlay');
      e.target.src = overlayURL;      
    }
  }

  return (
    <div>
      <div id="landingGallery" onMouseOver={handleHover}>
        <Gallery className="gallery" onClick={props.onClick} photos={landingPhotos} />
      </div>
    </div>
  );
}

export default Home;