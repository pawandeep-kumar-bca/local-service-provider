import React from "react";

import { FaHourglassStart } from "react-icons/fa6";

import {
  MdOutlineRemoveRedEye,
  MdOutlineReportGmailerrorred,
  MdOutlineTaskAlt,
  MdPriorityHigh,
} from "react-icons/md";

import { RiAlarmWarningLine } from "react-icons/ri";

import StatsCard from "../../../components/common/admin/StatsCard";
import SearchFilterBar from "../../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../../components/common/admin/TableWrapper";
import UserInfo from "../../../components/common/admin/UserInfo";
import ActionDropdown from "../../../components/common/admin/ActionDropdown";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

const AllReports = () => {

  // stats data

  const statsData = [
    {
      id: 1,
      title: "Total Reports",
      value: "1,235",
      growth: "12%",
      icon: (
        <MdOutlineReportGmailerrorred
          size={24}
        />
      ),
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      growthIcon: <IoMdArrowRoundUp size={20} />,
            growthColor: "text-green-500",
    },

    {
      id: 2,
      title: "Pending Review",
      value: "345",
      growth: "5%",
      icon: <FaHourglassStart size={24} />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500",
      growthIcon: <IoMdArrowRoundDown size={20} />,
            growthColor: "text-yellow-500",
    },

    {
      id: 3,
      title: "Resolved Cases",
      value: "543",
      growth: "18%",
      icon: (
        <MdOutlineTaskAlt size={24} />
      ),
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      growthIcon: <IoMdArrowRoundUp size={20} />,
            growthColor: "text-green-500",
    },

    {
      id: 4,
      title: "High Priority",
      value: "78",
      growth: "10%",
      icon: <MdPriorityHigh size={24} />,
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
      growthIcon: <IoMdArrowRoundUp size={20} />,
            growthColor: "text-green-500",
    },
  ];

  // reports data

  const reports = [
    {
      id: 1,

      reportId: "#REP10234",

      reportBy: {
        image:
          "https://randomuser.me/api/portraits/women/34.jpg",

        name: "John Doe",

        id: "#USR0934",
      },

      against: {
        image:
          "https://randomuser.me/api/portraits/men/22.jpg",

        name: "Aman Doe",

        id: "#PRO0934",
      },

      bookingId: "#BK10234",

      reportType: "Fraud",

      priority: "High",

      status: "Under Review",

      date: "May 12, 2024",

      time: "10:30 AM",
    },

    {
      id: 2,

      reportId: "#REP10235",

      reportBy: {
        image:
          "https://randomuser.me/api/portraits/women/40.jpg",

        name: "Priya Sharma",

        id: "#USR2034",
      },

      against: {
        image:
          "https://randomuser.me/api/portraits/men/30.jpg",

        name: "Rahul Kumar",

        id: "#PRO2034",
      },

      bookingId: "#BK10235",

      reportType: "Payment Issue",

      priority: "Medium",

      status: "Resolved",

      date: "May 15, 2024",

      time: "2:45 PM",
    },
  ];

  return (
    <>
      <div>

        {/* stats cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 mt-4 mb-6">

          {statsData.map((item) => (

            <StatsCard
              key={item.id}
              title={item.title}
              value={item.value}
              growth={item.growth}
              icon={item.icon}
              iconBg={item.iconBg}
              iconColor={item.iconColor}
              growthColor={item.growthColor}
              growthIcon={item.growthIcon}
            />
          ))}
        </div>

        {/* table wrapper */}

        <TableWrapper>

          {/* filters */}

          <SearchFilterBar
            placeholder="Search by report ID, user or provider..."
            filters={[
              {
                label:
                  "Report Status",

                options: [
                  "Under Review",
                  "Pending",
                  "Escalated",
                  "Resolved",
                  "Rejected",
                ],
              },

              {
                label:
                  "Report Type",

                options: [
                  "Misbehavior",
                  "No Show",
                  "Payment Issue",
                  "Fraud",
                  "Poor Service",
                ],
              },

              {
                label: "Priority",

                options: [
                  "High",
                  "Medium",
                  "Low",
                ],
              },
            ]}
          />

          {/* table */}

          <div className="border border-slate-300 rounded-xl">

            {/* heading */}

            <div
              className="
                grid
                grid-cols-[1fr_1.5fr_1.5fr_1.1fr_1fr_1fr_1.2fr_0.5fr]
                items-center
                mt-3
                text-sm
                font-bold
                text-black/80
                px-3
              "
            >

              <span>Report ID</span>

              <span className="pl-8">Report By</span>

              <span className="pl-8">Against</span>

              <span>Report Type</span>

              <span className="text-center">Priority</span>

              <span className="text-center">Status</span>

              <span className="text-center">Date & Time</span>

              <span>Action</span>

            </div>

            <div className="border-t border-gray-200 mt-3 mb-2"></div>

            {/* rows */}

            <div className="space-y-2 pb-3">

              {reports.map((report) => (

                <div
                  key={report.id}
                  className="
                    grid
                    grid-cols-[1fr_1.5fr_1.5fr_1.1fr_1fr_1fr_1.2fr_0.5fr]
                    items-center
                    px-3
                  "
                >

                  {/* report id */}

                  <div>

                    <h1 className="text-sm font-semibold text-blue-500">
                      {report.reportId}
                    </h1>

                  </div>

                  {/* report by */}

                  <UserInfo
                    image={
                      report.reportBy.image
                    }
                    name={
                      report.reportBy.name
                    }
                    id={
                      report.reportBy.id
                    }
                  />

                  {/* against */}

                  <UserInfo
                    image={
                      report.against.image
                    }
                    name={
                      report.against.name
                    }
                    id={
                      report.against.id
                    }
                  />

                  {/* report type */}

                  <div className="flex items-center gap-2">

                    <div
                      className="
                        w-10 h-10 rounded-full
                        bg-red-100
                        text-red-500
                        flex items-center justify-center
                      "
                    >

                      <RiAlarmWarningLine
                        size={20}
                      />

                    </div>

                    <p className="text-sm text-muted">
                      {report.reportType}
                    </p>

                  </div>

                  {/* priority */}

                  <div className="flex items-center justify-center">

                    <span
                      className={`
                        text-sm rounded-md border py-1 px-3 font-semibold

                        ${
                          report.priority ===
                          "High"
                            ? "text-red-500 bg-red-100 border-red-300"
                            : report.priority ===
                              "Medium"
                            ? "text-yellow-500 bg-yellow-100 border-yellow-300"
                            : "text-green-500 bg-green-100 border-green-300"
                        }
                      `}
                    >
                      {report.priority}
                    </span>

                  </div>

                  {/* status */}

                  <div className="flex items-center justify-center">

                    <span
                      className={`
                        text-sm rounded-md border py-1 px-3 font-semibold

                        ${
                          report.status ===
                          "Resolved"
                            ? "text-green-500 bg-green-100 border-green-300"
                            : "text-yellow-500 bg-yellow-100 border-yellow-300"
                        }
                      `}
                    >
                      {report.status}
                    </span>

                  </div>

                  {/* date */}

                  <div className="text-center">

                    <h3 className="text-sm font-semibold text-black/80">
                      {report.date}
                    </h3>

                    <p className="text-sm text-muted">
                      {report.time}
                    </p>

                  </div>

                  {/* action dropdown */}

                  <ActionDropdown
                    items={[
                      {
                        label:
                          "View Report",

                        icon: (
                          <MdOutlineRemoveRedEye
                            size={20}
                          />
                        ),

                        onClick: () =>
                          console.log("view"),
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

export default AllReports;