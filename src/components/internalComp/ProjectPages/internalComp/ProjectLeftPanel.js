import React from "react";

function ProjectLeftPanel(props){


    return(
        <div className="left-panel-div">

            <div className="left-panel-head">
                <h1 classname="username-panel-greeting">
                    Hi, {props.name}
                </h1>
            </div>

            <div className="left-panel-buttons-wrapper">
                <div className="left-panel-button">
                    Dashboard
                </div>

                <div className="left-panel-button">
                    Projects
                </div>
                <div className="left-panel-button">
                    Meetings
                </div>
                <div className="left-panel-button">
                    File Upload
                </div>

                <div className="left-panel-button">
                    Academy
                </div>

            </div>

        </div>
    )
}