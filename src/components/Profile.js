import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Profile(props) {
  return (
    <div className="profile-info">
      <p className="profile-greeting grey-out">Hello, {props.name}</p>
      <div>
        <img className="profile-img" src={props.avatar} />
      </div>
      <ArrowDropDownIcon sx={{ opacity: 0.5 }} />
    </div>
  );
}

export default Profile;
