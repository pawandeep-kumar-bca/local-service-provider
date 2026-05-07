import { FaBook, FaUserFriends, FaUsers } from "react-icons/fa";
import Cards from "../../components/common/Cards";

import NavBar from "../../components/common/NavBar";
import Button from "../../components/common/Button";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import BookingChart from "../../utils/lineChart";
import StatusBadge from "../../components/common/StatusBadge";
const ProviderDashboard = () => {
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 mb-6">
          <Cards
            icon={
              <FaUserFriends className="text-success text-2xl md:text-4xl" />
            }
            value={3}
          >
            Total Users
          </Cards>
          <Cards
            icon={<FaUsers className="text-primary text-2xl md:text-4xl" />}
            value={3}
          >
            Total Providers
          </Cards>
          <Cards
            icon={<FaBook className="text-divider text-2xl md:text-4xl" />}
            value={3}
          >
            Total Booking
          </Cards>
          <Cards
            icon={
              <FaMoneyBillTrendUp className="text-warning text-2xl md:text-4xl" />
            }
            value="₹6000"
          >
            Total Revenue
          </Cards>
        </div>
        <div className="w-full flex gap-3">
          {/* LEFT SIDE */}
          <div className="w-[50%] p-3 shadow-[0_0_15px_rgba(0,0,0,0.45)] rounded-lg">
            <h2 className="mb-2 font-bold text-lg">Booking Analytics</h2>
            <div className="w-full h-[1px] bg-muted mb-2"></div>
            <BookingChart />
          </div>

          {/* RIGHT SIDE */}
          <div className="w-[50%] pb-4 shadow-[0_0_15px_rgba(0,0,0,0.45)]  rounded-lg">
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
                {bookings.map(
                  (items, idx) =>
                     (
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
                    ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderDashboard;
