import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import StatusBudge from "../../components/common/StatusBadge";
import { BsThreeDotsVertical } from "react-icons/bs";

import { FaUserGroup, FaUserShield, FaUserLock } from "react-icons/fa6";
import { RiDeleteBin6Line, RiUserAddFill } from "react-icons/ri";
import {
  MdOutlineEdit,
  MdOutlineLock,
  MdOutlinePauseCircle,
  MdOutlineRemoveRedEye,
  MdVerifiedUser,
} from "react-icons/md";
import { IoMdArrowRoundUp } from "react-icons/io";
import CustomDatePicker from "../../components/common/CustomDatePicker";
const AllUsersList = () => {
  const role = "provider";
  const statsData = [
    {
      id: 1,
      title: "Total Users",
      value: "12,835",
      growth: "12%",
      icon: <FaUserGroup size={22} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      growthColor: "text-green-500",
    },

    {
      id: 2,
      title: "Active Users",
      value: "12,345",
      growth: "5%",
      icon: <FaUserShield size={22} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      growthColor: "text-green-500",
    },

    {
      id: 3,
      title: "Blocked Users",
      value: "89,543",
      growth: "18%",
      icon: <FaUserLock size={22} />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      growthColor: "text-green-500",
    },

    {
      id: 4,
      title: "New Users",
      value: "24,400",
      growth: "10%",
      icon: <RiUserAddFill size={22} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      growthColor: "text-green-500",
    },
    {
      id: 5,
      title: "Verified Users",
      value: "24,400",
      growth: "10%",
      icon: <MdVerifiedUser size={24} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      growthColor: "text-green-500",
    },
  ];
  const [activeMenu, setActiveMenu] = useState(null);
  
const menuRef = useRef(null);

  // close outside click

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setActiveMenu(null);
      }

    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  // toggle menu

  const toggleMenu = (id) => {

    setActiveMenu((prev) =>
      prev === id ? null : id
    );

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
                placeholder="Search users by name,email or phone..."
                className="outline-0 border-0 w-full "
              />
              <IoSearch size={18} />
            </div>
            <div className="flex gap-3 flex-2 ">
              <div className="flex-1 ">
                <select
                  defaultValue=""
                  name="role"
                  id="role"
                  defaultValue=""
                  className="rounded-lg px-4 w-full  py-2 outline-0 border border-slate-300 text-muted"
                >
                  <option disabled> Role</option>
                  <option value="user">User</option>
                  <option value="provider">Provider</option>
                </select>
              </div>
              <div className="flex-1">
                <select
                  defaultValue=""
                  name="status"
                  id="status"
                  className="rounded-lg px-4 w-full  py-2 outline-0 border border-slate-300 text-muted"
                >
                  <option disabled>Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="blocked">Blocked</option>
                </select>
              </div>
              <div className="flex-1">
                <select
                  defaultValue=""
                  name="verified"
                  id="verified"
                  className="rounded-lg px-4 w-full   py-2 outline-0 border border-slate-300 text-muted"
                >
                  <option disabled>All</option>
                  <option value="verified">Verified</option>
                  <option value="not verified">Not verified</option>
                </select>
              </div>
              <div>
                <CustomDatePicker/>
              </div>
            </div>
          </div>
          <div className="border border-slate-300 rounded-xl ">
            <div className="grid grid-cols-[1.2fr_1.2fr_1fr_1fr_1fr_1fr_1fr_1fr] items-center justify-items-center mt-3 font-semibold">
              <span className="text-black/80 text-lg">User</span>
              <span className="text-black/80 text-lg">Email</span>
              <span className="text-black/80 text-lg">Phone</span>
              <span className="text-black/80 text-lg">Role</span>
              <span className="text-black/80 text-lg">Status</span>
              <span className="text-black/80 text-lg">Joined Date</span>
              <span className="text-black/80 text-lg">Bookings</span>
              <span className="text-black/80 text-lg">Action</span>
            </div>
            <div className="border-t border-gray-200 mt-3 mb-2"></div>
            <div className="relative">
            <div className="grid grid-cols-[1.2fr_1.2fr_1fr_1fr_1fr_1fr_1fr_1fr] overflow-hidden items-center justify-items-center gap-3 mb-2">
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

                  <p className="text-sm text-muted">#USR0934</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted">john.doe@example.com</p>
              </div>
              <div>
                <p className="text-sm text-muted">+91 99843 43243</p>
              </div>
              <div>
                {role === "provider" ? (
                  <span className="px-3 py-1 rounded-sm bg-blue-100 text-blue-500">
                    Provider
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-sm bg-purple-100 text-purple-500">
                    Provider
                  </span>
                )}
              </div>
              <div>
                <StatusBudge badge="active" />
              </div>
              <div>
                <p className="text-sm text-muted">May 12 , 2024</p>
              </div>
              <div>
                <p className="text-sm text-muted">12</p>
              </div>
              <button
              ref={menuRef}
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

export default AllUsersList;
