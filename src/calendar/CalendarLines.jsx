import React, { Component } from "react";

const CalendarLines = () => {
  const horizontalLines = (
    <>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
      <div className="lines__hor"></div>
    </>
  );
  return (
    <div className="lines">
      <div className="lines__ver">{horizontalLines}</div>
      <div className="lines__ver">{horizontalLines}</div>
      <div className="lines__ver">{horizontalLines}</div>
      <div className="lines__ver">{horizontalLines}</div>
      <div className="lines__ver">{horizontalLines}</div>
      <div className="lines__ver">{horizontalLines}</div>
      <div className="lines__ver">{horizontalLines}</div>
    </div>
  );
};
export default CalendarLines;
