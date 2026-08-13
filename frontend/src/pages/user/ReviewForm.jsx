import { FaStar } from "react-icons/fa";
import Button from "../../components/common/Button";
import { IoCameraOutline } from "react-icons/io5";
import { useEffect, useMemo, useState } from "react";
import { useReview } from "../../hooks/useReview";
import { IoIosClose } from "react-icons/io";

const ReviewForm = ({
  booking = null,
  review = null,
  mode = "create",
  setOpenReview,
}) => {
  const [hover, setHover] = useState(0);

  // =========================
  // FORM STATE
  // =========================

  const [rating, setRating] = useState(review?.rating || 0);

  const [comment, setComment] = useState(review?.comment || "");

  // Existing images from backend
  const [existingImages, setExistingImages] = useState(review?.images || []);

  // New images selected from local system
  const [images, setImages] = useState([]);

  const bookingId = booking?._id;

  const { createReviewMutation, updateReviewMutation } = useReview();

  const MAX_IMAGES = 5;
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB

  // =========================
  // CHECK IMAGE CHANGES
  // =========================

  const imagesChanged = useMemo(() => {
    if (mode !== "edit") return false;

    // New image added
    if (images.length > 0) {
      return true;
    }

    const originalImages = review?.images || [];

    // Existing image removed
    if (existingImages.length !== originalImages.length) {
      return true;
    }

    // Existing image order/content changed
    return existingImages.some(
      (image, index) => image.fileId !== originalImages[index]?.fileId,
    );
  }, [mode, review?.images, existingImages, images]);

  // =========================
  // CHECK ANY FORM CHANGES
  // =========================

  const hasChanges = useMemo(() => {
    if (mode !== "edit") return true;

    const ratingChanged = Number(rating) !== Number(review?.rating);

    const commentChanged = comment.trim() !== review?.comment?.trim();

    return ratingChanged || commentChanged || imagesChanged;
  }, [mode, rating, comment, review?.rating, review?.comment, imagesChanged]);

  // =========================
  // IMAGE CHANGE HANDLER
  // =========================

  const handlerImageChange = (e) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    // Existing + new + selected files
    if (existingImages.length + images.length + files.length > MAX_IMAGES) {
      alert(`You can upload maximum ${MAX_IMAGES} images.`);
      e.target.value = "";
      return;
    }

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

    // Validate files
    for (const file of files) {
      if (!allowedTypes.includes(file.type)) {
        alert(`${file.name} is not a valid image.`);
        e.target.value = "";
        return;
      }

      if (file.size > MAX_SIZE) {
        alert(`${file.name} size should be less than 5MB.`);
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
          alert(`You cannot upload the same image: ${newFile.name}`);
          return false;
        }

        return true;
      });

      return [...prev, ...uniqueFiles];
    });

    // Allow selecting the same file again
    e.target.value = "";
  };

  // =========================
  // REMOVE EXISTING IMAGE
  // =========================

  const removeExistingImage = (fileId) => {
    setExistingImages((prev) =>
      prev.filter((image) => image.fileId !== fileId),
    );
  };

  // =========================
  // REMOVE NEW IMAGE
  // =========================

  const removeNewImage = (fileName, fileSize) => {
    setImages((prev) =>
      prev.filter(
        (image) => image.name !== fileName || image.size !== fileSize,
      ),
    );
  };

  // =========================
  // SUBMIT FORM
  // =========================

  const submitForm = async (e) => {
    e.preventDefault();

    // --------------------------------
    // EDIT MODE - NO CHANGES
    // --------------------------------

    if (mode === "edit" && !hasChanges) {
      return;
    }

    try {
      const form = new FormData();

      // =========================
      // CREATE REVIEW
      // =========================

      if (mode === "create") {
        if (!bookingId) {
          alert("Booking ID is required.");
          return;
        }

        form.append("bookingId", bookingId);
        form.append("rating", rating);
        form.append("comment", comment.trim());

        // New images
        images.forEach((image) => {
          form.append("ReviewImage", image);
        });

        await createReviewMutation.mutateAsync(form);
      }

      // =========================
      // EDIT REVIEW
      // =========================

      if (mode === "edit") {
        form.append("rating", rating);
        form.append("comment", comment.trim());

        // --------------------------------
        // IMAGE DATA ONLY IF IMAGE CHANGED
        // --------------------------------

        if (imagesChanged) {
          // Existing images user wants to keep
          form.append(
            "existingImages",
            JSON.stringify(existingImages.map((image) => image.fileId)),
          );

          // New images
          images.forEach((image) => {
            form.append("ReviewImage", image);
          });
        }

        await updateReviewMutation.mutateAsync({
          reviewId: review._id,
          data: form,
        });
      }

      // Close modal after success
      setOpenReview(null);
    } catch (error) {
      console.error("Review submit error:", error);
    }
  };

  // =========================
  // MODAL SCROLL LOCK
  // =========================

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // =========================
  // LOADING STATE
  // =========================

  const isSubmitting =
    createReviewMutation?.isPending || updateReviewMutation?.isPending;

  // =========================
  // UI
  // =========================

  return (
    <div
      className="fixed inset-0 z-[999] flex w-full items-center justify-center bg-black/40 px-2 sm:px-4"
      onClick={() => setOpenReview(null)}
    >
      <div
        className="
          w-full
          max-w-lg
          max-h-[95vh]
          overflow-y-auto
          rounded-xl
          bg-white
          px-4
          py-6
          shadow-lg
          scrollbar-hide
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* =========================
            HEADER
        ========================= */}

        <div className="text-center">
          <h1 className="mb-1 text-2xl font-semibold">
            {mode === "edit" ? "Edit Review" : "Leave a Review"}
          </h1>

          <p className="text-text">
            Your feedback helps us improve our service quality
          </p>
        </div>

        {/* =========================
            FORM
        ========================= */}

        <form onSubmit={submitForm}>
          {/* =========================
              RATING
          ========================= */}

          <div className="mt-4 flex justify-center gap-2 text-2xl">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer transition-transform duration-200 hover:scale-125 ${
                  star <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              />
            ))}
          </div>

          {/* =========================
              COMMENT
          ========================= */}

          <div className="mt-5 flex flex-col">
            <label
              htmlFor="comment"
              className="mb-2 block text-lg font-medium md:text-sm"
            >
              Write your comment
            </label>

            <textarea
              className="
                w-full
                resize-none
                rounded-lg
                border
                border-muted
                p-3
                outline-none
                focus:ring-2
                focus:ring-blue-400
                scrollbar-hide
              "
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
              className={`mt-2 text-right text-xs font-medium ${
                comment.length >= 150 ? "text-red-500" : "text-gray-500"
              }`}
            >
              {comment.length}/200
            </p>
          </div>

          {/* =========================
              IMAGES
          ========================= */}

          <div className="mt-2">
            <span className="block text-lg font-medium md:text-sm">
              Add Photos (Optional)
            </span>

            <p className="text-sm text-gray-500">
              Upload photos of service or work done.
            </p>

            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
              {/* =========================
                  EXISTING IMAGES
              ========================= */}

              {existingImages.map((image) => (
                <div
                  key={image.fileId}
                  className="
                    relative
                    aspect-square
                    w-full
                    overflow-hidden
                    rounded-xl
                    border-2
                    border-purple-200
                  "
                >
                  <img
                    src={image.url}
                    alt="Review"
                    className="h-full w-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={() => removeExistingImage(image.fileId)}
                    className="
                      absolute
                      right-1
                      top-1
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-black/50
                      text-white
                      transition
                      hover:bg-black/70
                    "
                  >
                    <IoIosClose size={24} />
                  </button>
                </div>
              ))}

              {/* =========================
                  NEW IMAGES
              ========================= */}

              {images.map((image) => {
                const previewUrl = URL.createObjectURL(image);

                return (
                  <div
                    key={`${image.name}-${image.size}`}
                    className="
                      relative
                      aspect-square
                      w-full
                      overflow-hidden
                      rounded-xl
                      border-2
                      border-purple-200
                    "
                  >
                    <img
                      src={previewUrl}
                      alt={image.name}
                      className="h-full w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => removeNewImage(image.name, image.size)}
                      className="
                        absolute
                        right-1
                        top-1
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        bg-black/50
                        text-white
                        transition
                        hover:bg-black/70
                      "
                    >
                      <IoIosClose size={24} />
                    </button>
                  </div>
                );
              })}

              {/* =========================
                  ADD MORE
              ========================= */}

              {existingImages.length + images.length < MAX_IMAGES && (
                <label
                  className="
                    flex
                    aspect-square
                    w-full
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-lg
                    border-2
                    border-dashed
                    border-purple-400
                    bg-gray-100
                    p-2
                    text-center
                    transition-all
                    duration-200
                    hover:scale-[1.03]
                  "
                >
                  <input
                    id="file"
                    name="file"
                    type="file"
                    multiple
                    accept="image/png,image/jpeg,image/jpg"
                    className="hidden"
                    onChange={handlerImageChange}
                  />

                  <IoCameraOutline size={30} className="text-purple-500" />

                  <p className="text-xs text-gray-500">Add more</p>

                  <p className="text-[10px] text-gray-500">
                    JPG, PNG (Max 5MB)
                  </p>
                </label>
              )}
            </div>

            <p className="mt-2 text-right text-xs text-gray-500">
              {existingImages.length + images.length}/{MAX_IMAGES} images
            </p>
          </div>

          {/* =========================
              BUTTONS
          ========================= */}

          <div className="flex justify-end gap-3 pt-7">
            <Button
              type="button"
              color="white"
              className="flex-1 md:flex-0"
              onClick={() => setOpenReview(null)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              color="blue"
              className="flex-1 md:flex-0"
              disabled={isSubmitting || (mode === "edit" && !hasChanges)}
            >
              {isSubmitting
                ? mode === "edit"
                  ? "Updating..."
                  : "Submitting..."
                : mode === "edit"
                  ? "Update Review"
                  : "Submit Review"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
