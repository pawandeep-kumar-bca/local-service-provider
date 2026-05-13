import React, { useState } from "react";
import { FaRegCalendarAlt, FaStar } from "react-icons/fa";
import { BiLike, BiShare } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import ReviewMiniChart from "../../utils/ReviewMiniChart";
const ProviderReviews = () => {
  const [reviews, setReviews] = useState("all reviews");
  const base =
    "whitespace-nowrap shrink-0 border transition-all duration-300 cursor-pointer px-5 py-2 rounded-xl font-semibold";

  const active = "bg-green-500 border-green-500 text-white shadow-sm";

  const notActive =
    "bg-white border-slate-300 text-text hover:border-green-400 hover:text-green-500";
const reviewsData = [
  {
    id: 1,
    name: "Anita Sharma",
    date: "12 May 2026",
    service: "AC Repair",
    rating: 4.8,
    review:
      "Excellent service. The technician was very professional and fixed the AC quickly. Highly recommended.",
    profile:
      "https://randomuser.me/api/portraits/women/11.jpg",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Rahul Verma",
    date: "10 May 2026",
    service: "Plumbing",
    rating: 4.7,
    review:
      "Very quick response and clean work. The leakage issue was solved properly.",
    profile:
      "https://randomuser.me/api/portraits/men/32.jpg",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Priya Mehta",
    date: "08 May 2026",
    service: "Cleaning",
    rating: 4.9,
    review:
      "Very satisfied with the deep cleaning service. Staff was polite and professional.",
    profile:
      "https://randomuser.me/api/portraits/women/45.jpg",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  },
];
  return (
    <div>
      <div>
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-text">Reviews</h1>
          <p className="text-sm text-muted mt-1">
            See what your customers say about your services.
          </p>
        </div>

        {/* Main Card */}
        <div
          className="
      mt-5
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-4
      gap-5
      bg-white
      border border-slate-200
      rounded-2xl
      p-5
      shadow-[0_5px_20px_rgba(0,0,0,0.06)]
    "
        >
          {/* Overall Rating */}
          <div>
            <h3 className="text-lg font-bold justify-center flex items-center gap-2">
              Overall Rating
              <AiOutlineQuestionCircle className="text-muted" />
            </h3>
            <div className="flex flex-col items-center  mt-7">
              <h1 className="text-5xl font-bold text-text my-3">4.8</h1>

              <div className="flex text-yellow-500 text-2xl gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-sm text-muted mt-3">Based on 120 reviews</p>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="xl:border-l xl:pl-5 border-slate-200">
            <h1 className="text-lg font-bold">Rating Breakdown</h1>

            <div className="flex flex-col gap-3 mt-4">
              {[
                { star: 5, value: "90%", total: 85 },
                { star: 4, value: "75%", total: 60 },
                { star: 3, value: "60%", total: 35 },
                { star: 2, value: "30%", total: 20 },
                { star: 1, value: "10%", total: 5 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <p className="text-sm font-medium text-muted w-14">
                    {item.star} Star
                  </p>

                  <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div
                      style={{ width: item.value }}
                      className="h-full bg-green-500 rounded-full"
                    ></div>
                  </div>

                  <p className="text-sm font-semibold text-text w-6 text-right">
                    {item.total}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Ratings */}
          <div className="xl:border-l xl:pl-5 border-slate-200">
            <h1 className="text-lg font-bold">Service Ratings</h1>

            <div className="mt-4 flex flex-col gap-4">
              {[
                { name: "AC Repair", rating: 4.9 },
                { name: "Plumbing", rating: 4.8 },
                { name: "Cleaning", rating: 4.7 },
              ].map((service, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-muted">
                      {service.name}
                    </h2>

                    <div className="flex items-center gap-2 font-semibold">
                      <span>{service.rating}</span>

                      <FaStar className="text-yellow-400" />
                    </div>
                  </div>

                  <div className="border-t border-slate-200 mt-2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Satisfaction Card */}
          <div
            className="
        bg-gradient-to-br
        from-green-50
        to-green-100
        rounded-2xl
        px-5 py-3
        flex
        flex-col
        items-center
        justify-between
      "
          >
            <div className="flex flex-col items-center">
              <div
                className="
            w-12 h-12
            rounded-full
            bg-white
            flex
            items-center
            justify-center
            text-green-500
            shadow-sm
          "
              >
                <BiLike size={24} />
              </div>

              <h1 className="text-4xl font-bold text-text my-3">98%</h1>

              <p className="text-sm text-center text-muted max-w-[220px]">
                Customers are satisfied with your services
              </p>
            </div>

            <ReviewMiniChart />
          </div>
        </div>
      </div>

      <div
        className="shadow-[0_5px_20px_rgba(0,0,0,0.06)] mt-3  bg-white
      border border-slate-200
      rounded-2xl"
      >
        <div className="flex md:justify-between md:flex-row flex-col gap-4 p-3">
          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-2">
            <button
              onClick={() => setReviews("all reviews")}
              className={`${base} ${
                reviews === "all reviews" ? active : notActive
              }`}
            >
              All Review
            </button>

            <button
              onClick={() => setReviews("5 star")}
              className={`${base} ${reviews === "5 star" ? active : notActive}`}
            >
              5 Star
            </button>

            <button
              onClick={() => setReviews("4 star")}
              className={`${base} ${reviews === "4 star" ? active : notActive}`}
            >
              4 Star
            </button>

            <button
              onClick={() => setReviews("3 star")}
              className={`${base} ${reviews === "3 star" ? active : notActive}`}
            >
              3 Star
            </button>

            <button
              onClick={() => setReviews("2 star")}
              className={`${base} ${reviews === "2 star" ? active : notActive}`}
            >
              2 Star
            </button>

            <button
              onClick={() => setReviews("1 star")}
              className={`${base} ${reviews === "1 star" ? active : notActive}`}
            >
              1 Star
            </button>

            <button
              onClick={() => setReviews("with comments")}
              className={`${base} ${
                reviews === "with comments" ? active : notActive
              }`}
            >
              With Comments
            </button>
          </div>

          {/* Search + Calendar */}
          <div className="flex gap-3 md:w-auto w-full flex-1">
            <div
              className="
        flex items-center gap-3
        border border-slate-300
        px-3 py-2
        rounded-xl 
        flex-1 w-fit-content
        bg-white
      "
            >
              <HiMagnifyingGlass size={20} className="text-muted" />

              <input
                type="text"
                placeholder="Search customer or service..."
                className="w-full outline-none bg-transparent"
              />
            </div>

            <label
              className="
    relative
    w-12 h-12
    rounded-xl
    border border-slate-300
    flex items-center justify-center
    cursor-pointer
    bg-white
  "
            >
              <input
                type="date"
                className="
      absolute
      top-0 left-0
      w-full h-full
      opacity-0
      cursor-pointer
    "
              />

              <FaRegCalendarAlt size={18} className="text-muted" />
            </label>
          </div>
        </div>
        <div className="border-t border-gray-200 mb-4"></div>
        <div className="p-2">
         <div className="mt-5 flex flex-col gap-2">
  {reviewsData.map((item) => (
    <div
      key={item.id}
      className="
        bg-white
        border border-slate-200
        rounded-2xl
        p-4
        shadow-[0_4px_15px_rgba(0,0,0,0.05)]
      "
    >
      <div className="flex lg:flex-row flex-col gap-6">
        
        {/* Left */}
        <div className="flex items-start gap-3 lg:w-[260px] w-full">
          
          <img
            src={item.profile}
            alt={item.name}
            className="
              w-16 h-16 min-w-16
              rounded-full
              object-cover
              border-4 border-white
              shadow-md
              ring-2 ring-primary/10
            "
          />

          <div>
            <h1 className="text-lg font-semibold text-text">
              {item.name}
            </h1>

            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <p className="text-sm text-muted">
                {item.date}
              </p>

              <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>

              <p className="text-sm text-muted">
                {item.service}
              </p>
            </div>
          </div>
        </div>

        {/* Center */}
        <div className="flex-1 flex md:flex-row flex-col gap-4">
          
          <div className="flex-1">
            
            <div className="flex items-center gap-3 flex-wrap">
              
              <div className="flex text-yellow-500 gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <h1 className="text-lg font-bold text-text">
                {item.rating}
              </h1>
            </div>

            <p className="text-sm text-muted leading-relaxed mt-2">
              {item.review}
            </p>
          </div>

          <img
            src={item.image}
            alt={item.service}
            className="
              md:w-[140px]
              w-full
              h-[120px]
              rounded-xl
              object-cover
            "
          />
        </div>

        {/* Right */}
        <div
          className="
            flex
            
            flex-row
            items-center
            justify-between
            gap-3
            lg:w-[160px]
            w-full
          "
        >
          <button
            className="
              flex items-center gap-2
              border border-blue-500
              text-blue-500
              hover:bg-blue-50
              transition-all duration-300
              rounded-xl
              px-4 py-2
              font-medium
              cursor-pointer
            "
          >
            <BiShare size={18} />
            Reply
          </button>

          <button
            className="
              w-10 h-10
              rounded-xl
              border border-slate-300
              flex items-center justify-center
              text-muted
              hover:bg-slate-100
              transition-all duration-300
              cursor-pointer
            "
          >
            <BsThreeDotsVertical size={18} />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
  );
};

export default ProviderReviews;
