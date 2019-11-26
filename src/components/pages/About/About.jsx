import React from 'react';
import "./aboutStyle.css";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Me from '../../../assets/images/jarredSutton.jpg';
import Teaching from '../../../assets/images/jarred-sutton-teaching.jpg'

const About = () => {
  
      return (
        
          <div className="">
            <Container>
                <Row>
                    <img src={Me} alt="Jarred Sutton" />
                    <p>

                    </p>
                </Row>
                <Row>
                    <p>

                    </p>
                    <img src={Me} alt="Jarred Sutton" />
                </Row>
                <Row>
                    <img src={Me} alt="Jarred Sutton" />
                    <p>

                    </p>
                </Row>
                <Row>
                    <Col>
                        <h2>
                            Accolades:
                        </h2>
                        <ul>
                            <li>
                                Selected winner of Nikon's Kids Trip to Ancorage Alaska to learn with Wildlife Photographer Moose Peterson.
                            </li>
                            <li>
                                Grant Funded Project with the Staten Island Arts Foundation.
                            </li>
                            <li>
                                Published in the Rainforest Alliance publication.
                            </li>
                            <li>
                                Photo contest winner and published in the Staten Island Advance for the FreshKills Landfill Photo Contest.
                            </li>
                            <li>
                                Designed, built, and hosted 3D photoshere experiences for the FreshKills Landfill Website.
                            </li>
                            <li>
                                Gallery participation and presentation of work for The Cathedral Arts Festival at the 160 year old Grace Church Van Vorst, Jersey City, NJ.
                            </li>
                            <li>
                                Photography educator at MakerSpace.nyc, The Staten Island GreenBelt, and Clay Pit Pond State Park, NY. 
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
          </div>
      
      );
    }


  export default About;