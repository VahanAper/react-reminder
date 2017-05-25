import React, { Component } from 'react';
import { connect } from 'react-redux';

import addReminder from '../actions';

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

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map((reminder) => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div>{reminder.text}</div>
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

export default connect(mapStateToProps, { addReminder })(App);
