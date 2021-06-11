import React from "react";
import "../../styles/internal-styles/task-color-keys.css";

function Colorkeys(props) {
  const taskLegends = props.taskLegends;

  return (
    <div className="keyEntry">
      {taskLegends.map((taskLegend) => (
        <div>
          <span
            className="dot"
            style={{ backgroundColor: taskLegend.color }}
          ></span>

          <span className="taskName"> - {taskLegend.task}</span>
        </div>
      ))}
    </div>
  );
}

export default Colorkeys;
