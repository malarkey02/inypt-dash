import React, { useState } from "react";
import "../styles/colorkey.css";
import Colorkeys from "./internalComp/task-color-keys.jsx";

function Upload() {
  //   const color = "#FF8289";
  const [taskLegends, setTaskLegends] = useState([
    { color: "#FF8289", task: "Problem #4" },
    { color: "#FF8223", task: "Problem #5" },
  ]);
  //   const [tasks, setTasks] = useState([]);
  return (
    <div className="colorkey">
      <Colorkeys taskLegends={taskLegends} />
    </div>
  );
}

export default Upload;
