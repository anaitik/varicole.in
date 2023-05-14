import React from 'react';
import './css/Header.css'; 
function Header() {
  return (
    <header>
        <div class ="noki">
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Varicole.in</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="./Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./ServicePage">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./ContactUsPage">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#quote">Get a Quote</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    </header>
  );
}

export default Header;
