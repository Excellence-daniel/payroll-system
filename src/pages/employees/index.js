import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./employees.scss";
import { Profile } from "../../components/employees/profile";
import { Salary } from "../../components/employees/salary";
import { Pension } from "../../components/employees/pension";
import { Payslips } from "../../components/employees/payslip";
import { Dashboard } from "../../components/employees/dashboard";

const PROFILE = "profile";
const SALARY = "salary";
const PENSION = "pension";
const PAYSLIP = "payslip";
const DASHBOARD = "dashboard";

export default class Employees extends Component {
  state = {
    currentnav: PROFILE,
    employees: [],
  };

  changeNav = (nav) => {
    this.setState({ currentnav: nav });
  };
  render() {
    const { currentnav } = this.state;
    return (
      <div className="employee-page">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link
              onClick={() => this.changeNav(PROFILE)}
              className={`nav-link ${currentnav === PROFILE && "active"}`}
            >
              Profile
            </Link>
          </li>
          <li class="nav-item">
            <Link
              onClick={() => this.changeNav(SALARY)}
              className={`nav-link ${currentnav === SALARY && "active"}`}
            >
              Salary Details
            </Link>
          </li>
          <li class="nav-item">
            <Link
              onClick={() => this.changeNav(PENSION)}
              className={`nav-link ${currentnav === PENSION && "active"}`}
            >
              PaySlips
            </Link>
          </li>
          <li class="nav-item">
            <Link
              onClick={() => this.changeNav(PAYSLIP)}
              className={`nav-link ${currentnav === PAYSLIP && "active"}`}
            >
              Reports
            </Link>
          </li>
          <li class="nav-item">
            <Link
              onClick={() => this.changeNav(DASHBOARD)}
              className={`nav-link ${currentnav === DASHBOARD && "active"}`}
            >
              Dashboard
            </Link>
          </li>
        </ul>
        <div className="admin-display">
          {currentnav === PROFILE ? (
            <Profile />
          ) : currentnav === SALARY ? (
            <Salary />
          ) : currentnav === PENSION ? (
            <Pension />
          ) : currentnav === PAYSLIP ? (
            <Payslips />
          ) : currentnav === DASHBOARD ? (
            <Dashboard />
          ) : null}
        </div>
      </div>
    );
  }
}
