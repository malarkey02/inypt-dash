import React, {useState} from "react";
import "./styles/projectcards.css";
import "./styles/statement-features.css";

import Statement from "./Statement";
import StatementFeature from "./Statementfeatures";

function Projectcards(props){

   

    //Data 

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

      var noHighlight = ["Oscillatory flames can be observed ", " Two such oscillators can couple with each other, resulting in ", " (depending on the distance between the sets of candles). Explain and "];
      var highlights = ["when several candles burn next to each other.", "in-phase or anti-phase synchronisation", " investigate this phenomenon."];

      //END OF DATA


      const [statementPopup, setstatementPopup] = useState(false);

      function openPopup(){
          setstatementPopup(true); 
      }

      function closePopup(){
          setstatementPopup(false);
      }

    return <div className="project-cards">
        <div className="project-card" onClick={openPopup}>
      <div
        className="feat-banner"
        style={{ backgroundColor: "#F2994A" }}
      ></div>
      <div className="feat-text-wrapper">
        <h2 className="feat-title">Statement Breakdown</h2>
        <p className="feat-desc">Break the problem into actionable components and gain perspective on your problem</p>
      </div>
    </div>

    {statementPopup && <div className="popup-box">
    <span className="statement-close-icon" onClick={closePopup}>x</span>
    <div className="problem-statement-box">
    
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
    </div>
    </div>}


    <div className="project-card">
      <div
        className="feat-banner"
        style={{ backgroundColor: "#fff" }}
      ></div>
      <div className="feat-text-wrapper">
      <h2 className="feat-title">Mirrors</h2>
      <p className="feat-desc">I don't wanna lose you now, I'm looking right at the other half of me</p>
      </div>

    </div>

    <div className="project-card">
      <div
        className="feat-banner"
        style={{ backgroundColor: "#fff" }}
      ></div>
      <div className="feat-text-wrapper">
      <h2 className="feat-title">Mirrors</h2>
      <p className="feat-desc">I don't wanna lose you now, I'm looking right at the other half of me</p>
      </div>
    </div>

    </div>
}

export default Projectcards;