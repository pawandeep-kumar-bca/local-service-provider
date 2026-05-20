import StatusBadge from "../../components/common/StatusBadge";
import { NavLink, Outlet } from "react-router-dom";
import Button from '../../components/common/Button'
import { MdBlock, MdDeleteOutline, MdLockReset, MdOutlineEdit } from "react-icons/md";
const ViewUserProfile = () => {
    
  return (
    <div>
      <button className="flex items-center gap-2 cursor-pointer" type="button">
        <h2 className="text-3xl text-text font-bold">Back to Users</h2>
      </button>
      <div className="flex gap-3 mt-4">
        <div className="border border-gray-300 rounded-2xl flex flex-col items-center gap-1 px-5 py-6 shadow-[0_0_10px_rgba(0,0,0,0.2)] flex-[0.5]">
          <img
            src="https://randomuser.me/api/portraits/women/34.jpg"
            alt="profile"
            className="w-25 h-25 rounded-full object-cover"
          />
          <h2 className="text-xl font-bold text-text my-2">John Doe</h2>
          <p className="text-lg font-semibold text-muted">#USE2343</p>
          <div className="flex justify-center gap-4 mt-5 w-full">
            <StatusBadge badge="active" />
            <StatusBadge badge="verified" showIcon />
          </div>
        </div>
        <div className="border border-gray-300 rounded-2xl  gap-1 py-3 px-6 shadow-[0_0_10px_rgba(0,0,0,0.2)] flex-[1.5]">
          <h1 className="text-2xl font-bold text-text mt-2">User Information</h1>
          <div className="flex gap-15 mt-8">
            <div className="flex-1 flex flex-col gap-5 ">
                <div className="flex justify-between">
                    <span className="text-lg font-bold text-text">Full Name</span>
                    <span className="text-lg text-muted font-semibold">John Doe</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-lg font-bold text-text">Email</span>
                    <span className="text-lg text-muted font-semibold">John.Doe@gmail.com</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-lg font-bold text-text">Phone</span>
                    <span className="text-lg text-muted font-semibold">+91 30433 40344</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-lg font-bold text-text">Address</span>
                    <span className="text-lg text-muted font-semibold">123, Green Park ,new Delhi</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-5 ">
                <div className="flex justify-between">
                    <span className="text-lg font-bold text-text">Joined Date</span>
                    <span className="text-lg text-muted font-semibold">May 12,2024</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-lg font-bold text-text">Last Login</span>
                    <span className="text-lg text-muted font-semibold">May 30 ,2024</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-lg font-bold text-text">Total Bookings</span>
                    <span className="text-lg text-muted font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-lg font-bold text-text">Total Spent</span>
                    <span className="text-lg text-muted font-semibold">₹ 12,599</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-5">
        <div className="border border-gray-300 rounded-2xl  gap-1 py-3 px-6 shadow-[0_0_10px_rgba(0,0,0,0.2)] flex-1">
            <div className="flex justify-around">
                <NavLink
                to='/admin/users/view-user-profile'
                end
                className={({isActive})=>` text-lg transition-all cursor-pointer duration-300 font-semibold ${isActive ?'text-primary border-b-[2px] border-primary':'text-muted border-b-[2px] border-transparent hover:text-primary hover:border-b-[2px] hover:border-primary'}`}>Overview</NavLink>
                <NavLink
                to='/admin/users/view-user-profile/booking-history'
                 className={({isActive})=>` text-lg transition-all cursor-pointer duration-300 font-semibold ${isActive ?'text-primary border-b-[2px] border-primary':'text-muted border-b-[2px] border-transparent hover:text-primary hover:border-b-[2px] hover:border-primary'}`}>Booking History</NavLink>
                <NavLink
                to='/admin/users/view-user-profile/payment-history'
                 className={({isActive})=>` text-lg transition-all cursor-pointer duration-300 font-semibold ${isActive ?'text-primary border-b-[2px] border-primary':'text-muted border-b-[2px] border-transparent hover:text-primary hover:border-b-[2px] hover:border-primary'}`}>Payment History</NavLink>
                <NavLink
               to='/admin/users/view-user-profile/active-logs'
                 className={({isActive})=>` text-lg transition-all cursor-pointer duration-300 font-semibold ${isActive ?'text-primary border-b-[2px] border-primary':'text-muted border-b-[2px] border-transparent hover:text-primary hover:border-b-[2px] hover:border-primary'}`}>Active Logs</NavLink>
            </div>
            <div className="mt-4">
                <Outlet/>
            </div>
        </div>
        <div className="border border-gray-300 rounded-2xl  gap-1 pt-3 px-6 shadow-[0_0_10px_rgba(0,0,0,0.2)] flex-[.5]">
            <h1 className="text-2xl font-bold text-text">Actions</h1>
            <div className="mt-6 mb-5">
                <div className="flex gap-3 w-full">
                    <Button color="blue" fullWidth><MdOutlineEdit size={20}/>Edit User</Button>
                    <Button color="success"  fullWidth><MdLockReset size={20}/>Reset Password</Button>
                </div>
                <div className="flex mt-5 gap-3 w-full">
                    <Button color="yellow" fullWidth><MdBlock size={20}/>Suspend User</Button>
                    <Button color="danger" fullWidth><MdDeleteOutline size={20}/>Delete User</Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUserProfile;
