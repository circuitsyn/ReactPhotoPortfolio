import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import Birds from './components/pages/Birds/Birds';
import Cetaceans from './components/pages/Cetaceans/Cetaceans';
import Insects from './components/pages/Insects/Insects';
import Landscapes from './components/pages/Landscapes/Landscapes';
import NightSky from './components/pages/Night-Sky/Night-Sky';
import Ungulates from './components/pages/Ungulates/Ungulates';
import WaterFeatures from './components/pages/Water-Features/Water-Features';
import Winter from './components/pages/Winter/Winter';
import './App.css';

class App extends Component {

  onPickClick = e => {
    alert(e.target.src)
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        
        <Switch>
          <Route exact path="/"render={() => 
								<Home onClick={this.onPickClick}					
								/>} />
          <Route exact path="/Birds"render={() => 
								<Birds 
								/>} />
          <Route exact path="/Cetaceans"render={() => 
								<Cetaceans 
								/>} />
          <Route exact path="/Insects"render={() => 
								<Insects 
								/>} />
          <Route exact path="/Landscapes"render={() => 
								<Landscapes 
								/>} />
          <Route exact path="/Night-Sky"render={() => 
								<NightSky 
								/>} />
          <Route exact path="/Ungulates"render={() => 
								<Ungulates 
								/>} />
          <Route exact path="/Water-Features"render={() => 
								<WaterFeatures 
								/>} />
          <Route exact path="/Winter"render={() => 
								<Winter 
								/>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter (App)
