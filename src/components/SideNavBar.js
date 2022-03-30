import React from "react";

import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import PeopleIcon from "@mui/icons-material/People";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import HelpIcon from "@mui/icons-material/Help";

function SideNavBar() {
  return (
    <div className="sidenav">
      Logo here
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
