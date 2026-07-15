import { BiCategory } from "react-icons/bi";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

export const getStatsData = (stats) => [
  {
    id: 1,
    title: "Total Categories",
    value: stats?.totalCategories || 0,
    growth: "12%",
    icon: <BiCategory size={22} />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
  {
    id: 2,
    title: "Active Categories",
    value: stats?.activeCategories || 0,
    growth: "5%",
    icon: <FaRegCircleCheck size={22} />,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
  {
    id: 3,
    title: "Inactive Categories",
    value: stats?.inactiveCategories || 0,
    growth: "18%",
    icon: <FaRegCircleXmark size={22} />,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    growthIcon: <IoMdArrowRoundDown size={20} />,
    growthColor: "text-red-500",
  },
  {
    id: 4,
    title: "Total Services",
    value: stats?.totalServices || 0,
    growth: "10%",
    icon: <MdOutlineMiscellaneousServices size={22} />,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
  {
    id: 5,
    title: "Total Providers",
    value: stats?.totalProviders || 0,
    growth: "10%",
    icon: <HiMiniUsers size={24} />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
];