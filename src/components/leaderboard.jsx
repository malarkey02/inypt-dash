import React from "react";
import '../styles/leaderboard.css'; 
import Leadentry from './internalComp/lead-entry.jsx';
import Leaderboardtext from './compText/leaderboardtext';

import Avatar2 from '../img-assets/Avatar2.jpg';
import Avatar1 from '../img-assets/Avatar1.jpg';
import Avatar3 from '../img-assets/Avatar3.jpg';



function Leaderboard(){ 
    return <div className="leaderboard">
        {/* <div className="leaderboard-text">
        <h3>Leaderboard</h3>
        <p> Race to <span>Captaincy</span> </p>
        </div> */}
        <Leaderboardtext/>
        <Leadentry id="1" position="1" playername="Ralphrod" points="400 pts" avatar={Avatar2} />
        <Leadentry id="2" position="2" playername="You" points="360 pts" avatar={Avatar1} active/>
        <Leadentry id="3" position="3" playername="Axlhack" points="330 pts" avatar={Avatar3}/>

    </div>;
}

export default Leaderboard; 