import { FaBook, FaUser, FaUserFriends, FaUsers } from "react-icons/fa";
import Cards from "../../components/common/Cards";
import BookingOverviewChart from "../../utils/providerCharts/BookingsOverviewChart";
import BookingStatusChart from "../../utils/providerCharts/BookingsStatusChart";
import RevenueChart from "../../utils/providerCharts/RevenueChart";
import NavBar from "../../components/common/NavBar";
import Button from "../../components/common/Button";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import BookingChart from "../../utils/lineChart";
import StatusBadge from "../../components/common/StatusBadge";
import { TfiWallet } from "react-icons/tfi";
import { IoMdArrowRoundUp } from "react-icons/io";
const ProviderDashboard = () => {
  const statsData = [
    {
      id: 1,
      title: "Total Users",
      value: "12,835",
      growth: "12%",
      icon: <FaUser size={24} />,
      iconBg: "bg-sky-100",
      iconColor: "text-sky-500",
      growthColor: "text-green-500",
      bgColor: "bg-white border-white/50",
    },

    {
      id: 2,
      title: "Total Providers",
      value: "12,345",
      growth: "5%",
      icon: <FaUserFriends size={24} />,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-500",
      growthColor: "text-green-500",
      bgColor: "bg-white",
    },

    {
      id: 3,
      title: "Total Bookings",
      value: "89,543",
      growth: "18%",
      icon: <FaBook size={24} />,
      iconBg: "bg-pink-200",
      iconColor: "text-pink-600",
      growthColor: "text-green-500",
      bgColor: "bg-white",
    },

    {
      id: 4,
      title: "Total Revenue",
      value: "₹24,400",
      growth: "10%",
      icon: <TfiWallet size={24} />,
      iconBg: "bg-green-200",
      iconColor: "text-green-500",
      growthColor: "text-green-500",
      bgColor: "bg-white",
    },
  ];
  const bookings = [
    {
      user: "Pawandeep Kumar",
      provider: "Rahul Electrician",
      date: "Apr 12, 2025",
      status: "upcoming",
    },
    {
      user: "Aman Verma",
      provider: "Shivam Plumber",
      date: "Apr 14, 2025",
      status: "completed",
    },
    {
      user: "Rohit Yadav",
      provider: "Deepak Carpenter",
      date: "Apr 15, 2025",
      status: "pending",
    },
    {
      user: "Anjali Sharma",
      provider: "Suresh AC Repair",
      date: "Apr 16, 2025",
      status: "cancelled",
    },
    {
      user: "Karan Singh",
      provider: "Vikas Painter",
      date: "Apr 17, 2025",
      status: "upcoming",
    },
    {
      user: "Priya Mehta",
      provider: "Rohit Cleaner",
      date: "Apr 18, 2025",
      status: "completed",
    },
    {
      user: "Nitin Kumar",
      provider: "Ajay Electrician",
      date: "Apr 19, 2025",
      status: "pending",
    },
    {
      user: "Simran Kaur",
      provider: "Mohit Plumber",
      date: "Apr 20, 2025",
      status: "upcoming",
    },
    // {
    //   user: "Rahul Mishra",
    //   provider: "Ankit Carpenter",
    //   date: "Apr 21, 2025",
    //   status: "completed",
    // },
    // {
    //   user: "Pooja Sharma",
    //   provider: "Ravi AC Service",
    //   date: "Apr 22, 2025",
    //   status: "cancelled",
    // },
    // {
    //   user: "Tarun Saxena",
    //   provider: "Sanjay Painter",
    //   date: "Apr 23, 2025",
    //   status: "upcoming",
    // },
    // {
    //   user: "Neha Agarwal",
    //   provider: "Kunal Cleaner",
    //   date: "Apr 24, 2025",
    //   status: "pending",
    // },
    // {
    //   user: "Arjun Patel",
    //   provider: "Vivek Electrician",
    //   date: "Apr 25, 2025",
    //   status: "completed",
    // },
    // {
    //   user: "Deepak Chauhan",
    //   provider: "Raj Plumber",
    //   date: "Apr 26, 2025",
    //   status: "upcoming",
    // },
    // {
    //   user: "Komal Singh",
    //   provider: "Manoj Carpenter",
    //   date: "Apr 27, 2025",
    //   status: "pending",
    // },
    // {
    //   user: "Sonia Gupta",
    //   provider: "Harish AC Repair",
    //   date: "Apr 28, 2025",
    //   status: "completed",
    // },
    // {
    //   user: "Ajay Kumar",
    //   provider: "Rakesh Painter",
    //   date: "Apr 29, 2025",
    //   status: "upcoming",
    // },
    // {
    //   user: "Riya Sharma",
    //   provider: "Mukesh Cleaner",
    //   date: "Apr 30, 2025",
    //   status: "cancelled",
    // },
    // {
    //   user: "Vikas Arora",
    //   provider: "Amit Electrician",
    //   date: "May 01, 2025",
    //   status: "pending",
    // },
    // {
    //   user: "Meena Devi",
    //   provider: "Sunil Plumber",
    //   date: "May 02, 2025",
    //   status: "upcoming",
    // },
  ];
  return (
    <>
      <div className="w-full h-full p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-4 mb-6">
          {statsData.map((item) => (
            <div
              key={item.id}
              className={`
                    ${item.bgColor}
                    border
                    rounded-2xl
                    p-5
                    text-white
                    shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                    hover:-translate-y-1
                    hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]
                    transition-all duration-300
                    cursor-pointer
                    relative
                    overflow-hidden
                  `}
            >
              <div className="relative flex items-center gap-4">
                {/* Icon */}
                <div
                  className={`
                        ${item.iconBg}
                        ${item.iconColor}
                        w-14 h-14
                        rounded-2xl
                        flex items-center justify-center
                        shrink-0
                        backdrop-blur-md
                      `}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h1 className="text-sm text-black/90 font-medium">
                    {item.title}
                  </h1>

                  <h2 className="text-2xl md:text-3xl font-bold text-black mt-1">
                    {item.value}
                  </h2>

                  <div className="flex items-center gap-2 mt-2 flex-wrap">
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

                    <p className="text-xs md:text-sm text-black/70 font-medium">
                      from last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-5 items-stretch">
          {/* Booking Overview */}
          <div
            className="
      flex-[1.76]
      bg-white
      rounded-[28px]
      border border-slate-200
      p-5
      shadow-[0_10px_40px_rgba(0,0,0,0.05)]
    "
          >
            <BookingOverviewChart />
          </div>

          {/* Booking Status */}
          <div
            className="
      flex-[1.25]
    "
          >
            <BookingStatusChart />
          </div>
        </div>

         <div className="flex gap-5 items-stretch">
          {/* Booking Overview */}
          <div
            className="
      flex-[1.76]
      
    "
          >
            
          </div>

          <div
            className="
      flex-[1.25]
    "
          >
            <RevenueChart/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderDashboard;
{
  /* RIGHT SIDE */
}
{
  /* <div className="w-[50%] pb-4 shadow-[0_0_15px_rgba(0,0,0,0.45)]  rounded-lg">
            <div className="flex justify-between items-center p-3">
              <h1 className="font-bold text-lg">Latest Booking</h1>
              <Link className="text-muted flex items-center gap-1">
                View All <MdOutlineChevronRight className="text-2xl" />
              </Link>
            </div>
            <div className="w-full h-[1px] bg-muted mb-2"></div>

            <div>
              <div>
                <ul className="flex justify-around items-center text-lg font-semibold">
                  <li>User</li>
                  <li>Provider</li>
                  <li>Date</li>
                  <li>Status</li>
                </ul>
              </div>
              <div className="w-full h-[1px] bg-muted mb-3 mt-2"></div>

              <div>
                {bookings.map((items, idx) => (
                  <div
                    className="grid grid-cols-4 text-center font-normal mb-3"
                    key={idx}
                  >
                    <p>{items.user}</p>

                    <p>{items.provider}</p>

                    <p>{items.date}</p>
                    <div className="flex items-center justify-center">
                      <StatusBadge badge={items.status} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */
}
