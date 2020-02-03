import React from 'react';
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
        
        <div className="crWrapper">
            <Container id="CRContainer" className="p-4 p-md-5 p-lg-5 p-xl-5 mt-5 mb-5">
                <Container className="innerCRContainer p-4 p-md-5 p-lg-5 p-xl-5">
                    <Row>
                        <Col>
                            <img className="float-left copyRImg mr-2 mb-1" src={CopyrightImg} alt="copyright" />
                            <h1 className="text-left titleFont">Copyright Info:</h1>
                            <p className="text-left">
                            In the litigious society that we live it is important to note how we view the art and creative work we create. With all of my photography and work I reserve all rights as the creator and photographer. I am more than happy to discuss usage, teaching/shooting rates, or sale of my work in various mediums. Please do feel free to reach out and drop me a message via my contact page or via social media. I will do my best to get back to you asap! Please do not download or use my images without my consent. As with all artists it takes a great amount of time, effort, and money to produce our work the way we do. Thank you so much for visiting and happy shooting!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container id="CRContainer" className="p-4 p-md-5 p-lg-5 p-xl-5 mt-5 mb-5">
                <Container className="innerCRContainer p-4 p-md-5 p-lg-5 p-xl-5">
                    <Row>
                        <Col>
                            <img className="float-left cRListImg mr-2 mb-1" src={CreditsImg} alt="credits" />
                            <h3 className="text-left titleFont mb-0">Credits:</h3>
                            <p className="text-left">
                            Credits for items not created by myself are also important and I wanted to make sure to give credit where credit is due. If anything is missing please reach out and <a className="errorLink" href="/contact">let me know</a>, thank you!
                            </p>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center text-left">
                        <Col sm={7} md={7} lg={7} xl={7}>
                            <ul className="cRUl">
                                <li className="cRLi">
                                    <strong>Copyright logo</strong> - Made by <a href="https://www.flaticon.com/authors/itim2101" title="itim2101">itim2101</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                                </li>
                                <li className="cRLi">
                                    <strong>Navigation camera logo</strong> - Made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                                </li>
                                <li className="cRLi">
                                    <strong>Credits logo</strong> - Made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                                </li>
                                <li className="cRLi">
                                    <strong>Aperture bullet logo</strong> - Made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                                </li>
                                <li className="cRLi">
                                    <strong>Copyright bullet logo</strong> - Made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                                </li>
                                <li className="cRLi">
                                    <strong>Error 404 robot logo</strong> - from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                                </li>
                                <li className="cRLi">
                                    <strong>Styled font</strong> - Feldicouth Norm
                                </li>
                            </ul>
                        </Col>
                    </Row>                   
                </Container>
            </Container>
        </div>
      
      );
    }


  export default Contact;