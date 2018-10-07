import React, { Component } from 'react';
//import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">NYT SEARCH</h1>
                <p className="lead">the react ver.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Search</div>
                <div className="form-group">
                  <label>Topic</label>
                  <input className="form-control"></input>
                </div>
                <div className="form-group">
                  <label>Start Year</label>
                  <input className="form-control"></input>
                </div>
                <div className="form-group">
                  <label>End Year</label>
                  <input className="form-control"></input>
                </div>
                <button type="submit" className="btn btn-light">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
              <div className="card-title">Result</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
