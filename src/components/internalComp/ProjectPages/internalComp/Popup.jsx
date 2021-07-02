import React from "react";
import "./styles/popup.css"
import Popupdropdown from "./Popupdropdown";


function Popup(props){

      

   return <div className="popup-box">
        <div className="box">
          <h2 className="popup-title">Some Title </h2><span className="close-icon" onClick={props.closePopup}>x</span>
          <p className="popup-subtitle">Preliminary Phase</p>
    
          <Popupdropdown title="Major Subtask" due="12/09/69"
           desc="Props Description consectetur adipiscing elit. Donec porttitor diam dolor, non fermentum libero consectetur sit amet."
           submit="Props Description consectetur adipiscing elit. Donec"/>

          <Popupdropdown title="Major Subtask" due="12/09/69"
           desc="Props Description consectetur adipiscing elit. Donec porttitor diam dolor, non fermentum libero consectetur sit amet."
           submit="Props Description consectetur adipiscing elit. Donec"/>  
        </div>
      </div>
}

export default Popup;