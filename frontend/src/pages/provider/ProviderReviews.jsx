import React, { useState } from "react";
import { FaRegCalendarAlt, FaStar } from "react-icons/fa";
import { BiLike, BiShare } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import ReviewMiniChart from "../../utils/ReviewMiniChart";
import { useGetProviderReviewForProvider, useGetProviderReviewSummary } from "../../hooks/useReview";
import useDebounce from "../../hooks/useDebounce";
import Avatar from "../../components/common/Avatar";
const ProviderReviews = () => {

  const base =
    "whitespace-nowrap shrink-0 border transition-all duration-300 cursor-pointer px-5 py-2 rounded-xl font-semibold";

  const active = "bg-green-500 border-green-500 text-white shadow-sm";

  const notActive =
    "bg-white border-slate-300 text-text hover:border-green-400 hover:text-green-500";


  const { data } = useGetProviderReviewSummary();

  const summary = data?.summary;

  const fiveStar = summary?.fiveStar ?? 0;
  const fourStar = summary?.fourStar ?? 0;
  const threeStar = summary?.threeStar ?? 0;
  const twoStar = summary?.twoStar ?? 0;
  const oneStar = summary?.oneStar ?? 0;

  const categoryAvg = data?.categoryAvg ?? [];
  const ratingTrendChart = data?.ratingTrendChart ?? [];


  const [review, setReviews] = useState("all");


  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500);
  const { data: reviewData } = useGetProviderReviewForProvider({
    rating: review,
    search: debouncedSearch
  })

  const reviews = reviewData?.reviews || []

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
            <div className="flex flex-col items-center mt-7">
              <h1 className="text-5xl font-bold text-text my-3">
                {summary?.averageRating?.toFixed(1) ?? "0.0"}
              </h1>

              <div className="flex text-2xl gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={
                      star <= Math.round(summary?.averageRating ?? 0)
                        ? "text-orange-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <p className="text-sm text-muted mt-3">
                Based on {summary?.totalReview ?? 0} reviews
              </p>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="xl:border-l xl:pl-5 border-slate-200">
            <h1 className="text-lg font-bold">Rating Breakdown</h1>

            <div className="flex flex-col gap-3 mt-4">
              {[
                {
                  star: 5,
                  value: `${summary?.fiveStarPercentage ?? 0}%`,
                  total: fiveStar,
                },
                {
                  star: 4,
                  value: `${summary?.fourStarPercentage ?? 0}%`,
                  total: fourStar,
                },
                {
                  star: 3,
                  value: `${summary?.threeStarPercentage ?? 0}%`,
                  total: threeStar,
                },
                {
                  star: 2,
                  value: `${summary?.twoStarPercentage ?? 0}%`,
                  total: twoStar,
                },
                {
                  star: 1,
                  value: `${summary?.oneStarPercentage ?? 0}%`,
                  total: oneStar,
                },
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
              {categoryAvg.map((service, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-muted">
                      {service?.categoryName}
                    </h2>

                    <div className="flex items-center gap-2 font-semibold">
                      <span><span>{service?.averageRating?.toFixed(1) ?? "0.0"}</span></span>

                      <FaStar className="text-orange-500" />
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

              <h1 className="text-4xl font-bold text-text my-3">
                {summary?.satisfactionPercentage ?? 0}%
              </h1>

              <p className="text-sm text-center text-muted max-w-[220px]">
                Customers are satisfied with your services
              </p>
            </div>

            <ReviewMiniChart data={ratingTrendChart} />
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
              onClick={() => setReviews("all")}
              className={`${base} ${review === "all" ? active : notActive
                }`}
            >
              All Review
            </button>

            <button
              onClick={() => setReviews("5")}
              className={`${base} ${review === "5" ? active : notActive}`}
            >
              5 Star
            </button>

            <button
              onClick={() => setReviews("4")}
              className={`${base} ${review === "4" ? active : notActive}`}
            >
              4 Star
            </button>

            <button
              onClick={() => setReviews("3")}
              className={`${base} ${review === "3" ? active : notActive}`}
            >
              3 Star
            </button>

            <button
              onClick={() => setReviews("2")}
              className={`${base} ${review === "2" ? active : notActive}`}
            >
              2 Star
            </button>

            <button
              onClick={() => setReviews("1")}
              className={`${base} ${review === "1" ? active : notActive}`}
            >
              1 Star
            </button>


          </div>

          {/* Search  */}
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search customer or service..."
                className="w-full outline-none bg-transparent"
              />
            </div>

          </div>
        </div>
        <div className="border-t border-gray-200 mb-4"></div>
        <div className="p-2">
          {reviews.length > 0 ? <div className=" flex flex-col gap-2">
            {reviews.map((rev) => (
              <div
                key={rev._id}
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
                    <div className="w-16 h-16 min-w-16
              rounded-full
              border-4 border-white
              shadow-md
              ring-2 ring-primary/10">
                      <Avatar name={rev?.userId?.fullname} image={rev?.userId?.profileImage?.url} />
                    </div>


                    <div>
                      <h1 className="text-lg font-semibold text-text">
                        {rev?.userId?.fullname}
                      </h1>

                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <p className="text-sm text-muted">
                          {new Date(rev?.createdAt).toLocaleDateString('en-IN', {
                            day: '2-digit',
                            month: '2-digit',
                            year: '2-digit'
                          })}
                        </p>

                        <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>

                        <p className="text-sm text-muted">
                          {rev?.serviceSnapshot?.categoryName}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center */}
                  <div className="flex-1 flex md:flex-row flex-col gap-4">

                    <div className="flex-1">

                      <div className="flex items-center gap-3 flex-wrap">

                        <div className="flex text-orange-500 gap-1">
                          {
                            [1, 2, 3, 4, 5].map((item) => (
                              <FaStar key={item} className={`${item <= rev?.rating ? 'text-orange-500' : 'text-gray-300'}`} />
                            ))
                          }

                        </div>

                        <h1 className="text-lg font-bold text-text">
                          {rev?.rating}
                        </h1>
                      </div>

                      <p className="text-sm text-muted leading-relaxed mt-2">
                        {rev?.comment}
                      </p>
                    </div>

                    {
                      rev?.images && rev?.images?.map((img) => (
                        <img
                          src={img.fileId}
                          alt={img.url}
                          className=" md:w-[140px] w-full h-[120px]  md:h-[80px] rounded-xl object-cover" />
                      ))
                    }
                  </div>



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
            ))}
          </div> : <div>Reviews Not Available</div>}
        </div>
      </div>
    </div>
  );
};

export default ProviderReviews;
