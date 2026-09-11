import { GiSandsOfTime } from "react-icons/gi";
import { PiHandWithdrawLight } from "react-icons/pi";
import { IoMdTrendingUp } from "react-icons/io";
export const cardsContent = [
  {
    bgColor: "bg-green-100",
    textColor: "text-green-500",
    borderColor: "#22c55e",
    startBg: "rgba(34, 197, 94, 0.35)",
    endBg: "rgba(34, 197, 94, 0.07)",
    Icon: IoMdTrendingUp,
    text: "This month earning",
    amount: "20,300",
    growthColor: "text-green-500",
  },

  {
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-500",
    borderColor: "#eab308",
    startBg: "rgba(234,179,8,0.35)",
    endBg: "rgba(234,179,8,0)",
    Icon: GiSandsOfTime,
    text: "Pending Amount",
    amount: "20,300",
    growthColor: "text-yellow-500",
  },

  {
    bgColor: "bg-purple-100",
    textColor: "text-purple-500",
    borderColor: "#a855f7",
    startBg: "rgba(168,85,247,0.35)",
    endBg: "rgba(168,85,247,0)",
    Icon: PiHandWithdrawLight,
    text: "Withdrawn Amount",
    amount: "22,400",
    growthColor: "text-green-500",
  },
];

export const transactions = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    service: "AC Repair",
    date: "18 May 2025",
    amount: "₹1,200",
    payment: "UPI",
    status: "Paid",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Amit Kumar",
    service: "Plumbing",
    date: "17 May 2025",
    amount: "₹850",
    payment: "Cash",
    status: "Paid",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Neha Singh",
    service: "Home Cleaning",
    date: "16 May 2025",
    amount: "₹650",
    payment: "UPI",
    status: "Paid",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Vikram Mehta",
    service: "Washing Machine",
    date: "15 May 2025",
    amount: "₹1,050",
    payment: "Card",
    status: "Paid",
  },
];