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
      <div className="flex gap-2">
        <div className="w-[80%]">
          <h1>Profile Settings</h1>
          <p>Manage your personal information and account settings.</p>
          <div className="flex gap-6 border-b pb-2">
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-muted"
              }
            >
              Profile Information
            </NavLink>

            <NavLink
              to="change-password"
              className={({ isActive }) =>
                isActive ? "text-primary font-medium" : "text-muted"
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

        <div className="w-[20%]">
          <div className="shadow-[inset_0_0_4px_rgba(0,0,0,0.4)] p-1">
            <div className="rounded-full bg-primary flex items-center justify-center  w-[3rem] h-[3rem]">
              <FaChessKing className="text-white text-2xl" />
            </div>
            <div>
              <h1>Become a Provider</h1>
              <p>Grow your business and earn more with Us.</p>
              <Button color="blue">
                Upgrade Now <HiMiniArrowSmallRight className="text-xl " />
              </Button>
            </div>
          </div>

          <Button color="blue">
            <FiLogOut />
            <div>
              <h3>Logout</h3>
              <p>Grow your business and earn more with Us.</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
