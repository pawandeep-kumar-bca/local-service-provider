import { FaBook, FaUserFriends, FaUsers } from "react-icons/fa";
import Cards from "../../components/common/Cards";

import NavBar from "../../components/common/NavBar";
import Button from "../../components/common/Button";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import BookingChart from "../../utils/lineChart";

const ProviderDashboard = () => {
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
          <div className="w-[50%] shadow-[0_0_15px_rgba(0,0,0,0.45)]  rounded-lg">
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

              <div className="flex justify-around  m-2">
                <p>Shivam kumar</p>
                <p>Dr. Ashok kumar</p>
                <p>Apr 12 ,2023</p>
                <Button>Upcoming</Button>
              </div>
              <div className="flex justify-around  m-2">
                <p>Shivam kumar</p>
                <p>Dr. Ashok kumar</p>
                <p>Apr 12 ,2023</p>
                <Button>Upcoming</Button>
              </div>
              <div className="flex justify-around  m-2">
                <p>Shivam kumar</p>
                <p>Dr. Ashok kumar</p>
                <p>Apr 12 ,2023</p>
                <Button color="white">Upcoming</Button>
              </div>
              <div className="flex justify-around  m-2">
                <p>Shivam kumar</p>
                <p>Dr. Ashok kumar</p>
                <p>Apr 12 ,2023</p>
                <Button>Upcoming</Button>
              </div>
              <div className="flex justify-around  m-2">
                <p>Shivam kumar</p>
                <p>Dr. Ashok kumar</p>
                <p>Apr 12 ,2023</p>
                <Button>Upcoming</Button>
              </div>
              <div className="flex justify-around  m-2">
                <p>Shivam kumar</p>
                <p>Dr. Ashok kumar</p>
                <p>Apr 12 ,2023</p>
                <Button color="pending">Pending</Button>
              </div>
              <div className="flex justify-around  m-2">
                <p>Shivam kumar</p>
                <p>Dr. Ashok kumar</p>
                <p>Apr 12 ,2023</p>
                <Button color="danger">Rejected</Button>
              </div>
              <div className="flex justify-around  m-2">
                <p>Shivam kumar</p>
                <p>Dr. Ashok kumar</p>
                <p>Apr 12 ,2023</p>
                <Button>Upcoming</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderDashboard;
