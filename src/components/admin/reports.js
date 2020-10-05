import React from "react";
import ReportSvg from "../../assets/svgs/report.svg";
import DownloadIcon from "../../assets/svgs/direct-download.svg";
import { EmptyDataList } from "../empty-list";

let count = 0;

const Reports = ({ reports, fetchReports }) => {
  !reports.length && count < 1 && fetchReports() && count++;
  return (
    <div className="reports">
      <button
        className="btn new-btn"
        data-toggle="modal"
        data-target="#createReport"
      >
        Create New Report
      </button>
      {reports && reports.length ? (
        <>
          <button className="btn new-btn download-btn">
            Download Sheet
            <img
              src={DownloadIcon}
              className="download-class"
              alt="downloadimg"
            />
          </button>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Project Name</th>
                <th scope="col">Project Status</th>
                <th scope="col">Assigned To</th>
                <th scope="col">Timeline (Weeks)</th>
                <th scope="col">Approved</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, key) => (
                <tr key={key}>
                  <th scope="row">{key + 1}</th>
                  <td>{report.projectname}</td>
                  <td>{report.projectstatus}</td>
                  <td>{report.assignedto}</td>
                  <td>{report.timeline}</td>
                  <td>{`${report.approved}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <EmptyDataList imgSrc={ReportSvg} text={"No Report"} />
      )}
    </div>
  );
};

export default Reports;
