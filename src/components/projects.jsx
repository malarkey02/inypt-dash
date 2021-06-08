import React from "react";
import '../styles/projects.css';
import Projecttext from "./compText/projecttext";
import Projectentry from "./internalComp/projectentry";

import active from '../img-assets/Active-task-logo.svg';
import complete from '../img-assets/Complete-task-logo.svg';

function Projects(){
    return <div className="projects">
        <div className="content-div">
            <Projecttext />
            <Projectentry projectkey="#FF8289" status={active} projectname="IYPT Problem Sinking Bubble" projectphase="Qualitative Analysis" />
             
            <Projectentry projectkey="#F2C94C" status={complete} projectname="IYPT Problem Cartesian Diver" projectphase="Qualitative Theory" />


        </div>
    </div>
}

export default Projects; 
