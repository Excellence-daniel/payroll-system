import React, { Component } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import { checkIfUserIsLoggedIn } from "./utils/auth";
import Login from "./pages/login";
import Register from "./pages/register";

const AppRoutes = () => {
  return <Router></Router>;
};

class App extends Component {
  render() {
    return (
      <Router>
        {/* {checkIfUserIsLoggedIn() ? (
          <Redirect to="/" />
        ) : (
          <Redirect to="/login" />
        )} */}
        <Switch>
          <Route exact component={Login} path="/login" />
          <Route exact component={Register} path="/register" />
          <AppRoutes />
        </Switch>
      </Router>
    );
  }
}

export default App;
