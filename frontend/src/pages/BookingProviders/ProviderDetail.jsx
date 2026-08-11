import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaStar, FaTools } from "react-icons/fa";
import { IoBagCheckOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import {
  MdOutlineCurrencyRupee,
  MdOutlineKeyboardArrowLeft,
  MdOutlineVerifiedUser,
} from "react-icons/md";
import Button from "../../components/common/Button";
import { CiLocationOn } from "react-icons/ci";
import { FaBolt } from "react-icons/fa";

import { FaFaucet } from "react-icons/fa6";

import { MdOutlineAcUnit } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProvider } from "../../hooks/useProvider";
import Avatar from "../../components/common/Avatar";
import { useProviderReviews } from "../../hooks/useReview";
import { timeAgo } from "../../utils/timeAgo";
import RatingStars from "../../utils/RatingStars";
const ProviderDetail = () => {
  const { providerId } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data, isLoading, error } = useProvider(providerId);
  const provider = data?.providerExists || [];

  const {
    verifiedByAdmin,
    totalReview,
    availability,
    categories = [],
  } = provider;
  const activeCategory = selectedCategory || categories?.[0];
  const { data: reviewData } = useProviderReviews({
    providerId,
    categoryId: activeCategory?.category?._id,
  });
  const reviews = reviewData?.reviews || [];

  const summary = reviewData?.summary;

  const price = activeCategory?.pricing?.price;
  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Something went wrong.</h1>;

  return (
    <div className="md:shadow-[inset_0_0_1px_rgba(0,0,0,0.30)] md:p-3 md:rounded">
      <div className="hidden md:flex justify-end items-center mb-4">
        <Button color="white" type="button" onClick={() => navigate(-1)}>
          <MdOutlineKeyboardArrowLeft size={24} />
          Back
        </Button>
      </div>
      <div className="flex w-full justify-between flex-col md:flex-row  md:items-center border border-gray-200 shadow-[inset_0_0_1px_rgba(0,0,0,0.30)] rounded-md p-3 mt-4">
        <div className="w-full">
          <div className="flex gap-3 items-center">
            <div className="w-[5rem] h-[5rem] rounded-full shrink-0">
              <Avatar
                name={provider.userId?.fullname}
                image={provider.userId?.profileImage?.url}
                className="text-3xl bg-gray-300 text-blue-500"
              />
            </div>
            <div className="w-full flex flex-col gap-1 ">
              <h1 className="md:text-2xl font-semibold">
                {provider.userId?.fullname}
              </h1>

              <div className="flex items-center gap-2 text-yellow-500">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      className={`${star <= provider?.rating ? "text-orange-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <h2 className="text-muted text-sm">({totalReview} Reviews)</h2>
              </div>
              <div className="flex items-center gap-2">
                <IoShieldCheckmarkOutline className="text-success " />
                <h3>{availability ? "Available Now" : "Unavailable"}</h3>
              </div>
            </div>
          </div>
          <div className="flex md:items-center md:flex-row flex-col justify-start mt-3 gap-4  md:ml-8">
            <div className="flex items-center justify-start  gap-10 ">
              <div className="flex items-center gap-2 ">
                <div className="w-10 h-10  flex justify-center items-center rounded-full text-blue-500 bg-blue-200">
                  <IoBagCheckOutline size={22} />
                </div>

                <div>
                  <h1 className="text-sm font-medium">
                    {provider?.experience} Years
                  </h1>
                  <p className="text-sm text-muted">Experience</p>
                </div>
              </div>

              <div className="flex items-center gap-2 justify-end">
                <div className="w-10 h-10  flex justify-center items-center rounded-full text-green-500 bg-green-200">
                  <MdOutlineVerifiedUser size={22} />
                </div>
                <div>
                  <h1 className="text-sm font-medium">
                    {verifiedByAdmin ? "Verified" : "Not Verified"}
                  </h1>
                  <p className="text-sm text-muted">Professional</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-10 h-10  flex justify-center items-center rounded-full shrink-0 text-gray-500 bg-gray-100">
                <CiLocationOn size={24} />
              </div>
              <div>
                <h1 className="text-sm font-medium">
                  {provider.location?.locality}, {provider.location?.city?.name}
                  , {provider.location?.district?.name},{" "}
                  {provider.location?.state?.name}
                </h1>
                <p className="text-sm hidden md:flex text-muted">Location</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[inset_0_0_1px_rgba(0,0,0,0.30)] py-4 md:px-4 px-2 rounded-xl flex md:flex-col justify-end items-center md:gap-0 gap-6 mt-4">
          <h3 className="flex items-center text-xl font-bold mb-3 md:mx-15 ">
            <MdOutlineCurrencyRupee /> {price}
            /hr
          </h3>
          <Button
            fullWidth
            onClick={() => {
              navigate(`/user/provider-details/${providerId}/booking-details`, {
                state: {
                  categoryId: activeCategory?.category?._id,
                  categoryName: activeCategory?.category?.name,
                },
              });
            }}
          >
            Book Now
          </Button>
        </div>
      </div>

      <div className="mt-3">
        <h1 className="text-xl font-bold text-text mb-2">About Me</h1>
        <p>
          Hi, I'm <strong>{provider.userId?.fullname}</strong>. I have{" "}
          <strong>{provider?.experience} years</strong> of experience in{" "}
          <strong>{categories?.map((c) => c?.category.name).join(", ")}</strong>
          . I provide reliable and professional services at affordable prices.
        </p>
      </div>
      <div className="w-full">
        <div className="mt-5">
          <h2 className="text-xl font-bold text-text">Select Service</h2>
          <div className="mt-4">
            <div className="mt-4 grid gird-cols-1 md:grid-cols-3 gap-3">
              {categories?.map((cat) => (
                <label
                  key={cat._id}
                  htmlFor={cat._id}
                  className="inline-block cursor-pointer relative"
                >
                  <input
                    type="radio"
                    id={cat._id}
                    name="service"
                    value={cat.name}
                    checked={activeCategory?._id === cat._id}
                    onChange={() => {
                      setSelectedCategory(cat);
                    }}
                    className="peer accent-green-600 absolute right-4 top-4"
                  />

                  <div className="border rounded-2xl p-3 transition-all duration-300 hover:border-green-400 peer-checked:border-green-500 peer-checked:bg-green-50">
                    <div className="mt-3 flex gap-5">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center`}
                        style={{
                          backgroundColor: `${cat?.category?.backgroundColor}`,
                        }}
                      >
                        <img
                          src={cat?.category.icon?.url}
                          alt={cat?.category.name}
                          className="w-10 h-10"
                        />
                      </div>

                      <div>
                        <h2 className="font-semibold text-lg capitalize">
                          {cat?.category.name}
                        </h2>

                        <div className="flex items-center font-bold text-green-500">
                          <MdOutlineCurrencyRupee />
                          {cat?.pricing?.price}/Hr
                        </div>
                      </div>
                    </div>

                    <p className="text-muted text-sm mt-2">
                      {cat?.category.description}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-6">
          {/* Left Side */}
          <div className="flex-1 md:border rounded-2xl md:p-5 shadow-[inset_0_0_3px_rgba(255,255,255,0.8)]">
            {/* Heading */}
            <h2 className="flex items-center gap-1 text-2xl font-semibold text-text">
              Reviews <span>({summary?.totalReviews})</span>
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-3 mb-5">
              <h4 className="text-4xl font-bold">
                {summary?.averageRating.toFixed(1)}
              </h4>

              <div>
                <RatingStars rating={summary?.averageRating.toFixed(1)} />

                <p className="text-sm text-muted mt-1">
                  Based on {summary?.totalReviews} reviews
                </p>
              </div>
            </div>

            {/* Rating Bars */}
            <div className="space-y-4">
              {/* 5 Star */}
              <div className="flex items-center gap-3">
                <h3 className="flex items-center gap-1 text-sm font-semibold min-w-[40px]">
                  5 <FaStar className="text-orange-500" />
                </h3>

                <div className="flex-1 bg-gray-200 h-[6px] rounded-full overflow-hidden">
                  <div
                    className={`bg-green-500 h-full rounded-full`}
                    style={{
                      width: `${summary?.fiveStarPercentage || 0}%`,
                    }}
                  ></div>
                </div>

                <p className="text-sm font-medium text-muted min-w-[35px]">
                  {summary?.fiveStar}
                </p>
              </div>

              {/* 4 Star */}
              <div className="flex items-center gap-3">
                <h3 className="flex items-center gap-1 text-sm font-semibold min-w-[40px]">
                  4 <FaStar className="text-orange-500" />
                </h3>

                <div className="flex-1 bg-gray-200 h-[6px] rounded-full overflow-hidden">
                  <div
                    className={`bg-green-400 h-full rounded-full`}
                    style={{
                      width: `${summary?.fourStarPercentage || 0}%`,
                    }}
                  ></div>
                </div>

                <p className="text-sm font-medium text-muted min-w-[35px]">
                  {summary?.fourStar}
                </p>
              </div>

              {/* 3 Star */}
              <div className="flex items-center gap-3">
                <h3 className="flex items-center gap-1 text-sm font-semibold min-w-[40px]">
                  3 <FaStar className="text-orange-500" />
                </h3>

                <div className="flex-1 bg-gray-200 h-[6px] rounded-full overflow-hidden">
                  <div
                    className={`bg-yellow-400 h-full rounded-full`}
                    style={{
                      width: `${summary?.threeStarPercentage || 0}%`,
                    }}
                  ></div>
                </div>

                <p className="text-sm font-medium text-muted min-w-[35px]">
                  {summary?.threeStar}
                </p>
              </div>

              {/* 2 Star */}
              <div className="flex items-center gap-3">
                <h3 className="flex items-center gap-1 text-sm font-semibold min-w-[40px]">
                  2 <FaStar className="text-orange-500" />
                </h3>

                <div className="flex-1 bg-gray-200 h-[6px] rounded-full overflow-hidden">
                  <div
                    className={`bg-orange-400 h-full rounded-full`}
                    style={{
                      width: `${summary?.twoStarPercentage || 0}%`,
                    }}
                  ></div>
                </div>

                <p className="text-sm font-medium text-muted min-w-[35px]">
                  {summary?.twoStar}
                </p>
              </div>

              {/* 1 Star */}
              <div className="flex items-center gap-3">
                <h3 className="flex items-center gap-1 text-sm font-semibold min-w-[40px]">
                  1 <FaStar className="text-orange-500" />
                </h3>

                <div className="flex-1 bg-gray-200 h-[6px] rounded-full overflow-hidden">
                  <div
                    className={`bg-red-400 h-full rounded-full`}
                    style={{
                      width: `${summary?.oneStarPercentage || 0}%`,
                    }}
                  ></div>
                </div>

                <p className="text-sm font-medium text-muted min-w-[35px]">
                  {summary?.oneStar}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 md:border rounded-2xl md:p-5 shadow-[inset_0_0_3px_rgba(255,255,255,0.8)]">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold">Recent Reviews</h2>

              <Link className="text-green-600 font-medium hover:underline">
                View All
              </Link>
            </div>

            {/* Review Card */}
            <div className="space-y-3">
              {/* Review 1 */}
              {reviews?.map((review) => (
                <div className="flex  gap-3" key={review._id}>
                  <div className="w-14 h-14 rounded-full mt-2">
                    <Avatar
                      image={review?.userId?.profileImage?.url}
                      name={review?.userId?.fullname}
                      className="bg-gray-300 text-blue-500 text-2xl"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">
                        {review?.userId?.fullname}{" "}
                      </h3>

                      <p className="text-sm text-muted">
                        {timeAgo(new Date(review.createdAt))}
                      </p>
                    </div>

                    <div className="flex text-yellow-500 gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className={`${star <= review?.rating ? "text-orange-500" : "text-gray-500"}`}
                        />
                      ))}
                    </div>

                    <p className="text-muted text-sm mt-1 leading-6">
                      {review?.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetail;
