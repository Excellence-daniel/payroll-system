import React from "react";
import Employees from "../../assets/svgs/teamwork.svg";
import { EmptyDataList } from "../empty-list";

const EmployeeDetails = ({ employees }) => {
  return (
    <div className="employee-details">
      <button
        className="btn new-btn"
        data-toggle="modal"
        data-target="#createEmployee"
      >
        Create New Employee
      </button>
      {employees && employees.length ? (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Salary</th>
              <th scope="col">Status</th>
              <th scope="col">Contract Years</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, key) => (
              <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{employee.employeename}</td>
                <td>${employee.employeesalary}</td>
                <td>{employee.employeestatus}</td>
                <td>{employee.employeecontract}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <EmptyDataList imgSrc={Employees} text={"No Employee Data"} />
      )}
    </div>
  );
};

export default EmployeeDetails;
