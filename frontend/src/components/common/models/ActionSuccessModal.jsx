import React from "react";
import { MdClose } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { RiBillLine } from "react-icons/ri";
import Button from "../Button";
import StatusBadge from "../StatusBadge";
import Avatar from "../Avatar";

const ActionSuccessModal = ({
  open,
  close,
  Icon,
  booking,
  title,
  highlightText,
  description,
  leftButtonText,
  rightButtonText,
  leftButtonColor = "blue",
  rightButtonColor = "success",
  onLeftClick,
  onRightClick,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative h-full w-full overflow-y-auto bg-white px-5 py-7 md:h-auto md:max-w-md md:rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-100"
        >
          <MdClose className="text-2xl text-gray-600" />
        </button>

        {/* Heading */}

        {/* Animated Icon */}
        {Icon}

        {/* Message */}
        <div className="mt-6 text-center">
          <h2 className="mb-2 text-xl font-bold">
            {title}{" "}
            <span className="text-2xl text-green-600">{highlightText}</span>
          </h2>

          <p className="mx-auto w-[80%] text-muted">{description}</p>
        </div>

        {/* Booking Card */}
        {booking && (
          <div className="my-5 rounded-xl border border-muted bg-white p-3 shadow">
            <div className="flex items-center">
              <div className="h-16 w-16">
                <Avatar
                  image={booking?.providerSnapshot?.profileImage?.url}
                  name={booking?.providerSnapshot?.name}
                />
              </div>

              <div className="ml-3 flex w-full items-center justify-between">
                <div>
                  <h3 className="font-semibold">
                    {booking?.providerSnapshot?.name}
                  </h3>

                  <p className="text-sm text-muted">
                    {booking?.serviceSnapshot?.categoryName}
                  </p>
                </div>

                <StatusBadge badge={booking?.bookingStatus} />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <CiCalendarDate className="text-orange-500" size={20} />
                  Date
                </div>

                <p className="font-semibold">
                  {new Date(booking?.bookingDate).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <IoMdTime className="text-cyan-500" size={20} />
                  Time
                </div>

                <p className="font-semibold">
                  {booking?.bookingSlot?.startTime} -{" "}
                  {booking?.bookingSlot?.endTime}
                </p>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <RiBillLine className="text-green-600" size={20} />
                  Booking ID
                </div>

                <p className="font-semibold">#{booking?.bookingId}</p>
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-4 md:flex-row">
          <Button
            color={leftButtonColor}
            fullWidth
            type="button"
            onClick={onLeftClick}
          >
            {leftButtonText}
          </Button>

          <Button color={rightButtonColor} fullWidth onClick={onRightClick}>
            {rightButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActionSuccessModal;
