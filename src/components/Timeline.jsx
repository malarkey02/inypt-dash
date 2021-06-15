import React from "react";
import "../styles/timeline.css";
import Statement from "./internalComp/Statement.jsx";
import StatementFeature from "./internalComp/Statementfeatures.jsx";
import ProjectTimeline from "./internalComp/Projecttimeline.jsx";
import ProjectFeatures from "./internalComp/Projectfeatures.jsx";

function Timeline() {
  var smt = "Hello werld";
  var projTitle = "Synchronised Candles";
  var features = [
    {
      title: "Problem Operative Condition",
      desc: "The study of why this phenmenon ends up in an in-phase or anti-phase synchronisation is the aspect that will ensure problem completion",
      bannerColor: "#7000fe",
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
      bannerColor: "#F2994A",
      id: 3,
    },
  ];
  return (
    <div className="project-timeline">
      <div className="proj-title">{projTitle}</div>
      <Statement data={smt} />
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

      <ProjectTimeline />
      <ProjectFeatures />
    </div>
  );
}

export default Timeline;
