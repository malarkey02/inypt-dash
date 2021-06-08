import React from "react";
import '../../styles/internal-styles/lead-entry.css';




function Leadentry(props){

   let boxclass=""; 
   if(props.active){
       boxclass="activeBox";
   } else {
    boxclass="lead-entry";
   }


    return <div className={boxclass}>

        <div className="entry-elements">
            <span className="position">#{props.position}</span>
            <span className="playername">{props.playername}</span>
            <span className="points">{props.points}</span>
            <img src={props.avatar} alt=''className="avatar"></img>

        </div>

    </div>
}

export default Leadentry; 
