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
const ProviderDetail = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { providerId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useProvider(providerId);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Something went wrong.</h1>;

  const provider = data?.providerExists;

  const {
    price,
    experience,

    verificationStatus,
    rating,
    totalReview,
    availability,
    categories = [],
  } = provider;

  const profileImageUrl =
    provider.userId?.profileImage?.url ||
    "https://ui-avatars.com/api/?name=" +
      encodeURIComponent(provider.userId?.fullname);

  return (
    <div className="md:shadow-[inset_0_0_3px_rgba(0,0,0,0.4)] md:p-3 md:rounded">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Provider Details</h1>
        <Button color="white">
          <MdOutlineKeyboardArrowLeft size={24} />
          Back
        </Button>
      </div>
      <div className="flex w-full justify-between flex-col md:flex-row  md:items-center border border-muted rounded-md p-3 mt-4">
        <div className="w-full">
          <div className="flex gap-3 items-center">
            <img
              src={profileImageUrl}
              alt="profile"
              className="object-cover w-[5rem] h-[5rem] rounded-full"
            />

            <div className="w-full flex flex-col gap-1 ">
              <h1 className="md:text-2xl font-semibold">
                {provider.userId?.fullname}
              </h1>

              <div className="flex items-center gap-2 text-yellow-500">
                <div className="flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h2 className="text-muted text-sm">{totalReview} Reviews</h2>
              </div>
              <div className="flex items-center gap-2">
                <IoShieldCheckmarkOutline className="text-success " />
                <h3>{availability ? "Available Now" : "Unavailable"}</h3>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start mt-3 gap-10  md:ml-8">
            <div className="flex items-center gap-2 ">
              <IoBagCheckOutline
                className="p-1 rounded-full text-blue-500 bg-blue-200"
                size={32}
              />

              <div>
                <h1 className="text-sm font-medium">{experience} Years</h1>
                <p className="text-sm text-muted">Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <CiLocationOn
                className="p-1 rounded-full text-yellow-800 bg-yellow-100"
                size={32}
              />

              <div>
                <h1 className="text-sm font-medium">
                  {provider.location?.village}, {provider.location?.city?.name},{" "}
                  {provider.location?.district?.name},{" "}
                  {provider.location?.state?.name}
                </h1>
                <p className="text-sm text-muted">Location</p>
              </div>
            </div>

            <div className="flex items-center gap-2 justify-end">
              <MdOutlineVerifiedUser
                className="p-1 rounded-full text-green-500 bg-green-100"
                size={32}
              />

              <div>
                <h1 className="text-sm font-medium">
                  {verificationStatus === "verified"
                    ? "Verified"
                    : "Not Verified"}
                </h1>
                <p className="text-sm text-muted">Professional</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[inset_0_0_3px_rgba(0,0,0,0.3)] py-4 md:px-4 px-2 rounded flex md:flex-col justify-end items-center md:gap-0 gap-6 mt-4">
          <h3 className="flex items-center text-xl font-bold mb-3 md:mx-15 ">
            <MdOutlineCurrencyRupee /> {price}/hr
          </h3>
          <Button
            fullWidth
            onClick={() => {
              if (!selectedCategory) {
                return alert("Please select a category");
              }
              navigate(`/user/provider-details/${providerId}/booking-details`, {
                state: {
                  categoryId: selectedCategory._id,
                  categoryName: selectedCategory.name,
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
          <strong>{experience} years</strong> of experience in{" "}
          <strong>{categories?.map((c) => c.name).join(", ")}</strong>. I
          provide reliable and professional services at affordable prices.
        </p>
      </div>
      <div className="w-full">
        <div className="mt-5">
          <h2 className="text-xl font-bold text-text">Select Service</h2>
          <div className="mt-4">
            <div className="mt-4 grid gird-cols-1 md:grid-cols-3 gap-3">
              {categories?.map((category) => (
                <label
                  key={category._id}
                  htmlFor={category._id}
                  className="inline-block cursor-pointer relative"
                >
                  <input
                    type="radio"
                    id={category._id}
                    name="service"
                    value={category.name}
                    checked={selectedCategory?._id === category._id}
                    onChange={() => setSelectedCategory(category)}
                    className="peer accent-green-600 absolute right-4 top-4"
                  />

                  <div className="border rounded-2xl p-3 transition-all duration-300 hover:border-green-400 peer-checked:border-green-500 peer-checked:bg-green-50">
                    <div className="mt-3 flex gap-5">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center`}
                        style={{
                          backgroundColor: `${category.backgroundColor}`,
                        }}
                      >
                        <img
                          src={category.icon?.url}
                          alt={category.name}
                          className="w-10 h-10"
                        />
                      </div>

                      <div>
                        <h2 className="font-semibold text-lg capitalize">
                          {category.name}
                        </h2>

                        <div className="flex items-center font-bold text-green-500">
                          <MdOutlineCurrencyRupee />
                          {price}/Hr
                        </div>
                      </div>
                    </div>

                    <p className="text-muted text-sm mt-2">
                      {category.description}
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
              Reviews <span>({totalReview})</span>
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-3 mb-5">
              <h4 className="text-4xl font-bold">{rating}</h4>

              <div>
                <div className="flex text-yellow-500 gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="text-sm text-muted mt-1">
                  Based on {totalReview} reviews
                </p>
              </div>
            </div>

            {/* Rating Bars */}
            <div className="space-y-4">
              {/* 5 Star */}
              <div className="flex items-center gap-3">
                <h3 className="flex items-center gap-1 text-sm font-semibold min-w-[40px]">
                  5 <FaStar className="text-yellow-500" />
                </h3>

                <div className="flex-1 bg-gray-200 h-[6px] rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[100%] rounded-full"></div>
                </div>

                <p className="text-sm font-medium text-muted min-w-[35px]">
                  300
                </p>
              </div>

              {/* 4 Star */}
              <div className="flex items-center gap-3">
                <h3 className="flex items-center gap-1 text-sm font-semibold min-w-[40px]">
                  4 <FaStar className="text-yellow-500" />
                </h3>

                <div className="flex-1 bg-gray-200 h-[6px] rounded-full overflow-hidden">
                  <div className="bg-green-400 h-full w-[60%] rounded-full"></div>
                </div>

                <p className="text-sm font-medium text-muted min-w-[35px]">
                  70
                </p>
              </div>

              {/* 3 Star */}
              <div className="flex items-center gap-3">
                <h3 className="flex items-center gap-1 text-sm font-semibold min-w-[40px]">
                  3 <FaStar className="text-yellow-500" />
                </h3>

                <div className="flex-1 bg-gray-200 h-[6px] rounded-full overflow-hidden">
                  <div className="bg-yellow-400 h-full w-[35%] rounded-full"></div>
                </div>

                <p className="text-sm font-medium text-muted min-w-[35px]">
                  20
                </p>
              </div>

              {/* 2 Star */}
              <div className="flex items-center gap-3">
                <h3 className="flex items-center gap-1 text-sm font-semibold min-w-[40px]">
                  2 <FaStar className="text-yellow-500" />
                </h3>

                <div className="flex-1 bg-gray-200 h-[6px] rounded-full overflow-hidden">
                  <div className="bg-orange-400 h-full w-[15%] rounded-full"></div>
                </div>

                <p className="text-sm font-medium text-muted min-w-[35px]">5</p>
              </div>

              {/* 1 Star */}
              <div className="flex items-center gap-3">
                <h3 className="flex items-center gap-1 text-sm font-semibold min-w-[40px]">
                  1 <FaStar className="text-yellow-500" />
                </h3>

                <div className="flex-1 bg-gray-200 h-[6px] rounded-full overflow-hidden">
                  <div className="bg-red-400 h-full w-[10%] rounded-full"></div>
                </div>

                <p className="text-sm font-medium text-muted min-w-[35px]">5</p>
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
              <div className="flex gap-3">
                <img
                  src="/assets/profile.png"
                  alt=""
                  className="w-14 h-14 rounded-full"
                />

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Rohit Sharma</h3>

                    <p className="text-sm text-muted">2 days ago</p>
                  </div>

                  <div className="flex text-yellow-500 gap-1 mt-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <p className="text-muted text-sm mt-1 leading-6">
                    Excellent service! Very professional and on-time.
                  </p>
                </div>
              </div>

              {/* Review 2 */}
              <div className="flex gap-3">
                <img
                  src="/assets/profile.png"
                  alt=""
                  className="w-14 h-14 rounded-full"
                />

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Priya Verma</h3>

                    <p className="text-sm text-muted">1 week ago</p>
                  </div>

                  <div className="flex text-yellow-500 gap-1 mt-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <p className="text-muted text-sm mt-1 leading-6">
                    Good work and very friendly behavior.
                  </p>
                </div>
              </div>

              {/* Review 3 */}
              <div className="flex gap-3">
                <img
                  src="/assets/profile.png"
                  alt=""
                  className="w-14 h-14 rounded-full"
                />

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Rohit Sharma</h3>

                    <p className="text-sm text-muted">2 days ago</p>
                  </div>

                  <div className="flex text-yellow-500 gap-1 mt-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <p className="text-muted text-sm mt-1 leading-6">
                    Excellent service! Very professional and on-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetail;
