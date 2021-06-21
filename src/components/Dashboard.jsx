import React from "react";
import '../styles/dashboard.css'; 
import Leaderboard from './leaderboard';
import Progressbar from './progressbar';
import Tasklist from './tasklist';
import Academy from './academy'; 
import Projects from './projects';
import Calendar from './_calendar';
import Upload from './upload';
import Meetings from './meetings';


function Dashboard({userid}){
    return (<div className="bg-canvas">
    <h1 className="welcome-message"> Welcome, user! </h1>
   
   
    <Leaderboard />
    <Progressbar userid={userid}/>
    <Tasklist userid={userid}/>
    <Academy />
    <Projects userid={userid}/>
    <Calendar userid={userid}/>
    <Upload userid={userid}/>
    <Meetings userid={userid}/>
    

    
    </div>
  );
}

export default Dashboard; 