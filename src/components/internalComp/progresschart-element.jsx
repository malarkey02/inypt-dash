import React from "react";
import Progresspiechart from "./progresspichart";
import "../../styles/internal-styles/progresschart-element.css"

 
function Progresselement(props){
   

 return <div className="progress-card"> 
    <div className="piechart-div">
    <Progresspiechart  value={props.value}/>
    
    </div>
    <div className="progress-text-div">
        <h2> {props.theoryOrPrac} Completed </h2>
        <p>  Cumulative {props.theoryOrPrac} Theory </p>
    </div>

 </div>
}


export default Progresselement; 
