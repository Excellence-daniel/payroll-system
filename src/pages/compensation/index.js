import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./compensation.scss";
import { PayrollCycle } from "../../components/compensation/payrollCycle";
import { Reviews } from "../../components/compensation/reviews";
import { PayrollDetails } from "../../components/compensation/payrollDetails";

const PAYROLL_DETAIILS = "payroll-details";
const PAYROLL_CYCLE = "payroll-cycle";
const REVIEWS = "reviews";

export default class Compensation extends Component {
  state = {
    currentnav: PAYROLL_DETAIILS,
    employees: [],
  };

  changeNav = (nav) => {
    this.setState({ currentnav: nav });
  };
  render() {
    const { currentnav } = this.state;
    return (
      <div className="compensation-page">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link
              onClick={() => this.changeNav(PAYROLL_DETAIILS)}
              className={`nav-link ${
                currentnav === PAYROLL_DETAIILS && "active"
              }`}
            >
              Payroll Details
            </Link>
          </li>
          <li class="nav-item">
            <Link
              onClick={() => this.changeNav(PAYROLL_CYCLE)}
              className={`nav-link ${currentnav === PAYROLL_CYCLE && "active"}`}
            >
              Payroll Cycle
            </Link>
          </li>
          <li class="nav-item">
            <Link
              onClick={() => this.changeNav(REVIEWS)}
              className={`nav-link ${currentnav === REVIEWS && "active"}`}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <div className="admin-display">
          {currentnav === PAYROLL_DETAIILS ? (
            <PayrollDetails />
          ) : currentnav === PAYROLL_CYCLE ? (
            <PayrollCycle />
          ) : currentnav === REVIEWS ? (
            <Reviews />
          ) : null}
        </div>
      </div>
    );
  }
}
