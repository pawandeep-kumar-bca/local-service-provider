import Button from "../../components/common/Button";
import { FaStar } from "react-icons/fa";
import StatusBadge from "../../components/common/StatusBadge";
import { MdDelete, MdModeEdit } from "react-icons/md";

const AllReviews = () => {
  return (
    <div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg backdrop-blur-sm border border-muted bg-white hover:scale-[1.02] ease-in-out shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] transition-all duration-300 p">
          <div className="py-3 px-1">
            <div className="flex justify-between items-start">
              <div className="flex gap-2 items-center">
                <img
                  src="/assets/profile.png"
                  alt="profile"
                  className="w-[4rem] h-[4rem] rounded-full object-cover cursor-pointer"
                />
                <div>
                  <h1 className=" font-semibold text-gray-600 mt-2">Dr. Neha Sharma</h1>
                  <p className="text-sm text-gray-500">21 May 2024</p>
                  <div className="flex  gap-1 text-warning mt-1 text-sm">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <StatusBadge category="cleaning" className="mr-4 mt-1"/>
            </div>
            <p className="text-sm text-gray-500 px-3 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              consequatur ipsum doloribus voluptatem perspiciatis, labore
              facere, corporis, quibusdam vel voluptate quis. Odit delectus
              assumenda quaerat vitae fugit aut voluptas et.
            </p>
          </div>

          <div className="w-full border-t border-gray-200"></div>
          <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide p-1">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="w-20 h-20 md:w-28 md:h-22 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNG081EnQvNRiWAuIIfuvS2rOgk_uD60oa6AEWK5j9hfxBw4fHfDFdqt_E&s=10"
                  alt="Review"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="p-3 flex justify-end gap-3">
            <Button color="danger" size="md">
              <MdDelete size={18} /> Delete
            </Button>
            <Button color="blue" size="lg">
              <MdModeEdit size={18} /> Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
