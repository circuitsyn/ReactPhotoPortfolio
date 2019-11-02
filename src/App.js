import React, { Component } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import NavBar from './components/NavBar/NavBar';
// import gallery components for main page
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
// import { render } from "react-dom";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Gallery photos={photos} />
      </div>
    );
  }
}

export default App;
