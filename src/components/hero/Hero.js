import React from "react";
import "./Hero.css";
import large from "../../assets/large.svg"
import small from "../../assets/small.svg"


const Hero = () => {
  return (
    <div className="hero container-fluid d-flex justify-content-between">
      <div className="hero-texts col-lg-6">
        <h1 className="hero-header">
          Imagıne your<br/>home smart enough<span className="hero-header-span"> to take care</span> of itself
        </h1>
        <p className="hero-paragraph mt-3">
          Turn your home into a smarthome today with a simple & affordable
          upgrade. Discover the upgrade that automates home maintenance
        </p>
        <div className="btn-group mb-5 mt-3">
          <button type="button" class="btn  hero-get-started p-2">
            Get Started
          </button>
          <button type="button" class="btn  hero-learn-more ms-3 p-2">
            Learn More
          </button>
        </div>
      </div>
      <div className="hero-image-group col-lg-6">
        <img className="large-image" src={large}/>
        <img className="small-image" src={small}/>
        </div>
    </div>
  );
};

export default Hero;
