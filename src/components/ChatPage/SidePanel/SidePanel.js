import React from "react";
import UserPanel from "./UserPanel";

import ChatRooms from "./ChatRooms";

function SidePanel() {
  return (
    <div
      style={{
        backgroundColor: "#7B83EB",
        padding: "2rem",
        minHeight: "100vh",
        color: "white",
        minWidth: "275px",
      }}
    >
      <UserPanel />
      <ChatRooms />
    </div>
  );
}

export default SidePanel;
