import React from "react";
import Shape from "../../assets/shape.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand col-lg-2 col-sm-1" href="#">
          <img src={Shape} /> <span className="siphome">Siphome</span>
        </a>
        <button
          className="menu-button btn border pb-2 d-flex justify-content-center"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span className="menu">Menu</span>
        </button>

        <div className="navbar-nav col-lg-7 main-menu">
          <a className="nav-item nav-link mx-4 active" href="#">
            Home
          </a>
          <a className="nav-item nav-link mx-4" href="#">
            Features
          </a>
          <a className="nav-item nav-link mx-4" href="#">
            Services
          </a>
          <a className="nav-item nav-link mx-4" href="#">
            Contact
          </a>
          <a className="nav-item nav-link mx-4" href="#">
            FAQ
          </a>
        </div>
        <div className="col-lg-3">
          <button type="button" class="btn sign-in mx-2">
            Sign In
          </button>
          <span className="between-span">|</span>
          <button type="button" class="btn get-started mx-2">
            Get Started
          </button>
        </div>

        {/* ---MODAL--- */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="d-flex justify-content-between m-3">
                <h5 class="modal-title" id="exampleModalLabel">
                  Siphome Menu
                </h5>
                <button type="button" class="btn close-button" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
              <div class="modal-body d-flex flex-column">
                <a className="mx-4 active modal-item " href="#">
                  Home
                </a>
                <a className="mx-4 modal-item" href="#">
                  Features
                </a>
                <a className="mx-4 modal-item" href="#">
                  Services
                </a>
                <a className="mx-4 modal-item" href="#">
                  Contact
                </a>
                <a className="mx-4 modal-item" href="#">
                  FAQ
                </a>
                <div className="modal-buttons">
                  <button type="button" class="btn mx-2 modal-get-started m-1">
                    Get Started
                  </button>
                  <button type="button" class="btn mx-2 modal-sign-in m-1">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- */}
      </nav>
    </div>
  );
};

export default Navbar;
