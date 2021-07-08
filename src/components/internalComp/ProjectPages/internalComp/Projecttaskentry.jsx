import React, {useState} from "react"; 
import "./styles/projecttaskentry.css";
import dropdownSVG from "./assets/dropdown-carot-white.svg";


function Projecttaskentry(props){

    const [dropdown, setdropdown] = useState(false); 

    function toggleDropdown(){
        setdropdown(!dropdown);
    }

// return <div> 
//            <div className="popup-subtask" onClick={toggleDropdown}> <span>Problem</span> <span className="dropdown-carot"> <img style={dropdown ?{transform: "rotate(180deg)"}:{}} src={dropdownSVG} alt=''></img></span></div>
//           { dropdown && <div className="popup-subtask-expand">
//                <p className="popup-subtask-expand-firstline"><span className="popup-subtask-expand-title">{props.title}</span> <span className="popup-subtask-expand-due">due - {props.due}</span> </p>
//                <p className="popup-subtask-expand-info description"><b>Description - </b> {props.desc}</p>
//                <p className="popup-subtask-expand-info submission"><b>Submission - </b> {props.submit}</p>

//            </div>}
//       </div>
           
// }

    return <div> 
            <div className="project-task-entry" onClick={toggleDropdown}>
                
                <div className="project-task-name">{props.taskName}</div>
                
                <div className="project-task-marked-date">{props.date}</div>
                <div className="project-task-admin-OR-section">{props.admin ? props.admin : props.section}</div>
                <div className="project-task-dropdown-icon"><img style={dropdown ?{transform: "rotate(180deg)"}:{color: "#fff"}} src={dropdownSVG} alt=''></img></div>
        </div>
        {
            dropdown && <div className="project-task-dropdown">
                <p> <strong>Section - </strong>{props.section}</p>
                <p> <strong>Task - </strong>{props.taskDesc}</p>

            </div>
        }


  </div>
}

export default Projecttaskentry; 