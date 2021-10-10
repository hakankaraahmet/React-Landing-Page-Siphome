import React from "react";
import "./Features.css";
import dotblack from "../../assets/dot-black.svg";
import illustation from "../../assets/illustation.svg";
import iconalarm from "../../assets/icon-alarm.svg";
import iconmedicine from "../../assets/icon-medicine.svg";
import iconok from "../../assets/icon-ok.svg";
import iconcontact from "../../assets/icon-contact.svg";

const Features = () => {
  return (
    <div className="features border border-primary">
      <div className="text-dot row d-flex justify-content-around">
        <p className="features-text col-lg-6">
          Every day your home faces countless potential threats. Every day you
          face countless potential headaches. A small problem can become a major
          disaster. Early warning signs exist but often you can't hear or see
          them.
        </p>
        <div className="features-dot col-lg-3">
          <img src={dotblack} className="dot1" />
          <img src={dotblack} className="dot2 "/>
        </div>
      </div>
      {/* -------------------Features Main-------------------- */}
      <div className="features-main row">
        <div className="features-main-image col-lg-5">
          <img src={illustation} className="illustation" />
        </div>
        <div className="features-main-text  col-lg-7">
          <div className="header-features">Features</div>
          <div className="header-meetsiphome mt-4">Meet Siphome</div>
          <div className="header-paragraph-container">
          <p className="header-paragraph my-4">
            The most comprehensive smart solution to home maintenance. All it
            takes is a simple and affordable sensor installation by one of our
            Siphome certified technicians.
          </p>
          </div>
          <div className="icon-container mt-4 row">
            <div className="icon col-md-6 my-5">
              <div className="icon-image-container mb-5">
              <img src={iconalarm}/>
              </div>
              <h3 className="icon-header mb-3">Automatic Threat Detection</h3>
              <div className="icon-paragraph-container">
              <p className="icon-paragraph">
                Siphome reacts the moment your equipment fails, alerting you to
                the problem.
              </p>
              </div>
            </div>
            <div className="icon col-md-6 my-5">
            <div className="icon-image-container mb-5">
              <img src={iconmedicine}/>
              </div>
              <h3 className="icon-header mb-3">Smart Diagnostics</h3>
              <div className="icon-paragraph-container">
              <p className="icon-paragraph">
              See exactly what is malfunctioning and compare your maintenance options on the same screen.
              </p>
              </div>
            </div>
            <div className="icon col-md-6">
            <div className="icon-image-container mb-5">
              <img src={iconok}/>
              </div>
              <h3 className="icon-header mb-3">Disaster Prevention</h3>
              <div className="icon-paragraph-container">
              <p className="icon-paragraph">
              Predictive analytics lets you see what needs maintenance before it fails.
              </p>
              </div>
            </div>
            <div className="icon col-md-6">
            <div className="icon-image-container mb-5">
              <img src={iconcontact}/>
              </div>
              <h3 className="icon-header mb-3">24/7 Service</h3>
              <div className="icon-paragraph-container">
              <p className="icon-paragraph">
              Siphome monitors your critical systems 24/7 so you can enjoy peace of mind.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
