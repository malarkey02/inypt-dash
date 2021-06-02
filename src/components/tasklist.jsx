import React from "react";
import "../styles/tasklist.css";
import Taskentry from "./internalComp/task-list-entry.jsx";

function Tasklist() {
  return (
    <div className="tasklist">
      <Taskentry
        banner="#FF8289"
        task="Qual. Theory Eq. 4"
        owner="Admin"
        due="25/4"
      />
    </div>
  ); //pass props... somehow
}

export default Tasklist;
