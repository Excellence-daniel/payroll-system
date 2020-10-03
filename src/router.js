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
import LandingPage from "./pages/landing-page";
import Header from "./components/header";
import Admin from "./pages/admin";
import Employees from "./pages/employees";
import Tax from "./pages/tax";

const AppRoutes = (props) => {
  return (
    <div>
      <Header props={props} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/employee" component={Employees} />
        <Route exact path="/tax" component={Tax} />
      </Switch>
    </div>
  );
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
          <AppRoutes props={this.props} />
        </Switch>
      </Router>
    );
  }
}

export default App;
