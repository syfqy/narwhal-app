import React from "react";
import Inbox from "./Inbox";
import Profile from "./Profile";
import data from "./data";

function UserInfo() {

  const currentUser = data.current_user;

  return (
    <>
      <Inbox nCount={currentUser.notifications_count}/>
      <Profile 
      name={currentUser.name}
      avatar={currentUser.avatar}
      />
    </>
  );
}

export default UserInfo;
