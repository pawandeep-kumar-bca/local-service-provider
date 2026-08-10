import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

const RatingFilter = ({ filters, setFilters }) => {
  const ratings = [4, 3, 2, 1];

  return (
    <div className="space-y-3">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="rating"
          value=""
          checked={filters.rating === ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              rating: e.target.value,
            }))
          }
        />

        <span className="text-sm font-semibold text-grayness">All Ratings</span>
      </label>

      {ratings.map((rating) => (
        <label key={rating} className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="rating"
            value={rating}
            checked={filters.rating === String(rating)}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                rating: e.target.value,
              }))
            }
          />

          <span className="flex items-center gap-1 text-orange-500">
            {[...Array(rating)].map((_, index) => (
              <FaStar key={index} size={14} />
            ))}
          </span>

          <span className="text-sm font-semibold text-grayness">
            {rating}.0 & above
          </span>
        </label>
      ))}
    </div>
  );
};

export default RatingFilter;
