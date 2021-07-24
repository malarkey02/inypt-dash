import React, {useState} from "react";
import Timelinegridday from "./Timelinegridday";
import Entrytimelineday from "./Entrytimelineday";
import arrow from "./assets/dropdown-carot-white.svg";





let today = new Date("2021-01-01");
let weekend = new Date(today);
weekend.setDate(today.getDate() + 6);

let date_manipulate = new Date(today);
let endDate_manipulate = new Date(weekend);




 const subtasks=[{subtask: "Select Important Variables", due:"25/06"}, {subtask: "Identify Setup Equipment", due:"27/06"} ]; 


const task_arr = [{
    top:"5rem",
    left: "0rem",
    color: "#CA662E",
    title:"1stweek Task",
    phase:"Experiment",
    desc:"first week task check",
    subtasks: subtasks,
    startDate: "2021-01-05" 
    //this date is 5th january, 2021
}, {
    top:"5rem",
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

    const [renderTasks, setrenderTasks] = useState([]);
    const [dateObj, setdateObj] = useState({month: today.toLocaleString('en-US', {month: 'long'}), date: today.getDate(), endDate: weekend.getDate()});
    const [gridDate, setgridDate] = useState(today);
    console.log(gridDate);

    function handleleftclick(){
        
        date_manipulate.setDate(date_manipulate.getDate()-7);
        endDate_manipulate.setDate(endDate_manipulate.getDate()-7); 

        setdateObj({month: date_manipulate.toLocaleString('en-US', {month: 'long'}),
        date: date_manipulate.getDate(),
        endDate: endDate_manipulate.getDate()
        });
        setgridDate(date_manipulate);

    }


    return <div className="grid-wrapper-day"> 
        <div className="date-toggle-box">
            <div className="date-text">
                <h2>{dateObj.month}  {dateObj.date}-{dateObj.endDate}</h2>
            </div>

            <div className="date-toggle-arrows">
              <img src={arrow} onClick={handleleftclick} className="date-toggle-arrow-left" alt=''></img>
              <img src={arrow} className="date-toggle-arrow-right" alt=''></img>
            </div>
        </div>
        <div className="day-grid-wrapper" alt={dateObj.date}    >
            <Timelinegridday date = {gridDate}/>
        </div>

    </div>
}

export default TimelinegridtoggleDay;