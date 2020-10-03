import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import KRLogo from "../../assets/images/k-r-logo.png";
import "./login.scss";
import { serverUrl } from "../../utils/auth";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  login = async () => {
    const { email, password } = this.state;
    const body = { email, password };
    await axios.post(`${serverUrl()}/auth/login`, body);
  };

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
                <h4>WELCOME BACK</h4>
              </center>

              <p>
                <label>Email Address</label>
                <input
                  className="form-control my-input"
                  type="email"
                  onChange={this.handleInputChange}
                  name="email"
                />
              </p>
              <p>
                <label>Password</label>
                <span className="forgot-password">
                  <Link to="/forgot-password">Forgot?</Link>
                </span>
                <input className="form-control my-input" type="password" />
              </p>
              <button
                type="button"
                className="btn btn-block btn-login"
                onClick={this.login}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
