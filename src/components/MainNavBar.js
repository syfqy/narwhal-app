import React from "react";
import UserInfo from "./UserInfo";

function MainNavBar() {
  return (
    <div className="main-nav">
      <div>
        <h2 className="grey-out">NARWHAL</h2>
      </div>
      <div>
        <h2>Teams</h2>
      </div>
      <UserInfo />
    </div>
  );
}

export default MainNavBar;
