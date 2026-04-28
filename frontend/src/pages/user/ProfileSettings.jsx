import React from "react";
import Button from "../../components/common/Button";
import { FaChessKing } from "react-icons/fa";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import UserSetting from "./UserSetting";
import ChangePassword from "./ChangePassword";
const ProfileSettings = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="md:w-[80%] shadow-[inset_0_0_3px_rgba(0,0,0,0.3)] p-4 rounded">
          <h1 className="text-xl font-semibold text-text">Profile Settings</h1>
          <p className="text-muted text-sm font-semibold">Manage your personal information and account settings.</p>
          <div className="flex gap-6 border-b  mt-4 md:justify-center gap-20 md:text-lg text-sm font-medium">
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                isActive ? "text-primary pb-3 border-b" : "text-muted"
              }
            >
              Profile Information
            </NavLink>

            <NavLink
              to="change-password"
              className={({ isActive }) =>
                isActive ? "text-primary pb-3 border-b" : "text-muted"
              }
            >
              Change Password
            </NavLink>
          </div>

          {/* ✅ Dynamic content */}
          <div className="mt-4">
            <Outlet />
          </div>
        </div>

        <div className="md:w-[20%]">
          <div className="shadow-[inset_0_0_4px_rgba(0,0,0,0.4)] p-3 rounded">
           <div className="flex justify-center mt-3">
             <div className="rounded-full bg-primary flex items-center justify-center  w-[2rem] h-[2rem] ">
              <FaChessKing className="text-white text-xl" />
            </div>
           </div>
            <div className="mt-3 text-center">
              <h1 className="text-sm font-semibold text-muted">Become a Provider</h1>
              <p className="text-xs font-semibold text-muted ">Grow your business and earn more with Us.</p>
              <div className="mt-5 mb-3">
                <Button fullWidth>
                Upgrade Now <HiMiniArrowSmallRight  size={20}/>
              </Button>
              </div>
            </div>
          </div>

          <div className="shadow-[inset_0_0_3px_rgba(0,0,0,0.3)] bg-white md:p-2 mt-3 md:mt-5 rounded flex md:gap-3 gap-4 cursor-pointer py-2 px-4">
            <FiLogOut className="text-4xl text-danger"/>
            <div>
              <h3 className="text-sm text-danger font-semibold mb-1">Logout</h3>
              <p className="text-xs font-medium text-muted">Grow your business and earn more with Us.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
