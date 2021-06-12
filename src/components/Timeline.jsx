import React from "react";
import "../styles/timeline.css";
import Statement from "./internalComp/Statement.jsx";
import StatementFeatures from "./internalComp/Statementfeatures.jsx";
import ProjectTimeline from "./internalComp/Projecttimeline.jsx";
import ProjectFeatures from "./internalComp/Projectfeatures.jsx";

function Timeline() {
  return (
    <div className="project-timeline">
      <Statement />
      <StatementFeatures />
      <ProjectTimeline />
      <ProjectFeatures />
    </div>
  );
}

export default Timeline;
