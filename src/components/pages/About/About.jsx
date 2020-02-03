import React from 'react';
import "./aboutStyle.css";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Me from '../../../assets/images/jarredSutton.jpg';
import Teaching from '../../../assets/images/jarred-sutton-teaching.jpg';
import Travel from '../../../assets/images/jarred-sutton-travel.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import mainImgAbout from './Svalbard.jpg';

const About = () => {
    // Adding title page name for accessibility dynamically
    document.title = 'About Jarred Page';
    return (
        
        <div className="mt-5 mb-5">

            <Jumbotron className="text-center" id="blogJumbotron" style={{backgroundImage: `url(${mainImgAbout})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}} fluid>
            <h1 className="blogTitle display-1 p-3">A Little About Me..</h1>
            </Jumbotron>

            <Container>
                <Row className="mt-3 mb-3">
                    <Col>
                        <img className="aboutImage float-left mr-md-1 mr-lg-1 mr-xl-1 mb-md-1 mb-lg-1 mb-xl-1" src={Me} alt="Jarred Sutton" />
                        <h3 className="text-left titleFont mt-2">
                            A Little About Me..
                        </h3>
                        <p className="text-left">
                            Photography was a passion that was kicked off early in college. Not only for digital, but also for black and white film in the dark room as well. I learned photography early on as a generalist, but specialize in nature and wildlife. Being able to bring Natures' story of its flora and fauna to the public demonstrating its importance is incredibly important to me. My passion comes through when I am able to capture a single moment that will help others understand the true beauty and why it is worth protecting. For current and future generations.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-3 mb-3">
                    <Col>
                        <img className="aboutImage float-none float-sm-right float-md-right float-lg-right float-xl-right m-2" src={Travel} alt="Jarred Sutton" />
                        <p className="text-left mt-2">
                            "Oh, it's raining? That's okday, I don't melt." A quote that truly demonstrates how I approach my photography and travel. I often seek out remote locations and conditions where humans prefer not to roam. Combining patience and stamina to endure incliment weather to get the shot. Whether it is hiding at a safe distance to photograph a mother swan over her nest or it's -40F degrees in Grand Teton National Park under the stars at night. I refuse to let that stand in my way. Being prepared and respecting nature and the elements will yield huge gains. Travelling far and wide is exciting to me as there are an unlimited number of photos to capture. Angles or changes in light or fleeting moments. Many feel every photo has been taken, but I believe that infinity is a number that still exists in this world of digital photography. Only we can be the judge.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-3 mb-3">
                    <Col>
                        <img className="aboutImage float-none float-sm-left float-md-left float-lg-left float-xl-left m-2" src={Teaching} alt="Jarred Sutton" />
                        <p className="text-left mt-2">
                            I believe the reason that my passion of photography runs so strong is its combination of art and technical challenge. I have enjoyed computers, building and fixing them since my early teenage years and that has not changed over time. I greatly enjoy testing specifications, learning new techniques, building both technical and non-technical hacks for my gear, and taking up DIY challenges at every chance I am given. I am also a gear head and thoroughly enjoy testing new equipment; lenses, cameras, accessories, software, you name it! 
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
                <Row className="mt-4 mb-3">
                    <Col>
                        <h3 className="titleFont text-left">
                            Accolades:
                        </h3>
                        <ul className="text-left">
                            <li>
                                <span className="firstLetter">S</span>elected winner of Nikon's Kids Trip to Ancorage Alaska to learn with Wildlife Photographer Moose Peterson.
                            </li>
                            <li>
                                <span className="firstLetter">G</span>rant Funded Project with the Staten Island Arts Foundation.
                            </li>
                            <li>
                                <span className="firstLetter">P</span>ublished in the Rainforest Alliance publication.
                            </li>
                            <li>
                                <span className="firstLetter">P</span>hoto contest winner and published in the Staten Island Advance for the FreshKills Landfill Photo Contest.
                            </li>
                            <li>
                                <span className="firstLetter">D</span>esigned, built, and hosted 3D photoshere experiences for the FreshKills Landfill Website.
                            </li>
                            <li>
                                <span className="firstLetter">G</span>allery participation and presentation of work for The Cathedral Arts Festival at the 160 year old Grace Church Van Vorst, Jersey City, NJ.
                            </li>
                            <li>
                                <span className="firstLetter">P</span>hotography educator at <a className="errorLink" href=
                                "www.makerspace.nyc">MakerSpace.NYC</a>, The Staten Island GreenBelt, and Clay Pit Pond State Park, NY. 
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
      
      );
    }


  export default About;