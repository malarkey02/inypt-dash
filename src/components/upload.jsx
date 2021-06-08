import React from "react";
import '../styles/upload.css';
import uploadIcon from "../img-assets/upload-icon.svg";
import Dropdown from "../components/internalComp/dropdowns";
import Uploadbox from "../components/internalComp/upload-box";

function Upload(){

    const arr = ["Presentation", "Video"]; 
    const arr1 = ["Project #5", "Project #12"];
    const arr2=["#2 Quant Eq...", "Add Qualitative"]

    return (<div className="upload">
        <div className="content-div">
         <h2>Upload Panel</h2>
         

         <div className="upload-text">
            
             <ol> 
                <li>Select the Project, Type, and Task</li>
                <li> Select the file to upload</li> 
                <li>Click 'Upload' (wait ~3 min)</li>
             </ol>
         </div>

            <Uploadbox icon={uploadIcon} />

         <div className="dropdowns">
            <div className="drop-div project-drop">
             <Dropdown dropdownName="Project" id="filetype" options={arr1} />
            </div>
            <div className="drop-div type-drop">
             <Dropdown dropdownName="Type" width="80px" id="filetype" options={arr} />
            </div>
            <div className="drop-div task-drop">
             <Dropdown dropdownName="Task" width="80px" id="tasktype" options={arr2} />
            </div>

         </div>
        </div>
    </div>);
}

export default Upload; 
