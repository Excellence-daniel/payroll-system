import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./tax.scss";
import { StatutoryRemittances } from "../../components/tax/statutory";
import { RemittanceSchedules } from "../../components/tax/remittances";

const STATUTORY = "statutory";
const REMITTANCE = "remittance";

export default class Tax extends Component {
  state = {
    currentnav: STATUTORY,
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
              onClick={() => this.changeNav(STATUTORY)}
              className={`nav-link ${currentnav === STATUTORY && "active"}`}
            >
              Statutory Remittances
            </Link>
          </li>
          <li class="nav-item">
            <Link
              onClick={() => this.changeNav(REMITTANCE)}
              className={`nav-link ${currentnav === REMITTANCE && "active"}`}
            >
              Remittance Schedule
            </Link>
          </li>
        </ul>
        <div className="admin-display">
          {currentnav === STATUTORY ? (
            <StatutoryRemittances />
          ) : currentnav === REMITTANCE ? (
            <RemittanceSchedules />
          ) : null}
        </div>
      </div>
    );
  }
}
