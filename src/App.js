import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from "./components/Profile";
import Random from "./components/Random";
import Players from "./components/Players";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/profile/:id">
            <Profile />
          </Route>

          <Route path="/random">
            <Random />
          </Route>

          <Route path="/">
            <Players />
          </Route>
        </Switch>
      </Router>
    );
  }
}