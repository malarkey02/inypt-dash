import React, {useState} from "react";
import Timelinegridday from "./Timelinegridday";
import Entrytimelineday from "./Entrytimelineday";
import arrow from "./assets/dropdown-carot-white.svg";

import "./styles/timelinegridtoggleday.css";





let today = new Date("2021-01-01");
let weekend = new Date(today);
weekend.setDate(today.getDate() + 6);

let date_manipulate = new Date(today);
let endDate_manipulate = new Date(weekend);




 const subtasks=[{subtask: "Select Important Variables", due:"25/06"}, {subtask: "Identify Setup Equipment", due:"27/06"} ]; 


const task_arr = [{
    top:"10rem",
    left: "0rem",
    color: "#CA662E",
    title:"1stweek Task",
    phase:"Experiment",
    desc:"first week task check",
    subtasks: subtasks,
    startDate: "2021-01-05" 
    //this date is 5th january, 2021
}, {
    top:"13rem",
    left: "5rem",
    color: "#2E9CCA",
    title:"2ndweek Task",
    phase:"Experiment",
    desc:"second week task check",
    subtasks: subtasks,
    startDate: "2021-01-09" 
    //this date is 9th january, 2021
}]



function TimelinegridtoggleDay(){

    let tasksToRender = [];
    task_arr.forEach(e=>{
        let some_check = new Date(e.startDate);
        
        if(date_manipulate.getTime() <= some_check.getTime() && some_check.getTime() <= endDate_manipulate.getTime()){

            tasksToRender.push(e)
        }
    })

    //finding the array of tasks when the component is mounted. When the component is changed, the click events handle it. 

    const [renderTasks, setrenderTasks] = useState(tasksToRender);

    //the object is for the month and date display
    const [dateObj, setdateObj] = useState({month: today.toLocaleString('en-US', {month: 'long'}), date: today.getDate(), endDate: weekend.getDate()});
    //the grid date hook is for the grid to change
    const [gridDate, setgridDate] = useState(today);
    let date_check = new Date();
        

    //click events handling the change in date/grid, and tasks

    function handleleftclick(){
        
        date_manipulate.setDate(date_manipulate.getDate()-7);
        endDate_manipulate.setDate(endDate_manipulate.getDate()-7); 
        tasksToRender = [];
        //emptying the array and filling it with tasks that only match the timeframe

        task_arr.forEach(e=>{
            date_check = new Date(e.startDate);
            console.log(date_manipulate.getTime() + " test " + date_check.getTime());
            console.log(date_check);
            if(date_manipulate.getTime() <= date_check.getTime() && date_check.getTime() <= endDate_manipulate.getTime()){

                tasksToRender.push(e)
            }
        })

        

        setdateObj({month: date_manipulate.toLocaleString('en-US', {month: 'long'}),
        date: date_manipulate.getDate(),
        endDate: endDate_manipulate.getDate()
        });
        setgridDate(date_manipulate);
        setrenderTasks(tasksToRender); 

    }

    function handlerightclick(){
        
        date_manipulate.setDate(date_manipulate.getDate()+7);
        endDate_manipulate.setDate(endDate_manipulate.getDate()+7); 

        tasksToRender = [];
        //emptying the array and filling it with tasks that only match the timeframe


        task_arr.forEach(e=>{
            date_check = new Date(e.startDate);
            console.log(date_manipulate.getTime() + " test " + date_check.getTime());
            console.log(date_manipulate + " test " + date_check)
            if(date_manipulate.getTime() <= date_check.getTime() && date_check.getTime() <= endDate_manipulate.getTime()){
                tasksToRender.push(e)
            }
        })

        setdateObj({month: date_manipulate.toLocaleString('en-US', {month: 'long'}),
        date: date_manipulate.getDate(),
        endDate: endDate_manipulate.getDate()
        });
        setgridDate(date_manipulate);
        setrenderTasks(tasksToRender); 

    }


    return <div className="grid-wrapper-day"> 
        <div className="date-toggle-box">
            <div className="date-text">
                <h2>{dateObj.month}  {dateObj.date}-{dateObj.endDate}</h2>
            </div>

            <div className="date-toggle-arrows">
                <div className="click-divs" onClick={handleleftclick}>
                    <img src={arrow} className="date-toggle-arrow-left" alt=''></img>
                </div>

                <div className="click-divs" onClick={handlerightclick}>
                    <img src={arrow} className="date-toggle-arrow-right" alt=''></img>
                </div>
            </div>
        </div>
        <div className="day-grid-wrapper" alt={dateObj.date}>
            <Timelinegridday date = {gridDate} tasks={renderTasks}/>
        </div>

    </div>
}

export default TimelinegridtoggleDay;