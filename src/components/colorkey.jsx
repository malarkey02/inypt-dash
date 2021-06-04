import React, { useState } from "react";
import "../styles/colorkey.css";
import Colorkeys from "./internalComp/task-color-keys.jsx";
import KeyText from "./compText/taskcolorkeytext.jsx";

function Upload() {
  //   const color = "#FF8289";
  const [taskLegends, setTaskLegends] = useState([
    { color: "#FF8289", task: "Problem #4" },
    { color: "#FF8223", task: "Problem #5" },
  ]);
  //   const [tasks, setTasks] = useState([]);
  return (
    <div className="colors-container">
      <div className="colorkey">
        <KeyText />
        <Colorkeys taskLegends={taskLegends} />
      </div>
    </div>
  );
}

export default Upload;
