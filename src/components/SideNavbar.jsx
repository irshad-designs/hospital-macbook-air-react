import React from "react";
import patient from "./../assets/patient.png";
import folder from "./../assets/folder.png";
import upload from "./../assets/upload.png";
import report from "./../assets/report.png";
import settings from "./../assets/settings.png";
import logout from "./../assets/logout.png";
import heart from "./../assets/heart.png";

const SideNavbar = () => {
  return (
    <div className="sidenavbar__container">
      <div className="sidenavbar__container__logo">
        <img src={heart} alt="logo" />
      </div>
      <div className="sidenavbar__container__buttons">
        <button>+</button> <label>NEW</label>
        <button>
          <img src={patient} alt="patient-img" />
        </button>
        <label>PATIENT</label>
        <button>
          <img src={folder} alt="folder-img" />
        </button>
        <label>FOLDER</label>
        <button>
          <img src={upload} alt="upload-img" />
        </button>
        <label>UPLOAD</label>
        <button>
          <img src={report} alt="report-img" />
        </button>
        <label>REPORT</label>
        <button>
          <img src={settings} alt="settings-img" />
        </button>
        <label>SETTINGS</label>
        <button>
          <img src={logout} alt="logout-img" />
        </button>
        <label>LOGOUT</label>
      </div>
    </div>
  );
};

export default SideNavbar;
