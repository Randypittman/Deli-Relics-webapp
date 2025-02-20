import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-dark bg-dark shadow">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white">Deli Relics</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active text-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active text-white">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active text-white">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Navbar;