import React, { Component } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login";
import { checkIfUserIsLoggedIn } from "./utils/auth";

const AppRoutes = () => {
  return <Router></Router>;
};

class App extends Component {
  render() {
    return (
      <Router>
        {checkIfUserIsLoggedIn() ? (
          <Redirect to="/" />
        ) : (
          <Redirect to="/login" />
        )}
        <Switch>
          <Route exact component={Login} path="/login" />
          <AppRoutes />
        </Switch>
      </Router>
    );
  }
}

export default App;
