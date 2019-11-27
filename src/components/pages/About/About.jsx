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

                    </p>
                </Row>
                <Row>
                    <p>

                    </p>
                    <img className="aboutImage" src={Travel} alt="Jarred Sutton" />
                </Row>
                <Row>
                    <img className="aboutImage" src={Teaching} alt="Jarred Sutton" />
                    <p>

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