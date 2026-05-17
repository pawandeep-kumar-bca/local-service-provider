import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHourglassStart } from "react-icons/fa6";
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import {
  MdOutlineRemoveRedEye,
  MdOutlineReportGmailerrorred,
  MdOutlineTaskAlt,
  MdPriorityHigh,
} from "react-icons/md";
import { RiAlarmWarningLine } from "react-icons/ri";
import CustomDatePicker from "../../components/common/CustomDatePicker";
const AllReports = () => {
  const statsData = [
    {
      id: 1,
      title: "Total Reports",
      value: "1,235",
      growth: "12%",
      icon: <MdOutlineReportGmailerrorred size={24} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      growthColor: "text-green-500",
    },

    {
      id: 2,
      title: "Pending Review",
      value: "345",
      growth: "5%",
      icon: <FaHourglassStart size={24} />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500",
      growthColor: "text-green-500",
    },

    {
      id: 3,
      title: "Resolved Cases",
      value: "543",
      growth: "18%",
      icon: <MdOutlineTaskAlt size={24} />,
      iconBg: "bg-green-200",
      iconColor: "text-green-600",
      growthColor: "text-green-500",
    },

    {
      id: 4,
      title: "High Priority",
      value: "78",
      growth: "10%",
      icon: <MdPriorityHigh size={24} />,
      iconBg: "bg-red-200",
      iconColor: "text-red-500",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 mt-4 mb-6">
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
              <div className="flex items-center justify-center gap-2 mt-2 flex-wrap ">
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
                placeholder="Search by report ID, user or provider..."
                className="outline-0 border-0 w-full "
              />
              <IoSearch size={18} />
            </div>
            <div className="flex gap-3 flex-2 ">
              <div className="flex-1 ">
                <select
                  defaultValue=""
                  name="report status"
                  id="report status"
                  className="rounded-lg px-4 w-full  py-2 outline-0 border border-slate-300 text-muted"
                >
                  <option disabled> All Report Status</option>
                  <option value="under review">Under Review</option>
                  <option value="pending">Pending</option>
                  <option value="escalated">Escalated</option>
                  <option value="resolved">Resolved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
              <div className="flex-1">
                <select
                  defaultValue=""
                  name="report type"
                  id="report type"
                  className="rounded-lg px-4 w-full  py-2 outline-0 border border-slate-300 text-muted"
                >
                  <option disabled>All Report Type</option>
                  <option value="Misbehavior">Misbehavior</option>
                  <option value="No Show">No Show</option>
                  <option value="Payment Issue">Payment Issue</option>
                  <option value="Fraud">Fraud</option>
                  <option value="Poor Service">Poor Service</option>
                </select>
              </div>
              <div className="flex-1">
                <select
                  defaultValue=""
                  name="priority"
                  id="priority"
                  className="rounded-lg px-4 w-full  py-2 outline-0 border border-slate-300 text-muted"
                >
                  <option disabled>All Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div>
                <CustomDatePicker />
              </div>
            </div>
          </div>
          <div className="border border-slate-300 rounded-xl ">
            <div className="grid grid-cols-[1fr_1.2fr_1.2fr_1fr_1fr_1fr_1.2fr_1fr_1fr] items-center justify-items-center mt-3 text-sm font-bold text-black/80">
              <span>Report Id</span>
              <span>Report By</span>
              <span>Against</span>
              <span>Booking ID</span>
              <span>Report Type</span>
              <span>priority</span>
              <span>Status</span>
              <span>Date & Time</span>
              <span>Action</span>
            </div>
            <div className="border-t border-gray-200 mt-3 mb-2"></div>
            <div className="relative">
              <div className="grid grid-cols-[1fr_1.2fr_1.2fr_1fr_1fr_1fr_1.2fr_1fr_1fr] items-center justify-items-center gap-3 mb-2">
                <div>
                  <h1 className="text-sm font-semibold text-blue-500">
                    #REP10234
                  </h1>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/34.jpg"
                    alt="profile"
                    className="
                            w-10 h-10 min-w-10
                            rounded-full
                            object-cover
                            ring-2 ring-primary/10
                          "
                  />
                  <div>
                    <h1 className="text-base font-bold text-black/90">
                      John Doe
                    </h1>

                    <p className="text-sm text-muted">#USO0934</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/36.jpg"
                    alt="profile"
                    className="
                            w-10 h-10 min-w-10
                            rounded-full
                            object-cover
                            ring-2 ring-primary/10
                          "
                  />
                  <div>
                    <h1 className="text-base font-bold text-black/90">
                      Aman Doe
                    </h1>

                    <p className="text-sm text-muted">#PRO0934</p>
                  </div>
                </div>
                <div>
                  <h1 className="text-sm font-semibold text-blue-500">
                    #BK10234
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-500 flex items-center justify-center">
                    <RiAlarmWarningLine size={20} />
                  </div>
                  <p className="text-sm text-muted">Fraud</p>
                </div>

                <div>
                  <span className="text-sm text-red-500 bg-red-100 rounded-sm border-red-300 border py-1 px-3 font-semibold">
                    Hight
                  </span>
                </div>
                <div>
                  <span className="text-sm text-yellow-500 bg-yellow-100 rounded-sm font-semibold border border-yellow-400 py-1 px-3">
                    Under Review
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold  text-black/80">
                    May 12,2024
                  </h3>
                  <p className="text-sm text-muted">10:30 AM</p>
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
                      <p className="text-sm font-medium">View Report</p>
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

export default AllReports;
