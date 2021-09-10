
import React, {useState} from "react";
import './styles/entrytimelineweek.css';


function Entrytimeline(props){

    const [hoverCard, setHoverCard] = useState(false);
    const [x, setX] = useState(0); 
    const [y, setY] = useState(0);

    function handleHoverEnter(e){

        setTimeout(function() {
        }, 500);
        setHoverCard(true);
       
    }

    function handleHoverExit(e){

        setTimeout(function() {
        }, 500);
        setHoverCard(false);
       
    }

    const topSpacing = props.top;
    const leftSpacing = props.left; 


    const topCorrect = parseInt(topSpacing.substring(0, topSpacing.indexOf("r")));
    // const leftCorrect = parseInt(leftSpacing.substring(0, leftSpacing.indexOf("r")));
    const leftCorrect = leftSpacing;

    function handlePosition(e){

        
        setX(e.nativeEvent.offsetX + 50 + (leftCorrect));
        // setX(e.nativeEvent.offsetX + 50 + (leftCorrect));

        setY(e.nativeEvent.offsetY - 50 + (topCorrect * 16)); 
    }

   
    
    const borderStyle = "solid 2px" + props.color;
    return <div>  
             <div style={{top:props.top, left:props.left, border:borderStyle}} onMouseOver={handleHoverEnter} onMouseMove={handlePosition} onMouseLeave={handleHoverExit} className="task-on-timelineday">
                    <div className="contentcover"></div>
                    <div className="daily-task-text-wrapper">
                    <p className="task-title">{props.phase}</p> 
                    <p className="task-desc">{props.desc} </p>
                    </div>
                    
             </div>
            
                {hoverCard && <div style={{top: y, left:x}} className="task-on-hover">

                        <div style={{height: "10px", background: props.color, borderRadius: "5px 5px 0px 0px"}}> </div>
                        <h2 className="hover-title">{props.title}</h2>
                        <p className="hover-subtitle">{props.phase} Phase</p>

                        <p className="hover-desc"> {props.desc} </p>
                        
                    {/* <div className="hover-subtasks">
                    <table>
                            <colgroup>
                                <col style={{width: "130px", textAlign:"left", height:"20px"}}/>
                                <col style={{width: "45px", textAlign:"left", height:"20px"}}/>
                            </colgroup>
                        <tr>    
                            <td> <span id="subtask-title">SUB-TASK</span> </td>
                            <td> <span id="due-title">DUE</span></td>
                        </tr>
                        
                        {props.subtasks.map(e=>{
                            return <tr>
                                <td className="hover-subtask">{e.subtask}</td>
                                <td className="hover-due">{e.due}</td>
                             </tr>
                                   
                        })}
                    </table> 
                 </div> */}
                        


                </div>} 
            </div>

}

export default Entrytimeline;


                  