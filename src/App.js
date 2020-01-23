import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Blog from './components/pages/Blog/Blog';
import BlogPost from './components/pages/BlogPost/BlogPost';
import Birds from './components/pages/Birds/Birds';
import Cetaceans from './components/pages/Cetaceans/Cetaceans';
import Contact from './components/pages/Contact/Contact';
import Copyright from './components/pages/Copyright/Copyright';
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
import Error404 from './components/pages/Error404/Error404';
import './App.css';

class App extends Component {

      constructor(props) {
	      super(props)

		this.state = {
                  postKey: 0
            }
      // this.readMoreClick = this.readMoreClick.bind(this);
      }

      // capture all image components to add fade in ability on load for transition on hover
      componentDidMount() {
            const img = document.querySelector('img');
            img.onload = () => {
                  img.classList.add('fade-in');
            }
      }

      // function to detect gallery click and redirect to gallery for HOME component
      onPickClick = e => {
            this.props.history.push('/'+ e.target.alt);
            console.log("I'm in; clicked!")
            console.log('event', e.target.alt)
      }

      // function to store key for clicked BLOG post and to advance page
      // **** 1- first build a state where you store the key number. Default it to the latest of 0. 
      // 2- then build a post page where it reads from that state with the key
      // 3- then build a wy and test a way to capture a key and then push it to the state held in app
      // 4- make sur ein both that you are still pushing to the custom path. Look in the Link area for the custom url build and just use that and push history ***** 
      // readMoreClick = () => {
      //       console.log('event');
      //       console.log('event data');
      //       // this.props.history.push('/Blog' + `${this.props.path}`);
            
      // }

      render() {
            return (
                  <div className="App">
                  <NavBar />
                  <div className="wrapper">
                  <Switch>
                        <Route exact path="/" render={() => 
                              <Home onClick={this.onPickClick}	
                              />} />
                        <Route path="/About" render={() => 
                              <About 
                              />} />
                        <Route exact path="/Blog" render={() => 
                              <Blog
                              />} />
                        <Route path="/Birds" render={() => 
                              <Birds 
                              />} />
                        <Route path="/Cetaceans" render={() => 
                              <Cetaceans 
                              />} />
                        <Route path="/Contact" render={() => 
                              <Contact 
                              />} />
                        <Route path="/Copyright" render={() => 
                              <Copyright 
                              />} />
                        <Route path="/Flowers" render={() => 
                              <Flowers 
                              />} />
                        <Route path="/Insects" render={() => 
                              <Insects 
                              />} />
                        <Route path="/Landscapes" render={() => 
                              <Landscapes 
                              />} />
                        <Route path="/Night-Sky" render={() => 
                              <NightSky 
                              />} />
                        <Route path="/Panoramas" render={() => 
                              <Panoramas 
                              />} />
                        <Route path="/Reptiles" render={() => 
                              <Reptiles 
                              />} />
                        <Route path="/SeaLife" render={() => 
                              <SeaLife 
                              />} />
                        <Route path="/Travel" render={() => 
                              <Travel 
                              />} />
                        <Route path="/Ungulates" render={() => 
                              <Ungulates 
                              />} />
                        <Route path="/Water-Features" render={() => 
                              <WaterFeatures 
                              />} />
                        <Route path="/Winter" render={() => 
                              <Winter 
                              />} />
                        {/* Reusable blog post page */}
                        <Route path="/Blog/:blogPost" component={BlogPost} />
                        
                        {/* Error Catch */}
                        <Route path="*" component={Error404} />
                        </Switch>
                  </div>
                  <Footer />
                  </div>
            );
      }
}

export default withRouter (App)
