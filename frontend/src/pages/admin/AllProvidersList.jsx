import React from "react";

import {
  FaHourglassStart,
  FaRegCircleCheck,
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
} from "react-icons/md";

import { RiDeleteBin6Line } from "react-icons/ri";

import StatsCard from "../../components/common/admin/StatsCard";
import SearchFilterBar from "../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../components/common/admin/TableWrapper";
import UserInfo from "../../components/common/admin/UserInfo";
import ActionDropdown from "../../components/common/admin/ActionDropdown";
import StatusBudge from "../../components/common/StatusBadge";

const AllProvidersList = () => {

  // stats data

  const statsData = [
    {
      id: 1,
      title: "Total Providers",
      value: "12,835",
      growth: "12%",
      icon: <FaUserGroup size={22} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
    },

    {
      id: 2,
      title: "Active Providers",
      value: "12,345",
      growth: "5%",
      icon: <FaRegCircleCheck size={22} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
    },

    {
      id: 3,
      title: "Blocked Providers",
      value: "89,543",
      growth: "18%",
      icon: <FaUserLock size={22} />,
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
    },

    {
      id: 4,
      title: "Pending Approval",
      value: "24,400",
      growth: "10%",
      icon: <FaHourglassStart size={22} />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },

    {
      id: 5,
      title: "Top Rated Providers",
      value: "24,400",
      growth: "10%",
      icon: <IoStarOutline size={24} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
    },
  ];

  // providers data

  const providers = [
    {
      id: 1,

      image:
        "https://randomuser.me/api/portraits/women/34.jpg",

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

      image:
        "https://randomuser.me/api/portraits/men/22.jpg",

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

                options: [
                  "Plumbing",
                  "Cleaning",
                ],
              },

              {
                label: "All Status",

                options: [
                  "Active",
                  "Pending",
                  "Blocked",
                ],
              },

              {
                label: "Verification",

                options: [
                  "Verified",
                  "Pending",
                ],
              },
            ]}
          />

          {/* table */}

          <div className="border border-slate-300 rounded-xl overflow-hidden">

            {/* table heading */}

            <div
              className="
                grid
                grid-cols-[1.5fr_1.2fr_1.2fr_1.2fr_1fr_1fr_1fr_1fr_1fr_1fr]
                items-center
                justify-items-center
                mt-3
                text-sm
                font-bold
                text-black/80
                px-3
              "
            >

              <span>Provider</span>

              <span>Service Category</span>

              <span>Email</span>

              <span>Phone</span>

              <span>Status</span>

              <span>Verification</span>

              <span>Rating</span>

              <span>Job Completed</span>

              <span>Joined Date</span>

              <span>Action</span>

            </div>

            <div className="border-t border-gray-200 mt-3 mb-2"></div>

            {/* rows */}

            <div className="space-y-2 pb-3">

              {providers.map((provider) => (

                <div
                  key={provider.id}
                  className="
                    grid
                    grid-cols-[1.5fr_1.2fr_1.2fr_1.2fr_1fr_1fr_1fr_1fr_1fr_1fr]
                    items-center
                    justify-items-center
                    gap-3
                    px-3
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
                    <StatusBudge
                      category={provider.category}
                    />
                  </div>

                  {/* email */}

                  <div>
                    <p className="text-sm text-muted">
                      {provider.email}
                    </p>
                  </div>

                  {/* phone */}

                  <div>
                    <p className="text-sm text-muted">
                      {provider.phone}
                    </p>
                  </div>

                  {/* status */}

                  <div>
                    <StatusBudge
                      badge={provider.status}
                    />
                  </div>

                  {/* verification */}

                  <div>
                    <StatusBudge
                      badge={provider.verification}
                      showIcon
                    />
                  </div>

                  {/* rating */}

                  <div className="flex items-center gap-2">

                    <h1 className="text-lg font-bold text-black/80">
                      {provider.rating}
                    </h1>

                    <FaStar className="text-xl text-yellow-500" />

                  </div>

                  {/* completed jobs */}

                  <div>
                    <p className="text-sm text-muted">
                      {provider.completedJobs}
                    </p>
                  </div>

                  {/* joined date */}

                  <div>
                    <p className="text-sm text-muted">
                      {provider.joinedDate}
                    </p>
                  </div>

                  {/* action dropdown */}

                  <ActionDropdown
                    items={[
                      {
                        label: "View Profile",

                        icon: (
                          <MdOutlineRemoveRedEye
                            size={20}
                          />
                        ),

                        onClick: () =>
                          console.log("view"),
                      },

                      {
                        label: "Edit User",

                        icon: (
                          <MdOutlineEdit
                            size={20}
                          />
                        ),

                        variant: "primary",

                        onClick: () =>
                          console.log("edit"),
                      },

                      {
                        label:
                          "Reset Password",

                        icon: (
                          <MdOutlineLock
                            size={20}
                          />
                        ),

                        onClick: () =>
                          console.log("reset"),
                      },

                      {
                        label:
                          "Suspend User",

                        icon: (
                          <MdOutlinePauseCircle
                            size={20}
                          />
                        ),

                        variant: "warning",

                        onClick: () =>
                          console.log(
                            "suspend"
                          ),
                      },

                      {
                        label:
                          "Delete User",

                        icon: (
                          <RiDeleteBin6Line
                            size={20}
                          />
                        ),

                        variant: "danger",

                        onClick: () =>
                          console.log(
                            "delete"
                          ),
                      },
                    ]}
                  />

                </div>
              ))}
            </div>
          </div>
        </TableWrapper>
      </div>
    </>
  );
};

export default AllProvidersList;