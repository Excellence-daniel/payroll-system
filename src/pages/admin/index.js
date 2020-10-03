import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./admin.scss";

export default class Admin extends Component {
  state = {
    currentnav: "employees",
  };

  changeNav = (nav) => {
    this.setState({ currentnav: nav });
  };

  render() {
    const { currentnav } = this.state;
    return (
      <div className="admin-page">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link
              onClick={() => this.changeNav("employees")}
              className={`nav-link ${currentnav === "employees" && "active"}`}
            >
              Employee Details
            </Link>
          </li>
          <li class="nav-item">
            <Link
              onClick={() => this.changeNav("reviews")}
              className={`nav-link ${currentnav === "reviews" && "active"}`}
            >
              Reviews & Approvals
            </Link>
          </li>
          <li class="nav-item">
            <Link
              onClick={() => this.changeNav("payslips")}
              className={`nav-link ${currentnav === "payslips" && "active"}`}
            >
              PaySlips
            </Link>
          </li>
          <li class="nav-item">
            <Link
              onClick={() => this.changeNav("reports")}
              className={`nav-link ${currentnav === "reports" && "active"}`}
            >
              Reports
            </Link>
          </li>
          <li class="nav-item">
            <Link
              onClick={() => this.changeNav("dashboard")}
              className={`nav-link ${currentnav === "dashboard" && "active"}`}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
