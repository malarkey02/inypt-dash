import React from "react";
import "../styles/timeline.css";
import Statement from "./internalComp/Statement";
import StatementFeatures from "./internalComp/Statementfeatures";
import ProjectTimeline from "./internalComp/Projecttimeline";
import ProjectFeatures from "./internalComp/Projectfeatures";

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
