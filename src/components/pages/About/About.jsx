import React from 'react';
import "./aboutStyle.css";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Me from '../../../assets/images/jarredSutton.jpg';
import Teaching from '../../../assets/images/jarred-sutton-teaching.jpg';
import Travel from '../../../assets/images/jarred-sutton-travel.jpg'

const About = () => {
  
      return (
        
          <div className="">
            <Container>
                <Row>
                    <img className="aboutImage" src={Me} alt="Jarred Sutton" />
                    <h3 className="titleFont">
                        A Little About Me..
                    </h3>
                    <p>
                        Photography was a passion that was kicked off early in college. Not only for digital, but also for black and white film in the dark room as well. I learned photography early on as a generalist, but specialize in nature and wildlife. Being able to bring Natures' story of it's flora and fauna to the public demonstrating its importance is incredibly important to me. My passion comes through when I am able to capture a single moment that will help others understand the true beauty and why it is worth protecting. For current and future generations.
                    </p>
                </Row>
                <Row>
                    <p>
                        "Oh it's raining? That's okday, I don't melt." A quote that truly demonstrates how I approach my photography and travel. I often seek out remote locations and conditions where humans prefer not to roam. Combining patience and stamina to endure incliment weather to get the shot. Whether it is hiding at a safe distance to photograph a mother swan over her nest or it's -40F degrees in Grand Teton National Park under the stars at night. I refuse to let that stand in my way. Being prepared and respecting nature and the elements will yield huge gains. Travelling far and wide is exciting to me as there are an unlimited amount of photos to capture. Angles or changes in light or fleeting moments. Many feel every photos has been taken, but I believe that infinity is a number that still exists in this world of digital photography. Only we can be the judge.
                    </p>
                    <img className="aboutImage" src={Travel} alt="Jarred Sutton" />
                </Row>
                <Row>
                    <img className="aboutImage" src={Teaching} alt="Jarred Sutton" />
                    <p>
                        I believe the reason that my passion of photography runs so strong is its combination of art and technical challenge. I have enjoyed computers, building and fixing them since my early teenage years and that has not changed over time. I greatly enjoy testing specifications, learning new techniques, building both technical and non-technical hacks for my gear, and taking up DIY challenges at every chance I am given. I am also a gear head and thoroughly enjoy testing new equipment; lenses, cameras, accessories, software, you name it! 
                    </p>
                </Row>
                <Row>
                    <Col>
                        <h3 className="titleFont">
                            Accolades:
                        </h3>
                        <ul className="text-left">
                            <li>
                                <span className="titleFont">S</span>elected winner of Nikon's Kids Trip to Ancorage Alaska to learn with Wildlife Photographer Moose Peterson.
                            </li>
                            <li>
                                <span className="titleFont">G</span>rant Funded Project with the Staten Island Arts Foundation.
                            </li>
                            <li>
                                <span className="titleFont">P</span>ublished in the Rainforest Alliance publication.
                            </li>
                            <li>
                                <span className="titleFont">P</span>hoto contest winner and published in the Staten Island Advance for the FreshKills Landfill Photo Contest.
                            </li>
                            <li>
                                <span className="titleFont">D</span>esigned, built, and hosted 3D photoshere experiences for the FreshKills Landfill Website.
                            </li>
                            <li>
                                <span className="titleFont">G</span>allery participation and presentation of work for The Cathedral Arts Festival at the 160 year old Grace Church Van Vorst, Jersey City, NJ.
                            </li>
                            <li>
                                <span className="titleFont">P</span>hotography educator at MakerSpace.nyc, The Staten Island GreenBelt, and Clay Pit Pond State Park, NY. 
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
          </div>
      
      );
    }


  export default About;