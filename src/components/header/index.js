import React from "react";
import "./header.scss";
import KRLogo from "../../assets/images/k-r-logo.png";
import { Link } from "react-router-dom";

const Header = ({ props }) => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-3">
          <img src={KRLogo} alt="logo" className="logo" />
        </div>
        <div className="col-6"></div>
        <div className="col-3">
          <div className="menu">
            <p>
              <Link
                className={
                  props?.location?.pathname === "/admin" ? "active" : ""
                }
                to="/admin"
              >
                Admin
              </Link>
            </p>
            <p>
              <Link
                className={
                  props?.location?.pathname === "/employee" ? "active" : ""
                }
                to="/employee"
              >
                Employee
              </Link>
            </p>
            <p>
              <Link
                className={props?.location?.pathname === "/tax" ? "active" : ""}
                to="/tax"
              >
                Tax
              </Link>
            </p>
            <p>
              <Link
                className={
                  props?.location?.pathname === "/compensation" ? "active" : ""
                }
                to="/compensation"
              >
                Compensation
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
