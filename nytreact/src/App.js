import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        {/* <Route exact path="/saved" component={Saved}></Route> */}
        <Route component={NoMatch}></Route>
      </Switch>
    </div>
  </Router>
);

export default App;
