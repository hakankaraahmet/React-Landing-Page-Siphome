import React from "react";
import "./Testimonals.css";
import testimonal1 from "../../assets/testimonal1.svg";
import testimonal2 from "../../assets/testimonal2.svg";
import Subtract from "../../assets/Subtract.svg";
import btnicon from "../../assets/btn-icon.svg";
const Testimonals = () => {
  return (
    <div className="testimonals">
      <div className="testimonals-top d-flex justify-content-center flex-column align-items-center">
        <div className="header-testimonals">Testimonals</div>
        <div className="header-letsee mt-4">
          Let's see what people says about Siphome
        </div>
      </div>
      <div className="testimonals-slide-container  d-flex justify-content-center mt-5">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators testimonal-indicators">
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active testimonal-indicator mx-2"
            ></li>
            <li data-bs-target="#carouselExampleIndicators" className="testimonal-indicator mx-2" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" className="testimonal-indicator mx-2" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselExampleIndicators" className="testimonal-indicator mx-2" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner w-100 ">
            <div className="carousel-item active w-100 ">
              <img className="d-block w-100  col-md-3 d-flex justify-content-center" src={testimonal1} alt="First slide" />
            </div>
            <div className="carousel-item w-100 ">
              <img className="d-block w-100 col-md-3 d-flex justify-content-center" src={testimonal2} alt="Second slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="prev"
          >
           <span className=" carousel-icon" aria-hidden="true"> <img src={btnicon}/></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="next"
          >
            <span className=" carousel-icon" aria-hidden="true"> <img src={Subtract}/></span>
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;

