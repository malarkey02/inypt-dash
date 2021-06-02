import React from "react";
import '../styles/leaderboard.css'; 
import Leadentry from './internalComp/lead-entry.jsx';
import Leaderboardtext from './compText/leaderboardtext';


function Leaderboard(){ 
    return <div className="leaderboard">
        {/* <div className="leaderboard-text">
        <h3>Leaderboard</h3>
        <p> Race to <span>Captaincy</span> </p>
        </div> */}
        <Leaderboardtext/>
        <Leadentry />
        <Leadentry/>
        
    </div>;
}

export default Leaderboard; 