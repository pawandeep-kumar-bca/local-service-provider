import ReviewCard from "./ReviewCard";
import { useGetAllUserReviews } from "../../hooks/useReview";
import NoReviewHistory from "./NoDataComponents/NoReviewHistory";

const ReviewList = () => {
  const { data } = useGetAllUserReviews();

  const allReviews = data?.allReviews || [];

  return (
    <>
      {allReviews?.length !== 0 ? (
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-2">
          {allReviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      ) : (
        <NoReviewHistory/>
      )}
    </>
  );
};

export default ReviewList;
