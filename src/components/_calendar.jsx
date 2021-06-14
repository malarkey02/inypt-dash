import React, {useState} from "react";
import '../styles/calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Colorkey from './colorkey';
import { differenceInCalendarDays } from 'date-fns';

function isSameDay(a, b) {
   return differenceInCalendarDays(a, b) === 0;
 
}

let datesToAddClassTo = [];

 
//function to add a range of dates
function dataeRange(startDay, endDay, month){
  for(var i=startDay;i<=endDay;i++ ){
    var date = new Date(2021, month, i);
    datesToAddClassTo.push(date);
  }
}

function tileClassName({ date, view }) {
  // Add class to tiles in month view only

  //function to add a range of dates Params - Start DD, End DD, Month MM 
  dataeRange(2, 4, 5); 
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddClassTo.find(dDate => isSameDay(dDate, date))) {
      return "myClassName";
    }
  }
}



function _Calendar(){
  const [value, setValue] = useState(new Date());
  


  function onChange(nextValue) {
    setValue(nextValue);
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
