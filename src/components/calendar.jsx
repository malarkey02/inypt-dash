import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";

function _Calendar() {
  function titleClassName({ dat, view }) {
    if (view === "month") {
      if (datesToAddClassTo.find((dDate) => isSameDay(dDate, date))) {
        return " ";
      }
    }
  }

  return (
    <div className="calendar-container">
      <div>
        <Calendar />
      </div>
    </div>
  );
}

export default _Calendar;
