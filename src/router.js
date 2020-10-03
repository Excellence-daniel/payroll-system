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

const AppRoutes = (props) => {
  return (
    <div>
      <Header props={props} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/admin" component={Admin} />
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
