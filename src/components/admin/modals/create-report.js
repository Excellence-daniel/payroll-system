import React from "react";

export const CreateReportModal = ({ handleInputChange, saveReport }) => {
  return (
    <div
      className="modal fade"
      id="createReport"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h5 className="modal-title" id="exampleModalLabel">
              Create New Report
            </h5>
            <button
              type="button"
              className="close"
              id="close-report-modal"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className=" create-employee-form">
              <p>
                <label>Project Name</label>
                <input
                  className="form-control"
                  name="projectname"
                  onChange={handleInputChange}
                />
              </p>
              <p>
                <label>Project Status</label>
                <select
                  name="projectstatus"
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="Unassigned">Unassigned</option>
                  <option value="Started">Started</option>
                  <option value="Pending">Pending</option>
                  <option value="Getting Reviewed">Getting Reviewed</option>
                  <option value="Complete">Complete</option>
                </select>
              </p>
              <p>
                <label>Assigned To </label>
                <input
                  className="form-control"
                  name="assignedto"
                  onChange={handleInputChange}
                />
              </p>
              <p>
                <label>Timeline (Weeks)</label>
                <input
                  className="form-control"
                  name="timeline"
                  type="number"
                  onChange={handleInputChange}
                />
              </p>

              <p>
                <label>Approved</label>
                <input
                  type="checkbox"
                  style={{ marginLeft: "1rem" }}
                  name="approved"
                  value="true"
                  onChange={handleInputChange}
                />
              </p>
            </div>
            <button className="btn btn-k" onClick={saveReport}>
              Save Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
