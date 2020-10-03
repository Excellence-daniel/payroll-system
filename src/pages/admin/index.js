import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./admin.scss";
import EmployeeDetails from "../../components/admin/employee-details";
import ReviewsApprovals from "../../components/admin/reviews";
import Payslips from "../../components/admin/payslips";
import Reports from "../../components/admin/reports";
import Dashboard from "../../components/admin/dashboard";

const EMPLOYEES = "employees";
const REVIEWS = "reviews";
const PAYSLIPS = "payslips";
const REPORTS = "reports";
const DASHBOARD = "dashboard";

export default class Admin extends Component {
  state = {
    currentnav: EMPLOYEES,
    employees: [],
  };

  changeNav = (nav) => {
    this.setState({ currentnav: nav });
  };

  render() {
    const { currentnav } = this.state;
    return (
      <div className="admin-page">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link
              onClick={() => this.changeNav(EMPLOYEES)}
              className={`nav-link ${currentnav === EMPLOYEES && "active"}`}
            >
              Employee Details
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => this.changeNav(REVIEWS)}
              className={`nav-link ${currentnav === REVIEWS && "active"}`}
            >
              Reviews & Approvals
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => this.changeNav(PAYSLIPS)}
              className={`nav-link ${currentnav === PAYSLIPS && "active"}`}
            >
              PaySlips
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => this.changeNav(REPORTS)}
              className={`nav-link ${currentnav === REPORTS && "active"}`}
            >
              Reports
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => this.changeNav(DASHBOARD)}
              className={`nav-link ${currentnav === DASHBOARD && "active"}`}
            >
              Dashboard
            </Link>
          </li>
        </ul>
        <div className="admin-display">
          {currentnav === EMPLOYEES ? (
            <EmployeeDetails />
          ) : currentnav === REVIEWS ? (
            <ReviewsApprovals />
          ) : currentnav === PAYSLIPS ? (
            <Payslips />
          ) : currentnav === REPORTS ? (
            <Reports />
          ) : currentnav === DASHBOARD ? (
            <Dashboard />
          ) : null}
        </div>
      </div>
    );
  }
}
