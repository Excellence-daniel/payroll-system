import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import KRLogo from "../../assets/images/k-r-logo.png";
import "./register.scss";
import { serverUrl, setAuth } from "../../utils/auth";

export default class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    phoneNumber: "",
    password: "",
    email: "",
  };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  register = async () => {
    if (this.validateState(this.state)) {
      try {
        const body = {
          name: this.state.firstname + " " + this.state.lastname,
          email: this.state.email,
          password: this.state.password,
          phoneNumber: this.state.phoneNumber,
        };
        const {
          data: { User },
        } = await axios.post(`${serverUrl()}/auth/register`, body);
        setAuth(User);
        this.props.history.push("/admin");
      } catch (e) {
        console.log(e);
        alert("Error. Please check console");
      }
    }
  };

  validateState = (values) => {
    console.log({ values });

    if (!values.firstname.trim()) {
      alert("enter firstname");
      return false;
    }
    if (!values.lastname.trim()) {
      alert("enter lastname");
      return false;
    }
    if (!values.email.trim()) {
      alert("enter email");
      return false;
    }
    if (!values.phoneNumber.trim()) {
      alert("enter phone number");
      return false;
    }
    if (!values.password.trim()) {
      alert("enter password");
      return false;
    }

    return true;
  };

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
                    <input
                      className="form-control my-input"
                      name="firstname"
                      onChange={this.handleInputChange}
                    />
                  </p>
                  <p className="col-6">
                    <label>Last Name</label>
                    <input
                      className="form-control my-input"
                      name="lastname"
                      onChange={this.handleInputChange}
                    />
                  </p>
                </div>
                <p>
                  <label>Email</label>
                  <input
                    className="form-control my-input"
                    name="email"
                    onChange={this.handleInputChange}
                  />
                </p>
                <p>
                  <label>Phone Number</label>
                  <input
                    className="form-control my-input"
                    type="phonenumber"
                    onChange={this.handleInputChange}
                    name="phoneNumber"
                  />
                </p>
                <p>
                  <label>Password</label>
                  <input
                    className="form-control my-input"
                    type="password"
                    onChange={this.handleInputChange}
                    name="password"
                  />
                </p>
              </div>
              <button
                className="btn btn-bg btn-block signup-button"
                type="button"
                onClick={this.register}
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
