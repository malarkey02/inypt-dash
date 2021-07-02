import React, {useState} from "react";
import "./internalComp/styles/Problem.css";
import Statement from "./internalComp/Statement.jsx";
import StatementFeature from "./internalComp/Statementfeatures.jsx";
import Timeline from "./internalComp/Timeline";
// import ProjectTimeline from "./internalComp/Projecttimeline.jsx";
// import ProjectFeatures from "./internalComp/Projectfeatures.jsx";

import Projectsection from "./internalComp/Projectsection";

import Popup from './internalComp/Popup.jsx';
import Projectsectionbox from "./internalComp/Projectsectionbox";

function Problem5() {
    var noHighlight = ["Oscillatory flames can be observed ", " Two such oscillators can couple with each other, resulting in ", " (depending on the distance between the sets of candles). Explain and "];
    var highlights = ["when several candles burn next to each other.", "in-phase or anti-phase synchronisation", " investigate this phenomenon."]

    var projTitle = "Synchronised Candles";
    var features = [
      {
        title: "Problem Operative Condition",
        desc: "The study of why this phenmenon ends up in an in-phase or anti-phase synchronisation is the aspect that will ensure problem completion",
        bannerColor: "#F2994A",
        id: 1,
      },
      {
        title: "Problem Fullfillment Aspect",
        desc: "The study of why this phenmenon ends up in an in-phase or anti-phase synchronisation is the aspect that will ensure problem completion",
        bannerColor: "#27AE60",
        id: 2,
      },
      {
        title: "Investigative Phenomenon",
        desc: "The buring of several candles next to each other, is the action part of the experiement",
        bannerColor: "#7000fe",
        id: 3,
      },
    ];


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
        <Statement data={noHighlight} breakdownData={highlights}/>
        <div className="features-row">
          {features.map((feature) => (
            <StatementFeature
              title={feature.title}
              desc={feature.desc}
              banner={feature.bannerColor}
              id={feature.id}
            />
          ))}
        </div>

            <Timeline />
  
        {/* <ProjectTimeline /> */}
        {/* <ProjectFeatures /> */}

            <div className="project-sections">
                <Projectsection />
                <Projectsection />
                <Projectsection />
                <Projectsection />
            </div>

      </div>
      );
    }
    export default Problem5;