import React from "react";
import Inbox from "./Inbox";
import Profile from "./Profile";

function MainNavBar() {
  return (
    <div className="main-nav">
      <h2 className="grey-out">NARWHAL</h2>
      <h2>Teams</h2>
      <Inbox />
      <Profile />
    </div>
  );
}

export default MainNavBar;
