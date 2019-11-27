import React from 'react';
import Button from 'react-bootstrap/Button';
import "./copyrightStyle.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CopyrightImg from './copyrightImg.png'

const Contact = () => {
          // Adding title page name for accessibility dynamically
          document.title = 'Copyright Page';
  
      return (
        
        <div>
            <Container className="m-auto">
                <Row>
                    <Col>
                        <img className="float-left copyRImg" src={CopyrightImg} alt="copyright" />
                        <p>
                        In the litigious society that we live it is important to note how we view the art and creative work we create. With all of my photography and work I reserve all rights as the creator and photographer. I am more than happy to discuss usage, teaching/shooting rates, or sale of my work in various mediums. Please do feel free to reach out and drop me a message via my contact page or via social media. I will do my best to get back to you asap! Please do not download or use my images without my consent. As with all artists it takes a great amount of time, effort, and money to produce our work the way we do. Thank you so much for visiting and happy shooting!
                        </p>
                    </Col>
                </Row>
            </Container>
            
        </div>
      
      );
    }


  export default Contact;