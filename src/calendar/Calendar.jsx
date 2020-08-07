import React, { Component } from "react";
import Day from "./Day";
import CalendarHeader from "./CalendarHeader";
import CalendarTimeScale from "./CalendarHours";
import { generateWeekRangeFullDate } from "../logic/Functions";
import "./calendar.scss";

class Calendar extends Component {
  render() {
    const monday = this.props.monday;
    const weekArrayWithFullDate = generateWeekRangeFullDate(monday);
    const prevWeek = this.props.prevWeek;
    const nextWeek = this.props.nextWeek;
    const getCurrentWeek = this.props.getCurrentWeek;
    const events = this.props.events;
    const handleEventDelete = this.props.handleEventDelete;
    return (
      <section className="calendar">
        <CalendarHeader
          prevWeek={prevWeek}
          nextWeek={nextWeek}
          getCurrentWeek={getCurrentWeek}
          monday={monday}
        />
        <div className="calendar__body">
          <div className="lines">
            <CalendarTimeScale />
            <div className="lines">
              {weekArrayWithFullDate.map((daySell) => {
                return (
                  <div key={daySell} className="calendar__day">
                    <div className="calendar__day-line"></div>
                    <Day
                      events={events}
                      day={daySell}
                      handleEventDelete={handleEventDelete}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;
