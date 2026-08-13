import React from "react";
import Button from "../../components/common/Button";
import { FaChessKing } from "react-icons/fa";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import UserSetting from "./UserSetting";
import ChangePassword from "./ChangePassword";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";
const ProfileSettings = () => {
  const navigate = useNavigate();
  const { logoutMutation } = useAuth();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();

      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-7 md:gap-4 mb-6">
        <div className="md:w-[80%] md:border md:border-gray-200 md:shadow-[0_0_6px_rgba(0,0,0,0.1)] bg-white md:p-7 rounded-lg">
          <p className="text-muted text-sm font-semibold">
            Manage your personal information and account settings.
          </p>
          <div className="flex md:gap-6 border-b border-gray-200  mt-7 justify-center gap-10 md:text-lg text-sm font-medium">
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
          <div className="border border-gray-200 shadow-[0_0_6px_rgba(0,0,0,0.1)] bg-white py-3 px-5 rounded-lg">
            <div className="flex justify-center mt-3">
              <div className="rounded-full bg-primary flex items-center justify-center  w-[3rem] h-[3rem] ">
                <FaChessKing className="text-white text-xl" />
              </div>
            </div>
            <div className="mt-3 text-center">
              <h1 className="text-sm font-semibold text-muted">
                Become a Provider
              </h1>
              <p className="text-xs font-semibold text-muted ">
                Grow your business and earn more with Us.
              </p>
              <div className="mt-5 mb-3">
                <Button
                  fullWidth
                  color="blue"
                  type="button"
                  onClick={() => navigate("/user/become-provider/basic-info")}
                >
                  Upgrade Now <HiMiniArrowSmallRight size={20} />
                </Button>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="border border-gray-200 shadow-[0_0_6px_rgba(0,0,0,0.1)] bg-white mt-5  rounded-lg flex md:gap-1 gap-3 w-full cursor-pointer md:py-3 py-5 px-4"
            onClick={handleLogout}
          >
            <FiLogOut className="text-5xl text-danger" />
            <span>
              <h3 className="text-lg text-danger font-semibold mb-1">Logout</h3>
              <p className="text-xs font-medium text-brownness">
                Grow your business and earn more with Us.
              </p>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
