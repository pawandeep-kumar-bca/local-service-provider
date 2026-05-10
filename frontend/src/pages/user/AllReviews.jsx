import Button from "../../components/common/Button";
import { FaStar } from "react-icons/fa";

const AllReviews = () => {
  return (
    <div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className="rounded-lg backdrop-blur-sm border border-muted bg-white hover:scale-95 ease-in-out shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] transition-all duration-300"
        >
          <div className="py-3">
            <div className="flex gap-2">
              <img
                src="/assets/profile.png"
                alt="profile"
                className="w-[4rem] h-[4rem] rounded-full object-cover cursor-pointer"
              />
              <div>
                <h1 className=" font-semibold mt-2">Dr. Neha Sharma</h1>
                <p className="text-sm">21 May 2024</p>
                <div className="flex  gap-1 text-warning mt-1 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <p className="text-sm px-3 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              consequatur ipsum doloribus voluptatem perspiciatis, labore
              facere, corporis, quibusdam vel voluptate quis. Odit delectus
              assumenda quaerat vitae fugit aut voluptas et.
            </p>
          </div>

          <div className="w-full h-[1px] bg-muted"></div>
          <div className="p-3 flex justify-end gap-3">
            <Button color="blue">Edit</Button>
            <Button color="white" className="text-danger">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
