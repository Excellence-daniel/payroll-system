import React from "react";
import DashboardImg from "../../assets/svgs/dashboard.svg";
import { EmptyDataList } from "../empty-list";

const Dashboard = ({ dashboard }) => {
  return (
    <div className="dashboard">
      {dashboard && dashboard.length ? (
        <div></div>
      ) : (
        <EmptyDataList imgSrc={DashboardImg} text={"No Dashboard"} />
      )}
    </div>
  );
};

export default Dashboard;
