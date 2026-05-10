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
import { useNavigate, useParams } from "react-router-dom";
import StatusBadge from "../common/StatusBadge";
import { CiStar } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";

const ProviderCard = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const providers = [
    {
      id: 1,
      name: "Aman Gupta",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      category: "home-repair",
      verified: true,
      rating: 4.5,
      reviews: 400,
      availability: "Available Now",
      completedJobs: 120,
      experience: "5 Years",
      responseTime: "10 mins",
      distance: "500m away",
      location: "New Delhi, India",
      hourlyRate: 250,
      topRated: true,
      trusted: true,
    },

    {
      id: 2,
      name: "Rohit Sharma",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      category: "plumbing",
      verified: true,
      rating: 4.7,
      reviews: 320,
      availability: "Available Now",
      completedJobs: 180,
      experience: "6 Years",
      responseTime: "15 mins",
      distance: "1km away",
      location: "Mumbai, India",
      hourlyRate: 300,
      topRated: true,
      trusted: true,
    },

    {
      id: 3,
      name: "Priya Verma",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      category: "cleaning",
      verified: true,
      rating: 4.8,
      reviews: 500,
      availability: "Available Now",
      completedJobs: 240,
      experience: "4 Years",
      responseTime: "8 mins",
      distance: "700m away",
      location: "Delhi, India",
      hourlyRate: 220,
      topRated: true,
      trusted: true,
    },

    {
      id: 4,
      name: "Vikas Kumar",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      category: "appliance",
      verified: true,
      rating: 4.4,
      reviews: 190,
      availability: "Busy",
      completedJobs: 90,
      experience: "3 Years",
      responseTime: "20 mins",
      distance: "2km away",
      location: "Lucknow, India",
      hourlyRate: 280,
      topRated: false,
      trusted: true,
    },

    {
      id: 5,
      name: "Neha Singh",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      category: "beauty",
      verified: true,
      rating: 4.9,
      reviews: 620,
      availability: "Available Now",
      completedJobs: 310,
      experience: "7 Years",
      responseTime: "5 mins",
      distance: "300m away",
      location: "Jaipur, India",
      hourlyRate: 450,
      topRated: true,
      trusted: true,
    },

    {
      id: 6,
      name: "Arjun Mehta",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      category: "home-decor",
      verified: false,
      rating: 4.3,
      reviews: 160,
      availability: "Available Now",
      completedJobs: 70,
      experience: "2 Years",
      responseTime: "18 mins",
      distance: "1.5km away",
      location: "Pune, India",
      hourlyRate: 350,
      topRated: false,
      trusted: true,
    },

    {
      id: 7,
      name: "Simran Kaur",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
      category: "cleaning",
      verified: true,
      rating: 4.6,
      reviews: 290,
      availability: "Available Now",
      completedJobs: 140,
      experience: "5 Years",
      responseTime: "12 mins",
      distance: "850m away",
      location: "Chandigarh, India",
      hourlyRate: 260,
      topRated: true,
      trusted: true,
    },

    {
      id: 8,
      name: "Karan Malhotra",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      category: "plumbing",
      verified: true,
      rating: 4.5,
      reviews: 230,
      availability: "Busy",
      completedJobs: 110,
      experience: "4 Years",
      responseTime: "17 mins",
      distance: "2.3km away",
      location: "Noida, India",
      hourlyRate: 290,
      topRated: false,
      trusted: true,
    },

    {
      id: 9,
      name: "Anjali Sharma",
      image: "https://randomuser.me/api/portraits/women/9.jpg",
      category: "beauty",
      verified: true,
      rating: 4.8,
      reviews: 540,
      availability: "Available Now",
      completedJobs: 270,
      experience: "6 Years",
      responseTime: "7 mins",
      distance: "400m away",
      location: "Gurgaon, India",
      hourlyRate: 500,
      topRated: true,
      trusted: true,
    },

    {
      id: 10,
      name: "Deepak Yadav",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      category: "home-repair",
      verified: false,
      rating: 4.2,
      reviews: 130,
      availability: "Available Now",
      completedJobs: 65,
      experience: "2 Years",
      responseTime: "25 mins",
      distance: "3km away",
      location: "Kanpur, India",
      hourlyRate: 230,
      topRated: false,
      trusted: false,
    },

    {
      id: 11,
      name: "Rahul Verma",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      category: "appliance",
      verified: true,
      rating: 4.7,
      reviews: 350,
      availability: "Available Now",
      completedJobs: 170,
      experience: "5 Years",
      responseTime: "11 mins",
      distance: "1.2km away",
      location: "Bhopal, India",
      hourlyRate: 320,
      topRated: true,
      trusted: true,
    },

    {
      id: 12,
      name: "Pooja Kapoor",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      category: "cleaning",
      verified: true,
      rating: 4.9,
      reviews: 610,
      availability: "Available Now",
      completedJobs: 300,
      experience: "8 Years",
      responseTime: "6 mins",
      distance: "250m away",
      location: "Indore, India",
      hourlyRate: 280,
      topRated: true,
      trusted: true,
    },

    {
      id: 13,
      name: "Sanjay Mishra",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      category: "plumbing",
      verified: true,
      rating: 4.5,
      reviews: 210,
      availability: "Busy",
      completedJobs: 100,
      experience: "3 Years",
      responseTime: "19 mins",
      distance: "2km away",
      location: "Patna, India",
      hourlyRate: 270,
      topRated: false,
      trusted: true,
    },

    {
      id: 14,
      name: "Meera Joshi",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      category: "beauty",
      verified: true,
      rating: 4.8,
      reviews: 450,
      availability: "Available Now",
      completedJobs: 220,
      experience: "6 Years",
      responseTime: "9 mins",
      distance: "600m away",
      location: "Ahmedabad, India",
      hourlyRate: 480,
      topRated: true,
      trusted: true,
    },

    {
      id: 15,
      name: "Rakesh Patel",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      category: "home-decor",
      verified: false,
      rating: 4.1,
      reviews: 120,
      availability: "Available Now",
      completedJobs: 55,
      experience: "2 Years",
      responseTime: "22 mins",
      distance: "2.7km away",
      location: "Surat, India",
      hourlyRate: 340,
      topRated: false,
      trusted: false,
    },

    {
      id: 16,
      name: "Sneha Reddy",
      image: "https://randomuser.me/api/portraits/women/16.jpg",
      category: "cleaning",
      verified: true,
      rating: 4.7,
      reviews: 330,
      availability: "Available Now",
      completedJobs: 160,
      experience: "5 Years",
      responseTime: "13 mins",
      distance: "1km away",
      location: "Hyderabad, India",
      hourlyRate: 260,
      topRated: true,
      trusted: true,
    },

    {
      id: 17,
      name: "Mohit Jain",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
      category: "appliance",
      verified: true,
      rating: 4.6,
      reviews: 260,
      availability: "Busy",
      completedJobs: 145,
      experience: "4 Years",
      responseTime: "14 mins",
      distance: "1.8km away",
      location: "Nagpur, India",
      hourlyRate: 310,
      topRated: false,
      trusted: true,
    },

    {
      id: 18,
      name: "Kavita Sharma",
      image: "https://randomuser.me/api/portraits/women/18.jpg",
      category: "beauty",
      verified: true,
      rating: 4.9,
      reviews: 700,
      availability: "Available Now",
      completedJobs: 350,
      experience: "9 Years",
      responseTime: "4 mins",
      distance: "150m away",
      location: "Bangalore, India",
      hourlyRate: 550,
      topRated: true,
      trusted: true,
    },

    {
      id: 19,
      name: "Ajay Thakur",
      image: "https://randomuser.me/api/portraits/men/19.jpg",
      category: "home-repair",
      verified: true,
      rating: 4.4,
      reviews: 180,
      availability: "Available Now",
      completedJobs: 95,
      experience: "3 Years",
      responseTime: "16 mins",
      distance: "2.1km away",
      location: "Meerut, India",
      hourlyRate: 240,
      topRated: false,
      trusted: true,
    },

    {
      id: 20,
      name: "Riya Malhotra",
      image: "https://randomuser.me/api/portraits/women/20.jpg",
      category: "cleaning",
      verified: true,
      rating: 4.8,
      reviews: 480,
      availability: "Available Now",
      completedJobs: 230,
      experience: "7 Years",
      responseTime: "8 mins",
      distance: "500m away",
      location: "Delhi, India",
      hourlyRate: 290,
      topRated: true,
      trusted: true,
    },
  ];

  const filterProvider = !category
    ? providers
    : providers.filter((items) => items.category === category);
  const base =
    "py-1 px-3 rounded-full text-sm flex w-fit gap-2 items-center font-medium border";
  return (
    <>
      {filterProvider.length > 0 ? (
        <div className="grid grid-col-1 gap-3 md:grid-cols-3">
          {filterProvider.map((categories) => {
            const {
              id,
              name,
              image,
              category,
              verified,
              rating,
              reviews,
              availability,
              completedJobs,
              experience,
              responseTime,
              distance,
              location,
              hourlyRate,
              topRated,
              trusted,
            } = categories;
            return (
              <div
                key={id}
                className="w-full bg-bg backdrop-blur-sm border border-muted bg-white hover:scale-[1.02]   ease-in-out shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] transition-all duration-300 md:p-5 p-4 rounded-lg mt-1 "
              >
                <div className="flex w-full gap-3 items-center">
                  <div className="relative">
                    <img
                      src={image}
                      alt="profile"
                      className=" w-20 h-20 min-w-20 rounded-full object-cover border-4 border-white shadow-[0_10px_25px_rgba(0, 0.15)] ring-2 ring-primary/20 flex-shrink-0
    "
                    />

                    {/* Online Dot */}
                     {/* <div className="absolute bottom-1 bg-white flex items-center justify-center right-0 w-4 h-4 rounded-full">
                        <div
                      className={` w-3 h-3 rounded-full  shadow-sm ${status ? "bg-green-500" : "bg-white border-3  border-green-500"}
  `}
                    />
                    </div> */}
                    <div
                      className=" absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-3 border-white shadow-sm
    "
                    />
                  </div>

                  <div className="w-full flex flex-col gap-1 ">
                    <div className="w-full flex justify-between  items-center ">
                      <h1 className="text-2xl font-semibold flex items-center">
                        {name}
                      </h1>
                      <BsThreeDotsVertical className="text-2xl cursor-pointer" />
                    </div>

                    <div className="flex gap-2 my-2">
                      <StatusBadge category={category} />
                      {verified ? (
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
                        <h2 className="text-lg font-bold">{rating}</h2>
                        <h2 className="text-muted text-sm">
                          {reviews} Reviews
                        </h2>
                      </div>
                      <div className="flex items-center gap-1 font-semibold text-success">
                        <IoShieldCheckmarkOutline />
                        <h3>{availability}</h3>
                      </div>
                    </div>
                  </div>
                </div>

               <div className="w-full border-t border-gray-200 my-3"></div>

                <div className="flex items-stretch justify-between">
                  <div className="flex flex-col justify-center items-center gap-1 flex-1">
                    <MdVerifiedUser size={24} className="text-green-500" />

                    <h1 className="font-bold text-lg">{completedJobs}</h1>

                    <p className="text-muted text-sm whitespace-nowrap">
                      Jobs Completed
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-px mx-4 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                  <div className="flex flex-col justify-center items-center gap-1 flex-1">
                    <MdWork size={24} className="text-purple-500" />

                    <h1 className="font-bold text-lg">{experience}</h1>

                    <p className="text-muted text-sm whitespace-nowrap">
                      Experience
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-px mx-4 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                  <div className="flex flex-col justify-center items-center gap-1 flex-1">
                    <FaBolt size={24} className="text-blue-500" />

                    <h1 className="font-bold text-lg">{responseTime}</h1>

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
                        <h3 className="font-semibold text-text text-lg">
                          {distance}
                        </h3>
                        <p className="text-sm text-muted">{location}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="flex items-center text-xl font-bold">
                        <MdOutlineCurrencyRupee /> {hourlyRate}/hr
                      </h3>
                      <p className="text-muted ">Hourly Rate</p>
                    </div>
                  </div>
                  <div className="w-full border-t border-gray-200 my-3"></div>

                  <div className="flex items-center justify-between mt-1">
                    <div className="w-full flex flex-col gap-5">
                      <div className="flex gap-3 justify-center">
                        {topRated ? (
                          <span className="bg-yellow-50  flex items-center gap-1 font-bold rounded-md py-2 px-5">
                            <CiStar className="text-yellow-500" size={20} />
                            <h1 className="text-yellow-500 font-semibold">
                              Top Rated
                            </h1>
                          </span>
                        ) : (
                          <span className="bg-blue-50 flex items-center gap-2 font-bold rounded-md py-2 px-5">
                            <FiTrendingUp className="text-blue-500" size={20} />
                            <h1 className="text-yellow-500 font-semibold">
                              Rising Talent
                            </h1>
                          </span>
                        )}
                        {trusted ? (
                          <span className="bg-green-50 flex items-center gap-1 font-bold rounded-md py-2 px-5">
                            <AiOutlineLike
                              className="text-green-500"
                              size={20}
                            />
                            <h1 className="text-text font-semibold">
                              Trusted Pro
                            </h1>
                          </span>
                        ) : (
                          <span className="bg-gray-50 flex items-center gap-1 font-bold rounded-md py-2 px-5">
                            <IoRocketOutline
                              className="text-gray-500"
                              size={20}
                            />

                            <h1 className="text-text font-semibold">
                              Recently Joined
                            </h1>
                          </span>
                        )}
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
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <h2 className="text-2xl font-bold text-gray-700">
            No Providers Found
          </h2>

          <p className="text-muted mt-2 text-center">
            We couldn’t find any providers in this category.
          </p>
        </div>
      )}
    </>
  );
};

export default ProviderCard;
