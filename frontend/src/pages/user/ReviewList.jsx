import ReviewCard from "./ReviewCard";
import { useGetAllUserReviews } from "../../hooks/useReview";

const ReviewList = () => {
  const { data } = useGetAllUserReviews();

  const allReviews = data?.allReviews || [];
 
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-2">
      {allReviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
