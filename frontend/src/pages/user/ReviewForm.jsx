import { FaStar } from "react-icons/fa";
import Button from "../../components/common/Button";


const ReviewForm = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black/40 px-4">
      
      {/* Card */}
      <div className="bg-bg shadow-[0_10px_30px_rgba(0,0,0,0.25)] px-5 py-6 rounded-xl max-w-md w-full h-auto">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-1">Leave a Review</h1>
          <p className="text-text">
            Your feedback helps us improve our service quality
          </p>

          {/* Stars */}
          <div className="flex justify-center mt-4 text-2xl gap-2">
            <FaStar className="text-muted  hover:text-warning cursor-pointer" />
            <FaStar className="text-muted  hover:text-warning cursor-pointer" />
            <FaStar className="text-muted  hover:text-warning cursor-pointer" />
            <FaStar className="text-muted  hover:text-warning cursor-pointer" />
            <FaStar className="text-muted  hover:text-warning cursor-pointer" />
          </div>
        </div>

        {/* Form */}
        <form className="mt-5 space-y-4">
          
          {/* Comment */}
          <div className="flex flex-col">
            <label htmlFor="comment" className="text-lg text-text mb-2">
              Write your comment
            </label>

            <textarea
              className="border p-3 border-muted rounded-lg outline-none resize-none w-full focus:ring-2 focus:ring-blue-400"
              id="comment"
              name="comment"
              placeholder="Write your comments here..."
              rows={4}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <Button color="white">Cancel</Button>
            <Button color="blue">Submit Review</Button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ReviewForm;