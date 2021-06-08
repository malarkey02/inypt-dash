import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';



function Progresspiechart(props){

    const percentage = props.value;

 return <div  style={{ margin: "auto"}}>
  <CircularProgressbarWithChildren
  value={percentage}
   
  styles={buildStyles({
    

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'round',

    
    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(0, 200, 255, ${percentage / 100})`,
    textColor: '#f88',
    trailColor: '#373737',
    backgroundColor: '#00C2FF',
  })}
>
<p style={{marginTop:-5, fontSize:props.fontsize||20}}>{props.value}%</p>

</CircularProgressbarWithChildren>
 </div> ;
}


export default Progresspiechart; 