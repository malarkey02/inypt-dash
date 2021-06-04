import React, { useState } from "react";
import "../styles/tasklist.css";
import Taskentry from "./internalComp/task-list-entry.jsx";
import TaskEntryHead from "./compText/tasklisttext.jsx";
import Addentry from "./internalComp/add-task-entry.jsx";

function Tasklist() {
  const [entries, setEntries] = useState([
    {
      banner: "#FF8289",
      task: "Qual. Theory Eq. 4",
      owner: "Admin",
      due: "25/4",
    },
    {
      banner: "#FA3B49",
      task: "Qual. Theory Eq. 5",
      owner: "Admin",
      due: "29/4",
    },
  ]);

  return (
    <div className="list-container">
      <div className="tasklist">
        <TaskEntryHead />
        {entries.map((entry) => (
          <Taskentry
            banner={entry.banner}
            task={entry.task}
            owner={entry.owner}
            due={entry.due}
          />
        ))}
        <Addentry />
      </div>
    </div>
  ); //pass props... somehow
}

export default Tasklist;
