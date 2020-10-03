import React from "react";
import Employees from "../../assets/svgs/teamwork.svg";
import { EmptyDataList } from "../empty-list";

const EmployeeDetails = ({ employees }) => {
  return (
    <div className="employee-details">
      <button className="btn new-btn">Create New Employee</button>
      {employees && employees.length ? (
        <div></div>
      ) : (
        <EmptyDataList imgSrc={Employees} text={"No Employee Data"} />
      )}
    </div>
  );
};

export default EmployeeDetails;
