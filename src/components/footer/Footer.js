import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/footerlogo.svg";
import facebook from "../../assets/ico-fb.svg";
import instagram from "../../assets/ic-instagram.svg";
import twitter from "../../assets/ic-twitter.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container row container-fluid ">
        <div className="footer-left col-md-3 col-sm-12">
          <img src={footerlogo} className="footerlogo" />
          <p className="footer-left-info mt-4">
           <span className="footer-left-header">Siphome, LLC</span>  <br/>The New Building 2320 Lang Avenue, Park Valley, Utah,
            United States. 84329 <br/> 
          </p>
          <p className="mt-3 footer-left-info">
          P: +1 176 909 2900<br/> E: siphome@gmail.com
          </p>
        </div>
        <div className="footer-right col-md-6">
          <div className="footer-right-group">
            <li className="footer-right-header">
              <a > Navigation</a>
            </li>
            <li className="footer-right-info">
              <a href="#">Home</a>{" "}
            </li>
            <li className="footer-right-info">
              <a href="#" className="active-link">Features</a>
            </li>
            <li className="footer-right-info">
              <a href="#">Services</a>
            </li>
            <li className="footer-right-info">
              <a href="#">Testimonals</a>
            </li>
            <li className="footer-right-info">We Care</li>
            <li className="footer-right-info">Idea exchange</li>
          </div>
          <div className="footer-right-group">
            <li className="footer-right-header">About</li>
            <li className="footer-right-info">Contact Us</li>
            <li className="footer-right-info">Privacy & Policy</li>
            <li className="footer-right-info">Terms & Conditions</li>
            <li className="footer-right-info">FAQ</li>
          </div>
          <div className="footer-right-group">
            <li className="footer-right-header">Stay Connected</li>
            <li className="footer-right-info">
              <a href="#" className="text-decoration-none">
                <img src={facebook} className="me-3" />
                Facebook
              </a>
            </li>
            <li className="footer-right-info">
              <a href="#" className="text-decoration-none">
                <img src={twitter} className="me-3" />
                Twitter
              </a>
            </li>
            <li className="footer-right-info">
              <a href="#" className="text-decoration-none">
                <img src={instagram} className="me-3" />
                Instagram
              </a>
            </li>
          </div>
        </div>
      </div>
      <p className="copyright">Copyright&#169; 2020, Siphome Smart home LLC</p>
    </div>
  );
};

export default Footer;

