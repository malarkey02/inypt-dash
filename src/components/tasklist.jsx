import React, { useState, useEffect } from "react";
import "../styles/tasklist.css";
import Taskentry from "./internalComp/task-list-entry.jsx";
import Tasklisttext from "./compText/tasklisttext.jsx";

function Tasklist({ userid }) {
  const [tasklist, setTasklist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/gettasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ useridValue: userid }),
    })
      .then((backData) => backData.json())
      .then((result) => {
        setTasklist(result.tasklist);
      });
  }, []);

  function createTask(singleTaskObj) {
    const date =
      singleTaskObj.due.substring(8) + "/" + singleTaskObj.due.substring(5, 7);

    return (
      <Taskentry
        banner={singleTaskObj.bannerColor}
        task={singleTaskObj.task}
        owner={singleTaskObj.owner}
        due={date}
      />
    );
  }

  return (
    <div className="list-container">
      <div className="tasklist">
        <Tasklisttext />

        {tasklist.map(createTask)}
        {/* {tasklist.map(createTask)} */}
      </div>
    </div>
  ); //pass props... somehow
}

export default Tasklist;
