import React, { useState } from "react";

import {
  FaArrowDown,
  FaArrowUp,
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

import StatsCard from "../../components/common/admin/StatsCard";
import SearchFilterBar from "../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../components/common/admin/TableWrapper";
import UserInfo from "../../components/common/admin/UserInfo";
import ActionDropdown from "../../components/common/admin/ActionDropdown";
import StatusBudge from "../../components/common/StatusBadge";
import Modal from "../../components/common/Modal"
import { useNavigate } from "react-router-dom";

const AllUsersList = () => {
 const navigate = useNavigate()
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
      growthIcon:<FaArrowUp size={20}/>,
      growthColor:"text-green-500",
    },

    {
      id: 2,
      title: "Active Users",
      value: "12,345",
      growth: "5%",
      icon: <FaUserShield size={22} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      growthIcon:<FaArrowUp size={20}/>,
      growthColor:"text-green-500",
    },

    {
      id: 3,
      title: "Blocked Users",
      value: "89,543",
      growth: "18%",
      icon: <FaUserLock size={22} />,
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
      growthIcon:<FaArrowDown size={20}/>,
      growthColor:"text-red-500",
    },

    {
      id: 4,
      title: "New Users",
      value: "24,400",
      growth: "10%",
      icon: <RiUserAddFill size={22} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      growthIcon:<FaArrowUp size={20}/>,
      growthColor:"text-green-500",
    },

    {
      id: 5,
      title: "Verified Users",
      value: "24,400",
      growth: "10%",
      icon: <MdVerifiedUser size={24} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      growthIcon:<FaArrowUp size={20}/>,
      growthColor:"text-green-500",
    },
  ];

  // users data

  const users = [
    {
      id: 1,
      image:
        "https://randomuser.me/api/portraits/women/34.jpg",
      name: "John Doe",
      userId: "#USR0934",
      email: "john.doe@example.com",
      phone: "+91 99843 43243",
      roleColor:
        "bg-blue-100 text-blue-500",
      status: "active",
      joinedDate: "May 12, 2024",
      bookings: 12,
    },

    {
      id: 2,
      image:
        "https://randomuser.me/api/portraits/men/22.jpg",
      name: "Aman Kumar",
      userId: "#USR2034",
      email: "aman@example.com",
      phone: "+91 99843 12345",
      roleColor:
        "bg-purple-100 text-purple-500",
      status: "blocked",
      joinedDate: "May 15, 2024",
      bookings: 5,
    },
  ];
 const [isOpen,setIsOpen]= useState(false)
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
                options: [
                  "User",
                  "Provider",
                ],
              },

              {
                label: "Status",
                options: [
                  "Active",
                  "Pending",
                  "Blocked",
                ],
              },

              {
                label: "Verified",
                options: [
                  "Verified",
                  "Not Verified",
                ],
              },
            ]}
          />
 
          {/* table */}

          <div className="border border-slate-300 rounded-xl">
 
            {/* table heading */}

            <div className="grid grid-cols-[1.2fr_1.2fr_1fr_1fr_1fr_1fr_1fr] items-center justify-items-start mt-3 font-semibold px-4">

              <span className="text-black/80 text-lg">
                User
              </span>

              <span className="text-black/80 text-lg">
                Email
              </span>

              <span className="text-black/80 text-lg">
                Phone
              </span>

             

              <span className="text-black/80 text-lg">
                Status
              </span>

              <span className="text-black/80 text-lg">
                Joined Date
              </span>

              <span className="text-black/80 text-lg">
                Bookings
              </span>

              <span className="text-black/80 text-lg">
                Action
              </span>

            </div>

            <div className="border-t border-gray-200 mt-3 mb-2"></div>

            {/* rows */}

            <div className="space-y-2 pb-3">

              {users.map((user) => (

                <div
                  key={user.id}
                  className="
                    grid
                    grid-cols-[1.2fr_1.2fr_1fr_1fr_1fr_1fr_1fr]
                    items-center
                    justify-items-start
                    gap-3
                    px-4
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
                    <p className="text-sm text-muted">
                      {user.email}
                    </p>
                  </div>

                  {/* phone */}

                  <div>
                    <p className="text-sm text-muted">
                      {user.phone}
                    </p>
                  </div>

                 
                  {/* status */}

                  <div>
                    <StatusBudge
                      badge={user.status}
                    />
                  </div>

                  {/* joined date */}

                  <div>
                    <p className="text-sm text-muted">
                      {user.joinedDate}
                    </p>
                  </div>

                  {/* bookings */}

                  <div>
                    <p className="text-sm text-muted">
                      {user.bookings}
                    </p>
                  </div>

                  {/* actions */}

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
                         navigate('/admin/users/view-user-profile')
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

                        onClick: () =>{
                          setIsOpen(true)
                        }
                         
                      },
                    ]}
                  />

                </div>
              ))}
            </div>
          </div>
        </TableWrapper>
      </div>
      {
        isOpen && <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)} title="Delete User" showFooter size="sm"
        children={<div className="flex flex-col items-center text-center">
          <div className="text-red-500 bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <RiDeleteBin6Line size={26}/>
          </div>
          <h2 className="text-xl text-red-500 font-bold mb-4">Delete User</h2>
          <p className="text-red-500 font-semibold text-sm mb-4">
        Are you sure you want delete this user? This action cannot be undone.</p>
          </div>

        } rightBtnText="Delete Permanently" rightBtnColor="danger" leftBtnColor="white"/>
        
      }
    </>
  );
};

export default AllUsersList;