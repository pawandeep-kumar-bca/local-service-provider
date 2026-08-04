import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-orange-500">
      {/* Full Stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={`full-${index}`} />
      ))}

      {/* {Half star} */}
      {hasHalfStar && <FaStarHalfAlt />}

      {/* Empty stars */}

      {Array.from({ length: emptyStars }).map((_, index) => (
        <FaRegStar key={`empty-${index}`} />
      ))}
    </div>
  );
};

export default RatingStars;
