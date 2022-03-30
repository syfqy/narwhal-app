import React from "react";
// import SideNavItem from "./SideNavItem";
// import swlogo from "../assets/images/sw-logo.jpg";

import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import PeopleIcon from "@mui/icons-material/People";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import HelpIcon from "@mui/icons-material/Help";

function SideNavBar() {
  return (
    <div className="sidenav">
      SideNavBar
      <div className="sidenav-item">
        <QuestionAnswerIcon />
      </div>
      <div className="sidenav-item">
        <CorporateFareIcon />
      </div>
      <div className="sidenav-item">
        <PeopleIcon />
      </div>
      <div className="sidenav-item">
        <MonitorHeartIcon />
      </div>
      <div className="sidenav-item">
        <HelpIcon />
      </div>
  </div>
  );
}

export default SideNavBar;
