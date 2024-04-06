import React from 'react';
import slider1 from '../images/slider1.mp4';
import slider2 from '../images/Slider2.jpeg';
import slider3 from '../images/slider3.jpeg';

function Slider() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <ol className="carousel-indicators h-3">
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <video className="d-block w-100 h-5" autoPlay loop muted>
            <source src={slider1} type="video/mp4" />
          </video>
          <div className="carousel-caption d-none d-md-block">
            <h5 className="h5 text-xl">WELCOME TO DELI RELICS</h5>
            <p className="p text-lg text-dark">OUR UPCOMING ACTIVITIES ARE RIGHT A HEAD.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slider2} className="d-block w-100 h-5" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="h5 text-xl">STAND A CHANCE TO PLAY A RAFFLE AND WIN A PRIZE FOR YOURSELF</h5>
            <p className="p text-lg text-dark">OUR UPCOMING ACTIVITIES ARE RIGHT A HEAD.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slider3} className="d-block w-100 h-5" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="h5 text-xl">OFFER JOB OPPORTUNITY FOR US AS WE DISPLAY OUR CLASSIC</h5>
            <p className="p text-lg text-dark">WE'VE SPAYERS,MECHANICS,PARTS DEALERS AND ETC.</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Slider;