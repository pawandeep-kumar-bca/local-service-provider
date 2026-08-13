import Button from "../../components/common/Button";
import { FaStar } from "react-icons/fa";
import StatusBadge from "../../components/common/StatusBadge";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Avatar from "../../components/common/Avatar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
import {  useState } from "react";
import ReviewForm from "./ReviewForm";
const ReviewCard = ({ review }) => {
  const [openAction, setOpenAction] = useState(false);
  const [openEitReviewForm, setOpenEitReviewForm] = useState(false);
  
  const editReviewHandler = () => {
    setOpenAction(false);
    setOpenEitReviewForm(true);
  };
  const deleteReviewHandler = () => {
    setOpenAction(false);
  };
  return (
    <>
      <div className="rounded-lg backdrop-blur-sm border border-gray-200 bg-white hover:scale-[1.02] ease-in-out shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] transition-all duration-300 p-4 relative">
        <div>
          <div className=" px-1">
            <div className="flex justify-between items-start">
              <div className="flex gap-2 items-center">
                <div className="h-16 w-16 rounded-full">
                  <Avatar
                    name={review.providerId?.userId?.fullname}
                    image={review.providerId?.userId?.profileImage?.url}
                    className="bg-gray-300 text-blue-500 text-2xl"
                  />
                </div>

                <div>
                  <h1 className=" font-semibold text-gray-600 mb-1">
                    {review.providerId?.userId?.fullname}
                  </h1>

                  <StatusBadge category="Plumbing" />
                  <div className="flex  gap-1 text-warning mt-2 text-sm">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <FaStar
                        key={item}
                        className={`${item <= review.rating ? " text-orange-500" : "text-gray-500"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-10  h-10 hover:bg-gray-100 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer"
                onClick={() => setOpenAction((prev) => !prev)}
              >
                <BsThreeDotsVertical size={18} />
              </button>
              {/* <StatusBadge
            category={review?.serviceSnapshot?.categoryName}
            className="mr-4 mt-1"
          /> */}
            </div>
            <div>
              <p className="text-sm text-gray-500  py-2">{review.comment}</p>
              <p className="text-sm text-gray-500 text-end">
                {new Date(review.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {review.images?.length > 0 && (
            <>
              <div className="w-full border-t border-gray-200"></div>
              <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide p-1">
                {review.images?.map((img) => (
                  <div
                    key={img._id}
                    className="w-20 h-20 md:w-[6.7rem] md:h-22 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0"
                  >
                    <img
                      src={img?.url}
                      alt="Review"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        {openAction && (
          <div className="space-y-2 absolute top-12 right-8 bg-white shadow-lg border border-gray-200 p-3  rounded-xl">
            <button
              className="flex text-sm items-center gap-2 font-medium text-primary cursor-pointer"
              onClick={editReviewHandler}
            >
              <VscEdit /> Edit Review
            </button>
            <button
              className="flex text-sm items-center gap-2 font-medium text-success cursor-pointer"
              onClick={deleteReviewHandler}
            >
              <RiDeleteBin6Line />
              Delete Review
            </button>
          </div>
        )}
      </div>
      {openEitReviewForm && (
        <ReviewForm
          review={review}
          mode="edit"
          setOpenReview={() => setOpenEitReviewForm(false)}
        />
      )}
    </>
  );
};

export default ReviewCard;
