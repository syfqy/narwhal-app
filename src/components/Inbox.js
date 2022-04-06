import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";

function Inbox(props) {
  return (
    <div className="inbox-btn">
      <InboxIcon />
      <span className="notification-badge">{props.nCount}</span>
    </div>
  );
}

export default Inbox;
