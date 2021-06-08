import React from "react";
import '../../styles/internal-styles/academy-lesson.css';




function Academylesson(props){

 
    return <div>

        <div className="lesson-entry">
        <div className="lessontag"></div>
          <div className="textcentering-div">
            <span className="lesson-name">{props.name}</span>
            <span className="lesson-length">{props.length}</span>
            <span className="progress">{props.progress}</span>
          </div>

        </div>

    </div>
}

export default Academylesson; 
