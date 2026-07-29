import Button from "../common/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBolt, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";
import { IoRocketOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import {
  MdOutlineCurrencyRupee,
  MdOutlineGppBad,
  MdVerifiedUser,
  MdWork,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import StatusBadge from "../common/StatusBadge";
import { CiStar } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import Avatar from "../common/Avatar";
const ProviderCard = ({ provider}) => {
  const navigate = useNavigate();

  // ---------------- Derived Values (API shape ke hisaab se) ----------------



  const isVerified = provider.verifiedByAdmin ? "verified" : "not verified";

  const availabilityText = provider.availability
    ? "Available Now"
    : "Unavailable";

  const jobsCompleted = provider.completedJobs || 0;

  const providerExperience = `${provider.experience} Years`;

  const response = provider.responseTime || "N/A";

  const providerRating = Number(provider.rating || 0).toFixed(1);

  const reviews = provider.totalReview || 0;

  const price = provider?.categories[0]?.pricing?.price || 0;


  const base =
    "py-1 px-3 rounded-full text-sm flex w-fit gap-2 items-center font-medium border";

  return (
    <>
      <div className="w-full bg-bg backdrop-blur-sm border border-muted bg-white hover:scale-[1.02]   ease-in-out shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] transition-all duration-300 md:p-5 p-4 rounded-lg mt-1 ">
        <div className="flex w-full gap-3 items-center">
          <div className="relative">
            <div className="w-20 h-20 min-w-20">
              <Avatar
                image={provider?.userId?.profileImage?.url}
                name={provider?.userId?.fullname}
                className="bg-gray-300 text-3xl text-red-500"
              />
            </div>
            <div
              className=" absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-3 border-white shadow-sm
    "
            />
          </div>

          <div className="w-full flex flex-col gap-1 ">
            <div className="w-full flex justify-between  items-center ">
              <h1 className="text-2xl font-semibold flex items-center">
                {provider.userId?.fullname}
              </h1>
              <BsThreeDotsVertical className="text-2xl cursor-pointer" />
            </div>

            <div className="flex gap-2 my-2">
              <StatusBadge category={provider.categories[0]?.category?.name} />
              {isVerified ? (
                <span
                  className={`${base} bg-green-100 text-green-600 border-green-200`}
                >
                  <MdVerifiedUser size={16} />
                  Verified
                </span>
              ) : (
                <span
                  className={`${base} bg-red-100 text-red-600 border-red-200`}
                >
                  <MdOutlineGppBad size={16} />
                  not Verified
                </span>
              )}
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                <FaStar className="text-yellow-500" />
                <h2 className="text-lg font-bold">{providerRating}</h2>
                <h2 className="text-muted text-sm">{reviews} Reviews</h2>
              </div>
              <div className="flex items-center gap-1 font-semibold text-success">
                <IoShieldCheckmarkOutline />
                <h3>{availabilityText}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-200 my-3"></div>

        <div className="flex items-stretch justify-between">
          <div className="flex flex-col justify-center items-center gap-1 flex-1">
            <MdVerifiedUser size={24} className="text-green-500" />

            <h1 className="font-bold text-lg">{jobsCompleted}</h1>

            <p className="text-muted text-sm whitespace-nowrap">
              Jobs Completed
            </p>
          </div>

          {/* Divider */}
          <div className="w-px mx-4 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

          <div className="flex flex-col justify-center items-center gap-1 flex-1">
            <MdWork size={24} className="text-purple-500" />

            <h1 className="font-bold text-lg">{providerExperience}</h1>

            <p className="text-muted text-sm whitespace-nowrap">Experience</p>
          </div>

          {/* Divider */}
          <div className="w-px mx-4 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

          <div className="flex flex-col justify-center items-center gap-1 flex-1">
            <FaBolt size={24} className="text-blue-500" />

            <h1 className="font-bold text-lg">{response}</h1>

            <p className="text-muted text-sm whitespace-nowrap">
              Response Time
            </p>
          </div>
        </div>

        <div className="w-full border-t border-gray-200 my-3"></div>

        <div className="flex flex-col justify-center py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 ">
              <FaLocationDot className=" text-black" size={24} />
              <div>
                <h3 className="font-semibold text-text text-lg">500m away</h3>
                <p className="text-sm text-muted">
                  {provider.location?.city?.name},
                  {provider.location?.district?.name},
                  {provider.location?.state?.name}
                </p>
              </div>
            </div>
            <div>
              <h3 className="flex items-center text-xl font-bold">
                <MdOutlineCurrencyRupee />
                {price}
                {provider?.categories[0]?.pricing?.priceType === "hourly" ? "/hr" : "/fixed"}
              </h3>
              
            </div>
          </div>
          <div className="w-full border-t border-gray-200 my-3"></div>

          <div className="flex items-center justify-between mt-1">
            <div className="w-full flex flex-col gap-5">
              <div className="flex gap-3 justify-center">
                {provider.topRated ? (
                  <span className="bg-yellow-50  flex items-center gap-1 font-bold rounded-md py-2 px-5">
                    <CiStar className="text-yellow-500" size={20} />
                    <h1 className="text-yellow-500 font-semibold">Top Rated</h1>
                  </span>
                ) : (
                  <span className="bg-blue-50 flex items-center gap-2 font-bold rounded-md py-2 px-5">
                    <FiTrendingUp className="text-blue-500" size={20} />
                    <h1 className="text-yellow-500 font-semibold">
                      Rising Talent
                    </h1>
                  </span>
                )}
                {provider.trusted ? (
                  <span className="bg-green-50 flex items-center gap-1 font-bold rounded-md py-2 px-5">
                    <AiOutlineLike className="text-green-500" size={20} />
                    <h1 className="text-text font-semibold">Trusted Pro</h1>
                  </span>
                ) : (
                  <span className="bg-gray-50 flex items-center gap-1 font-bold rounded-md py-2 px-5">
                    <IoRocketOutline className="text-gray-500" size={20} />

                    <h1 className="text-text font-semibold">Recently Joined</h1>
                  </span>
                )}
              </div>

              <div className="w-full">
                <Button
                  fullWidth
                  color="success"
                  onClick={() =>
                    navigate(`/user/provider-details/${provider._id}`)
                  }
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderCard;
