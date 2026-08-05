import NotificationItem from "./NotificationItem";

import {
  FaBook,
  FaCheckCircle,
  FaGift,
  FaStar,
} from "react-icons/fa";

import {
  MdCancel,
  MdError,
  MdMessage,
  MdVerified,
} from "react-icons/md";

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
];

const NotificationList = ({ activeFilter }) => {
  const filtered = notifications.filter((item) => {
    if (activeFilter === "all") return true;

    if (activeFilter === "unread")
      return item.unread;

    return item.type === activeFilter;
  });

  return (
    <>
      {filtered.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
        />
      ))}
    </>
  );
};

export default NotificationList;