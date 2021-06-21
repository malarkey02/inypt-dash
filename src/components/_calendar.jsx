import React, {useState} from "react";
import '../styles/calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Colorkey from './colorkey';
import { differenceInCalendarDays } from 'date-fns';

function isSameDay(a, b) {
   return differenceInCalendarDays(a, b) === 0;
 
}



function _Calendar(){
  const [value, setValue] = useState(new Date());
  
  function onChange(nextValue) {
    setValue(nextValue);
  }


  const color1 = {
    _id: "proj1",
    startDay: 15, 
    endDay: 20,
    month: 5,
    className: "projA"
  }

  const color2 = {
    _id: "proj2",
    startDay: 21, 
    endDay: 25,
    month: 5,
    className: "projB"
  }

  const tileColoring = [color1, color2];

  let arrayOfDateArrays = [];
 

function arrayDate(){
   //using an array of objects to color the tiles
   tileColoring.forEach( e=> {

    let dateArray = [];
  
    for(var i = e.startDay; i <= e.endDay; i++){
      var date = new Date (2021, e.month, i);
      dateArray.push(date);
      }
      arrayOfDateArrays.push(dateArray); 
     
  })// end of forEach with the array of objects
}

function tileClassName({ date, view }) {
 
 
  arrayDate();
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
   
    for(var j = 0; j < arrayOfDateArrays.length; j++){

      if (arrayOfDateArrays[j].find(dDate => isSameDay(dDate, date))) {
        return tileColoring[j].className;
      }

    }
  }

 
}

  
    return <div className="calendar">
        
        <Calendar className="the-actual-calendar"
      onChange={onChange}
      value={value}
      tileClassName={tileClassName}
     />

     <Colorkey />
    </div>
}

export default _Calendar; 
