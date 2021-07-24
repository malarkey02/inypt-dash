import React, {useState} from "react";

import TimelinegridweekTwelve from "./TimelinegridweekTwelve";
import TimelinegridweekSix from "./TimelinegridweekSix";

import arrow from "./assets/dropdown-carot-white.svg";





//THIS WILL ONLY BE USED TO DETERMINE THE 6 WEEK PROJECT VIEW OR THE 12 WEEK

function TimelinegridtoggleWeek(props){

    let x = 14;
    let six_week = 0;
    let twelve_week = 0;

while(x>0){
   if(x<=4){
       break;
   }
   if(x<=6){
     six_week++;
       break;
   }
   if(x<=12){
       twelve_week++;
       break;
   }
   if(x<=18){
    six_week++;
    twelve_week++;
    break;
   }
   if(x<=24){
       twelve_week = 2;
       break;
   }
}

const [gridToggle, setgridToggle] = useState(false); 

function handleLeftClick(){
    setgridToggle(false);
}

function handleRightClick(){
    setgridToggle(true);
}

        //if only a six week char exists
        if(six_week===1 && twelve_week===0){
            return <TimelinegridweekSix/>;
        }

        //if only a twelve week char exists
        if(six_week===0 && twelve_week===1){
            // no arrows and one single 12 weekgrid
            return <TimelinegridweekTwelve/>;
        }

        //if only a twelve week char exists

        if(six_week===1 && twelve_week===1){
            // ARROWS and 0 means render 12 week, index 1 means render 6 week

            

            return <div className="grid-wrapper">
                <div onClick={handleLeftClick}>
                    <img src={arrow} className="grid-toggle-arrow-left" alt=''></img>
                </div>
                {gridToggle ? <TimelinegridweekSix/> : <TimelinegridweekTwelve/>}

                <div onClick={handleRightClick}>
                    <img src={arrow} className="grid-toggle-arrow-right" alt=''></img>
                </div>


            </div>
        }

        if(six_week===0 && twelve_week===2){
            // ARROWS and 0 means render 12 week, index 1 means render other 12 week
            return <div>
                <div onClick={handleLeftClick}>
                    left arrow
                </div>
                {gridToggle ? <TimelinegridweekTwelve date="some earlier date"/> : <TimelinegridweekTwelve date="some later date"/>}

                <div onClick={handleRightClick}>
                    right arrow
                </div>


            </div>
        }

}

export default TimelinegridtoggleWeek; 