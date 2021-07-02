import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import '../styles/projects.css';
import Projecttext from "./compText/projecttext";
import Projectentry from "./internalComp/projectentry";

import active from '../img-assets/Active-task-logo.svg';
import complete from '../img-assets/Complete-task-logo.svg';

function Projects({userid}){


    const history = useHistory();

    
    const [projectList, setProjectlist] = useState([]);
  

    useEffect(()=>{ 
  
       fetch('http://localhost:3002/getprojects', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({useridValue: userid})
          })
          .then(backData => backData.json())
          .then(result=> {
  
              setProjectlist(result.tasklist); 
             
          }) 
          
  }, [])

  function createProjectEntry(singleProjectObj){
      
        const statusimg = (singleProjectObj.status === 'active') ? active : complete; 
        return <Projectentry projectkey={singleProjectObj.projColor} 
                             status={statusimg}
                             projectname={singleProjectObj.projName}
                             projectphase={singleProjectObj.projPhase}
                             theoryProg={singleProjectObj.theoryProg} 
                             practicalProg={singleProjectObj.practicalProg} 
                             projLink={singleProjectObj.projLink}
                              
               />
  }

    return <div className="projects">
        <div className="content-div">
            <Projecttext />
            {/* <Projectentry projectkey="#FF8289" status={active} projectname="IYPT Problem Sinking Bubble" projectphase="Qualitative Analysis" />
             
            <Projectentry projectkey="#F2C94C" status={complete} projectname="IYPT Problem Cartesian Diver" projectphase="Qualitative Theory" /> */}
            
            {projectList.map(createProjectEntry)}


        </div>
    </div>
}

export default Projects; 
