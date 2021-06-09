import React from "react";
import "../../styles/internal-text-styles/tasklisttext.css";

function TaskEntryHead() {
  return (
    <div className="listHeadder">
      Task List
      <div className="listSubHead-container">
        <div className="Task">Task</div>
        <div className="Owner">Owner</div>
        <div className="Due">Due</div>
      </div>
    </div>
  );
}

export default TaskEntryHead;
