import React from "react";
import './styles/timelinegridweek.css';
import Entrytimelineweek from "./Entrytimelineweek"; 


function Timelinegrid (){

    let today = new Date("2021-04-01");
   

    let arr=[];

    for(var i = 1; i<=12; i++){
        let month = today.toLocaleString('default', { month: 'short' });
        let day = today.getUTCDate();

        const weekCol = {
            day: day,
            month: month,
            week: i
        }

        arr.push(weekCol); 
        today.setDate(today.getDate() + 7); 

    }

    function createWeekCol(e){
        return <div className="week-column">
        <h1>WEEK {e.week}</h1>
        <p>{e.month} {e.day}</p>
          </div>
    }

    const subtasks=[{subtask: "Select Important Variables", due:"25/06"}, {subtask: "Identify Setup Equipment", due:"27/06"} ]; 
    const desc = "Review variables you can change, cataloging set up. This period has " + subtasks.length + " subtasks ";
    return <div>

    {arr.map(createWeekCol)}

  
            <Entrytimelineweek top="5rem" left="0"
                color="#CA662E"
                title="Pre-Exp Research"
                phase="Experiment"
                desc={desc}
                subtasks={subtasks}
            />
            <Entrytimelineweek top="8rem" left="1rem" 
                color="#2E9CCA"
                title="Pre-Exp Research"
                phase="Experiment"
                desc={desc}
                subtasks={subtasks}
            />
        </div>
}

export default Timelinegrid; 