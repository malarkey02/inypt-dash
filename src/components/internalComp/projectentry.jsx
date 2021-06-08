import React from "react";
import '../../styles/internal-styles/projectentry.css';


import Progresspiechart from "./progresspichart";



function Projectentry(props){

//    let boxclass=""; 
//    if(props.active){
//        boxclass="activeBox";
//    } else {
//     boxclass="lead-entry";
//    }


    return <div className="project-div">
        <div className="colortag" style={{background: props.projectkey}}></div>
        <div className="entry-elements">
            
            <img src={props.status} alt="" className="status-logo"/>

            <span className="project-name">{props.projectname}</span>
            <span className="project-phase">{props.projectphase}</span>
            <div className="project-theory-status">
                <Progresspiechart fontsize="10" value="89"/>
                <span className="graphName">Theory</span>
            </div>
            <div className="project-practical-status">
                <Progresspiechart fontsize="10" value="23"/>
                <span className="graphName">Practical</span>
            </div>


        </div>

    </div>
}

export default Projectentry; 