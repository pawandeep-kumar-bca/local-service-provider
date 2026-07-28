import { FaStar } from "react-icons/fa";
import Button from "../../components/common/Button";
import { IoCameraOutline } from "react-icons/io5";
import { useState } from "react";
import { useReview } from "../../hooks/useReview";

const ReviewForm = ({ booking, setOpenReview }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [images, setImages] = useState([]);
  const bookingId = booking._id;

  const { createReviewMutation } = useReview();
  const MAX_IMAGES = 5;
  const MAX_SIZE = 5 * 1024 * 1024; // 5 Mb

  const handlerImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (images.length + files.length > MAX_IMAGES) {
      alert(`You can upload maximum ${MAX_IMAGES} images.`);
      e.target.value = "";
      return;
    }

    for (const file of files) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        alert(`${file.name} is not a valid image.`);
        e.target.value = "";
        return;
      }

      if (file.size > MAX_SIZE) {
        alert(`${file.name} size should be less than 5MB`);
        e.target.value = "";
        return;
      }
    }
    setImages((prev) => {
      const uniqueFiles = files.filter((newFile) => {
        const isDuplicate = prev.some(
          (oldFile) =>
            oldFile.name === newFile.name && oldFile.size === newFile.size,
        );

        if (isDuplicate) {
          alert("You cannot upload the same image.");
          return false;
        }

        return true;
      });

      return [...prev, ...uniqueFiles];
    });
    e.target.value = ''
  };
  const submitForm = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("bookingId", bookingId);
    form.append("rating", rating);
    form.append("comment", comment);
    images.forEach((image) => form.append("ReviewImage", image));
    createReviewMutation.mutate(form, {
      onSuccess: () => {
        setOpenReview(null);
      },
    });
  };
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-black/40 px-4 inset-0 fixed z-[999]"
      onClick={() => setOpenReview(null)}
    >
      {/* Card */}
      <div
        className="bg-bg backdrop-blur-sm
            border border-muted bg-white hover:scale-95 ease-in-out shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] transition-all duration-300 px-5 py-6 rounded-xl max-w-lg w-full h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-1">Leave a Review</h1>
          <p className="text-text">
            Your feedback helps us improve our service quality
          </p>
        </div>

        {/* Form */}
        <form onSubmit={submitForm}>
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
          {/* Comment */}
          <div className="flex flex-col mt-5">
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
              maxLength={200}
              minLength={10}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <p
              className={`text-right mt-2 text-xs font-medium ${
                comment.length >= 150 ? "text-red-500" : "text-gray-500"
              }`}
            >
              {comment.length}/200
            </p>
          </div>
          <div>
            <span className="block font-medium text-lg md:text-sm ">
              Add Photos (Optionals)
            </span>
            <p className="text-sm text-gray-500">
              Upload photos of service or work done.
            </p>
            <div className="grid grid-cols-4 gap-2 mt-3 ">
              {images.map((image) => (
                <div
                  key={image.name}
                  className="w-20 h-20 md:w-28 md:h-22 rounded-xl overflow-hidden border-2 border-purple-200 flex-shrink-0"
                >
                  <img
                    src={URL.revokeObjectURL(image)}
                    alt={image.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                  />
                </div>
              ))}

              <label className="border-2 border-dashed p-2 inline-block text-center w-fit-content border-purple-400 rounded-lg bg-gray-100 cursor-pointer transition-all duration-200 hover:scale-[1.05]">
                <input
                  id="file"
                  name="file"
                  type="file"
                  multiple
                  accept="image/png,image/jpeg,image/jpg"
                  className="hidden"
                  onChange={handlerImageChange}
                />
                <IoCameraOutline
                  size={30}
                  className="text-purple-500 inline-block"
                />
                <p className="text-xs text-gray-500 mb-1">Add more</p>
                <p className="text-[10px] text-gray-500">JPG,PNG (Max 5MB)</p>
              </label>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <Button color="white" onClick={() => setOpenReview(null)}>
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
