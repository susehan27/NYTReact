import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/saved" component={Saved}/>
    </div>
  </Router>
)

export default App;
