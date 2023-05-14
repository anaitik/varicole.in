import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Varicole</h4>
            <p>Varicole has been the leading service provider in terms of web, application, and chatbot development services.</p>
          </div>
          <div className="col-md-4">
            <h4>IT Services</h4>
            <ul className="list-unstyled">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Ui/Ux Design</li>
              <li>Hire dedicated resources</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contact Info</h4>
            <p>India<br />
            +91 9662425459<br />
            info.Varicole@gmail.com</p>
            <p>Opening Hours: 10:00 - 18:00</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
