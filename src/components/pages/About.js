import React from 'react';
import Vmc from './inc/Vmc';


function About () {
  return(
    <div>
<section className="py-4 bg-info">
  <div className="container">
    <div className="row">
      <div className="">
        <h4>About us</h4>
      </div>
      <div className="col-md-8 my-auto">
        <h6 className="float-end">Home / About Us</h6>
      </div>
    </div>
  </div>
</section>

<section className="section  border-bottom">
  <div className="container">
    <h6 className="main-heading">Our Company</h6>
    <div className="underline"></div>
    <p>
    Deli relics is a classic car show that comes up Every April to November and it has always been great to have folks who comes around with thier classic cars to display and also help grant job OPPORTUNITIES to our bussines partnerships we been working with here.
    </p>
  </div>
  
</section>

<Vmc/>

</div>
);
}
export default About;