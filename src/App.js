import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from "./components/Profile";
import Random from "./components/Random";
import Players from "./components/Players";
import Menu from "./components/Menu";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Menu />

        <Switch>
          <Route path="/profile/:id">
            <Profile />
          </Route>

          <Route path="/random">
            <Random />
          </Route>

          <Route path="/players">
            <Players />
          </Route>

          <Route path="/">
            Ana Sayfa
          </Route>
        </Switch>
      </Router>
    );
  }
}