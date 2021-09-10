import React, {useState} from "react";
import './styles/timelinegridweek.css';
import Entrytimelineday from "./Entrytimelineday"; 


function Timelinegridday (props){

        let today = new Date(props.date);
        let date_manipulate = new Date(today); 
        
 
   

    let arr=[];

    for(var i = 1; i<=7; i++){

        let month = date_manipulate.toLocaleString('default', { month: 'short' });
        let daydate = date_manipulate.getUTCDate();
        let dayname = date_manipulate.toLocaleString("en", { weekday: "long" });
        let simpledateID = date_manipulate.toISOString().split("T")[0]; 
        const weekCol = {
            daydate: daydate,
            month: month,
            day: dayname,
            dateID : simpledateID
        }
        console.log(dayname);
        arr.push(weekCol); 
        date_manipulate.setDate(date_manipulate.getDate() + 1); 

    }

    function createWeekCol(e){
        return <div className="day-column" id={e.dateID}>
        <h1>{e.month} {e.daydate}</h1>
        <p>{e.day}</p>
          </div>
    }

  

    function createTaskRender(e){
         
            const taskDateStamp = new Date (e.startDate);
            const leftIndex = taskDateStamp.getDate() - today.getDate(); 
            const leftPos = leftIndex * 16 * 8;
            console.log(leftPos); 
            return <Entrytimelineday top={e.top}
            left={leftPos}
            color={e.color}
            title={e.title}
            phase={e.phase}
            desc={e.startDate}
            subtasks={e.subtasks} />
        
    }

    const subtasks=[{subtask: "Select Important Variables", due:"25/06"}, {subtask: "Identify Setup Equipment", due:"27/06"} ]; 
    const desc = "Review variables you can change, cataloging set up. This period has " + subtasks.length + " subtasks ";
    return <div>

    {arr.map(createWeekCol)}
    {}
    {props.tasks.map(createTaskRender)}
  
            {/* <Entrytimelineday top="5rem" left="0rem"
                color="#CA662E"
                title="Pre-Exp Research"
                phase="Experiment"
                desc={desc}
                subtasks={subtasks}
            />
            <Entrytimelineday top="11.5rem" left="25rem" 
                color="#2E9CCA"
                title="Pre-Exp Research"
                phase="Experiment"
                desc={desc}
                subtasks={subtasks}
            /> */}
        </div>
}

export default Timelinegridday; 