import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoMdStopwatch } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const ProviderSchedule = () => {
  const cardsContent = [
    {
      bgColor: "bg-green-100",
      textColor: "text-green-500",
      Icon: FaRegCalendarAlt,
      text: "This Month Earning",
      value: "5",
      extraContent: (
        <div className="flex gap-1 items-center">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <p className="text-yellow-500 font-bold">2</p>
          <p className="text-muted text-sm font-semibold">Pending</p>
        </div>
      ),
    },

    {
      bgColor: "bg-blue-100",
      textColor: "text-blue-500",

      Icon: FaRegCheckCircle,

      text: "Completed Today",

      value: "20",

      extraContent: (
        <div className="flex gap-1 items-center">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <p className="text-sm font-bold">₹ 1,200</p>
          <p className="text-muted text-sm font-semibold"> Earnings</p>
        </div>
      ),
    },

    {
      bgColor: "bg-purple-100",
      textColor: "text-purple-500",

      Icon: IoMdStopwatch,

      text: "Free Slots",

      value: "2",

      extraContent: (
        <p className="text-muted text-sm font-semibold">Available Today</p>
      ),
    },
    {
      bgColor: "bg-orange-100",
      textColor: "text-orange-500",
      Icon: IoWalletOutline,
      text: "Today Earnings",
      value: "₹ 22,400",

      extraContent: (
        <Link className="border-b border-[2px] border-transparent hover:border-b hover:border-green hover:border-[2px] transition-all duration-300 text-green-500 ">
          View Details
        </Link>
      ),
    },
  ];

  const [value,setValue] = useState('Day')
  console.log(value);
  
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-text">Schedule</h1>
        <p className="tex-sm text-muted">
          Manage your bookings and availability.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:gap-4 mt-5 gap-2">
        {cardsContent.map((item, idx) => {
          const {
            bgColor,

            textColor,

            Icon,
            text,
            value,
            extraContent,
          } = item;

          return (
            <div
              key={idx}
              className="
                bg-white
                rounded-xl
                relative
                overflow-hidden
                p-4
                border border-slate-100
                shadow-[0_5px_20px_rgba(0,0,0,0.06)]
                hover:-translate-y-1
                transition-all duration-300
                
              "
            >
              {/* Top */}
              <div className="flex items-start gap-4">
                <div
                  className={`
                    w-14 h-14
                    flex items-center justify-center
                    ${textColor}
                    ${bgColor}
                    rounded-2xl
                    shrink-0
                  `}
                >
                  <Icon size={24} />
                </div>
                <div>
                  <h2 className="text-muted md:text-sm font-medium text-lg leading-5 ">
                    {text}
                  </h2>
                  {/* Content */}
                  <div className="mt-1">
                    <h1 className="text-text text-3xl font-bold mb-1">
                      {value}
                    </h1>

                    {extraContent}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-[2fr_1fr] gap-1 grid-cols-1 mt-5">
        <div
          className="
        bg-white
        rounded-xl
        border border-slate-100
        p-5
        shadow-[0_5px_20px_rgba(0,0,0,0.06)]
      "
        >
          <div>
           <div className="flex gap-2">
             <label htmlFor="day">
              <input
              name="day"
              id="day"
              value='Day'
              onChange={(e)=>setValue(e.target.value)}
               type="radio" className="peer hidden"/>
              <div className="peer-checked:bg-green-600 peer-checked:text-white font-semibold peer-checked:border-green-600 border border-gray-400 py-1 px-3 rounded-sm">
                Day
              </div>
            </label>
            <label htmlFor="Week">
              <input
              name="day"
              id="Week"
               type="radio"
               value="Week"
               onChange={(e)=>setValue(e.target.value)} className="peer hidden"/>
              <div className="peer-checked:bg-green-600 peer-checked:text-white font-semibold peer-checked:border-green-600 border border-gray-400 py-1 px-3 rounded-sm">
                Week
              </div>
            </label>
             <label htmlFor="Month">
              <input
              name="day"
              id="Month"
              value='Month'
              onChange={(e)=>setValue(e.target.value)}
               type="radio" className="peer hidden"/>
              <div className="peer-checked:bg-green-600 peer-checked:text-white font-semibold peer-checked:border-green-600 border border-gray-400 py-1 px-3 rounded-sm">
                Month
              </div>
            </label>
             
           </div>
                  <FaCalendarDays />
           <div>

           </div>
          </div>

        </div>
        <div
          className="
        bg-white
        rounded-xl
        border border-slate-100
        p-5
        shadow-[0_5px_20px_rgba(0,0,0,0.06)]
      "
        >


        </div>
      </div>
    </div>
  );
};

export default ProviderSchedule;
