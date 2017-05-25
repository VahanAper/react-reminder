import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="title">
          Reminder
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="from-control"
              placeholder="I have to ..."
            />
          </div>
          <button
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

export default App;
