import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";

function Inbox() {
  return (
    <div className="inbox-btn">
      <InboxIcon />
      <span className="notification-badge">3</span>
    </div>
  );
}

export default Inbox;
