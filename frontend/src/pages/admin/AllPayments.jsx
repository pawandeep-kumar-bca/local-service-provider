import React from "react";

import { CiBank } from "react-icons/ci";

import {
  FaHourglassStart,
  FaRegCircleCheck,
} from "react-icons/fa6";

import { IoWalletOutline } from "react-icons/io5";

import { AiOutlineReload } from "react-icons/ai";

import { SiPaytm } from "react-icons/si";

import {
  MdOutlineFileDownload,
  MdOutlineRemoveRedEye,
} from "react-icons/md";

import StatsCard from "../../components/common/admin/StatsCard";
import SearchFilterBar from "../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../components/common/admin/TableWrapper";
import UserInfo from "../../components/common/admin/UserInfo";
import ActionDropdown from "../../components/common/admin/ActionDropdown";

import RevenueOverview from "../../utils/providerCharts/RevenueOverview";
import UpiStatus from "../../utils/providerCharts/UpiStatus";

const AllPayments = () => {

  // stats data

  const statsData = [
    {
      id: 1,
      title: "Total Revenue",
      value: "₹ 12,835",
      growth: "12%",
      icon: <IoWalletOutline size={22} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
    },

    {
      id: 2,
      title: "Successful Payments",
      value: "12,345",
      growth: "5%",
      icon: <FaRegCircleCheck size={22} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
    },

    {
      id: 3,
      title: "Pending Payments",
      value: "89,543",
      growth: "18%",
      icon: <FaHourglassStart size={22} />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },

    {
      id: 4,
      title: "Refunds Payments",
      value: "₹ 24,400",
      growth: "10%",
      icon: <AiOutlineReload size={22} />,
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
    },

    {
      id: 5,
      title: "Provider Payouts",
      value: "₹ 24,400",
      growth: "10%",
      icon: <CiBank size={24} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
    },
  ];

  // payments data

  const payments = [
    {
      id: 1,

      transactionId: "#TXN10234",

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

      paymentMethod: "UPI",

      amount: "₹ 1,200",

      platformFee: "₹ 100",

      providerEarnings: "₹ 1,100",

      status: "Paid",

      date: "May 12, 2024",

      time: "10:30 AM",
    },

    {
      id: 2,

      transactionId: "#TXN10235",

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

      paymentMethod: "UPI",

      amount: "₹ 2,500",

      platformFee: "₹ 200",

      providerEarnings: "₹ 2,300",

      status: "Pending",

      date: "May 15, 2024",

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

        {/* charts */}

        <div className="flex gap-3 my-4">

          <div
            className="
              flex-[1.76]
              bg-white
              rounded-[28px]
              border border-slate-200
              p-5
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
            "
          >
            <RevenueOverview />
          </div>

          <div>
            <UpiStatus />
          </div>

        </div>

        {/* table wrapper */}

        <TableWrapper>

          {/* filters */}

          <SearchFilterBar
            placeholder="Search transactions..."
            filters={[
              {
                label: "Payment Status",

                options: [
                  "Paid",
                  "Pending",
                  "Refunded",
                  "Failed",
                ],
              },

              {
                label: "Payment Method",

                options: [
                  "UPI",
                  "Credit Card",
                  "Wallet",
                  "Net Banking",
                ],
              },

              {
                label:
                  "Service Categories",

                options: [
                  "Plumbing",
                  "Cleaning",
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
                grid-cols-[1fr_1fr_1.5fr_1.5fr_1.4fr_1fr_1fr_1.4fr_1fr_1.2fr_0.7fr]
                items-center
                justify-items-center
                mt-3
                text-sm
                font-bold
                text-black/80
                px-3
              "
            >

              <span>Transaction ID</span>

              <span>Booking ID</span>

              <span>Customer</span>

              <span>Provider</span>

              <span>Payment Method</span>

              <span>Amount</span>

              <span>Platform Fee</span>

              <span>Provider Earnings</span>

              <span>Status</span>

              <span>Date & Time</span>

              <span>Action</span>

            </div>

            <div className="border-t border-gray-200 mt-3 mb-2"></div>

            {/* rows */}

            <div className="space-y-2 pb-3">

              {payments.map((payment) => (

                <div
                  key={payment.id}
                  className="
                    grid
                    grid-cols-[1fr_1fr_1.5fr_1.5fr_1.4fr_1fr_1fr_1.4fr_1fr_1.2fr_0.7fr]
                    items-center
                    justify-items-center
                    gap-3
                    px-3
                  "
                >

                  {/* transaction id */}

                  <div>
                    <h1 className="text-sm font-semibold text-blue-500">
                      {payment.transactionId}
                    </h1>
                  </div>

                  {/* booking id */}

                  <div>
                    <h1 className="text-sm font-semibold text-blue-500">
                      {payment.bookingId}
                    </h1>
                  </div>

                  {/* customer */}

                  <UserInfo
                    image={payment.customer.image}
                    name={payment.customer.name}
                    id={payment.customer.id}
                  />

                  {/* provider */}

                  <UserInfo
                    image={payment.provider.image}
                    name={payment.provider.name}
                    id={payment.provider.id}
                  />

                  {/* payment method */}

                  <div className="flex items-center gap-2">

                    <SiPaytm
                      size={24}
                      className="text-blue-500"
                    />

                    <p>
                      {payment.paymentMethod}
                    </p>

                  </div>

                  {/* amount */}

                  <div>
                    <p className="text-sm font-semibold text-black/80">
                      {payment.amount}
                    </p>
                  </div>

                  {/* platform fee */}

                  <div>
                    <p className="text-sm font-semibold text-black/80">
                      {payment.platformFee}
                    </p>
                  </div>

                  {/* provider earnings */}

                  <div>
                    <p className="text-sm font-semibold text-black/80">
                      {payment.providerEarnings}
                    </p>
                  </div>

                  {/* payment status */}

                  <div>

                    <span
                      className={`
                        py-1 px-3 rounded-lg text-sm flex items-center gap-2 border

                        ${
                          payment.status === "Paid"
                            ? "text-green-500 bg-green-100 border-green-500"
                            : "text-yellow-500 bg-yellow-100 border-yellow-500"
                        }
                      `}
                    >

                      <div
                        className={`
                          w-2 h-2 rounded-full

                          ${
                            payment.status === "Paid"
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }
                        `}
                      />

                      <p>
                        {payment.status}
                      </p>

                    </span>

                  </div>

                  {/* date time */}

                  <div>

                    <h3 className="text-sm font-semibold text-black/80">
                      {payment.date}
                    </h3>

                    <p className="text-sm text-muted">
                      {payment.time}
                    </p>

                  </div>

                  {/* action dropdown */}

                  <ActionDropdown
                    items={[
                      {
                        label:
                          "View Transaction",

                        icon: (
                          <MdOutlineRemoveRedEye
                            size={20}
                          />
                        ),

                        onClick: () =>
                          console.log("view"),
                      },

                      {
                        label:
                          "Download Invoice",

                        icon: (
                          <MdOutlineFileDownload
                            size={20}
                          />
                        ),

                        variant: "primary",

                        onClick: () =>
                          console.log(
                            "download"
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

export default AllPayments;