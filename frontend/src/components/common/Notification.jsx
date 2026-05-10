import { BsThreeDots } from "react-icons/bs";
import StatusBudge from "../../components/common/StatusBadge";
import { MdCancel } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import NotificationList from "./NotificationList";
const Notification = ({ setOpenNotification }) => {
  const [activeFilter, setActiveFilter] =
  useState("all");
  const base =
    "whitespace-nowrap border shrink-0 transition-all duration-300 px-4 md:text-sm py-1 rounded-xl cursor-pointer";
  const active = "bg-primary text-white";
  const notActive = "border-muted border text-black";
  return (
    <div
  className="
    w-full
    h-screen
    md:max-w-md
    md:max-h-[82vh]
    md:h-auto
    md:overflow-y-auto
    md:fixed
    md:right-8
    md:top-20
    md:rounded-2xl
    bg-white
    z-50
    border border-gray-100
    md:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
    backdrop-blur-xl
    transition-all
    duration-300
  "
>
      <div className="md:py-4 md:px-3 py-3 px-1 sticky top-0 z-20 bg-white flex md:gap-4 gap-1 relative">
        <button
          onClick={() => setOpenNotification(false)}
          type="button"
          className="absolute md:right-3 right-2 md:top-2 top-3 bg-gray-50 hover:bg-gray-200 rounded-full md:p-2 p-1 transaction-all duration-200 cursor-pointer"
        >
          <IoCloseOutline size={24} />
        </button>
        <button
           onClick={()=>setActiveFilter("all")}
          className={
            `${base} ${activeFilter === "all" ? `${active}` : `${notActive}`}`
          }
        >
          All
        </button>
        <button
          onClick={()=>setActiveFilter("unread")}
          className={
            `${base} ${activeFilter ==="unread" ? `${active}` : `${notActive}`}`
          }
        >
          Unread
        </button>
        <button
          onClick={()=>setActiveFilter("booking")}
          className={
            `${base} ${activeFilter ==='booking' ? `${active}` : `${notActive}`}`
          }
        >
          Booking
        </button>
        <button
          onClick={()=>setActiveFilter("message")}
          className={
            `${base} ${activeFilter === 'message' ? `${active}` : `${notActive}`}`
          }
        >
          Message
        </button>
      </div>
      <div className="w-full border-t border-gray-200 "></div>
       <NotificationList activeFilter={activeFilter}/>
    </div>
  );
};

export default Notification;
