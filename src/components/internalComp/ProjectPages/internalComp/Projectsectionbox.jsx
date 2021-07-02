import React from "react";
import './styles/projectsectionbox.css';



function Projectsectionbox(props){

    const cardColor = {
        background: props.color,
    } 

 

    return <div style={cardColor} onClick={props.openPopup} className="project-section">
        <h2 className="section-title">{props.sectionTitle} </h2>
        <p className="section-subtasks">subtasks - {props.subtaskNum}</p>
        
    </div> 
}

export default Projectsectionbox;
 