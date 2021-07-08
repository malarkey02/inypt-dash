import React, {useState} from "react";
import "./internalComp/styles/Problem.css";
import Statement from "./internalComp/Statement.jsx";
import StatementFeature from "./internalComp/Statementfeatures.jsx";
import Timeline from "./internalComp/Timeline";
// import ProjectTimeline from "./internalComp/Projecttimeline.jsx";
// import ProjectFeatures from "./internalComp/Projectfeatures.jsx";

import Projectsection from "./internalComp/Projectsection";
import Projectstatus from "./internalComp/Projectstatusbox";

import Projectcards from "./internalComp/Projectcards";

import Popup from './internalComp/Popup.jsx';
import Projectsectionbox from "./internalComp/Projectsectionbox";

function Problem5() {
   

    var projTitle = "Synchronised Candles";
    


    const [popup, setpopup] = useState(false);
    function setPopupTrue(){
        setpopup(true);
    }

    function setPopupFalse(){
        setpopup(false);
    }

    return (
      <div className="project-timeline">
        
        <div className="proj-title">{projTitle}</div>
       
          <div className="status-cards-wrapper">
            <Projectstatus />
            <Projectcards />
          </div>
    

            <Timeline />
  
        {/* <ProjectTimeline /> */}
        {/* <ProjectFeatures /> */}

            <div className="project-sections">
                <Projectsection color="linear-gradient(201.97deg, #00C454 -5.47%, rgba(0, 196, 184, 0) 135.44%, rgba(213, 25, 25, 0.58) 135.44%)" 
                  title="Qualitative Theory"
                  subtasks="3"
                />
                <Projectsection color="linear-gradient(218.17deg, #00C2FF 14.96%, rgba(0, 194, 255, 0) 116.11%)" 
                  title="Experiments"
                  subtasks="4"/>
                <Projectsection color=" linear-gradient(186.35deg, #FF3D00 11.56%, rgba(255, 1, 225, 0.44) 133.58%)" 
                  title="Quantitative Model"
                  subtasks="3"/>
                <Projectsection color="linear-gradient(218.17deg, #7000FF 14.96%, rgba(44, 183, 226, 0) 116.11%)" 
                  title="Analysis"
                  subtasks="1"/>
            </div>
          
      </div>
      );
    }
    export default Problem5;