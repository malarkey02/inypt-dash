import React from "react";
import '../styles/dashboard.css'; 
import Leaderboard from './leaderboard';
import Progressbar from './progressbar';
import Tasklist from './tasklist';
import Academy from './academy'; 
import Projects from './projects';
import Calendar from './calendar';
import Upload from './upload';
import Meetings from './meetings';
import Colorkey from './colorkey';

function Dashboard(){
    return (<div className="bg-canvas">
    <h1 className="welcome-message"> Welcome, Ishi! </h1>
   
    <Leaderboard />
    <Progressbar />
    <Tasklist />
    <Academy />
    <Projects />
    <Calendar />
    <Upload/>
    <Meetings />
    

    
    </div>
  );
}

export default Dashboard; 