import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addReminder,
  removeReminder,
  removeAllReminder,
} from "../actionCreators/index";
import moment from "moment";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      dueDate: "",
    };
  }

  //Render To do list
  renderReminder = () => {
    const { reminder } = this.props;
    return (
      <ul className="list-group col-sm-6 reminder-list">
        {reminder.map((_) => {
          return (
            <li key={_.id} className="list-group-item">
              {_.text + " " + moment(new Date(_.date)).fromNow()}
              <div
                className="list-item delete-button"
                onClick={() => this.removefunction(_.id)}
              >
                &#x2715;
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  //Add a new Reminder Function
  addfunction = () => {
    this.props.addReminder(this.state.text, this.state.dueDate);
    this.setState({ text: "", dueDate: "" });
  };

  //Remove a reminder function
  removefunction = (id) => this.props.removeReminder(id);

  render() {
    return (
      <div className="col-sm-offset-3 col-sm-9 mainApp">
        <div className="title h1 text-primary">Reminder</div>
        <div className="form-inline reminder-form">
          <input
            id="remain"
            type="text"
            value={this.state.text}
            placeholder="I have to..."
            className="form-control"
            onChange={(event) => {
              this.setState({ text: event.target.value });
            }}
          ></input>
          <input
            type="datetime-local"
            className="form-control"
            value={this.state.dueDate}
            onChange={(event) => {
              this.setState({ dueDate: event.target.value });
            }}
          ></input>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.addfunction()}
        >
          Add Reminder
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.props.removeAllReminder()}
        >
          Remove All
        </button>
        {this.renderReminder()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ reminder: state });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { addReminder, removeReminder, removeAllReminder },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
