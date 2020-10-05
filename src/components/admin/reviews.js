import React from "react";
import Reviews from "../../assets/svgs/review.svg";
import { EmptyDataList } from "../empty-list";

const ReviewsApprovals = ({ reviews, fetchReviews }) => {
  // !reviews.length && fetchReviews();
  return (
    <div className="reviews">
      {reviews && reviews.length ? (
        <div></div>
      ) : (
        <EmptyDataList imgSrc={Reviews} text={"No Review Data"} />
      )}
    </div>
  );
};

export default ReviewsApprovals;
