import React, { Component } from "react";
import { getDisplayedMonth } from "../logic/Functions";
import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  createEvent = () => {
    const hidden = document.getElementById("needToRemove");
    hidden.classList.remove("hidden");
  };

  EventHandndler = () => {
    this.props.toggleModalVisibility();
  };

  render() {
    const nextWeek = this.props.nextWeek;
    const prevWeek = this.props.prevWeek;
    const getCurrentWeek = this.props.getCurrentWeek;
    const thisMonth = getDisplayedMonth(this.props.monday);

    return (
      <header className="header" onScroll={this.stickHeaderOnScroll}>
        <button
          className="header__elem button creation__event__button"
          onClick={this.EventHandndler}
        >
          <i className="creation__event__button__icon">+</i>
          <span className="create">Create</span>
        </button>
        <div className="header__elem navigation">
          <button className="nav-today__button button" onClick={getCurrentWeek}>
            Today
          </button>
          <button className="button-in-left" onClick={prevWeek}>
            {"<"}
          </button>
          <button className="button-in-right" onClick={nextWeek}>
            {">"}
          </button>
          <span className="header__elem month__display">{thisMonth}</span>
        </div>
      </header>
    );
  }
}

export default Header;
