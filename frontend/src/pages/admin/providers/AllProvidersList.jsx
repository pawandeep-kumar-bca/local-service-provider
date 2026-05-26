import React, { useState } from "react";
import { SiFuturelearn } from "react-icons/si";
import {
  FaHourglassStart,
  FaRegCircleCheck,
  FaRegStar,
  FaStar,
  FaUserGroup,
  FaUserLock,
} from "react-icons/fa6";

import { IoStarOutline } from "react-icons/io5";

import {
  MdOutlineEdit,
  MdOutlineLock,
  MdOutlinePauseCircle,
  MdOutlineRemoveRedEye,
  MdOutlineVerifiedUser,
} from "react-icons/md";

import {
  RiDeleteBin6Line,
  RiHistoryLine,
  RiPriceTag2Line,
} from "react-icons/ri";

import StatsCard from "../../../components/common/admin/StatsCard";
import SearchFilterBar from "../../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../../components/common/admin/TableWrapper";
import UserInfo from "../../../components/common/admin/UserInfo";
import ActionDropdown from "../../../components/common/admin/ActionDropdown";
import StatusBudge from "../../../components/common/StatusBadge";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import ResetPasswordModal from "../modals/ResetPasswordModal";
import DeleteModal from "../modals/DeleteModal";
import SuspendModal from "../modals/SuspendModal";
import VerifyProviderModal from "../modals/VerifyProviderModal";
import ReviewProvider from "../modals/ReviewProvider";
import { useNavigate } from "react-router-dom";

const AllProvidersList = () => {
  // stats data
  const navigate = useNavigate();
  const statsData = [
    {
      id: 1,
      title: "Total Providers",
      value: "12,835",
      growth: "12%",
      icon: <FaUserGroup size={22} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      growthIcon: <IoMdArrowRoundUp size={20} />,
      growthColor: "text-green-500",
    },

    {
      id: 2,
      title: "Active Providers",
      value: "12,345",
      growth: "5%",
      icon: <FaRegCircleCheck size={22} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      growthIcon: <IoMdArrowRoundUp size={20} />,
      growthColor: "text-green-500",
    },

    {
      id: 3,
      title: "Blocked Providers",
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
      title: "Pending Approval",
      value: "24,400",
      growth: "10%",
      icon: <FaHourglassStart size={22} />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500",
      growthIcon: <IoMdArrowRoundUp size={20} />,
      growthColor: "text-green-500",
    },

    {
      id: 5,
      title: "Top Rated Providers",
      value: "24,400",
      growth: "10%",
      icon: <IoStarOutline size={24} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      growthIcon: <IoMdArrowRoundUp size={20} />,
      growthColor: "text-green-500",
    },
  ];

  // providers data

  const providers = [
    {
      id: 1,

      image: "https://randomuser.me/api/portraits/women/34.jpg",

      name: "John Doe",

      providerId: "#PRO0934",

      category: "plumbing",

      email: "john.doe@example.com",

      phone: "+91 99843 43243",

      status: "active",

      verification: "verified",

      rating: "4.8",

      completedJobs: 120,

      joinedDate: "May 12, 2024",
    },

    {
      id: 2,

      image: "https://randomuser.me/api/portraits/men/22.jpg",

      name: "Aman Kumar",

      providerId: "#PRO2034",

      category: "cleaning",

      email: "aman@example.com",

      phone: "+91 99843 12345",

      status: "blocked",

      verification: "pending",

      rating: "4.3",

      completedJobs: 45,

      joinedDate: "May 18, 2024",
    },
  ];
  const [resetPassword, setResetPassword] = useState(false);
  const [deleteProvider, setDeleteProvider] = useState(false);
  const [suspendProvider, setSuspendProvider] = useState(false);
  const [verifyProvider, setVerifyProvider] = useState(false);
  const [reviewProvider, setReviewProvider] = useState(false);
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
            placeholder="Search providers by name,email or phone..."
            filters={[
              {
                label: "All Category",

                options: ["Plumbing", "Cleaning"],
              },

              {
                label: "All Status",

                options: ["Active", "Pending", "Blocked"],
              },

              {
                label: "Verification",

                options: ["Verified", "Pending"],
              },
            ]}
          />

          {/* table */}

          <div className="border border-slate-300 rounded-xl">
            {/* table heading */}

            <div
              className="
    grid gap-1
   grid-cols-[1.6fr_1.2fr_1.5fr_1.2fr_1fr_1fr_1fr_1.2fr_.4fr]
    items-center
    bg-gray-50
    rounded-xl
    px-4
    py-4
    text-sm
    font-semibold
    text-gray-700
  "
            >
              <span className="text-center">Provider</span>

              <span>Service Category</span>

              <span className="text-center">Email</span>

              <span>Phone</span>

              <span>Status</span>

              <span className="text-center">Verification</span>

              <span className="text-center">Job Completed</span>

              <span className="text-center">Joined Date</span>

              <span>Action</span>
            </div>

            <div className="border-t border-gray-200 mb-2"></div>

            {/* rows */}

            <div className="space-y-2 pb-3">
              {providers.map((provider) => (
                <div
                  key={provider.id}
                  className="
    grid
   grid-cols-[1.6fr_1.2fr_1.5fr_1.2fr_1fr_1fr_1fr_1.2fr_.4fr]
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
                  {/* provider info */}

                  <UserInfo
                    image={provider.image}
                    name={provider.name}
                    id={provider.providerId}
                  />

                  {/* category */}

                  <div>
                    <StatusBudge category={provider.category} />
                  </div>

                  {/* email */}

                  <div>
                    <p className="text-sm text-muted">{provider.email}</p>
                  </div>

                  {/* phone */}

                  <div>
                    <p className="text-sm text-muted">{provider.phone}</p>
                  </div>

                  {/* status */}

                  <div>
                    <StatusBudge badge={provider.status} />
                  </div>

                  {/* verification */}

                  <div>
                    <StatusBudge badge={provider.verification} showIcon />
                  </div>

                  {/* completed jobs */}

                  <div className="text-center">
                    <p className="text-sm text-muted">
                      {provider.completedJobs}
                    </p>
                  </div>

                  {/* joined date */}

                  <div className="text-center">
                    <p className="text-sm text-muted">{provider.joinedDate}</p>
                  </div>

                  {/* action dropdown */}

                  <ActionDropdown
                    items={[
                      {
                        label: "View Profile",

                        icon: <MdOutlineRemoveRedEye size={20} />,

                        onClick: () =>
                          navigate("/admin/providers/view-provider-profile"),
                      },

                      {
                        label: "Edit Provider",

                        icon: <MdOutlineEdit size={20} />,

                        onClick: () => console.log("edit"),
                      },
                      {
                        label: "Service & Pricing",

                        icon: <RiPriceTag2Line size={20} />,

                        onClick: () => console.log("edit"),
                      },
                      {
                        label: "Job History",

                        icon: <RiHistoryLine size={20} />,

                        onClick: () => console.log("edit"),
                      },
                      {
                        label: "Earnings & Payouts",

                        icon: <SiFuturelearn size={20} />,

                        onClick: () => console.log("edit"),
                      },
                      {
                        label: "Reviews & Ratings",

                        icon: <FaRegStar size={20} />,

                        variant: "warning",

                        onClick: () => setReviewProvider(true),
                      },
                      {
                        label: "Verify Provider",

                        icon: <MdOutlineVerifiedUser size={20} />,

                        variant: "green",

                        onClick: () => setVerifyProvider(true),
                      },
                      {
                        label: "Reset Password",

                        icon: <MdOutlineLock size={20} />,

                        onClick: () => setResetPassword(true),
                      },

                      {
                        label: "Suspend Provider",

                        icon: <MdOutlinePauseCircle size={20} />,

                        variant: "warning",

                        onClick: () => setSuspendProvider(true),
                      },

                      {
                        label: "Delete Provider",

                        icon: <RiDeleteBin6Line size={20} />,

                        variant: "danger",

                        onClick: () => setDeleteProvider(true),
                      },
                    ]}
                  />
                </div>
              ))}
            </div>
          </div>
        </TableWrapper>
      </div>
      {resetPassword && (
        <ResetPasswordModal onClose={() => setResetPassword(false)} />
      )}

      {deleteProvider && (
        <DeleteModal
          close={() => setDeleteProvider(false)}
          text="Are you sure you want to delete this provider? This action cannot be undone."
          title="Provider"
          open={deleteProvider}
        />
      )}

      {suspendProvider && (
        <SuspendModal
          title="Provider"
          text="Are you sure you want to suspend this provider? Provider will not able to login or access the system."
          rightBtnText="Suspend Provider"
          close={() => setSuspendProvider(false)}
          open={suspendProvider}
          reason={[
            "Poor service quality",
            "Late arrivals",
            "Multiple booking cancellations",
            "Fake service listings",
            "Customer complaints",
            "Unprofessional behavior",
            "Fraudulent activity",
            "Violation of platform guidelines",
            "Low ratings from customers",
            "Incomplete service delivery",
            "Overcharging customers",
            "Using fake documents",
            "Inactive for long time",
            "Suspicious account activity",
            "Payment settlement issues",
            "Misbehavior with customers",
            "Safety policy violation",
            "Temporary suspension for review",
            "Permanent suspension by admin",
          ]}
        />
      )}

      {verifyProvider && (
        <VerifyProviderModal close={() => setVerifyProvider(false)} />
      )}

      {reviewProvider && (
        <ReviewProvider close={() => setReviewProvider(false)} />
      )}
    </>
  );
};

export default AllProvidersList;
