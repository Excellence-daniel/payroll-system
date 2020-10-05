import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./admin.scss";
import EmployeeDetails from "../../components/admin/employee-details";
import ReviewsApprovals from "../../components/admin/reviews";
import Payslips from "../../components/admin/payslips";
import Reports from "../../components/admin/reports";
import Dashboard from "../../components/admin/dashboard";
import { CreateEmployeeModal } from "../../components/admin/modals/create-employees";
import Axios from "axios";
import { serverUrl } from "../../utils/auth";

const EMPLOYEES = "employees";
const REVIEWS = "reviews";
const PAYSLIPS = "payslips";
const REPORTS = "reports";
const DASHBOARD = "dashboard";

export default class Admin extends Component {
  state = {
    currentnav: EMPLOYEES,
    employees: [],
    employeename: "",
    employeestatus: "",
    employeesalary: 0,
    employeecontract: 0,
  };

  componentDidMount = async () => {
    await this.getEmployees();
  };

  getEmployees = async () => {
    try {
      const {
        data: { employees },
      } = await Axios.get(`${serverUrl()}/admin/getEmployees`);
      this.setState({ employees });
    } catch (e) {
      console.log(e, "error getting employess");
    }
  };

  changeNav = (nav) => {
    this.setState({ currentnav: nav });
  };

  handleCreateEmployeeInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleCreateEmployee = async () => {
    const {
      employeename,
      employeecontract,
      employeesalary,
      employeestatus,
    } = this.state;
    console.log({ emp: this.state });
    if (!employeename) {
      return alert("fill employee name");
    }
    if (!employeecontract) {
      return alert("fill employee contract");
    }
    if (!employeesalary) {
      return alert("fill employee salary");
    }
    if (!employeestatus) {
      return alert("fill employee status");
    }

    const body = {
      employeename,
      employeecontract,
      employeesalary,
      employeestatus,
    };
    const {
      data: { employee },
    } = await Axios.post(`${serverUrl()}/admin/createEmployee`, body);
    this.setState({ employees: [...this.state.employees, employee] });
    this.closeEmployeeModal();
  };

  closeEmployeeModal = () => {
    document.getElementById("close").click();
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
        <div className="create-modal">
          <CreateEmployeeModal
            handleInputChange={this.handleCreateEmployeeInputChange}
            saveEmployee={this.handleCreateEmployee}
          />
        </div>

        <div className="admin-display">
          {currentnav === EMPLOYEES ? (
            <EmployeeDetails employees={this.state.employees} />
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
