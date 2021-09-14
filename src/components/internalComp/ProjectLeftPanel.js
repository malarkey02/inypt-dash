import React, {useEffect, useState} from "react";
import "../../styles/internal-styles/projectleftpanel.css"

//importing left panel icons
import iconDashboard from "../../img-assets/panel-icons/dashboard.svg";
import iconProjects from "../../img-assets/panel-icons/projects.svg";
import iconMeetings from "../../img-assets/panel-icons/meetings.svg";
import iconUpload from "../../img-assets/panel-icons/upload.svg";
import iconAcademy from "../../img-assets/panel-icons/academy.svg";


function ProjectLeftPanel(){

    const [projectList, setprojectList] = useState([]);


    //Using the token and fetching the projects this user is part of 
    const tokenString = localStorage.getItem('token');
    const tokenObj = JSON.parse(tokenString);

    const tokenVal = tokenObj?.token;

    useEffect(()=> {
        fetch('http://localhost:3002/getprojects', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({useridValue: tokenVal})
        })
        .then(response => response.json())
        .then(data => {
        setprojectList(data.tasklist)
         console.log(data.tasklist);
        })
    }, [])
    
    //The map function that populates the list of projects
    function projectlistpopulate(e) {
        console.log(e.projName)
        let listVal = e.projName;
        let listNumVal = e.projID;
        return <div className="panel-projects-list-text"> #{listNumVal} - {listVal}</div>
    }

    //Handling the hover for projects

    const [projectHoverButton, setprojectHoverButton] = useState(false);


    //setting the button hover
    function handleHoverEnterButton(e){

        setTimeout(function() {
        }, 500);
        setprojectHoverButton(true);
    }

    function handleHoverExitButton(e){

        setTimeout(function() {
        }, 500);
        setprojectHoverButton(false);
       
    }


    const projectsClass = "left-panel-projects";
    const projectsClassHover = "left-panel-projects visible";

    return(
        <div className="left-panel-div">

            
            <div className="left-panel-buttons-wrapper">
                <div className="left-panel-button">
                    <div className="left-panel-button-icon">
                        <img className="left-panel-icon-vector" src={iconDashboard} alt=''/>
                    </div>
                    <div className="left-panel-button-text">
                        Dashboard
                    </div>

                </div>
               
                <div className="left-panel-button">
                    <div className="left-panel-button-icon">
                        <img className="left-panel-icon-vector" src={iconMeetings} alt=''/>
                    </div>
                    <div className="left-panel-button-text">
                        Meetings
                    </div>
                </div>
                <div className="left-panel-button">
                   <div className="left-panel-button-icon">
                        <img className="left-panel-icon-vector" src={iconUpload} alt=''/>
                    </div>
                    <div className="left-panel-button-text">
                        File Upload
                    </div>
                </div>

                <div className="left-panel-button">
                    <div className="left-panel-button-icon">
                        <img className="left-panel-icon-vector" src={iconAcademy} alt=''/>
                    </div>
                    <div className="left-panel-button-text">
                        Academy
                    </div>
                </div>

                 {/* Special Project Button wrapper */}
                 <div onMouseOver={handleHoverEnterButton}  onMouseLeave={handleHoverExitButton} className="project-button-wrapper">
                    <div className="left-panel-button-projects">
                        <div className="left-panel-button-icon">
                            <img className="left-panel-icon-vector" src={iconProjects} alt=''/>
                        </div>
                        <div className="left-panel-button-text">
                            Projects
                        </div>
                    </div>

                        <div className={projectHoverButton? projectsClassHover:projectsClass}>
                            {projectList.map(projectlistpopulate)}
                        </div>
                    </div>
                    {/* End of Special Wrapper */}

            </div>

        </div>
    )
}

export default ProjectLeftPanel;
