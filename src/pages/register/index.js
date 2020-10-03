import React, { Component } from "react";
import { Link } from "react-router-dom";

import KRLogo from "../../assets/images/k-r-logo.png";
import "./register.scss";

export default class Register extends Component {
  render() {
    return (
      <div className="register-page">
        <div className="row">
          <div className="col-6 side-image">
            <img src={KRLogo} alt="logo" />
            <div className="layer"></div>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <p className="sign-in-message">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
            <div className="register-form">
              <h3>Register Here</h3>
              <span>Fill the form to register as a user</span>
              <div className="forms">
                <div className="row">
                  <p className="col-6">
                    <label>First Name</label>
                    <input className="form-control my-input" name="firstname" />
                  </p>
                  <p className="col-6">
                    <label>Last Name</label>
                    <input className="form-control my-input" name="lastname" />
                  </p>
                </div>
                <p>
                  <label>Email</label>
                  <input className="form-control my-input" name="email" />
                </p>
                <p>
                  <label>Phone Number</label>
                  <input className="form-control my-input" type="phonenumber" />
                </p>
                <p>
                  <label>Password</label>
                  <input
                    className="form-control my-input"
                    type="password"
                    name="password"
                  />
                </p>
              </div>
              <button
                className="btn btn-bg btn-block signup-button"
                type="button"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
