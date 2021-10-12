import React from "react";
import "./Services.css";
import home from "../../assets/home.svg";
import servicesIcon1 from "../../assets/services/servicesIcon1.svg";
import servicesIcon2 from "../../assets/services/servicesIcon2.svg";
import servicesIcon3 from "../../assets/services/servicesIcon3.svg";
import servicesIcon4 from "../../assets/services/servicesIcon4.svg";
import servicesIcon5 from "../../assets/services/servicesIcon5.svg";
import servicesIcon6 from "../../assets/services/servicesIcon6.svg";
import servicesIcon7 from "../../assets/services/servicesIcon7.svg";
import servicesIcon8 from "../../assets/services/servicesIcon8.svg";
import servicesIcon9 from "../../assets/services/servicesIcon9.svg";
import Card from "./Card";
import CarouselCard from "./CarouselCard";
const Services = () => {
  return (
    <div className="services">
      <div className="services-top">
        <div className="header-services">Services</div>
        <div className="header-bring-more mt-4">
          Bring more system into the network
        </div>
        <p className="services-paragraph my-4">
          Find out just how far Siphome can lead your home into next-gen
          intelligence.
        </p>
        <img src={home} className="my-5 services-home-image" />
      </div>
      <div className="services-bottom-container container mt-5">
        <div className="services-bottom container my-3">
          <Card title="Mobile Command Management" image={servicesIcon1} />
          <Card title="Equipment Optimizer" image={servicesIcon2} />
          <Card title="Lifecycle Prediction" image={servicesIcon3} />
        </div>
        <div className="services-bottom container my-3">
          <Card title="Troubleshooting Guide" image={servicesIcon4} />
          <Card title="Energy Optimizer" image={servicesIcon5} />
          <Card title="Smart Diagnotics" image={servicesIcon6} />
        </div>
        <div className="services-bottom container my-3">
          <Card title="Vital Equipment Scan" image={servicesIcon7} />
          <Card title="Smart Alerts" image={servicesIcon8} />
          <Card title="Preventative Maintenance" image={servicesIcon9} />
        </div>
      </div>
      {/* ------------------Carousel Part-------------------- */}
      <div
        id="carouselIndicators"
        className="carousel carousel-services slide d-flex"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner  w-100">
          <div className="carousel-item active">
            <CarouselCard
              title="Mobile Command Management"
              className="carousel-item active"
              image={servicesIcon1}
            />
          </div>
          <div className="carousel-item ">
            <CarouselCard title="Equipment Optimizer" image={servicesIcon2} />
          </div>
          <div className="carousel-item">
            <CarouselCard title="Lifecycle Prediction" image={servicesIcon3} />
          </div>
          <div className="carousel-item">
            <CarouselCard title="Troubleshooting Guide" image={servicesIcon4} />
          </div>
        </div>
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="0"
            className="active indicator"
          ></li>
          <li
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="1"
            className=" indicator"
          ></li>
          <li
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="2"
            className=" indicator"
          ></li>
          <li
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="3"
            className=" indicator"
          ></li>
        </ol>
        {/* ---- */}
      </div>
    </div>
  );
};

export default Services;
