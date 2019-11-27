import React from 'react';
import Button from 'react-bootstrap/Button';
import "./Contact.css";
import Panorama from "./panoramas.jpg";

const Contact = () => {
          // Adding title page name for accessibility dynamically
          document.title = 'Contact Page';
  
      return (
        
          <div className="container m-auto ContactBG">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                <form action="https://formspree.io/circuitsyn@gmail.com" method="POST" >

                  <div className="contactHeader mt-5 mb-5 text-shadow">
                    <h1 className="titleFont">Questions, Comments, Concerns? Send Me An E-mail!</h1>
                  </div>
                  <img className="w-100 contactImg" src={Panorama} alt="panorama" />
                  <hr className="contactHr mb-4"></hr>
                  <div className="row mt-4 text-left">
                    <div className="contactForm form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <label htmlFor="name">
                        <h3 className="titleFont mt-1">Name:</h3></label>
                      <input type="text" className="form-control inline contactInput" id="name" name="name" placeholder="Your Name" required maxLength="50" aria-required="true" />
                    </div>

                    <div className="contactForm form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <label htmlFor="email">
                        <h3 className="titleFont mt-1">Email:</h3></label>
                      <input type="email" className="form-control inline contactInput" id="email" name="email" placeholder="Optional, for a reply!" required maxLength="50" />  
                    </div>
                  </div>
                  <div className="contactForm form-group text-left">
                    <label htmlFor="name">
                      <h3 className="titleFont mt-1">Subject:</h3></label>
                    <input type="text" className="form-control inline contactInput" id="subject" name="subject" placeholder="Subject" maxLength="50" />  
                  </div>
              
                  <div className="contactForm form-group text-left">
                    <label htmlFor="name">
                      <h3 className="titleFont mt-1">Message:</h3></label>
                    <textarea className="form-control inline contactInput" type="textarea" name="message" id="message" placeholder="Your Message Here" maxLength="6000" rows="5" />
                  </div>
                    
                  <div className="contactForm form-group">
                    <input type="hidden" name="_next" value="http://allfor.life/" />  
                  </div>

                  <div className="buttonDiv">
                    <Button id="btnContactUs" type="submit" className="blogBtn float-right" size="sm">Send It!</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      
      );
    }


  export default Contact;