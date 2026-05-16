import React from "react";

import {
  FaUser,
  FaUserFriends,
  FaBook,
  FaStar,
} from "react-icons/fa";

import { TfiWallet } from "react-icons/tfi";

import {
  IoSearch,
} from "react-icons/io5";

import { IoMdArrowRoundUp } from "react-icons/io";

import { BsThreeDotsVertical } from "react-icons/bs";

import StatusBadge from "../../components/common/StatusBadge";

const AllProvidersList = () => {

  const statsData = [
    {
      id: 1,
      title: "Total Providers",
      value: "12,835",
      growth: "12%",
      icon: <FaUser size={24} />,
      iconBg: "bg-sky-100",
      iconColor: "text-sky-500",
      growthColor: "text-green-500",
    },

    {
      id: 2,
      title: "Active Providers",
      value: "12,345",
      growth: "5%",
      icon: <FaUserFriends size={24} />,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-500",
      growthColor: "text-green-500",
    },

    {
      id: 3,
      title: "Blocked Providers",
      value: "89,543",
      growth: "18%",
      icon: <FaBook size={24} />,
      iconBg: "bg-pink-200",
      iconColor: "text-pink-600",
      growthColor: "text-green-500",
    },

    {
      id: 4,
      title: "Pending Approval",
      value: "24,400",
      growth: "10%",
      icon: <TfiWallet size={24} />,
      iconBg: "bg-green-200",
      iconColor: "text-green-500",
      growthColor: "text-green-500",
    },

    {
      id: 5,
      title: "Top Rated Providers",
      value: "24,400",
      growth: "10%",
      icon: <FaStar size={24} />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500",
      growthColor: "text-green-500",
    },
  ];

  return (
    <div>

      {/* Stats Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mt-4 mb-6">

        {statsData.map((item) => (

          <div
            key={item.id}
            className="
              bg-white
              border border-gray-200
              rounded-2xl
              p-5
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              hover:-translate-y-1
              hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]
              transition-all duration-300
              cursor-pointer
            "
          >

            <div className="flex items-center gap-4">

              {/* Icon */}

              <div
                className={`
                  ${item.iconBg}
                  ${item.iconColor}
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  shrink-0
                `}
              >
                {item.icon}
              </div>

              {/* Content */}

              <div className="flex-1">

                <h1 className="text-sm text-black/80 font-medium">
                  {item.title}
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-1">
                  {item.value}
                </h2>

                <div className="flex items-center gap-2 mt-2 flex-wrap">

                  <span
                    className={`
                      ${item.growthColor}
                      flex items-center gap-1
                      font-semibold
                      text-sm
                    `}
                  >
                    <IoMdArrowRoundUp size={18} />
                    {item.growth}
                  </span>

                  <p className="text-xs md:text-sm text-black/60 font-medium">
                    from last month
                  </p>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Main Container */}

      <div
        className="
          bg-white
          rounded-[28px]
          border border-slate-200
          p-5
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          overflow-visible
        "
      >

        {/* Filters */}

        <div className="flex flex-wrap gap-4 mb-6 items-end">

          {/* Search */}

          <div className="flex-1 min-w-[260px]">

            <div
              className="
                flex items-center
                border border-slate-300
                rounded-xl
                px-4 py-3
                bg-white
              "
            >

              <input
                type="search"
                placeholder="Search providers by name, email or phone"
                className="flex-1 outline-none bg-transparent"
              />

              <IoSearch
                size={20}
                className="text-slate-500"
              />

            </div>

          </div>

          {/* Category */}

          <div className="flex flex-col min-w-[180px]">

            <label className="text-sm font-semibold text-black/80 mb-1">
              Service Category
            </label>

            <select
              className="
                border border-slate-300
                rounded-xl
                px-4 py-3
                bg-white
                outline-none
              "
            >
              <option>All Category</option>
              <option value="plumbing">Plumbing</option>
              <option value="cleaning">Cleaning</option>
            </select>

          </div>

          {/* Status */}

          <div className="flex flex-col min-w-[160px]">

            <label className="text-sm font-semibold text-black/80 mb-1">
              Status
            </label>

            <select
              className="
                border border-slate-300
                rounded-xl
                px-4 py-3
                bg-white
                outline-none
              "
            >
              <option>All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="blocked">Blocked</option>
            </select>

          </div>

          {/* Verification */}

          <div className="flex flex-col min-w-[160px]">

            <label className="text-sm font-semibold text-black/80 mb-1">
              Verification
            </label>

            <select
              className="
                border border-slate-300
                rounded-xl
                px-4 py-3
                bg-white
                outline-none
              "
            >
              <option>All</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
            </select>

          </div>

          {/* Date */}

          <div className="flex flex-col min-w-[180px]">

            <label
              htmlFor="joinedDate"
              className="text-sm font-semibold text-black/80 mb-1"
            >
              Joined Date
            </label>

            <input
              type="date"
              id="joinedDate"
              className="
                border border-slate-300
                rounded-xl
                px-4 py-3
                bg-white
                outline-none
                appearance-none
                relative
                z-50
              "
            />

          </div>

        </div>

        {/* Table */}

        <div className="border border-slate-200 rounded-2xl overflow-hidden">

          {/* Header */}

          <div
            className="
              hidden xl:grid
              grid-cols-9
              gap-4
              px-6 py-4
              bg-slate-50
              border-b border-slate-200
            "
          >

            <span className="font-semibold text-black/80">
              Provider
            </span>

            <span className="font-semibold text-black/80">
              Category
            </span>

            <span className="font-semibold text-black/80">
              Email
            </span>

            <span className="font-semibold text-black/80">
              Phone
            </span>

            <span className="font-semibold text-black/80">
              Status
            </span>

            <span className="font-semibold text-black/80">
              Verification
            </span>

            <span className="font-semibold text-black/80">
              Rating
            </span>

            <span className="font-semibold text-black/80">
              Joined Date
            </span>

            <span className="font-semibold text-black/80">
              Actions
            </span>

          </div>

          {/* Row */}

          <div
            className="
              grid
              xl:grid-cols-9
              gap-4
              px-6 py-5
              items-center
            "
          >

            {/* Provider */}

            <div className="flex items-center gap-3">

              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="profile"
                className="
                  w-12 h-12 min-w-12
                  rounded-full
                  object-cover
                  ring-2 ring-primary/10
                "
              />

              <div>

                <h1 className="text-base font-bold text-black/90">
                  John Doe
                </h1>

                <p className="text-sm text-slate-500">
                  #PRV0934
                </p>

              </div>

            </div>

            {/* Category */}

            <div>
              <StatusBadge category="plumbing" />
            </div>

            {/* Email */}

            <div>
              <p className="text-sm text-slate-500 break-all">
                john.doe@example.com
              </p>
            </div>

            {/* Phone */}

            <div>
              <p className="text-sm text-slate-500">
                +91 99843 43243
              </p>
            </div>

            {/* Status */}

            <div>
              <StatusBadge badge="active" />
            </div>

            {/* Verification */}

            <div>
              <StatusBadge badge="verified" />
            </div>

            {/* Rating */}

            <div className="flex items-center gap-2">

              <p className="text-sm text-black/80 font-semibold">
                4.8
              </p>

              <FaStar className="text-yellow-500" />

            </div>

            {/* Date */}

            <div>
              <p className="text-sm text-slate-500">
                May 12, 2024
              </p>
            </div>

            {/* Action */}

            <div>

              <button
                className="
                  w-10 h-10
                  rounded-xl
                  border border-slate-300
                  flex items-center justify-center
                  text-slate-500
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

      </div>

    </div>
  );
};

export default AllProvidersList;