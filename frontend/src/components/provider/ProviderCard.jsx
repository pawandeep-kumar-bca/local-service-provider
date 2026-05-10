import Button from "../common/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBolt, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlineCurrencyRupee, MdVerifiedUser, MdWork } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import StatusBadge from "../common/StatusBadge";
import { CiStar } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";

const ProviderCard = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-col-1 gap-2 md:grid-cols-3">
      <div className="w-full bg-bg backdrop-blur-sm border border-muted bg-white hover:scale-[1.02]   ease-in-out shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] transition-all duration-300 md:p-5 p-4 rounded-lg mt-1">
        <div className="flex w-full gap-3 items-center">
          <img
            src="/assets/profile.png"
            alt="profile"
            className="object-cover w-[5rem] h-[5rem] rounded-full"
          />

          <div className="w-full flex flex-col gap-1 ">
            <div className="w-full flex justify-between  items-center ">
              <h1 className="text-2xl font-semibold flex items-center">
                Aman Gupta{" "}
              </h1>
              <BsThreeDotsVertical className="text-2xl cursor-pointer" />
            </div>

            <div className="flex gap-2 my-2">
              <StatusBadge category="home-repair" />
              <StatusBadge badge="verified" showIcon />
            </div>
            <div className="flex items-center gap-2 ">
              <FaStar className="text-yellow-500" />
              <h2 className="text-lg font-bold">4.5</h2>
              <h2 className="text-muted text-sm">400 Reviews</h2>
            </div>
            <div className="flex items-center gap-2 font-semibold text-success">
              <IoShieldCheckmarkOutline />
              <h3>Available Now</h3>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-muted my-3"></div>

        <div className="flex items-stretch justify-between">
          <div className="flex flex-col justify-center items-center gap-1 flex-1">
            <MdVerifiedUser size={24} className="text-green-500" />

            <h1 className="font-bold text-lg">120</h1>

            <p className="text-muted text-sm whitespace-nowrap">Jobs Completed</p>
          </div>

          {/* Divider */}
          <div className="w-px mx-4 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

          <div className="flex flex-col justify-center items-center gap-1 flex-1">
            <MdWork size={24} className="text-purple-500" />

            <h1 className="font-bold text-lg">5 Years</h1>

            <p className="text-muted text-sm whitespace-nowrap">Experience</p>
          </div>

          {/* Divider */}
          <div className="w-px mx-4 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

          <div className="flex flex-col justify-center items-center gap-1 flex-1">
            <FaBolt size={24} className="text-blue-500" />

            <h1 className="font-bold text-lg">10 mins</h1>

            <p className="text-muted text-sm whitespace-nowrap">Response Time</p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-muted my-3"></div>

        <div className="flex flex-col justify-center py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 ">
              <FaLocationDot className=" text-black" size={24} />
              <div>
                <h3 className="font-semibold text-text text-lg">500m away</h3>
                <p className="text-sm text-muted">
                  New Delhi, India
                </p>
              </div>
            </div>
            <div>
              <h3 className="flex items-center text-xl font-bold">
                <MdOutlineCurrencyRupee /> 250/hr
              </h3>
              <p className="text-muted ">Hourly Rate</p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-muted my-3"></div>

          <div className="flex items-center justify-between mt-1">
            <div className="w-full flex flex-col gap-5">
              <div className="flex gap-3 justify-center">
                <span className="bg-yellow-50  flex items-center gap-1 font-bold rounded-md p-2">
                  <CiStar className="text-yellow-500" size={20} />
                  <h1 className="text-yellow-500">Top Rated</h1>
                </span>
                <span className="bg-green-50 flex items-center gap-1 font-bold rounded-md p-2">
                  <AiOutlineLike className="text-green-500" size={20} />
                  <h1 className="text-text">Trusted Pro</h1>
                </span>
              </div>

              <div className="w-full">
                <Button
                  fullWidth
                  color="success"
                  onClick={() => navigate("/user/provider-details")}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
