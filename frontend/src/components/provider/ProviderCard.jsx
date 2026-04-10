import Button from "../common/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const ProviderCard = () => {
  return (
    <div className="w-full shadow-[0_0_15px_rgba(0,0,0,0.45)] p-5 rounded-lg mt-6">
      <div className="flex w-full gap-3 items-center">
        <img
          src="/assets/profile.png"
          alt="profile"
          className="object-cover w-[5rem] h-[5rem] rounded-full"
        />

        <div className="w-full flex flex-col gap-1 ">
          <div className="w-full flex justify-between  items-center ">
            <h1 className="text-2xl font-semibold">Aman Gupta</h1>
            <BsThreeDotsVertical className="text-2xl cursor-pointer"/>
          </div>
          <div className="flex items-center gap-2 text-yellow-500">
            <div className="flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h2 className="text-muted text-sm">400 Reviews</h2>
          </div>
          <div className="flex items-center gap-2">
            <IoShieldCheckmarkOutline className="text-success " />
            <h3>Available Now</h3>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-muted my-2"></div>
      <div className="flex flex-col justify-center py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 ">
            <IoShieldCheckmarkOutline className="text-success text-base" />
            <h3 className="text-sm font-semibold text-text">1 Job completed</h3>
          </div>
          <h3 className="flex items-center text-xl font-bold">
            <MdOutlineCurrencyRupee /> 250/hr
          </h3>
        </div>
        <div className="w-full h-[1px] bg-muted my-3"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FaLocationDot className="text-base text-muted"/>
            <h3 className="font-semibold text-text">500m away</h3>
          </div>

          <Button color="success">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
