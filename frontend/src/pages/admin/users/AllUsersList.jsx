import React, { useState } from "react";

import {
  
  FaUser,
  FaUserLock,
  FaUserShield,
} from "react-icons/fa6";

import { RiDeleteBin6Line, RiUserAddFill } from "react-icons/ri";

import {
  MdOutlineEdit,
  MdOutlineLock,
  MdOutlinePauseCircle,
  MdOutlineRemoveRedEye,
  MdVerifiedUser,
} from "react-icons/md";

import StatsCard from "../../../components/common/admin/StatsCard";
import SearchFilterBar from "../../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../../components/common/admin/TableWrapper";
import UserInfo from "../../../components/common/admin/UserInfo";
import ActionDropdown from "../../../components/common/admin/ActionDropdown";
import StatusBudge from "../../../components/common/StatusBadge";

import { useNavigate } from "react-router-dom";
import { IoIosWarning, IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
import DeleteModal from "../modals/DeleteModal";
import SuspendModal from "../modals/SuspendModal";
import ResetPasswordModal from "../modals/ResetPasswordModal";
import { FiBook } from "react-icons/fi";
import { BsCash } from "react-icons/bs";

const AllUsersList = () => {
  const navigate = useNavigate();
  // stats data

  const statsData = [
    {
      id: 1,
      title: "Total Users",
      value: "12,835",
      growth: "12%",
      icon: <FaUser size={22} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      growthIcon: <IoMdArrowRoundUp size={20} />,
      growthColor: "text-green-500",
    },

    {
      id: 2,
      title: "Active Users",
      value: "12,345",
      growth: "5%",
      icon: <FaUserShield size={22} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      growthIcon: <IoMdArrowRoundUp size={20} />,
      growthColor: "text-green-500",
    },

    {
      id: 3,
      title: "Blocked Users",
      value: "89,543",
      growth: "18%",
      icon: <FaUserLock size={22} />,
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
      growthIcon: <IoMdArrowRoundDown size={20} />,
      growthColor: "text-red-500",
    },

    {
      id: 4,
      title: "New Users",
      value: "24,400",
      growth: "10%",
      icon: <RiUserAddFill size={22} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      growthIcon: <IoMdArrowRoundUp size={20} />,
      growthColor: "text-green-500",
    },

    {
      id: 5,
      title: "Verified Users",
      value: "24,400",
      growth: "10%",
      icon: <MdVerifiedUser size={24} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      growthIcon: <IoMdArrowRoundUp size={20} />,
      growthColor: "text-green-500",
    },
  ];

  // users data

  const users = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/women/34.jpg",
      name: "John Doe",
      userId: "#USR0934",
      email: "john.doe@example.com",
      phone: "+91 99843 43243",
      roleColor: "bg-blue-100 text-blue-500",
      status: "active",
      joinedDate: "May 12, 2024",
      bookings: 12,
    },

    {
      id: 2,
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      name: "Aman Kumar",
      userId: "#USR2034",
      email: "aman@example.com",
      phone: "+91 99843 12345",
      roleColor: "bg-purple-100 text-purple-500",
      status: "blocked",
      joinedDate: "May 15, 2024",
      bookings: 5,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isSuspend, setIsSuspend] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  return (
    <>
      <div>
        {/* stats cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-2 mt-4 mb-6">
          {statsData.map((item) => (
            <StatsCard
              key={item.id}
              title={item.title}
              value={item.value}
              growth={item.growth}
              icon={item.icon}
              iconBg={item.iconBg}
              iconColor={item.iconColor}
              growthIcon={item.growthIcon}
              growthColor={item.growthColor}
            />
          ))}
        </div>

        {/* table wrapper */}

        <TableWrapper>
          {/* filters */}

          <SearchFilterBar
            placeholder="Search users by name,email or phone..."
            filters={[
              {
                label: "Role",
                options: ["User", "Provider"],
              },

              {
                label: "Status",
                options: ["Active", "Pending", "Blocked"],
              },

              {
                label: "Verified",
                options: ["Verified", "Not Verified"],
              },
            ]}
          />

          {/* table */}

          <div className="border border-slate-300 rounded-xl">
            {/* table heading */}

           
              <div
              className="
    grid
    grid-cols-[1.2fr_1.2fr_1fr_1fr_1fr_0.7fr_0.4fr]
    items-center
    bg-gray-50
    rounded-xl
    px-4
    py-4
    text-sm
    font-semibold
    text-gray-700
  ">
              <span className="text-black/80 text-lg">User</span>

              <span className="text-black/80 text-lg">Email</span>

              <span className="text-black/80 text-lg">Phone</span>

              <span className="text-black/80 text-lg">Status</span>

              <span className="text-black/80 text-lg">Joined Date</span>

              <span className="text-black/80 text-lg">Bookings</span>

              <span className="text-black/80 text-lg">Action</span>
            </div>

            <div className="border-t border-gray-200  mb-2"></div>

            {/* rows */}

            <div className="space-y-2 pb-3">
              {users.map((user) => (
                 <div
                  className="
    min-w-[1200px]
    grid
    grid-cols-[1.2fr_1.2fr_1fr_1fr_1fr_0.7fr_0.4fr]
    items-center
    px-4
    py-4
    rounded-2xl
    border border-transparent
    hover:border-gray-200
    hover:bg-gray-50
    hover:shadow-sm
    transition-all duration-200
  "
                >
                  {/* user info */}

                  <UserInfo
                    image={user.image}
                    name={user.name}
                    id={user.userId}
                  />

                  {/* email */}

                  <div>
                    <p className="text-sm text-muted">{user.email}</p>
                  </div>

                  {/* phone */}

                  <div>
                    <p className="text-sm text-muted">{user.phone}</p>
                  </div>

                  {/* status */}

                  <div>
                    <StatusBudge badge={user.status} />
                  </div>

                  {/* joined date */}

                  <div>
                    <p className="text-sm text-muted">{user.joinedDate}</p>
                  </div>

                  {/* bookings */}

                  <div>
                    <p className="text-sm text-muted">{user.bookings}</p>
                  </div>

                  {/* actions */}

                  <ActionDropdown
                    items={[
                      {
                        label: "View Profile",
                        icon: <MdOutlineRemoveRedEye size={20} />,

                        onClick: () =>
                          navigate("/admin/users/view-user-profile"),
                      },
                      {
                        label: "Booking History",
                        icon: <FiBook size={20} />,
                        variant: "green",

                        onClick: () => navigate("/admin/users/booking-history"),
                      },

                      {
                        label: "Payment History",
                        icon: <BsCash size={20} />,

                        onClick: () => navigate("/admin/users/payment-history"),
                      },

                      {
                        label: "Edit User",

                        icon: <MdOutlineEdit size={20} />,

                        variant: "primary",

                        onClick: () => navigate("/admin/users/edit-user"),
                      },

                      {
                        label: "Reset Password",

                        icon: <MdOutlineLock size={20} />,

                        onClick: () => setIsResetPassword(true),
                      },

                      {
                        label: "Suspend User",

                        icon: <MdOutlinePauseCircle size={20} />,

                        variant: "warning",

                        onClick: () => setIsSuspend(true),
                      },

                      {
                        label: "Delete User",

                        icon: <RiDeleteBin6Line size={20} />,

                        variant: "danger",

                        onClick: () => {
                          setIsOpen(true);
                        },
                      },
                    ]}
                  />
                </div>
              ))}
            </div>
          </div>
        </TableWrapper>
      </div>
      {isOpen && isOpen && (
        <DeleteModal
          open={isOpen}
          close={() => setIsOpen(false)}
          text=" Are you sure you want delete this user? This action cannot be undone."
          title="User"
        />
      )}
      {isSuspend && (
        <SuspendModal
          open={isSuspend}
          close={() => setIsSuspend(false)}
          title="Suspend User"
          text="Are you sure you want suspend this user? User will not be able to login or access the system." title='User' reason={[
            "Spam activity",
            "Fake account detected",
            "Multiple policy violations",
            "Abusive behavior",
            "Fraudulent transactions",
            "Suspicious login activity",
            "Posting inappropriate content",
            "Harassment or bullying",
            "Using fake information",
            "Chargeback or payment fraud",
            "Violation of platform rules",
            "Too many failed login attempts",
            "Account reported by multiple users",
            "Scam or misleading activity",
            "Unauthorized access attempt",
            "Temporary suspension for investigation",
            "Permanent suspension by admin",
          ]} rightBtnText='Suspend User'
        />
      )}
      {isResetPassword && (
        <ResetPasswordModal
          onClick={isResetPassword}
          onClose={() => setIsResetPassword(false)}
        />
      )}
    </>
  );
};

export default AllUsersList;
