import Button from "../../components/common/Button";
import { FaStar } from "react-icons/fa";
import StatusBadge from "../../components/common/StatusBadge";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Avatar from "../../components/common/Avatar";

const ReviewCard = ({ review }) => {
  return (
    <div className="rounded-lg backdrop-blur-sm border border-gray-200 bg-white hover:scale-[1.02] ease-in-out shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] transition-all duration-300 px-2">
      <div className="py-3 px-1">
        <div className="flex justify-between items-start">
          <div className="flex gap-2 items-center">
            <div className="h-15 w-15 rounded-full">
              <Avatar
                name={review.providerId?.userId?.fullname}
                image={review.providerId?.userId?.profileImage?.url}
                className="bg-gray-300 text-blue-500 text-2xl"
              />
            </div>

            <div>
              <h1 className=" font-semibold text-gray-600 mt-2">
                {review.providerId?.userId?.fullname}
              </h1>
              <p className="text-sm text-gray-500">
                {new Date(review.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <div className="flex  gap-1 text-warning mt-1 text-sm">
                {[1, 2, 3, 4, 5].map((item) => (
                  <FaStar
                    key={item}
                    className={`${item <= review.rating ? " text-orange-500" : "text-gray-500"}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <StatusBadge
            category={review.bookingId?.categoryId?.name}
            className="mr-4 mt-1"
          />
        </div>
        <p className="text-sm text-gray-500 px-3 py-2">{review.comment}</p>
      </div>

      {review.images?.length > 0 && (
        <>
          <div className="w-full border-t border-gray-200"></div>
          <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide p-1">
            {review.images?.map((img) => (
              <div
                key={img._id}
                className="w-20 h-20 md:w-28 md:h-22 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0"
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
      <div className="p-3 flex justify-end gap-3">
        <Button color="danger" size="md">
          <MdDelete size={18} /> Delete
        </Button>
        <Button color="blue" size="lg">
          <MdModeEdit size={18} /> Edit
        </Button>
      </div>
    </div>
  );
};

export default ReviewCard;
