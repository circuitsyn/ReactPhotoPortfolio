import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { winterPhotos } from "./winterPhotos";

const Winter = (props) => {

  // Adding title page name for accessibility dynamically
  document.title = 'Winter Gallery Page';

  // functions to facilitate lightbox
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const trigOver = () => {
    console.log('!entered the photo!');
    alert('testing)')
  };


  return (
    <div>
      <Gallery photos={winterPhotos} onClick={openLightbox} onMouseEnter={trigOver} />
      <ModalGateway>
      {viewerIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
            currentIndex={currentImage}
            views={winterPhotos.map(x => ({
              ...x,
              srcset: x.srcSet,
              caption: x.title
            }))}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  </div>
  );
}

export default Winter;