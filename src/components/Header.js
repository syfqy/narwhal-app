import React from "react";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AddIcon from "@mui/icons-material/Add";
import TeamsTabBar from "./TeamsTabBar";
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";

//TODO: move search bar into separate component

function Header(props) {
  return (
    <div className="main-header">
      <div className="second-header">
        <CorporateFareIcon
          sx={{ opacity: 0.5, width: "3rem", height: "3rem" }}
        />
        <h1>Teams</h1>
        <button className="create-team-btn">
          <AddIcon />
          <p>CREATE NEW TEAM</p>
        </button>
      </div>
      <div className="third-header">
        <TeamsTabBar
          currentTab={props.currentTab}
          changeTab={props.changeTab}
        />
        <div className="search-bar">
          <SearchIcon 
            sx={{
            marginRight: "0.5rem",
            marginTop:"1.2rem",
            opacity: "50%"}}/>
          <TextField
          InputProps={{ disableUnderline: true }}
          id="standard-basic"
          label="Search team name..."
          variant="standard" />
        </div>
      </div>
    </div>
  );
}

export default Header;
