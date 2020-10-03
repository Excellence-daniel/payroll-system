import React from "react";
import "./empty.scss";

export const EmptyDataList = ({ imgSrc, text }) => {
  return (
    <div className="empty-data">
      <div className="background">
        <img src={imgSrc} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  );
};
