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

  render() {
    console.log('this.props', this.props);
    return (
      <div className="app">
        <div className="title">
          Reminder
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input
              onChange={event => this.setState({ text: event.target.value })}
              className="from-control"
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    remiders: state,
  };
}

export default connect(mapStateToProps, { addReminder })(App);
