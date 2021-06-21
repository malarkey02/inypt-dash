import React from "react";
import '../../styles/internal-styles/projectentry.css';
import { useHistory } from "react-router-dom";


import Progresspiechart from "./progresspichart";



function Projectentry(props){

//    let boxclass=""; 
//    if(props.active){
//        boxclass="activeBox";
//    } else {
//     boxclass="lead-entry";
//    }

const history = useHistory();


    return <div className="project-div" onClick={() => { history.push(props.projLink) }}>
        <div className="colortag" style={{background: props.projectkey}}></div>
        <div className="entry-elements">
            
            <img src={props.status} alt="" className="status-logo"/>

            <span className="project-name">{props.projectname}</span>
            <span className="project-phase">{props.projectphase}</span>
            {/* theory pie chart */}
            <div className="project-theory-status">
                <Progresspiechart fontsize="10" value={props.theoryProg}/>
                <span className="graphName">Theory</span>
            </div>

            {/* practical pie chart */}
            <div className="project-practical-status">
                <Progresspiechart fontsize="10" value={props.practicalProg}/>
                <span className="graphName">Practical</span>
            </div>


        </div>

    </div>
}

export default Projectentry; 