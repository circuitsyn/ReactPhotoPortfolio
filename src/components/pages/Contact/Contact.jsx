import React from 'react';
import Button from 'react-bootstrap/Button';
import "./Contact.css";

const Contact = () => {
          // Adding title page name for accessibility dynamically
          document.title = 'Contact Page';
  
      return (
        
          <div className="container m-auto ContactBG">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                <form className="p-3" action="https://formspree.io/circuitsyn@gmail.com" method="POST" >

                  <div className="contactHeader pt-5 text-shadow">
                    <h2>Questions, Comments, Concerns? Send Me An E-mail!</h2>
                  </div>
                  <hr className="contactHr mb-4"></hr>
                  <div className="row mt-5">
                    <div className="contactForm form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <label htmlFor="name">
                        <h5>Name</h5></label>
                      <input type="text" className="form-control inline contactInput" id="name" name="name" placeholder="Your Name" required maxLength="50" aria-required="true" />
                    </div>

                    <div className="contactForm form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <label htmlFor="email">
                        <h5>Email</h5></label>
                      <input type="email" className="form-control inline contactInput" id="email" name="email" placeholder="Optional, for a reply!" required maxLength="50" />  
                    </div>
                  </div>
                  <div className="contactForm form-group">
                    <label htmlFor="name">
                      <h5>Subject</h5></label>
                    <input type="text" className="form-control inline contactInput" id="subject" name="subject" placeholder="Subject" maxLength="50" />  
                  </div>
              
                  <div className="contactForm form-group">
                    <label htmlFor="name">
                      <h5>Message</h5></label>
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