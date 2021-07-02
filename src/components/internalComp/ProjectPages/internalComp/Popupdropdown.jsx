import React, {useState} from "react";
import dropdownSVG from "./assets/dropdown-carot.svg";



function Popupdropdown(props){

    const [dropdown, setdropdown] = useState(false); 

      function toggleDropdown(){
          setdropdown(!dropdown);
      }

 return <div> 
             <div className="popup-subtask" onClick={toggleDropdown}> <span>Problem</span> <span className="dropdown-carot"> <img style={dropdown ?{transform: "rotate(180deg)"}:{}} src={dropdownSVG} alt=''></img></span></div>
            { dropdown && <div className="popup-subtask-expand">
                 <p className="popup-subtask-expand-firstline"><span className="popup-subtask-expand-title">{props.title}</span> <span className="popup-subtask-expand-due">due - {props.due}</span> </p>
                 <p className="popup-subtask-expand-info description"><b>Description - </b> {props.desc}</p>
                 <p className="popup-subtask-expand-info submission"><b>Submission - </b> {props.submit}</p>

             </div>}
        </div>
             
}

export default Popupdropdown;