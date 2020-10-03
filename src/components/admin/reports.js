import React from "react";
import ReportSvg from "../../assets/svgs/report.svg";
import { EmptyDataList } from "../empty-list";

const Reports = ({ reports }) => {
  return (
    <div className="reports">
      {reports && reports.length ? (
        <div></div>
      ) : (
        <EmptyDataList imgSrc={ReportSvg} text={"No Report"} />
      )}
    </div>
  );
};

export default Reports;
