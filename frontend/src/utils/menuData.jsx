

import { AiFillHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaBookmark, FaUser } from "react-icons/fa";
import { FaChartSimple, FaListCheck } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { IoDocumentSharp } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdPayments, MdReport, MdReviews } from "react-icons/md";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { TbHelpCircleFilled, TbSettings } from "react-icons/tb";

export const publicMenu = [
    {
      name: "Home",
      icon: <AiFillHome />,
      path: "/",
    },
    {
      name: "Categories",
      icon: <BiCategory />,
      path: "/categories",
    },
    {
      name: "Profile",
      icon: <FaUser />,
      path: "/profile",
    },
  ];
export  const userMenu = [
    {
      name: "Home",
      icon: <AiFillHome />,
      path: "/user",
    },
    {
      name: "My Bookings",
      icon: <FaListCheck />,
      path: "/user/my-bookings",
    },
    {
      name: "Saved Providers",
      icon: <FaBookmark />,
      path: "/user/saved-providers",
    },
    {
      name: "Payment History",
      icon: <MdPayments />,
      path: "/user/payment-history",
    },
    {
      name: "Reviews",
      icon: <MdReviews />,
      path: "/user/reviews",
    },
    {
      name: "Support",
      icon: <TbHelpCircleFilled />,
      path: "/user/support",
    },
    {
      name: "Profile Settings",
      icon: <TbSettings />,
      path: "/user/profile-settings",
    }
  ];
export  const providerMenu = [
    {
      name: "Home",
      icon: <AiFillHome />,
      path: "/provider",
    },
    {
      name: "Bookings",
      icon: <FaListCheck />,
      path: "/provider/bookings",
    },{
        name:'Earnings',
        icon:<LuChartNoAxesCombined />,
        path:'/provider/earnings'
    },{
        name:'Services',
        icon:<GrServices />,
        path:'/provider/services'
    },
    {
        name:'Documents',
        icon:<IoDocumentSharp />,
        path:'/provider/documents'
    },{
      name: "Settings",
      icon: <TbSettings />,
      path: "/provider/settings",
    }
  ]
export  const adminMenu = [
    {
        name:'Dashboard',
        icon:<RiDashboardHorizontalFill />,
        path:'/admin/dashboard'
    },
    {
        name:'Users',
        icon:<FaUser />,
        path:'/admin/users'
    },
    {
        name:'Bookings',
        icon:<FaListCheck />,
        path:'/admin/bookings',

    },
    {
      name: "Categories",
      icon: <BiCategory />,
      path: "/admin/categories",
    },{
        name:'Payments',
        icon:<FaChartSimple />,
        path:'/admin/payments'
    },
    {
        name:'Reports',
        icon:<MdReport />,
        path:'/admin/reports'
    },{
      name: "Settings",
      icon: <TbSettings />,
      path: "/admin/settings",
    }

  ]