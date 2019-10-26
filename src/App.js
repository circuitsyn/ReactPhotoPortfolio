import React, { Component } from 'react';
// import logo from './logo.svg';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { render } from "react-dom";
import './App.css';
// import gallery components for main page


class App extends Component {
  render() {
    return (
      <div className="App">
        <Gallery photos={photos} />
      </div>
    );
  }
}

export default App;
