import React, {useState} from "react";
import Progresspiechart from "../../../internalComp/progresspichart";
import Projecttaskentry from "./Projecttaskentry";

import "./styles/projectstatusbox.css";

function Projectstatusbox(props){

    // Check Props flow for this section - MAKE NEW COMPONENTS

    const [tasktoggle, settasktoggle] = useState(true); 

    function handleCompletedClick(){
        settasktoggle(false);
    }

    function handleUpcomingClick(){
        settasktoggle(true);
    }



    return <div className="status-box">

        <h2 className="status-box-title">Project Status</h2>
        <div className="piechart-status">

            <div className="theory-card"> 
                <div className="piechart-div">
                    <Progresspiechart  value="56"/>
                </div>
                <div className="status-text-div">
                    <h2> Theory Completed </h2>
                    <p>  Problem #14 Theory </p>
                </div>
            </div>

            <div className="practical-card"> 
                <div className="piechart-div">
                    <Progresspiechart  value="66"/>
                </div>
                <div className="status-text-div">
                    <h2> Practical Completed </h2>
                    <p>  Problem #14 Practical </p>
                </div>
            </div>
        </div>


      <div className="project-task-box">

        {/* Upcoming Projects render this title */}
        {!tasktoggle && <div className="task-headings-completed">
            
                <div className="task-heading-name">
                    <span>Task Name</span>
                </div>
                <div className="marked-on">
                    <span>Marked On</span>
                </div>
                <div className="admin-eval">
                    <span>Admin Evaluation</span>
                </div>
            
        </div>}
        
        {tasktoggle && <div className="task-headings-completed">
            
                <div className="task-heading-name">
                    <span>Task Name</span>
                </div>
                <div className="due-on">
                    <span>Due On</span>
                </div>
                <div className="task-project-section">
                    <span>Project Section</span>
                </div>
            
        </div>}

 

            {/* completed tasks */}

            {!tasktoggle && <div className="scrollbox-project-tasks">
                    <Projecttaskentry taskName="Equation 4 Analysis"
                        date="25/8"
                        admin="To be Re-Done"
                        section="Quantitative Analysis"
                        taskDesc="Some long long long desc about how to do this"
                    />
                    <Projecttaskentry taskName="Include Airflow Control"
                        date="26/9"
                        admin="Marked Complete"
                        section="Experiment"
                        taskDesc="Description about how to build a windtunnel and let them actually do it"
                    />
                             
            </div>}

            {/* upcoming tasks */}
            {tasktoggle && <div className="scrollbox-project-tasks">
                    <Projecttaskentry taskName="Equation 6 Derivation"
                        date="23/9"
                        
                        section="Quantitative Analysis"
                        taskDesc="Some long long long desc about how to do thi"
                    />
                    <Projecttaskentry taskName="Force 6 Explanation"
                        date="23/9"
                        
                        section="Qualitative Model"
                        taskDesc="Some long long long desc about how to do thi sasdasd"
                    />
                             
            </div>}

       </div>

       

       <div className="scrollbox-toggle-tasks">
                <div className={tasktoggle? "toggle-completed-tasks-inactive":"toggle-completed-tasks-active"} onClick={handleCompletedClick} >
                    <p>Completed Tasks</p>
                </div>

                <div className={tasktoggle ? "toggle-upcoming-tasks-active":"toggle-upcoming-tasks-inactive"} onClick={handleUpcomingClick}>
                    <p>Upcoming Tasks</p>
                </div>
            </div>
    </div>
}


export default Projectstatusbox; 