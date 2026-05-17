import { useEffect, useRef, useState } from "react";
import { CiBank } from "react-icons/ci";
import { FaHourglassStart, FaRegCircleCheck } from "react-icons/fa6";
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoSearch, IoWalletOutline } from "react-icons/io5";
import { AiOutlineReload } from "react-icons/ai";
import CustomDatePicker from "../../components/common/CustomDatePicker";
import { SiPaytm } from "react-icons/si";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineFileDownload, MdOutlineRemoveRedEye } from "react-icons/md";
import RevenueOverview from '../../utils/providerCharts/RevenueOverview'
import UpiStatus from "../../utils/providerCharts/UpiStatus";
const AllPayments = () => {
const statsData = [
    {
      id: 1,
      title: "Total Revenue",
      value: "₹ 12,835",
      growth: "12%",
      icon: <IoWalletOutline size={22} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      growthColor: "text-green-500",
    },

    {
      id: 2,
      title: "Successful Payments",
      value: "12,345",
      growth: "5%",
      icon: <FaRegCircleCheck size={22} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      growthColor: "text-green-500",
    },

    {
      id: 3,
      title: "Pending Payments",
      value: "89,543",
      growth: "18%",
      icon: <FaHourglassStart size={22} />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      growthColor: "text-green-500",
    },

    {
      id: 4,
      title: "Refunds Payments",
      value: "₹ 24,400",
      growth: "10%",
      icon: <AiOutlineReload size={22} />,
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
      growthColor: "text-green-500",
    },
    {
      id: 5,
      title: "Provider Payouts",
      value: "₹ 24,400",
      growth: "10%",
      icon: <CiBank size={24} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
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
        <div className="flex gap-3 my-4">

          <div className="flex-[1.76]
            bg-white
            rounded-[28px]
            border border-slate-200
            p-5
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <RevenueOverview/>
          </div>
          <div>
            <UpiStatus/>
          </div>
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
                placeholder="Search transactions..."
                className="outline-0 border-0 w-full "
              />
              <IoSearch size={18} />
            </div>
            <div className="flex gap-3 flex-2 ">
              <div className="flex-1 ">
                <select
                  defaultValue=""
                  name="payment status"
                  id="payment status"
                  className="rounded-lg px-4 w-full  py-2 outline-0 border border-slate-300 text-muted"
                >
                  <option disabled> All Payment Status</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="refunded">Refunded</option>
                  <option value="failed">Failed</option>
                </select>
              </div>
              <div className="flex-1">
                <select
                  defaultValue=""
                  name="payment method"
                  id="payment method"
                  className="rounded-lg px-4 w-full  py-2 outline-0 border border-slate-300 text-muted"
                >
                  <option disabled>All Payment Method</option>
                  <option value="upi">UPI</option>
                  <option value="credit card">Credit Card</option>
                  <option value="wallet">Wallet</option>
                  <option value="Net Banking">net banking</option>
                  <option value="cards">Cards</option>
                </select>
              </div>
              <div className="flex-1">
                <select
                  defaultValue=""
                  name="service category"
                  id="service category"
                  className="rounded-lg px-4 w-full  py-2 outline-0 border border-slate-300 text-muted"
                >
                  <option disabled>All Service categories</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="cleaning">Cleaning</option>
                </select>
              </div>
              <div>
                <CustomDatePicker />
              </div>
            </div>
          </div>
          <div className="border border-slate-300 rounded-xl ">
            <div className="grid grid-cols-[1fr_1fr_1.5fr_1.5fr_1.4fr_1fr_1fr_1.4fr_1fr_1.2fr_0.7fr] items-center justify-items-center mt-3 text-sm font-bold text-black/80">
              <span>Transition ID</span>
              <span>Booking ID</span>
              <span>Customer</span>
              <span>Provider</span>
              <span>Payment Method</span>
              <span>Amount</span>
              <span>Platform Fee</span>
              <span>Provider Earnings</span>
              <span>Status</span>
              <span>Date & Time</span>
              <span>Action</span>
            </div>
            <div className="border-t border-gray-200 mt-3 mb-2"></div>
            <div className="relative">
              <div className="grid grid-cols-[1fr_1fr_1.5fr_1.5fr_1.4fr_1fr_1fr_1.4fr_1fr_1.2fr_0.7fr] items-center justify-items-center gap-3 mb-2">
                <div>
                  <h1 className="text-sm font-semibold text-blue-500">#TXN10234</h1>
                </div>
                <div>
                  <h1 className="text-sm font-semibold text-blue-500">#BK10234</h1>
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
                <div className="flex items-center gap-2">
                  <SiPaytm size={24} className="text-blue-500"/>
                  <p>UPI</p>
                </div>
                
                <div>
                  <p className="text-sm text-black/80 font-semibold">₹ 1,200</p>
                </div>
                <div>
                  <p className="text-sm text-black/80 font-semibold">₹ 100</p>
                </div>
                <div>
                  <p className="text-sm text-black/80 font-semibold">₹ 1,100</p>
                </div>
                <div>
                  <span className="py-1 px-3 text-green-500 border border-green-500 bg-green-100 flex items-center gap-2 rounded-lg text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <p>Paid</p>
                  </span>
                </div>
               <div>
                  <h3 className="text-sm font-semibold  text-black/80">May 12,2024</h3>
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
                      <p className="text-sm font-medium">View Transition</p>
                    </button>

                    

                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 text-blue-500 transition-all cursor-pointer duration-300">
                      <MdOutlineFileDownload size={20} />
                      <p className="text-sm font-medium">Download Invoice</p>
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

export default AllPayments