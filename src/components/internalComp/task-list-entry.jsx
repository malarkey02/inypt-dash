import React from "react";
import "../../styles/internal-styles/task-list-entry.css";

function Taskentry(props) {
  return (
    <div className="task-entry">
      <div
        className="banner-color"
        style={{ backgroundColor: props.banner }}
      ></div>
      <div className="task-name">{props.task}</div>
    </div>
  );
}

export default Taskentry;
