import React from "react";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AddIcon from "@mui/icons-material/Add";
import TeamsTabRow from "./TeamsTabRow";
import SearchBar from "./SearchBar";

function Header(props) {
  return (
    <div className="header-container">
      <div className="main-header">
        <CorporateFareIcon
          sx={{ opacity: 0.5, width: "3rem", height: "3rem" }}
        />
        <h1>Teams</h1>
        <button className="create-team-btn">
          <AddIcon />
          <p>CREATE NEW TEAM</p>
        </button>
      </div>
      <div className="second-header">
        <TeamsTabRow
          currentTab={props.currentTab}
          changeTab={props.changeTab}
        />
        <SearchBar/>
      </div>
    </div>
  );
}

export default Header;