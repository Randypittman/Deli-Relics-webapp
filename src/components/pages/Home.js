import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import Vmc from './inc/Vmc';
import Service1 from '../images/Service1.jpeg'
import Service2 from '../images/Service2.jpeg'
import Service3 from '../images/Service3.jpeg'

function Home() {
  return(
    <div>
      < Slider/>
<section className="section">
<div className="container">
  <div className="row">
    <div className="col-ml-12 text-center">
      <h3 className="main-heading">Our Company</h3>
      <div className="underline mx-auto"></div>
      <p className="text-xl">
        Deli relics is a classic car show that comes up Every April to November and it has always been great to have folks who comes around with thier classic cars to display and also help grant job OPPORTUNITIES to our bussines partnerships we been working with here.
    </p>
    <Link to="/about" className="btn btn-warning shadow">Read More</Link>
    </div>
  </div>
</div>
</section>

<Vmc/>

<section className="section bg-c-light border-top">
  <div className="container">
    <div className="row">
      <div className="col-md-12 mb-5 text-center">
      <h3 className="main-heading">Our services</h3>
      <div className="underline mx-auto"></div>
      </div>

      <div className="col-md-4">
        <div className="card shadow">
          <div className="card-body">
            <img src={Service1} className="w-100 border-bottom" alt="services"/>
            <h6>Car Sprayers</h6>
            <div className="underline"></div>
            <p >
              We Offer Car painting with classic looks
            </p>
            <Link to="/servives" className="btn btn-link">Read More</Link>
          </div>
        </div>
  </div>
  <div className="col-md-4">
        <div className="card shadow">
          <div className="card-body">
            <img src={Service2} className="w-100 border-bottom" alt="services"/>
            <h6>Mechanic Body Service</h6>
            <div className="underline"></div>
            <p >
              We Offer Mechanic to on your classic cars making them strong and Firm  with classic looks
            </p>
            <Link to="/servives" className="btn btn-link">Read More</Link>
          </div>
        </div>
  </div>

  <div className="col-md-4">
        <div className="card shadow">
          <div className="card-body">
            <img src={Service3} className="w-100 border-bottom" alt="services"/>
            <h6>Car Parts</h6>
            <div className="underline"></div>
            <p >
              We sell  Car painting , Parts , brakes and Etc.
            </p>
            <Link to="/servives" className="btn btn-link">Read More</Link>
          </div>
        </div>
  </div>

      
      </div>

    </div>

</section>


</div>
);
}
export default Home;