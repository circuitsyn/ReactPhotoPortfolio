import React from 'react';
import "./aboutStyle.css";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Me from '../../../assets/images/jarredSutton.jpg';
import Teaching from '../../../assets/images/jarred-sutton-teaching.jpg';
import Travel from '../../../assets/images/jarred-sutton-travel.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import mainImgAbout from './Svalbard.jpg';
import aperture from './aperture.png';

const About = () => {
    // Adding title page name for accessibility dynamically
    document.title = 'About Jarred Page';
    return (
        
        <div>

            <Jumbotron className="text-center" id="blogJumbotron" style={{backgroundImage: `url(${mainImgAbout})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}} fluid>
            <h1 className="blogTitle display-1 p-3">A Little About Me..</h1>
            </Jumbotron>

            <Container id="aboutOutterContainer1" className="p-4 p-md-5 p-lg-5 p-xl-5 mt-5 mb-4">
                <Container className="aboutInnerContainer p-4 p-md-5 p-lg-5 p-xl-5">
                    <Row className="">
                        <Col>
                            <img className="aboutImage float-left m-0 m-sm-0 m-md-0 m-lg-4 m-xl-4" src={Me} alt="Jarred Sutton" />
                        
                            <p className="text-left">
                                Photography was a passion that was kicked off early in college. Not only for digital, but also for black and white film in the dark room as well. I learned photography early on as a generalist, but specialize in nature and wildlife. Being able to bring Natures' story of its flora and fauna to the public demonstrating its importance is incredibly important to me. My passion comes through when I am able to capture a single moment that will help others understand the true beauty and why it is worth protecting. For current and future generations.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container>
                <Row>
                    <Col>
                    <Image className="m-3 apertureIcon" src={aperture} fluid />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                    <Image className="m-3 apertureIcon" src={aperture} fluid />
                    </Col>
                </Row>
            </Container>

            <Container id="aboutOutterContainer2" className="p-4 p-md-5 p-lg-5 p-xl-5 mt-4 mb-4">
                <Container className="aboutInnerContainer p-4 p-md-5 p-lg-5 p-xl-5">
                <Row className="">
                    <Col>
                        <img className="aboutImage float-none float-sm-right float-md-right float-lg-right float-xl-right m-0 m-sm-0 m-md-0 m-lg-4 m-xl-4" src={Travel} alt="Jarred Sutton" />
                        <p className="text-left mt-2">
                            "Oh, it's raining? That's okday, I don't melt." A quote that truly demonstrates how I approach my photography and travel. I often seek out remote locations and conditions where humans prefer not to roam. Combining patience and stamina to endure incliment weather to get the shot. Whether it is hiding at a safe distance to photograph a mother swan over her nest or it's -40F degrees in Grand Teton National Park under the stars at night. I refuse to let that stand in my way. Being prepared and respecting nature and the elements will yield huge gains. Travelling far and wide is exciting to me as there are an unlimited number of photos to capture. Angles or changes in light or fleeting moments. Many feel every photo has been taken, but I believe that infinity is a number that still exists in this world of digital photography. Only we can be the judge.
                        </p>
                    </Col>
                </Row>
                </Container>
            </Container>

            <Container>
                <Row>
                    <Col>
                    <Image className="m-3 apertureIcon" src={aperture} fluid />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                    <Image className="m-3 apertureIcon" src={aperture} fluid />
                    </Col>
                </Row>
            </Container>

            <Container id="aboutOutterContainer3" className="p-4 p-md-5 p-lg-5 p-xl-5 mt-4 mb-5">
                <Container className="aboutInnerContainer p-4 p-md-5 p-lg-5 p-xl-5">
                    <Row className="">
                        <Col>
                            <img className="aboutImage float-none float-sm-left float-md-left float-lg-left float-xl-left m-0 m-sm-0 m-md-0 m-lg-4 m-xl-4" src={Teaching} alt="Jarred Sutton" />
                            <p className="text-left mt-2">
                                I believe the reason that my passion of photography runs so strong is its combination of art and technical challenge. I have enjoyed computers, building and fixing them since my early teenage years and that has not changed over time. I greatly enjoy testing specifications, learning new techniques, building both technical and non-technical hacks for my gear, and taking up DIY challenges at every chance I am given. I am also a gear head and thoroughly enjoy testing new equipment; lenses, cameras, accessories, software, you name it! 
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container>
                <Row>
                    <Col>
                    <Image className="m-3 apertureIcon" src={aperture} fluid />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                    <Image className="m-3 apertureIcon" src={aperture} fluid />
                    </Col>
                </Row>
            </Container>

            <Container id="aboutOutterContainer4" className="p-4 p-md-5 p-lg-5 p-xl-5 mt-4 mb-5">
                <Container className="aboutInnerContainer p-4 p-md-5 p-lg-5 p-xl-5">
                    <Row className="mt-4 mb-3">
                        <Col>
                            <h2 className="titleFont text-left">
                                Accolades:
                            </h2>
                            <ul className="aboutUl text-left">
                                <li className="aboutLi">
                                    <span className="firstLetter">S</span>elected winner of Nikon's Kids Trip to Ancorage Alaska to learn with Wildlife Photographer Moose Peterson.
                                </li>
                                <li className="aboutLi">
                                    <span className="firstLetter">G</span>rant Funded Project with the Staten Island Arts Foundation.
                                </li>
                                <li className="aboutLi">
                                    <span className="firstLetter">P</span>ublished in the Rainforest Alliance publication.
                                </li>
                                <li className="aboutLi">
                                    <span className="firstLetter">P</span>hoto contest winner and published in the Staten Island Advance for the FreshKills Landfill Photo Contest.
                                </li>
                                <li className="aboutLi">
                                    <span className="firstLetter">D</span>esigned, built, and hosted 3D photoshere experiences for the FreshKills Landfill Website.
                                </li>
                                <li className="aboutLi">
                                    <span className="firstLetter">G</span>allery participation and presentation of work for The Cathedral Arts Festival at the 160 year old Grace Church Van Vorst, Jersey City, NJ.
                                </li>
                                <li className="aboutLi">
                                    <span className="firstLetter">P</span>hotography educator at <a className="errorLink" href=
                                    "www.makerspace.nyc">MakerSpace.NYC</a>, The Staten Island GreenBelt, and Clay Pit Pond State Park, NY. 
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
      
      );
    }


  export default About;