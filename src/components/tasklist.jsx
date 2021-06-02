import React from "react";
import "../styles/tasklist.css";
import Taskentry from "./internalComp/task-list-entry.jsx";

function Tasklist() {
  return (
    <div className="tasklist">
      <Taskentry />
    </div>
  );
}

export default Tasklist;
