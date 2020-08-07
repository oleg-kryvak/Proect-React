import React, { Component } from "react";
import moment from "moment";
import { generateNumbersRange } from "../logic/Functions";
import Popup from "../modal/Popup";
import "../calendar/calendar.scss";

class Day extends Component {
  state = {
    showBox: false,
    redLine: new Date(),
    showRedLine: false,
    top: 0,
  };
  getHoursWithEventsArray = (event, dayDate) => {
    const formatDate = moment(dayDate).format("YYYY-MM-DD");
    const filterEvents = event.filter(
      (eventObj) => eventObj.date === formatDate
    );
    const hoursArray = generateNumbersRange(0, 23).map((num) => {
      if (num - 10 < 0) {
        return {
          hours: `0${num}:00`,
          events: filterEvents.filter(
            (eventObj) => eventObj.startTime.substr(0, 2) === `0${num}`
          ),
        };
      } else
        return {
          hours: `${num}:00`,
          events: filterEvents.filter(
            (eventObj) => eventObj.startTime.substr(0, 2) === num + ""
          ),
        };
    });

    return hoursArray;
  };

  toggleDeleteBtn = () => {
    console.log(this.state);

    this.setState({ showBox: !this.state.showBox });
  };

  componentDidMount() {
    this.showOrHideRedLine();
    this.getSecondsToday();
    setInterval(() => {
      this.getSecondsToday();
    }, 60000);
  }

  showOrHideRedLine = () => {
    if (
      moment(this.props.day).format("YYYY-MM-DD") ===
      moment(this.state.redLine).format("YYYY-MM-DD")
    ) {
      this.setState({
        showRedLine: true,
      });
    }
  };

  getSecondsToday = () => {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;

    if (
      moment(this.props.day).format("YYYY-MM-DD") ===
      moment(this.state.redLine).format("YYYY-MM-DD")
    ) {
      this.setState({
        top: Math.round(diff / 60000 + 223),
      });
    }
  };

  render() {
    const fullHoursArray = this.getHoursWithEventsArray(
      this.props.events,
      this.props.day
    );
    const handleEventDelete = this.props.handleEventDelete;

    return (
      <>
        <div className="calendar__day-sell empty"></div>
        {this.state.showRedLine ? (
          <div className="red-line" style={{ top: `${this.state.top - 10}px` }}>
            <div className="red-circle"></div>
          </div>
        ) : (
          ""
        )}
        {fullHoursArray.map((day) => {
          return (
            <div key={`${day}` + `${day.hours}`} className="calendar__day-sell">
              {day.events.map((event) => {
                return (
                  <div
                    key={event.id}
                    className="event"
                    onClick={this.toggleDeleteBtn}
                  >
                    {`${event.title} 
                                   ${event.startTime} -- ${event.endTime}`}
                    {this.state.showBox ? (
                      <Popup
                        showBox={this.state.showBox}
                        id={event.id}
                        handleEventDelete={handleEventDelete}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }
}
export default Day;
