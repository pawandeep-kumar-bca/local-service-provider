

import { AiFillChrome, AiFillHome } from "react-icons/ai";
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
      icon: <AiFillChrome />,
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
      path: "/",
    },
    {
      name: "My Bookings",
      icon: <FaListCheck />,
      path: "/my-bookings",
    },
    {
      name: "Saved Providers",
      icon: <FaBookmark />,
      path: "/saved-providers",
    },
    {
      name: "Payment History",
      icon: <MdPayments />,
      path: "/payment-history",
    },
    {
      name: "Reviews",
      icon: <MdReviews />,
      path: "/reviews",
    },
    {
      name: "Support",
      icon: <TbHelpCircleFilled />,
      path: "/support",
    },
    {
      name: "Profile Settings",
      icon: <TbSettings />,
      path: "/profile-settings",
    }
  ];
export  const providerMenu = [
    {
      name: "Home",
      icon: <AiFillHome />,
      path: "/",
    },
    {
      name: "Bookings",
      icon: <FaListCheck />,
      path: "/bookings",
    },{
        name:'Earnings',
        icon:<LuChartNoAxesCombined />,
        path:'/earnings'
    },{
        name:'Services',
        icon:<GrServices />,
        path:'/services'
    },
    {
        name:'Documents',
        icon:<IoDocumentSharp />,
        path:'/documents'
    },{
      name: "Settings",
      icon: <TbSettings />,
      path: "/settings",
    }
  ]
export  const adminMenu = [
    {
        name:'Dashboard',
        icon:<RiDashboardHorizontalFill />,
        path:'/dashboard'
    },
    {
        name:'Users',
        icon:<FaUser />,
        path:'/users'
    },
    {
        name:'Bookings',
        icon:<FaListCheck />,
        path:'/bookings',

    },{
        name:'Payments',
        icon:<FaChartSimple />,
        path:'/payments'
    },
    {
        name:'Reports',
        icon:<MdReport />,
        path:'/reports'
    },{
      name: "Settings",
      icon: <TbSettings />,
      path: "/settings",
    }

  ]