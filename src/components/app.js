import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  addReminder,
  deleteReminder,
} from '../actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  addReminder() {
    this.props.addReminder(this.state.text);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map((reminder) => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">{reminder.text}</div>
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
              onChange={event => this.setState({ text: event.target.value })}
              className="form-control"
              placeholder="I have to ..."
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
})(App);
