import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Blog from './components/pages/Blog/Blog';
import Birds from './components/pages/Birds/Birds';
import Cetaceans from './components/pages/Cetaceans/Cetaceans';
import Contact from './components/pages/Contact/Contact'
import Flowers from './components/pages/Flowers/Flowers';
import Insects from './components/pages/Insects/Insects';
import Landscapes from './components/pages/Landscapes/Landscapes';
import NightSky from './components/pages/Night-Sky/Night-Sky';
import Panoramas from './components/pages/Panoramas/Panoramas';
import Reptiles from './components/pages/Reptiles/Reptiles';
import SeaLife from './components/pages/SeaLife/SeaLife';
import Travel from './components/pages/Travel/Travel';
import Ungulates from './components/pages/Ungulates/Ungulates';
import WaterFeatures from './components/pages/Water-Features/Water-Features';
import Winter from './components/pages/Winter/Winter';
import './App.css';

class App extends Component {
  // capture all image components to add fade in ability on load for transition on hover
  componentDidMount() {
    const img = document.querySelector('img');
    img.onload = () => {
      img.classList.add('fade-in');
    }
  }
  // function to detect gallery click and redirect to gallery
  onPickClick = e => {
    this.props.history.push('/'+ e.target.alt);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="wrapper">
        <Switch>
          <Route exact path="/"render={() => 
								<Home onClick={this.onPickClick}					
								/>} />
          <Route exact path="/About"render={() => 
								<About 
								/>} />
          <Route exact path="/Blog"render={() => 
								<Blog 
								/>} />
          <Route exact path="/Birds"render={() => 
								<Birds 
								/>} />
          <Route exact path="/Cetaceans"render={() => 
								<Cetaceans 
								/>} />
          <Route exact path="/Contact"render={() => 
								<Contact 
								/>} />
          <Route exact path="/Flowers"render={() => 
								<Flowers 
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
          <Route exact path="/Panoramas"render={() => 
								<Panoramas 
								/>} />
          <Route exact path="/Reptiles"render={() => 
								<Reptiles 
								/>} />
          <Route exact path="/SeaLife"render={() => 
								<SeaLife 
								/>} />
          <Route exact path="/Travel"render={() => 
								<Travel 
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
        <Footer />
      </div>
    );
  }
}

export default withRouter (App)
