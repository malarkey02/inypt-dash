import React, {useState} from "react";
import './styles/timeline.css';
import TimelinegridweekTwelve from "./TimelinegridweekTwelve";
import Timelinegridday from "./Timelinegridday";
import TimelinegridtoggleDay from "./TimelinegridtoggleDay";

// import TimelinegridtoggleWeek from "./STANDBY_TimelinegridtoggleWeek";

function Timeline(){

    const [dailyClicked, setdailyClicked] = useState(false);

    function handleDailyClick(){
        setdailyClicked(true); 
    }

    function handleMonthClick(){
        setdailyClicked(false); 
    }

    return <div className="timeline">
                
                <div className="toggle-buttons"> <button onClick={handleDailyClick} className={dailyClicked ? "daily-active":"daily-inactive"}>Daily</button> <button onClick={handleMonthClick} className={dailyClicked ? "month-inactive":"month-active"} >Month</button></div>
                <h2>Project Timeline </h2>
                <div className="project-overall-progress">
                    <p>56%</p>
                    <div className="project-overall-progress-bar">
                    </div>
                    <div className="project-overall-progress-indicator">
                    </div>
                </div>
                
                {/* you need to have some state that determines which month it is and which date it is. The arrows should move the date. Not a number. Move 7days ahead/back */}

                {!dailyClicked ? <p className="phase-text"> <span>phase 1</span> <span>phase 2</span> <span>phase 3</span> </p>:null}

                <div className="weeks-days">

                    {dailyClicked ? <TimelinegridtoggleDay /> : <TimelinegridweekTwelve/>}
                    

                        
                </div>
                

    </div>
}

export default Timeline; 