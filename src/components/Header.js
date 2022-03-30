import React from "react";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AddIcon from "@mui/icons-material/Add";

function Header() {
  return (
    <div className="header">
      <CorporateFareIcon 
      sx={{ opacity: 0.5,
      width: "3rem",
      height: "3rem"}} />
      <h1>Teams</h1>
      <button className="create-team-btn">
        <AddIcon />
        <p>CREATE NEW TEAM</p>
      </button>
    </div>
  );
}

export default Header;
