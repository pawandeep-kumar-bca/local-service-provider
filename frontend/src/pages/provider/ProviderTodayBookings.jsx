import React from "react";

import { IoMdCall } from "react-icons/io";
import { BiMessageRoundedDetail } from "react-icons/bi";

import Button from "../../components/common/Button";
import StatusBadge from "../../components/common/StatusBadge";
import { useProviderTodayBookings } from "../../hooks/useProvider";
import Avatar from "../../components/common/Avatar";
import { LuCalendarX2 } from "react-icons/lu";

const ProviderTodayBookings = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useProviderTodayBookings();

  const todayBookings =
    data?.pages?.flatMap((page) => page?.todayBookings || []) || [];

  const formatTime = (time) => {
    if (!time) return "";

    return new Date(time)
      .toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .toUpperCase();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <p className="text-muted">Loading today's bookings...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold text-muted">
          Today's Bookings
        </h1>
      </div>

      {/* Bookings */}
      {todayBookings.length > 0 ? (
        <>
          <div className="space-y-4">
            {todayBookings.map((booking) => (
              <div key={booking?._id}>
                {/* Booking Card */}
                <div
                  className="
                    flex flex-col lg:flex-row
                    lg:items-center
                    justify-between
                    gap-4
                    relative
                    bg-white
                    border border-slate-200
                    rounded-2xl
                    p-4
                  "
                >
                  {/* Left Section */}
                  <div className="flex items-center gap-3">
                    {/* Profile */}
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 min-w-14 rounded-full">
                        <Avatar
                          image={booking?.userSnapshot?.profileImage?.url}
                          name={booking?.userSnapshot?.name}
                          className="bg-gray-300 text-black"
                        />
                      </div>

                      {/* Online Dot */}
                      <div
                        className="
                          absolute bottom-0 right-1
                          w-4 h-4 rounded-full
                          bg-green-500
                          border-2 border-white
                        "
                      />
                    </div>

                    {/* Customer Info */}
                    <div>
                      <h1 className="text-base font-semibold text-text">
                        {booking?.userSnapshot?.name}
                      </h1>

                      <h2 className="text-xs font-semibold text-blue-500 mt-0.5">
                        {formatTime(booking?.bookingSlot?.startTime)} -{" "}
                        {formatTime(booking?.bookingSlot?.endTime)}
                      </h2>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex items-center justify-between lg:gap-6">
                    {/* Service Info */}
                    <div className="flex flex-col">
                      <h3 className="text-base font-semibold text-text">
                        {booking?.serviceSnapshot?.categoryName}
                      </h3>

                      <p className="text-sm font-medium text-muted">
                        {booking?.serviceAddressSnapshot?.fullAddress},{" "}
                        {booking?.serviceAddressSnapshot?.city}
                      </p>
                    </div>

                    {/* Status */}
                    <div className="hidden lg:flex">
                      <StatusBadge badge={booking?.bookingStatus} />
                    </div>

                    {/* Action Buttons */}
                    {(booking?.bookingStatus === "accepted" ||
                      booking?.bookingStatus === "in_progress") && (
                        <div className="flex gap-2">
                          {/* Call */}
                          <button
                            className="
                            flex items-center justify-center
                            w-10 h-10 md:w-11 md:h-11
                            rounded-xl
                            cursor-pointer
                            bg-green-50
                            border border-green-300
                            text-green-600
                            hover:bg-green-100
                            hover:-translate-y-0.5
                            transition-all duration-300
                          "
                          >
                            <IoMdCall size={20} />
                          </button>

                          {/* Chat */}
                          <button
                            className="
                            flex items-center justify-center
                            w-10 h-10 md:w-11 md:h-11
                            rounded-xl
                            cursor-pointer
                            bg-blue-50
                            border border-blue-300
                            text-blue-600
                            hover:bg-blue-100
                            hover:-translate-y-0.5
                            transition-all duration-300
                          "
                          >
                            <BiMessageRoundedDetail size={20} />
                          </button>
                        </div>
                      )}
                  </div>

                  {/* Mobile Status */}
                  <div className="absolute top-4 right-4 lg:hidden">
                    <StatusBadge badge={booking?.bookingStatus} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasNextPage && (
            <div className="mt-5">
              <Button
                fullWidth
                color="white"
                className="text-green-500"
                onClick={fetchNextPage}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage
                  ? "Loading..."
                  : "View All Booking"}
              </Button>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="bg-white border border-slate-200 rounded-2xl py-12 px-4 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 mb-4">
              <LuCalendarX2 size={30} className="text-slate-400" />
            </div>

            <h3 className="text-base font-semibold text-text">
              No Bookings Today
            </h3>

            <p className="text-sm text-muted mt-1 max-w-sm">
              You don't have any bookings scheduled for today.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderTodayBookings;