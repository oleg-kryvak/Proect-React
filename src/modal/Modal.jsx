import React, { Component } from "react";
import "../../src/index.scss";

const defaultFormState = {
  title: "Add title of your event",
  date: "",
  startTime: "",
  endTime: "",
};

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: defaultFormState,
    };
  }

  createEvent = (event) => {
    event.preventDefault();

    if (Object.values(this.state.form).some((el) => el === "")) {
      console.log("no values");
      return;
    }

    this.props.onAddNewEvent(this.state.form);
    this.clear();
    this.hidePopup();
  };

  hideDelete = () => {
    this.props.toggleModalVisibility();
  };

  input = (event) => {
    const { name, value } = event.target;

    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };

  clear = () => {
    this.setState({
      form: defaultFormState,
    });
  };

  render() {
    return (
      <div className="modal">
        <div className="content">
          <div className="modal__content-icons">
            <i className="content-clock">Time</i>
            <i className="content-list">Something else</i>
          </div>
          <div className="create-event">
            <form className="event-form" onSubmit={this.createEvent}>
              <button className="close__button" onClick={this.hideDelete}>
                <i className="small material-icons">close</i>
              </button>
              <input
                onChange={this.input}
                type="text"
                name="title"
                placeholder="Event"
                className="title"
              />
              <div className="time">
                <input
                  onChange={this.input}
                  type="date"
                  name="date"
                  className="time-date"
                />
                <input
                  onChange={this.input}
                  type="time"
                  name="startTime"
                  className="time-start"
                />
                <span>-</span>
                <input
                  onChange={this.input}
                  type="time"
                  name="endTime"
                  className="time-end"
                />
              </div>
              <textarea
                onChange={this.input}
                name="description"
                placeholder="More points"
                className="description"
              ></textarea>
              <button type="submit" className="save__button">
                <a className="waves-effect waves-light btn">Save</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
