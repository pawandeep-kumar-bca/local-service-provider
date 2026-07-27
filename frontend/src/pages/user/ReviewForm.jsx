import { FaStar } from "react-icons/fa";
import Button from "../../components/common/Button";
import { IoCameraOutline } from "react-icons/io5";
import { useState } from "react";

const ReviewForm = ({ close }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-black/40 px-4 inset-0 fixed z-[999]"
      onClick={close}
    >
      {/* Card */}
      <div
        className="bg-bg backdrop-blur-sm
            border border-muted bg-white hover:scale-95 ease-in-out shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] transition-all duration-300 px-5 py-6 rounded-xl max-w-md w-full h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-1">Leave a Review</h1>
          <p className="text-text">
            Your feedback helps us improve our service quality
          </p>

          {/* Stars */}
          <div className="flex justify-center mt-4 text-2xl gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer transition-transform duration-200 hover:scale-125 ${star <= (hover || rating) ? "text-yellow-400" : "text-gray-300"}`}
                onClick={() => setRating(star)}
                onMouseLeave={() => setHover(0)}
                onMouseEnter={() => setHover(star)}
              />
            ))}
          </div>
        </div>

        {/* Form */}
        <form className="mt-5 space-y-1">
          {/* Comment */}
          <div className="flex flex-col">
            <label
              htmlFor="comment"
              className="block mb-2 font-medium text-lg md:text-sm "
            >
              Write your comment
            </label>

            <textarea
              className="border p-3 border-muted rounded-lg outline-none resize-none w-full focus:ring-2 focus:ring-blue-400"
              id="comment"
              name="comment"
              placeholder="Write your comments here..."
              rows={4}
              maxLength={500}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <p
              className={`text-right mt-2 text-xs font-medium ${
                comment.length >= 450 ? "text-red-500" : "text-gray-500"
              }`}
            >
              {comment.length}/500
            </p>
          </div>
          <div>
            <span className="block font-medium text-lg md:text-sm ">
              Add Photos (Optionals)
            </span>
            <p className="text-sm text-gray-500">
              Upload photos of service or work done.
            </p>
            <label className="border-2 border-dashed py-3 px-5 inline-block mt-3 text-center w-fit-content border-purple-400 rounded-lg bg-gray-100 cursor-pointer transition-all duration-200 hover:scale-[1.05]">
              <input
                id="file"
                name="file"
                type="file"
                multiple
                accept="image/png,image/jpeg,image/jpg"
                className="hidden"
              />
              <IoCameraOutline
                size={35}
                className="text-purple-500 inline-block"
              />
              <p className="text-sm text-gray-500 mb-1">Add more</p>
              <p className="text-xs text-gray-500">JPG,PNG (Max 5MB)</p>
            </label>
          </div>
          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <Button color="white" onClick={close}>
              Cancel
            </Button>
            <Button color="blue">Submit Review</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
