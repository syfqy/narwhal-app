import React from "react";
import Inbox from "./Inbox";
import Profile from "./Profile";

function MainNavBar() {
  return (
    <div className="main-nav">
      <div>
        <h2 className="grey-out">NARWHAL</h2>
      </div>
      <div>
        <h2>Teams</h2>
      </div>
      <Inbox />
      <Profile />
    </div>
  );
}

export default MainNavBar;
