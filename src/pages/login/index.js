import React, { Component } from "react";
import { Link } from "react-router-dom";

import KRLogo from "../../assets/images/k-r-logo.png";
import "./login.scss";

class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="header">
          <div className="row">
            <div className="col-md-4">
              <img src={KRLogo} alt="logo" />
            </div>
            <div className="col-md-5"></div>
            <div className="col-md-3">
              Don't have an account? <Link to="/register">Create Account</Link>
            </div>
          </div>
        </div>
        <div className="login-form">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <center>
                <h4>Welcome Back</h4>
              </center>

              <p>
                <label>Email Address</label>
                <input className="form-control my-input" type="email" />
              </p>
              <p>
                <label>Password</label>
                <span className="forgot-password">
                  <Link to="/forgot-password">Forgot?</Link>
                </span>
                <input className="form-control my-input" type="password" />
              </p>
              <button type="button" className="btn btn-block btn-login">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
