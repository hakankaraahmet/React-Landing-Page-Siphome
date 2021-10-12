import React from "react";
import "./Update.css";
import photo1 from "../../assets/photo-1.svg";
import photo2 from "../../assets/photo-2.svg";
import photo3 from "../../assets/photo-3.svg";
import monitor from "../../assets/monitor-icon.svg";
import maintenance from "../../assets/maintenance-icon.svg";
import repair from "../../assets/repair-icon.svg";
import replace from "../../assets/replace-icon.svg";
import updatedot from "../../assets/Update-dot.svg"
import updatedot2 from "../../assets/Update-dot2.svg"

const Update = () => {
  return (
    <div className="update row d-flex justify-content-around">
      <div className="update-left col-lg-6">
          <div className="update-left-headers">
        <div className="update-left-header1 mt-5">Update</div>
        <div className="update-left-header2 mt-4">
          It starts with an upgrade
        </div>
          </div>
        <div className="update-photo1">
          <img src={photo1} className="illustation photo1" />
        </div>
        <div className="update-photo2">
          <img src={photo2} className="illustation photo2" />
        </div>
        <div className="update-photo3">
          <img src={photo3} className="illustation photo3" />
        </div>
        <img src={updatedot} className="update-dot-1"/>
        <img src={updatedot} className="update-dot-2"/>
        <img src={updatedot} className="update-dot-3"/>
      </div>
      <div className="update-right col-lg-6 ">
      <div className="update-item-container-first container  mt-2">
        <div className="update-item col-md-12 my-5">
          <div className="update-item-image-container">
            <img className="update-item-image" src={monitor} />
          </div>
          <div className="update-item-text-container">
            <h2 className="update-item-header">Monitor</h2>
            <p className="update-item-paragraph">
              Make your standard systems smart with Siphome. A simple
              installation or integration and we can start to monitor 24/7 to
              make sure your home is Siphome.
            </p>
          </div>
        </div>
        <div className="update-item col-md-12 my-5">
          <div className="update-item-image-container">
            <img className="update-item-image" src={maintenance} />
          </div>
          <div className="update-item-text-container">
            <h2 className="update-item-header">Maintenance</h2>
            <p className="update-item-paragraph">
            Siphome helps you maintain your home. The HomeHealth Record ensures you have the right information at the right time, and if you aren’t able to do the maintenance yourself, we can connect you to a service pro to help.
            </p>
          </div>
        </div>
        </div>
        <div className="update-item-container-second container ">
        <div className="update-item col-md-12 my-5 repair">
          <div className="update-item-image-container">
            <img className="update-item-image" src={repair} />
          </div>
          <div className="update-item-text-container">
            <h2 className="update-item-header">Repair</h2>
            <p className="update-item-paragraph">
            Siphome empowers you with smart notifications so you can make repairs before they become problems. Notifications provide diagnostics and recommended next actions so you know what to do and have the same information as your service pro.
            </p>
          </div>
        </div>
        <div className="update-item col-md-12 my-5 replace">
          <div className="update-item-image-container">
            <img className="update-item-image" src={replace} />
          </div>
          <div className="update-item-text-container">
            <h2 className="update-item-header">Replace</h2>
            <p className="update-item-paragraph">
            Improve your home over time. Build your next-gen smart home with Siphome’s advice along the way.
            </p>
          </div>
        </div>
        </div>
        <img src={updatedot2} className="update-dot-4"/>
      </div>
    </div>
  );
};

export default Update;
