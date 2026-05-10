import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaBook, FaCheckCircle } from "react-icons/fa";
import { MdCancel, MdMessage, MdVerified, MdError } from "react-icons/md";
import { FaGift, FaStar } from "react-icons/fa";
const NotificationList = ({ activeFilter }) => {
  const notifications = [
    {
      id: 1,
      title: "Booking Confirmed",
      name: "Rohit Sharma",
      role: "Plumber",
      message: "has confirmed your booking.",
      time: "12m ago",
      type: "booking",
      unread: true,

      icon: MdVerified,

      bgColor: "bg-green-100",

      iconColor: "text-green-600",
    },

    {
      id: 2,
      title: "New Message",
      name: "Aman Gupta",
      role: "Electrician",
      message: "sent you a new message.",
      time: "25m ago",
      type: "message",
      unread: true,

      icon: MdMessage,

      bgColor: "bg-blue-100",

      iconColor: "text-blue-600",
    },

    {
      id: 3,
      title: "Booking Cancelled",
      name: "Vikas Kumar",
      role: "Cleaner",
      message: "cancelled your booking request.",
      time: "1h ago",
      type: "booking",
      unread: false,

      icon: MdCancel,

      bgColor: "bg-red-100",

      iconColor: "text-red-500",
    },

    {
      id: 4,
      title: "Review Received",
      name: "Pankaj Singh",
      role: "Painter",
      message: "left a 5 star review.",
      time: "2h ago",
      type: "review",
      unread: false,

      icon: FaStar,

      bgColor: "bg-orange-100",

      iconColor: "text-orange-500",
    },

    {
      id: 5,
      title: "Special Offer",
      name: "LSP Services",
      role: "System",
      message: "Get 20% off on cleaning services.",
      time: "5h ago",
      type: "offer",
      unread: true,

      icon: FaGift,

      bgColor: "bg-purple-100",

      iconColor: "text-purple-600",
    },

    {
      id: 6,
      title: "Payment Failed",
      name: "Payment Gateway",
      role: "Finance",
      message: "Your recent payment has failed.",
      time: "8h ago",
      type: "payment",
      unread: false,

      icon: MdError,

      bgColor: "bg-rose-100",

      iconColor: "text-rose-600",
    },

    {
      id: 7,
      title: "Booking Completed",
      name: "Suresh Yadav",
      role: "Carpenter",
      message: "marked your booking as completed.",
      time: "1d ago",
      type: "booking",
      unread: false,

      icon: FaCheckCircle,

      bgColor: "bg-emerald-100",

      iconColor: "text-emerald-600",
    },

    {
      id: 8,
      title: "New Booking",
      name: "Priya Sharma",
      role: "User",
      message: "booked your electrical service.",
      time: "2d ago",
      type: "booking",
      unread: true,

      icon: FaBook,

      bgColor: "bg-cyan-100",

      iconColor: "text-cyan-600",
    },
  ];

  const filterNotification = notifications.filter((item) => {
    if (activeFilter === "all") {
      return true;
    }

    if (activeFilter === "unread") {
      return item.unread;
    }

    return item.type === activeFilter;
  });
  return (
    <div>
      {filterNotification.map((items, idx) => {
        const {
          id,
          title,
          name,
          role,
          message,
          time,
          unread,
          icon: Icon,
          bgColor,
          iconColor,
        } = items;
        return (
          <>
            <div
              key={id}
              className="w-full  flex items-center justify-between gap-3 p-3  rounded-md hover:bg-gray-50 cursor-pointer transition-all duration-300"
            >
              <div className="flex gap-3">
                <div
                  className={` w-16 h-16 min-w-16 rounded-full  flex items-center justify-center shadow-sm
                ${bgColor}
  `}
                >
                  <Icon size={38} className={iconColor} />
                </div>

                <div>
                  <h1 className=" font-semibold text-lg">{title}</h1>
                  
                  <h2 className="text-sm font-semibold">
                    {name} ({role})
                  </h2>
                  <p className="text-sm">{message}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                {unread && (
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  )}
                <p className="text-xs">{time}</p>
                <BsThreeDots className="text-xl text-muted cursor-pointer" />


              </div>
            </div>
            {idx !== filterNotification.length - 1 && (
              <div className="w-full border-t border-gray-200 "></div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default NotificationList;
