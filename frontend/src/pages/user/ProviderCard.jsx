import Button from "../../components/common/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBolt, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";
import { IoRocketOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import {
  MdGppBad,
  MdOutlineCurrencyRupee,
  MdOutlineGppBad,
  MdVerifiedUser,
  MdWork,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import StatusBadge from "../../components/common/StatusBadge";
import { CiStar } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import Avatar from "../../components/common/Avatar";
const ProviderCard = ({ provider }) => {
  const navigate = useNavigate();

  const jobsCompleted = provider.completedJobs || 0;

  const providerExperience = `${provider.experience} Years`;

  const response = provider.responseTime || "N/A";

  const providerRating = Number(provider.rating || 0).toFixed(1);

  const reviews = provider.totalReview || 0;

  const price = provider?.category?.pricing?.price || 0;

  return (
    <>
      <div className="w-full bg-bg backdrop-blur-sm border border-gray-200 bg-white hover:scale-[1.02]   ease-in-out shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] transition-all duration-300 md:px-5 md:py-3 p-4 rounded-lg mt-1 ">
        <div className="flex w-full gap-3 items-center">
          <div className="relative">
            <div className="w-16 h-16 min-w-16">
              <Avatar
                image={provider?.profileImage}
                name={provider?.providerName}
                className="bg-gray-300 text-3xl text-red-500"
              />
            </div>
            <div className="absolute bottom-1 right-0 w-4 h-4 rounded-full bg-white flex items-center justify-center">
              <div
                className={`w-3 h-3 rounded-full shadow-sm ${
                  provider?.availability
                    ? "bg-green-500"
                    : "bg-white border-2 border-green-500"
                }`}
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="w-full flex gap-1 items-center ">
              <h1 className="text-xl font-semibold flex items-center">
                {provider?.providerName}
              </h1>
              {provider?.verifiedByAdmin ? (
                <MdVerifiedUser size={16} className="text-primary" />
              ) : (
                <MdGppBad size={18} className="text-danger" />
              )}
            </div>

            <div className="flex items-center gap-2">
              <FaStar className="text-orange-500" />
              <h2 className="text-sm text-grayness font-bold">
                {providerRating}
              </h2>
              <h2 className="text-brownness text-xs font-semibold">
                ({reviews} Reviews)
              </h2>
            </div>
            <div className="mt-2">
              <StatusBadge category={provider?.category?.name} />
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-200 my-3"></div>

        <div className="flex items-stretch justify-between">
          <div className="flex flex-col justify-center items-center gap-1 flex-1">
            <MdVerifiedUser size={20} className="text-green-500" />

            <h1 className="font-bold text-lg">{jobsCompleted}</h1>

            <p className="text-muted text-sm whitespace-nowrap">
              Jobs Completed
            </p>
          </div>

          {/* Divider */}
          <div className="w-px mx-4 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

          <div className="flex flex-col justify-center items-center gap-1 flex-1">
            <MdWork size={20} className="text-purple-500" />

            <h1 className="font-bold text-lg">{providerExperience}</h1>

            <p className="text-muted text-sm whitespace-nowrap">Experience</p>
          </div>

          {/* Divider */}
          <div className="w-px mx-4 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

          <div className="flex flex-col justify-center items-center gap-1 flex-1">
            <FaBolt size={20} className="text-blue-500" />

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
              <FaLocationDot className=" text-black" size={20} />
              <div>
                {provider?.distanceInKm && (
                  <h3 className="font-bold text-text text-sm">500m away</h3>
                )}
                <p className="text-sm text-muted">
                  {provider?.city},{provider?.district},{provider?.state}
                </p>
              </div>
            </div>
            <div>
              <h3 className="flex items-center text-xl font-bold">
                <MdOutlineCurrencyRupee size={18}/>
                {price} 
                {provider?.category?.pricing?.priceType === "hourly"
                  ? <span className="text-lg">/ hr</span>
                  : <span className="text-lg">/ fixed</span>}
              </h3>
            </div>
          </div>
          <div className="w-full border-t border-gray-200 my-3"></div>

          <div className="flex items-center justify-between mt-1">
            <div className="w-full flex flex-col gap-5">
              <div className="flex gap-3 justify-center">
                {provider.topRated ? (
                  <span className="bg-orange-50 w-full flex items-center justify-center gap-2 font-bold rounded-md py-2 px-5">
                    <FaStar className="text-orange-500" size={16} />
                    <h1 className="text-orange-500 text-sm font-semibold">Top Rated</h1>
                  </span>
                ) : (
                  <span className="bg-blue-50 w-full flex items-center justify-center gap-2 font-bold rounded-md py-2 px-5">
                    <FiTrendingUp className="text-blue-500" size={16} />
                    <h1 className="text-primary text-sm font-semibold">
                      Rising Talent
                    </h1>
                  </span>
                )}
                {provider.trusted ? (
                  <span className="bg-green-50 w-full flex items-center justify-center gap-2 font-bold rounded-md py-2 px-5">
                    <AiOutlineLike className="text-green-500" size={16} />
                    <h1 className="text-success text-sm font-semibold">Trusted Pro</h1>
                  </span>
                ) : (
                  <span className="bg-gray-50 w-full  flex items-center justify-center gap-2 font-bold rounded-md py-2 px-3 md:px-5">
                    <IoRocketOutline className="text-gray-500" size={16} />

                    <h1 className="text-text text-sm font-semibold">Recently Joined</h1>
                  </span>
                )}
              </div>

              <div className="w-full">
                <Button
                  fullWidth
                  color="success"
                  type="button"
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
