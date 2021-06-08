import React, {useState} from "react";
import '../styles/meetings.css';
import clocklogo from "../img-assets/Clock-logo.svg";

function Upload(){

    const[meetingJoin, setmeetingJoin] = useState("Joining");

    function handleClickJoin(){
        setmeetingJoin("Joining");
    }

    function handleClickUnable(){
        setmeetingJoin("Unable");
        //Axios sending meeting status back to server in this function
    }

    
    return <div className="meetings">
        <div className="meetings-text">
           <h2>Meetings</h2>
           
           <div className="meeting-info">


             <div className="meeting-info-text">
                <p><img src={clocklogo} alt=""></img> - Saturday, May 29 · 5:30 – 6:30pm  </p>
                <p><strong>Topic</strong> - Presentation Video <a style={{color:"white"}} href="google.com">Join Here</a> </p>
             </div>
             <div className="joining-dropdown">

                <div class="dropdown">
                    <button class="dropbtn">{meetingJoin} ˅</button>
                    <div class="dropdown-content">
                        <p onClick={handleClickJoin}>JOINING</p>
                        <p onClick={handleClickUnable}>UNABLE</p>
                        
                    </div>
                    </div> 

                </div>   


           </div>
        </div>

            

           
        
        
    </div>
}

export default Upload; 
