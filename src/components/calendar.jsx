import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";

function _Calendar() {
  return (
    <div className="calendar-container">
      <div>
        <Calendar />
      </div>
    </div>
  );
}

export default _Calendar;
