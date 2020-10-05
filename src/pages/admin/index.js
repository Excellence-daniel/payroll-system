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
import { CreateReportModal } from "../../components/admin/modals/create-report";

const EMPLOYEES = "employees";
const REVIEWS = "reviews";
const PAYSLIPS = "payslips";
const REPORTS = "reports";
const DASHBOARD = "dashboard";

export default class Admin extends Component {
  state = {
    currentnav: EMPLOYEES,
    employees: [],
    reports: [],
    employeename: "",
    employeestatus: "",
    employeesalary: 0,
    employeecontract: 0,
    projectname: "",
    projectstatus: "",
    assignedto: "",
    timeline: 0,
    approved: false,
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

  fetchReports = async () => {
    try {
      const {
        data: { reports },
      } = await Axios.get(`${serverUrl()}/admin/getReports`);
      this.setState({ reports });
    } catch (e) {
      console.log(e, "error getting reports");
    }
  };

  fetchReviews = async () => {
    try {
      const {
        data: { reviews },
      } = await Axios.get(`${serverUrl()}/admin/fetchReviews`);
      this.setState({ reviews });
    } catch (e) {
      console.log(e, "error getting reports");
    }
  };

  changeNav = (nav) => {
    this.setState({ currentnav: nav });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleCreateEmployee = async () => {
    const {
      employeename,
      employeecontract,
      employeesalary,
      employeestatus,
    } = this.state;
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
    this.closeModal();
  };

  handleCreateReport = async () => {
    const {
      projectname,
      projectstatus,
      assignedto,
      timeline,
      approved,
    } = this.state;
    if (!projectname) {
      return alert("fill project name");
    }
    if (!projectstatus) {
      return alert("fill project status");
    }
    if (!timeline) {
      return alert("fill timeline");
    }
    if (!assignedto) {
      return alert("fill assigned to");
    }

    const body = {
      projectname,
      projectstatus,
      assignedto,
      timeline,
      approved,
    };
    const {
      data: { report },
    } = await Axios.post(`${serverUrl()}/admin/createReport`, body);
    this.setState({ reports: [...this.state.reports, report] });
    return this.closeReportModal();
  };

  closeModal = () => {
    document.getElementById("close").click();
  };

  closeReportModal = () => {
    document.getElementById("close-report-modal").click();
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
            handleInputChange={this.handleInputChange}
            saveEmployee={this.handleCreateEmployee}
          />
          <CreateReportModal
            handleInputChange={this.handleInputChange}
            saveReport={this.handleCreateReport}
          />
        </div>

        <div className="admin-display">
          {currentnav === EMPLOYEES ? (
            <EmployeeDetails employees={this.state.employees} />
          ) : currentnav === REVIEWS ? (
            <ReviewsApprovals
              fetchReviews={this.fetchReviews}
              reviews={this.state.reviews}
            />
          ) : currentnav === PAYSLIPS ? (
            <Payslips />
          ) : currentnav === REPORTS ? (
            <Reports
              fetchReports={this.fetchReports}
              reports={this.state.reports}
            />
          ) : currentnav === DASHBOARD ? (
            <Dashboard />
          ) : null}
        </div>
      </div>
    );
  }
}
