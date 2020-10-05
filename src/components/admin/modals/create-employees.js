import React from "react";

export const CreateEmployeeModal = ({ handleInputChange, saveEmployee }) => {
  return (
    <div
      className="modal fade"
      id="createEmployee"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h5 className="modal-title" id="exampleModalLabel">
              Create New Employee Form
            </h5>
            <button
              type="button"
              className="close"
              id="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className=" create-employee-form">
              <p>
                <label>Employee Name</label>
                <input
                  className="form-control"
                  name="employeename"
                  onChange={handleInputChange}
                />
              </p>
              <p>
                <label>Employee Status</label>
                <select
                  name="employeestatus"
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="Admin">Admin</option>
                  <option value="Full Staff">Full Staff</option>
                  <option value="Contract Staff">Contract Staff</option>
                </select>
              </p>
              <p>
                <label>Employee Contract Years (Y)</label>
                <input
                  className="form-control"
                  name="employeecontract"
                  type="number"
                  onChange={handleInputChange}
                />
              </p>
              <p>
                <label>Employee Salary</label>
                <input
                  className="form-control"
                  name="employeesalary"
                  type="number"
                  onChange={handleInputChange}
                />
              </p>
            </div>
            <button className="btn btn-k" onClick={saveEmployee}>
              Save employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
