import React, { Component } from "react";
import "../../src/index.scss";

class Popup extends Component {
  render() {
    const id = this.props.id;
    const handleEventDelete = this.props.handleEventDelete;
    return (
      <div className={`popup${this.props.showBox ? " show" : ""}`}>
        <i className="material-icons trash"></i>
        <button className="delete" onClick={() => handleEventDelete(id)}>
          Delete
        </button>
      </div>
    );
  }
}
export default Popup;
