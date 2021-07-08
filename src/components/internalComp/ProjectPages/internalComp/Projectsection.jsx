import React, {useState} from "react";
import Projectsectionbox  from "./Projectsectionbox";
import Popup from "./Popup";


function Projectsection({color, title, subtasks}){
    const [popup, setpopup] = useState(false);
    function setPopupTrue(){
        setpopup(true);
    }

    function setPopupFalse(){
        setpopup(false);
    }
    return <div style={{margin: "1rem"}}>
    <Projectsectionbox color={color}
        sectionTitle={title}
        subtaskNum={subtasks}
        openPopup={setPopupTrue}
    />
    {
         popup && <Popup closePopup={setPopupFalse}/>
     }
</div>
}

export default Projectsection;
