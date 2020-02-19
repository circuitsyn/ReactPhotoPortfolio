import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

// Nav and footer
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Blog from './components/pages/Blog/Blog';
import BlogPost from './components/pages/BlogPost/BlogPost';
import Birds from './components/pages/Birds/Birds';
import Contact from './components/pages/Contact/Contact';
import Copyright from './components/pages/Copyright/Copyright';
import PlantLife from './components/pages/PlantLife/PlantLife';
import Insects from './components/pages/Insects/Insects';
import Landscapes from './components/pages/Landscapes/Landscapes';
import Panoramas from './components/pages/Panoramas/Panoramas';
import Reptiles from './components/pages/Reptiles/Reptiles';
import SeaLife from './components/pages/SeaLife/SeaLife';
import Travel from './components/pages/Travel/Travel';
import Mammals from './components/pages/Mammals/mammals';
import WaterFeatures from './components/pages/Water-Features/Water-Features';
import Error404 from './components/pages/Error404/Error404';
import $ from 'jquery';
import './App.css';

class App extends Component {

      constructor(props) {
	      super(props)

		this.state = {
            }

      }

      // capture all image components to add fade in ability on load for transition on hover
      componentDidMount() {
            const img = document.querySelector('img');
            img.onload = () => {
                  img.classList.add('fade-in');
            }

            // confine touch listener to just be added when visiting home page
            let location = this.props.location.pathname;

            if(location === "/") {
                  // capture target on touch to trigger gallery overlay
                  let landingGallery = document.getElementById("landingGallery");
                  landingGallery.addEventListener('touchstart', function(e){
                        var touchobj = e.changedTouches[0];
                        // Detection to make sure only overlay is added to highlighted img tag type
                        if (touchobj.target.nodeName === 'IMG') {
                              touchobj.target.classList.add('fade-in');
                              let overlayURL = $(e.target).attr('overlay');
                              touchobj.target.src = overlayURL;      
                        }
                  }, false)
                  }
      }

      // function to detect gallery click and redirect to gallery for HOME component
      onPickClick = e => {
            let location = e.target.alt;
            this.props.history.push('/'+ location);
            this.props.changePageTitle(e, location);
      }

			// function to process link location and then trigget change for page title
			locCaptureAndTrigger = e => {
				let baseLen = e.target.origin.length;
				// add 1 to baseLen to remove / on slice method
				baseLen++ 
				let href = e.target.href;
				let location = href.slice(baseLen);
				// test for "" so that we can set home to be "Photography" for nav
				if (location === "") {
					location = "Photography";
				}
				this.props.changePageTitle(e, location);
				// reset baseLen
				baseLen = 0;
			}

      render() {
            return (
                  <div className="App">
                  <NavBar titleCapture={this.props.changePageTitleNav} linkCapture={this.locCaptureAndTrigger} />
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
                        <Route path="/Contact" render={() => 
                              <Contact
                              />} />
                        <Route path="/Copyright" render={() => 
                              <Copyright 
                              />} />
                        <Route path="/PlantLife" render={() => 
                              <PlantLife 
                              />} />
                        <Route path="/Insects" render={() => 
                              <Insects 
                              />} />
                        <Route path="/Landscapes" render={() => 
                              <Landscapes 
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
                        <Route path="/Mammals" render={() => 
                              <Mammals 
                              />} />
                        <Route path="/Water-Features" render={() => 
                              <WaterFeatures 
                              />} />
                        {/* Reusable blog post page */}
                        <Route path="/Blog/:blogPost" render={() => 
                              <BlogPost numberKey={this.state.postKey}
                              />} />
                        
                        {/* Error Catch */}
                        <Route path="*" component={Error404} />
                        </Switch>
                  </div>
                  <Footer brandFooterCapture={this.props.changePageTitleNav} linkCapture={this.locCaptureAndTrigger}/>
                  </div>
            );
      }
}

const mapDispatchToProps = dispatch => {
      return {
      	changePageTitle: (e, location) => {
            if (location.length > 0) {
                  dispatch({type: "CHANGE_PAGE_TITLE", navTitle: location}) 
            }
            else {
                  console.log('ERROR: Location clicked is blank, check your original click path and make sure it is a proper destination.');
            }  
        },
				changePageTitleNav: () => {
					dispatch({type: "CHANGE_PAGE_TITLE", navTitle: "Photography"})
				}
      };
    }
    
    function mapStateToProps(state, ownProps) {
      return {
        blog: state.blog
      }
    }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
