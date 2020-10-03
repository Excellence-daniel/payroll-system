import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const AppRoutes = () => {
  return <Router></Router>;
};

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <AppRoutes />
        </Switch>
      </Router>
    );
  }
}

export default App;
