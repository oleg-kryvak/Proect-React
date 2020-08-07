import React, { Component } from "react";
import { generateWeekRangeFullDate } from "../logic/Functions";
import moment from "moment";
import "../calendar/calendar.scss";

class CalendarHeader extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        weeks: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        circle: new Date(),
      });
  }

  render() {
    const headerDays = this.state.weeks.slice();
    const monday = this.props.monday;

    const weekArray = generateWeekRangeFullDate(monday);
    const weeksNum = weekArray.slice();

    let i = 0;
    return (
      <header className="calendar__header">
        {weeksNum.map((day) => {
          return (
            <div key={day} className="calendar__header-day">
              {headerDays[i++]}
              <div className="calendar__header-num">{day.getDate()}</div>
              {moment(this.state.circle).format("YYYY-MM-DD") ===
                moment(day).format("YYYY-MM-DD") && (
                <div className="circle"></div>
              )}
            </div>
          );
        })}
      </header>
    );
  }
}

export default CalendarHeader;
