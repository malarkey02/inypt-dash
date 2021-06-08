import React from "react";
import '../styles/progressbar.css';
import Progresselement from "./internalComp/progresschart-element";
import Progresspiechart from "./internalComp/progresspichart";




function ProgressBar(){
    return <div className="progress-bar">
        <div className="centering-div">
            <Progresselement/>
            <Progresselement/>
        </div>
    </div>
}

export default ProgressBar; 
