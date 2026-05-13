import React from "react";
import { FaStar } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import ReviewMiniChart from "../../utils/ReviewMiniChart";
const ProviderReviews = () => {
  return (
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
  );
};

export default ProviderReviews;
