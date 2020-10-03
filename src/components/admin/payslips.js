import React from "react";
import Payslip from "../../assets/svgs/payslip.svg";
import { EmptyDataList } from "../empty-list";

const Payslips = ({ payslips }) => {
  return (
    <div className="payslips">
      <button className="btn new-btn">Create Payslip</button>
      {payslips && payslips.length ? (
        <div></div>
      ) : (
        <EmptyDataList imgSrc={Payslip} text={"No Payslips"} />
      )}
    </div>
  );
};

export default Payslips;
