import React, { useState } from "react";
import StatusBadge from "../../components/common/StatusBadge";
import { NavLink, Outlet } from "react-router-dom";
import Button from '../../components/common/Button'
const ViewUserProfile = () => {
    const [link,setLink]=useState('overview')
  return (
    <div>
      <button className="flex items-center gap-2 cursor-pointer" type="button">
        <h2 className="text-2xl text-black/80 font-semibold">Back to Users</h2>
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
          <h1 className="text-2xl font-bold text-text">User Information</h1>
          <div className="flex gap-10 mt-8">
            <div className="flex-1 flex flex-col gap-4 ">
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
            <div className="flex-1 flex flex-col gap-4 ">
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
      <div className="flex gap-3 mt-4">
        <div className="border border-gray-300 rounded-2xl  gap-1 py-3 px-6 shadow-[0_0_10px_rgba(0,0,0,0.2)] flex-1">
            <div className="flex justify-around">
                <button
                onClick={()=>setLink('overview')}
                className={` text-lg transition-all cursor-pointer duration-300 font-semibold ${link === 'overview' ?'text-primary border-b-[2px] border-primary':'text-muted border-b-[2px] border-transparent hover:text-primary hover:border-b-[2px] hover:border-primary'}`}>Overview</button>
                <button
                onClick={()=>setLink('booking-history')}
                end className={` text-lg transition-all cursor-pointer duration-300 font-semibold ${link === 'booking-history' ?'text-primary border-b-[2px] border-primary':'text-muted border-b-[2px] border-transparent hover:text-primary hover:border-b-[2px] hover:border-primary'}`}>Booking History</button>
                <button
                onClick={()=>setLink('payment-history')}
                end className={` text-lg transition-all cursor-pointer duration-300 font-semibold ${link === 'payment-history' ?'text-primary border-b-[2px] border-primary':'text-muted border-b-[2px] border-transparent hover:text-primary hover:border-b-[2px] hover:border-primary'}`}>Payment History</button>
                <button
                onClick={()=>setLink('active-logs')}
                end className={` text-lg transition-all cursor-pointer duration-300 font-semibold ${link === 'active-logs' ?'text-primary border-b-[2px] border-primary':'text-muted border-b-[2px] border-transparent hover:text-primary hover:border-b-[2px] hover:border-primary'}`}>Active Logs</button>
            </div>
            
        </div>
        <div className="border border-gray-300 rounded-2xl  gap-1 pt-3 px-6 shadow-[0_0_10px_rgba(0,0,0,0.2)] flex-[.5]">
            <h1 className="text-2xl font-bold text-text">Actions</h1>
            <div className="mt-6 mb-5">
                <div className="flex gap-3 w-full">
                    <Button color="blue" fullWidth>Edit User</Button>
                    <Button color="success"  fullWidth>Reset Password</Button>
                </div>
                <div className="flex mt-5 gap-3 w-full">
                    <Button color="yellow" fullWidth>Suspend User</Button>
                    <Button color="danger" fullWidth>Delete User</Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUserProfile;
