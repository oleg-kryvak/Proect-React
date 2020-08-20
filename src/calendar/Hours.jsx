import React from "react";
import Popup from "../modal/Popup";

const Hours = (day) => {
  const events = !day.events
    ? ""
    : day.events.map((event) => {
        return (
          <div key={event.id} className="event" onClick={this.toggleDeleteBtn}>
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
      });

  return (
    <div key={`${day}` + `${day.hours}`} className="calendar__day-sell">
      {events}
    </div>
  );
};

export default Hours;
