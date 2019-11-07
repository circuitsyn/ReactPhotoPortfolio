import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import Birds from './components/pages/Birds/Birds';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <Gallery photos={landingPhotos} /> */}
        <Switch>
          <Route exact path="/"render={() => 
								<Home 					
								/>} />
          <Route exact path="/Birds"render={() => 
								<Birds 
								/>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter (App)
