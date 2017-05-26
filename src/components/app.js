import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import {
  addReminder,
  deleteReminder,
  clearReminders,
} from '../actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
    this.clearReminders = this.clearReminders.bind(this);

    this.state = {
      text: '',
      dueDate: '',
    };
  }

  addReminder() {
    const { text, dueDate } = this.state;
    this.props.addReminder(text, dueDate);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  clearReminders() {
    this.props.clearReminders();
  }

  handleTextInput(event) {
    this.setState({ text: event.target.value });
  }

  handleDateInput(event) {
    this.setState({ dueDate: event.target.value });
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map((reminder) => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div><strong>{reminder.text}</strong></div>
                  <div>
                    <em>
                      {moment(new Date(reminder.dueDate)).fromNow()}
                    </em>
                  </div>
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => this.deleteReminder(reminder.id)}
                  className="list-item delete-button"
                >
                  &#x2715;
                </div>
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="app">
        <div className="title">
          Reminder
        </div>
        <div className="form-inline form-reminder">
          <div className="form-group">
            <input
              onChange={this.handleTextInput}
              className="form-control"
              placeholder="I have to ..."
            />
            <input
              onChange={this.handleDateInput}
              className="form-control"
              type="datetime-local"
            />
          </div>
          <button
            onClick={() => this.addReminder()}
            type="button"
            className="btn btn-success"
          >
            Add
          </button>
        </div>
        {this.renderReminders()}
        <div
          role="button"
          tabIndex={0}
          className="btn btn-danger"
          onClick={this.clearReminders}
        >
          Clear All
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reminders: state,
  };
}

export default connect(mapStateToProps, {
  addReminder,
  deleteReminder,
  clearReminders,
})(App);
