import React, { useState } from "react";
import "../../styles/internal-styles/task-list-entry.css";

function Taskentry(props) {
  const [taskName, setTaskName] = useState(props.task);
  const [taskOwner, setTaskOwner] = useState(props.owner);
  const [taskDue, setTaskDue] = useState(props.due);

  return (
    <div className="task-entry">
      <div
        className="banner-color"
        style={{ backgroundColor: props.banner }}
      ></div>
      <div className="task-name">{taskName}</div>
      <div className="task-owner">{taskOwner}</div>
      <div className="task-due">{taskDue}</div>
      <input type="checkbox" name="task-done" id="task-list-check" />
    </div>
  );
}

export default Taskentry;
