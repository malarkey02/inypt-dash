import React from "react";
import Progresspiechart from "./progresspichart";
import "../../styles/internal-styles/progresschart-element.css"

 
function Progresselement(){
   

 return <div className="progress-card"> 
    <div className="piechart-div">
    <Progresspiechart className="piechart" value="56"/>;
    </div>
    <div className="progress-text-div">
        <h2> Theory Completed </h2>
        <p> Cumulative Projects Theory </p>
    </div>

 </div>
}


export default Progresselement; 
