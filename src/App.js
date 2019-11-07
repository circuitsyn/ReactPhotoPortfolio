import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
// import gallery components for main page
import Gallery from "react-photo-gallery";
import { landingPhotos } from "./landingPhotos";
// import { render } from "react-dom";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Gallery photos={landingPhotos} />
      </div>
    );
  }
}

export default App;
