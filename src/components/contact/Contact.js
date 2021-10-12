import React from "react";
import "./Contact.css";
import illustration from "../../assets/illustration.svg";
const Contact = () => {
  return (
    <div className="contact row ">
      <div className="contact-left col-lg-5 ">
        <div className="header-contact">Contact</div>
        <div className="header-skip mt-4">
          Skip logging in,
          <br /> get what you need with a few key details
        </div>
        <div className="contact-left-image-container">
          <img src={illustration} className="illustration" />
        </div>
      </div>
      <div className="contact-right col-lg-7  ">
        <form className="form  ">
          <div className="form-group">
            <label for="name label">Your Name (required)</label>
            <input
              type="text"
              className="form-control my-3"
              id="name"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label for="email label">Email (required)</label>
            <input
              type="email"
              className="form-control my-3"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label for="subject label">Subject</label>
            <input
              type="text"
              className="form-control my-3"
              id="subject"
              placeholder="Enter subject"
            />
          </div>
          <div className="form-group">
          <label for=" label">Select Job</label>
          <select class="form-select my-3" aria-label="Default select example">
            <option selected>Please Select</option>
            <option value="1">Front-end Developer</option>
            <option value="2">Back-end Developer</option>
            <option value="3">Full-stack Developer</option>
          </select>
          </div>
         
          <div className="form-group">
            <label for="company label">Company Name</label>
            <input
              type="text"
              className="form-control my-3"
              id="company"
              placeholder="Enter company name"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control my-3"
              id="exampleFormControlTextarea1"
              rows="4"
              placeholder="Enter message"
            ></textarea>
          </div>
          <div className="form-button-container mt-5">
            <button type="submit" className="btn form-button">
              Send Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
