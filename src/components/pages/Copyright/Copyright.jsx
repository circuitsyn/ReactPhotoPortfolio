import React from 'react';
import Button from 'react-bootstrap/Button';
import "./copyrightStyle.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CopyrightImg from './copyrightImg.png'
import CreditsImg from './credits.png'

const Contact = () => {
          // Adding title page name for accessibility dynamically
          document.title = 'Copyright Page';
  
      return (
        
        <div>
            <Container className="mt-5 mb-5">
                <Row>
                    <Col>
                        <img className="float-left copyRImg mr-2 mb-2" src={CopyrightImg} alt="copyright" />
                        <h1 className="text-left titleFont">Copyright Info:</h1>
                        <p className="text-left">
                        In the litigious society that we live it is important to note how we view the art and creative work we create. With all of my photography and work I reserve all rights as the creator and photographer. I am more than happy to discuss usage, teaching/shooting rates, or sale of my work in various mediums. Please do feel free to reach out and drop me a message via my contact page or via social media. I will do my best to get back to you asap! Please do not download or use my images without my consent. As with all artists it takes a great amount of time, effort, and money to produce our work the way we do. Thank you so much for visiting and happy shooting!
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5">
                <Row>
                    <Col>
                        <img className="float-left copyRImg mr-2 mb-2" src={CreditsImg} alt="credits" />
                        <h3 className="text-left titleFont mb-0">Credits:</h3>
                        <p className="text-left small text-muted">
                        Credits for items not created by myself are also important and i wanted to make sur eto give credit where credit is due. If anything is missing please reach out and let me know, thank you!
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12} xl={12}>
                        <ul className="d-flex align-items-center text-left flex-column">
                            <li>
                                <strong>Copyright logo</strong> - <div>Made by <a href="https://www.flaticon.com/authors/itim2101" title="itim2101">itim2101</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                            </li>
                            <li>
                                <strong>Navigation camera logo</strong> - <div>Made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                            </li>
                            <li>
                                <strong>Credits logo</strong> - <div>Made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                            </li>
                            <li>
                                Font - 
                            </li>
                        </ul>
                    </Col>
                </Row>                   
            </Container>
            
        </div>
      
      );
    }


  export default Contact;