import React from "react";
import "../styles/tasklist.css";
import Taskentry from "./internalComp/task-list-entry.jsx";
import Tasklisttext from "./compText/tasklisttext.jsx";

function Tasklist() {
  return (
    <div className="list-container">
      <div className="tasklist">
        <Tasklisttext />
        <Taskentry
          banner="#FF8289"
          task="Qual. Theory Eq. 4"
          owner="Admin"
          due="25/4"
        />
        <Taskentry
          banner="#FA3B49"
          task="Qual. Theory Eq. 5"
          owner="Admin"
          due="29/4"
        />
      </div>
    </div>
  ); //pass props... somehow
}

export default Tasklist;
