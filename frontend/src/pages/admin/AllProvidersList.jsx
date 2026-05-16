import React, { useEffect, useRef, useState } from "react";
import { IoSearch, IoStarOutline } from "react-icons/io5";
import StatusBudge from "../../components/common/StatusBadge";
import { BsThreeDotsVertical } from "react-icons/bs";

import {
  FaHourglassStart,
  FaRegCircleCheck,
  FaStar,
  FaUserGroup,
  FaUserLock,
} from "react-icons/fa6";
import { IoMdArrowRoundUp } from "react-icons/io";
import CustomDatePicker from "../../components/common/CustomDatePicker";
import {
  MdOutlineEdit,
  MdOutlineLock,
  MdOutlinePauseCircle,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const AllProvidersList = () => {
  const statsData = [
    {
      id: 1,
      title: "Total Providers",
      value: "12,835",
      growth: "12%",
      icon: <FaUserGroup size={22} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      growthColor: "text-green-500",
    },

    {
      id: 2,
      title: "Active Providers",
      value: "12,345",
      growth: "5%",
      icon: <FaRegCircleCheck size={22} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      growthColor: "text-green-500",
    },

    {
      id: 3,
      title: "Blocked Providers",
      value: "89,543",
      growth: "18%",
      icon: <FaUserLock size={22} />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      growthColor: "text-green-500",
    },

    {
      id: 4,
      title: "Pending Approval",
      value: "24,400",
      growth: "10%",
      icon: <FaHourglassStart size={22} />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500",
      growthColor: "text-green-500",
    },
    {
      id: 5,
      title: "Top Rated Providers",
      value: "24,400",
      growth: "10%",
      icon: <IoStarOutline size={24} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      growthColor: "text-green-500",
    },
  ];
  const [activeMenu, setActiveMenu] = useState(null);

  const menuRef = useRef(null);

  // close outside click

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // toggle menu

  const toggleMenu = () => {
    setActiveMenu((prev) => (prev === 1 ? null : 1));
  };
  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-2 mt-4 mb-6">
          {statsData.map((item) => (
            <div
              key={item.id}
              className={`
                    bg-white
                    border border-gray-200
                    rounded-2xl
                    p-5
                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                    hover:-translate-y-1
                    hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]
                    transition-all duration-300
                    cursor-pointer
                  `}
            >
              <div className="flex items-center gap-3">
                {/* Icon */}
                <div
                  className={`
                        ${item.iconBg}
                        ${item.iconColor}
                        w-13 h-13
                        rounded-full
                        flex items-center justify-center
                        shrink-0
                      `}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h1 className="text-sm text-black/60 font-medium">
                    {item.title}
                  </h1>

                  <h2 className="text-2xl md:text-3xl font-bold text-black ">
                    {item.value}
                  </h2>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 mt-2 flex-wrap ">
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
          ))}
        </div>

        <div
          className="bg-white
            rounded-2xl
            border border-slate-300
            p-5
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
        >
          <div className="flex gap-3 mb-5">
            <div className="flex items-center gap-4 pl-4 pr-2 py-2 border border-slate-300 rounded-lg text-muted flex-1">
              <input
                type="search"
                placeholder="Search providers by name,email or phone..."
                className="outline-0 border-0 w-full "
              />
              <IoSearch size={18} />
            </div>
            <div className="flex gap-3 flex-2 ">
              <div className="flex-1 ">
                <select
                  defaultValue=""
                  name="category"
                  id="category"
                  className="rounded-lg px-4 w-full  py-2 outline-0 border border-slate-300 text-muted"
                >
                  <option disabled> All Category</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="cleaning">Cleaning</option>
                </select>
              </div>
              <div className="flex-1">
                <select
                  defaultValue=""
                  name="status"
                  id="status"
                  className="rounded-lg px-4 w-full  py-2 outline-0 border border-slate-300 text-muted"
                >
                  <option disabled>All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="blocked">Blocked</option>
                </select>
              </div>
              <div className="flex-1">
                <select
                  defaultValue=""
                  name="verification"
                  id="verification"
                  className="rounded-lg px-4 w-full   py-2 outline-0 border border-slate-300 text-muted"
                >
                  <option disabled>All</option>
                  <option value="verified">Verified</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              <div>
                <CustomDatePicker />
              </div>
            </div>
          </div>
          <div className="border border-slate-300 rounded-xl ">
            <div className="grid grid-cols-[1.5fr_1.2fr_1.2fr_1.2fr_1fr_1fr_1fr_1fr_1fr_1fr] items-center justify-items-center mt-3 text-sm font-bold text-black/80">
              <span>Provider</span>
              <span>Service Category</span>
              <span>Email</span>
              <span>Phone</span>

              <span>Status</span>
              <span>Verification</span>
              <span>Rating</span>
              <span>Job Completed</span>
              <span>Joined Date</span>
              <span>Action</span>
            </div>
            <div className="border-t border-gray-200 mt-3 mb-2"></div>
            <div className="relative">
              <div className="grid grid-cols-[1.5fr_1.2fr_1.2fr_1.2fr_1fr_1fr_1fr_1fr_1fr_1fr] items-center justify-items-center gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/34.jpg"
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

                    <p className="text-sm text-muted">#PRO0934</p>
                  </div>
                </div>
                <div>
                  <StatusBudge category="plumbing" />
                </div>
                <div>
                  <p className="text-sm text-muted">john.doe@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted">+91 99843 43243</p>
                </div>
                <div>
                  <StatusBudge badge="active" />
                </div>
                <div>
                  <StatusBudge badge="verified" showIcon />
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-bold text-black/80">4.8</h1>
                  <FaStar className="text-xl text-yellow-500" />
                </div>
                
                <div>
                  <p className="text-sm text-muted">120</p>
                </div>
                <div>
                  <p className="text-sm text-muted">May 12 , 2024</p>
                </div>
                <button
                  onClick={() => toggleMenu(1)}
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
                {activeMenu === 1 && (
                  <div
                    ref={menuRef}
                    className="
      absolute
      top-15
      right-12
      z-[999]
      min-w-[220px]
      bg-white
      border border-slate-200
      rounded-2xl
      p-2
      shadow-[0_10px_30px_rgba(0,0,0,0.12)]
      animate-in
      fade-in
      zoom-in-95
      duration-200
    "
                  >
                    <button className="w-full flex items-center gap-3 cursor-pointer px-3 py-2 rounded-xl hover:bg-slate-100 transition-all duration-300">
                      <MdOutlineRemoveRedEye size={20} />
                      <p className="text-sm font-medium">View Profile</p>
                    </button>

                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 text-blue-500 transition-all cursor-pointer duration-300">
                      <MdOutlineEdit size={20} />
                      <p className="text-sm font-medium">Edit User</p>
                    </button>

                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 transition-all cursor-pointer duration-300">
                      <MdOutlineLock size={20} />
                      <p className="text-sm font-medium">Reset Password</p>
                    </button>

                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-yellow-50 text-yellow-500 transition-all cursor-pointer duration-300">
                      <MdOutlinePauseCircle size={20} />
                      <p className="text-sm font-medium">Suspend User</p>
                    </button>

                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 text-red-500 transition-all cursor-pointer duration-300">
                      <RiDeleteBin6Line size={20} />
                      <p className="text-sm font-medium">Delete User</p>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProvidersList;
