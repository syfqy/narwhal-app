import React from "react";

import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import PeopleIcon from "@mui/icons-material/People";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import HelpIcon from "@mui/icons-material/Help";
import logo from "../assets/images/logo.png";

function SideNavBar() {
  //TODO: move sidenav-item to separate component
  return (
    <div className="sidenav">
      <div className="sidenav-item">
        <img className="sidenav-logo" src={logo} />
      </div>
      <div className="sidenav-item">
        <QuestionAnswerIcon fontSize="large" />
      </div>
      <div className="sidenav-item">
        <CorporateFareIcon fontSize="large" />
      </div>
      <div className="sidenav-item">
        <PeopleIcon fontSize="large" />
      </div>
      <div className="sidenav-item">
        <MonitorHeartIcon fontSize="large" />
      </div>
      <div className="sidenav-item">
        <HelpIcon fontSize="large" />
      </div>
  </div>
  );
}

export default SideNavBar;