import React, {useState} from "react";
import './styles/timeline.css';
import Timelinegridweek from "./Timelinegridweek";
import Timelinegridday from "./Timelinegridday";

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
                
                {!dailyClicked ? <p className="phase-text"> <span>phase 1</span> <span>phase 2</span> <span>phase 3</span> </p>:<p className="phase-text"></p>}

                <div className="weeks-days">

                    {dailyClicked ? <Timelinegridday /> : <Timelinegridweek/>}
                    

                        
                </div>
                

    </div>
}

export default Timeline; 