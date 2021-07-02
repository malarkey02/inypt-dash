import React, {useState} from "react";
import Projectsectionbox  from "./Projectsectionbox";
import Popup from "./Popup";


function Projectsection(){
    const [popup, setpopup] = useState(false);
    function setPopupTrue(){
        setpopup(true);
    }

    function setPopupFalse(){
        setpopup(false);
    }
    return <div style={{margin: "1rem"}}>
    <Projectsectionbox color="linear-gradient(201.97deg, #00C454 -5.47%, rgba(0, 196, 184, 0) 135.44%, rgba(213, 25, 25, 0.58) 135.44%)"
        sectionTitle="Qualitative Model"
        subtaskNum="3"
        openPopup={setPopupTrue}
    />
    {
         popup && <Popup closePopup={setPopupFalse}/>
     }
</div>
}

export default Projectsection;
