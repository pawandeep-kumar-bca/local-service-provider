import React from "react";

import { FiBook } from "react-icons/fi";

import { SiCashapp } from "react-icons/si";

import {
  FaHourglassStart,
  FaRegCircleCheck,
} from "react-icons/fa6";

import { IoIosCloseCircleOutline } from "react-icons/io";

import {
  MdOutlineEdit,
  MdOutlineLock,
  MdOutlinePauseCircle,
  MdOutlinePlumbing,
  MdOutlineRemoveRedEye,
} from "react-icons/md";

import { RiDeleteBin6Line } from "react-icons/ri";

import StatsCard from "../../../components/common/admin/StatsCard";
import SearchFilterBar from "../../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../../components/common/admin/TableWrapper";
import UserInfo from "../../../components/common/admin/UserInfo";
import ActionDropdown from "../../../components/common/admin/ActionDropdown";
import StatusBudge from "../../../components/common/StatusBadge";
import { useNavigate } from "react-router-dom";

const AllBookingsList = () => {
   const navigate = useNavigate()
  // stats data

  const statsData = [
    {
      id: 1,
      title: "Total Bookings",
      value: "12,835",
      growth: "12%",
      icon: <FiBook size={22} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
    },

    {
      id: 2,
      title: "Completed Bookings",
      value: "12,345",
      growth: "5%",
      icon: <FaRegCircleCheck size={22} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
    },

    {
      id: 3,
      title: "Cancelled Bookings",
      value: "89,543",
      growth: "18%",
      icon: (
        <IoIosCloseCircleOutline size={22} />
      ),
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
    },

    {
      id: 4,
      title: "Pending Bookings",
      value: "24,400",
      growth: "10%",
      icon: <FaHourglassStart size={22} />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },

    {
      id: 5,
      title: "Total Revenue",
      value: "24,400",
      growth: "10%",
      icon: <SiCashapp size={24} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
    },
  ];

  // bookings data

  const bookings = [
    {
      id: 1,

      bookingId: "#BK10234",

      customer: {
        image:
          "https://randomuser.me/api/portraits/women/34.jpg",

        name: "John Doe",

        id: "#USR0934",
      },

      provider: {
        image:
          "https://randomuser.me/api/portraits/men/22.jpg",

        name: "Aman Doe",

        id: "#PRO0934",
      },

      service: "Plumbing",

      amount: "₹ 1,200",

      payment: "Paid",

      status: "completed",

      date: "May 12, 2024",

      time: "10:30 AM",
    },

    {
      id: 2,

      bookingId: "#BK10235",

      customer: {
        image:
          "https://randomuser.me/api/portraits/women/40.jpg",

        name: "Priya Sharma",

        id: "#USR2034",
      },

      provider: {
        image:
          "https://randomuser.me/api/portraits/men/30.jpg",

        name: "Rahul Kumar",

        id: "#PRO2034",
      },

      service: "Cleaning",

      amount: "₹ 2,500",

      payment: "Pending",

      status: "pending",

      date: "May 14, 2024",

      time: "2:45 PM",
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
            placeholder="Search by booking Id , provider , user or services..."
            filters={[
              {
                label:
                  "Booking Status",

                options: [
                  "Pending",
                  "Completed",
                  "Canceled",
                ],
              },

              {
                label:
                  "Payment Status",

                options: [
                  "Paid",
                  "Pending",
                  "Failed",
                ],
              },
            ]}
          />

          {/* table */}

          <div className="border border-slate-300 rounded-xl">

            {/* table heading */}

            <div
              className="
                grid
                grid-cols-[1fr_1.5fr_1.5fr_1.5fr_1fr_1fr_1fr_1fr_1fr]
                items-center
                justify-items-center
                mt-3
                text-sm
                font-bold
                text-black/80
                px-3
              "
            >

              <span>Booking ID</span>

              <span>Customer</span>

              <span>Provider</span>

              <span>Service</span>

              <span>Date & Time</span>

              <span>Amount</span>

              <span>Payment</span>

              <span>Status</span>

              <span>Action</span>

            </div>

            <div className="border-t border-gray-200 mt-3 mb-2"></div>

            {/* rows */}

            <div className="space-y-2 pb-3">

              {bookings.map((booking) => (

                <div
                  key={booking.id}
                  className="
                    grid
                    grid-cols-[1fr_1.5fr_1.5fr_1.5fr_1fr_1fr_1fr_1fr_1fr]
                    items-center
                    justify-items-center
                    gap-3
                    px-3
                  "
                >

                  {/* booking id */}

                  <div>

                    <h1 className="text-sm font-semibold text-blue-500">
                      {booking.bookingId}
                    </h1>

                  </div>

                  {/* customer */}

                  <UserInfo
                    image={booking.customer.image}
                    name={booking.customer.name}
                    id={booking.customer.id}
                  />

                  {/* provider */}

                  <UserInfo
                    image={booking.provider.image}
                    name={booking.provider.name}
                    id={booking.provider.id}
                  />

                  {/* service */}

                  <div className="flex items-center gap-2">

                    <div
                      className="
                        w-10 h-10 min-w-10
                        rounded-lg
                        bg-blue-100
                        flex items-center justify-center
                        text-blue-500
                      "
                    >

                      <MdOutlinePlumbing
                        size={24}
                      />

                    </div>

                    <div>

                      <h1 className="text-sm font-bold text-black/90">
                        {booking.service}
                      </h1>

                      <p className="text-sm text-muted">
                        {booking.service}
                      </p>

                    </div>

                  </div>

                  {/* date */}

                  <div>

                    <h3 className="text-sm font-semibold text-black/80">
                      {booking.date}
                    </h3>

                    <p className="text-sm text-muted">
                      {booking.time}
                    </p>

                  </div>

                  {/* amount */}

                  <div>

                    <p className="text-sm font-semibold text-black/80">
                      {booking.amount}
                    </p>

                  </div>

                  {/* payment */}

                  <div>

                    <span
                      className={`
                        py-1 px-3 rounded-lg text-sm border

                        ${
                          booking.payment ===
                          "Paid"
                            ? "text-green-500 bg-green-100 border-green-500"
                            : "text-yellow-500 bg-yellow-100 border-yellow-500"
                        }
                      `}
                    >
                      {booking.payment}
                    </span>

                  </div>

                  {/* booking status */}

                  <div>

                    <StatusBudge
                      badge={booking.status}
                    />

                  </div>

                  {/* action dropdown */}

                  <ActionDropdown
                    items={[
                      {
                        label:
                          "View Booking",

                        icon: (
                          <MdOutlineRemoveRedEye
                            size={20}
                          />
                        ),

                        onClick: () =>
                          navigate('/admin/bookings/booking-details')
                      },

                      {
                        label:
                          "Edit Booking",

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
                          "Delete Booking",

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

export default AllBookingsList;