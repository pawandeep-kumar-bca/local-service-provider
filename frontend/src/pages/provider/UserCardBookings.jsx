import React, { useState } from "react";
import StatusBadge from "../../components/common/StatusBadge";
import Button from "../../components/common/Button";
import { IoMdCall, IoMdCash } from "react-icons/io";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { LuDot } from "react-icons/lu";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { PiNotePencilLight } from "react-icons/pi";
import { MdCancel, MdPayments } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa6";
import Avatar from "../../components/common/Avatar";
import { useBookingStatus } from "../../hooks/useBooking";
import ActionReasonModal from "../../components/common/models/ActionReasonModal";
import { toast } from "react-toastify";

const UserCardBookings = ({ booking }) => {
  const [rejected, setRejected] = useState(null);
  const [cancel, setCancel] = useState(null);
  const [formData, setFormData] = useState({
    reason: "",
    notes: "",
  });
  const {
    bookingAcceptedMutation,
    bookingRejectMutation,
    bookingStartMutation,
    bookingCancelMutation,
  } = useBookingStatus();
  const handleAccept = async (bookingId) => {
    await bookingAcceptedMutation.mutateAsync(bookingId);
  };
  const handlerStartBooking = async (bookingId) => {
    await bookingStartMutation.mutateAsync(bookingId, {
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    });
  };
  const providerRejectReasons = [
    "Not available at the requested time",
    "Outside my service area",
    "Unable to provide this service",
    "Personal emergency",
    "Unable to reach the service location",
    "Customer provided insufficient details",
    "Requested schedule is not feasible",
    "Equipment or tools unavailable",
    "Other",
  ];
  const providerCancelReasons = [
    "Personal emergency",
    "Medical emergency",
    "Family emergency",
    "On leave / Vacation",
    "Already booked for another job",
    "Vehicle breakdown",
    "Out of service area",
    "Required tools or equipment unavailable",
    "Unable to reach customer",
    "Customer requested reschedule",
    "Weather conditions",
    "Health issue",
    "Safety concerns",
    "Provider unavailable",
    "Other",
  ];
  const data = (bookingId) => {
    const payload = {
      reason: formData.reason,
      reasonNote: formData.notes,
      bookingId,
    };
    return payload;
  };

  const rejectHandlerSubmit = async (bookingId) => {
    await bookingRejectMutation.mutateAsync(data(bookingId), {
      onSuccess: (data) => {
        toast.success(data?.message);

        setFormData({
          reason: "",
          notes: "",
        });
        setRejected(null);
      },
    });
  };
  const cancelBookingHandler = async (bookingId) => {
    await bookingCancelMutation.mutateAsync(data(bookingId), {
      onSuccess: (data) => {
        toast.success(data?.message);
        setFormData({
          reason: "",
          notes: "",
        });
        setCancel(null);
      },
    });
  };
  return (
    <>
      <div
        className="border border-gray-200 bg-white rounded-2xl p-5
    shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300"
      >
        {/* Top */}
        <div className="flex justify-between items-start">
          <h1 className="text-lg font-bold text-success">
            #{booking.bookingId}
          </h1>

          <StatusBadge badge={booking.bookingStatus} />
        </div>
        {booking.bookingStatus === "pending" && (
          <p className="bg-red-50 text-red-500 px-2 py-1 text-xs font-semibold rounded mt-2 inline-block">
            If you are not accept your service scheduled expires in 50 min
          </p>
        )}
        {/* Divider */}
        <div className="border-t border-gray-100 my-2"></div>

        {/* Customer */}
        <div className="flex justify-between items-center gap-3">
          <div className="flex gap-3 items-center">
            {/* Profile */}
            <div className="relative">
              <div
                className="w-16 h-16 min-w-16 rounded-full 
            border-4 border-white shadow-md ring-2 ring-primary/10"
              >
                <Avatar
                  name={booking.userSnapshot?.name}
                  image={booking.userSnapshot?.profileImage?.url}
                  className="text-2xl bg-red-100 text-red-500"
                />
              </div>
              {/* Online Dot */}
              <div
                className="absolute bottom-1 right-1 w-4 h-4 rounded-full
            bg-green-500 border-2 border-white"
              />
            </div>

            {/* Customer Info */}
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-text">
                {booking.userSnapshot?.name}
              </h1>
              {/* Payment */}

              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs  flex items-center gap-1 py-1 px-2 rounded-sm border bg-gray-100 border-gray-300">
                  {booking.paymentMethod === "upi" ? (
                    <MdPayments size={16} className="text-green-600   " />
                  ) : (
                    <FaMoneyBillWave size={16} className="text-blue-500" />
                  )}{" "}
                  <span className="inline-block text-xs font-semibold">
                    {booking.paymentMethod?.toUpperCase()}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          {(booking.bookingStatus === "accepted" ||
            booking.bookingStatus === "in_progress") && (
            <div className="flex gap-2">
              {/* Call */}
              <button
                className="
      flex items-center justify-center
      w-11 h-11 rounded-xl cursor-pointer
      bg-green-50 border border-green-300 text-green-600
      hover:bg-green-100
      hover:-translate-y-0.5
      transition-all duration-300
    "
              >
                <IoMdCall size={22} />
              </button>

              {/* Chat */}
              <button
                className="
      flex items-center justify-center
      w-11 h-11 rounded-xl cursor-pointer
      bg-blue-50 border border-blue-300 text-blue-600
      hover:bg-blue-100
      hover:-translate-y-0.5
      transition-all duration-300
    "
              >
                <BiMessageRoundedDetail size={22} />
              </button>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-2"></div>

        {/* Service */}
        <div className="flex gap-3 items-center">
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl
        flex items-center justify-center shrink-0"
            style={{
              backgroundColor: booking.serviceSnapshot?.serviceBackground,
            }}
          >
            <img
              src={booking.serviceSnapshot?.serviceImage}
              alt={booking.serviceSnapshot?.categoryName}
              width={30}
              height={30}
            />
          </div>

          {/* Service Info */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold text-text">
              {booking.serviceSnapshot?.categoryName}
            </h3>

            <div className="flex items-center text-sm text-muted font-medium">
              <p>₹ {booking.pricing?.serviceCharge}</p>

              <span className="flex items-center">
                <LuDot size={20} />
                <p>{booking.durationHours} hours</p>
              </span>
            </div>

            {/* Earnings */}
            <p className="text-sm text-green-600 font-semibold mt-1">
              You Earn ₹ {booking.pricing?.providerPayout}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-2"></div>

        {/* Date & Time */}
        <div className="flex gap-2 items-center">
          <CiCalendar size={22} className="text-muted mt-0.5 shrink-0" />

          <span
            className="flex flex-wrap items-center
        text-sm md:text-base font-semibold text-gray-600"
          >
            <p>
              {new Date(booking.bookingDate).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

            <LuDot size={18} />

            <p>
              {booking.bookingSlot?.startTime} - {booking.bookingSlot?.endTime}
            </p>
          </span>
        </div>

        {/* Address */}
        <div className="flex gap-2 items-center mt-3">
          <CiLocationOn size={22} className="text-muted mt-0.5 shrink-0" />

          <div>
            <p className="text-sm md:text-base font-semibold text-gray-600">
              {booking.serviceAddressSnapshot?.landmark &&
                `${booking.serviceAddressSnapshot.landmark}, `}
              {booking.serviceAddressSnapshot?.fullAddress}
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              {booking.serviceAddressSnapshot?.village} ,
              {booking.serviceAddressSnapshot?.city} ,
              {booking.serviceAddressSnapshot?.district} ,
              {booking.serviceAddressSnapshot?.state}
            </p>

            {/* <p className="text-xs text-muted mt-1">{distance}</p> */}
          </div>
        </div>
        {booking.notes && (
          <div className="flex gap-2 items-center mt-3">
            <PiNotePencilLight
              size={22}
              className="text-muted mt-0.5 shrink-0"
            />
            <div>
              <p className="text-sm text-gray-600 font-semibold">
                Customer Note
              </p>
              <p className="text-xs text-gray-500">{booking.notes}</p>
            </div>
          </div>
        )}
        {/* Bottom Buttons */}
        <div className="flex  gap-3 mt-6">
          {booking.bookingStatus === "pending" ? (
            <>
              <Button
                fullWidth
                color="danger"
                onClick={() => setRejected(booking)}
              >
                Reject
              </Button>
              <Button fullWidth onClick={() => handleAccept(booking._id)}>
                Accept
              </Button>
            </>
          ) : booking.bookingStatus === "accepted" ? (
            <>
              <Button
                fullWidth
                color="danger"
                onClick={() => setCancel(booking)}
              >
                Cancel Booking
              </Button>
              <Button
                fullWidth
                color="blue"
                onClick={() => handlerStartBooking(booking._id)}
              >
                Start Service
              </Button>
            </>
          ) : booking.bookingStatus === "in_progress" ? (
            <Button fullWidth color="blue">
              Mark Completed
            </Button>
          ) : booking.bookingStatus === "completed" ? (
            <Button fullWidth color="gray" disabled>
              Completed ✅
            </Button>
          ) : (
            // cancelled / rejected
            <div className="text-sm text-gray-500">
              {booking.bookingStatus === "cancelled" ? (
                <>
                  <p>
                    <strong>Reason:</strong> {booking.cancelReason}
                  </p>
                  {booking.cancelNote && (
                    <p>
                      <strong>Note:</strong> {booking.cancelNote}
                    </p>
                  )}
                </>
              ) : (
                <>
                  <p>
                    <strong>Reason:</strong> {booking.rejectionReason}
                  </p>
                  {booking.rejectionNote && (
                    <p>
                      <strong>Note:</strong> {booking.rejectionNote}
                    </p>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
      {rejected && (
        <ActionReasonModal
          close={() => setRejected(null)}
          open={() => setRejected(booking)}
          value={rejected}
          formData={formData}
          setFormData={setFormData}
          Icon={<MdCancel size={30} />}
          className="text-red-500 bg-red-100"
          title="Reject Booking"
          text="Are you sure you want to reject this booking ? this action cannot be undone."
          reason={providerRejectReasons}
          size="sm"
          handlerBookingSubmit={rejectHandlerSubmit}
          rightBtnColor="danger"
          rightBtnText="Reject Booking"
        />
      )}
      {cancel && (
        <ActionReasonModal
          close={() => setCancel(null)}
          open={() => setCancel(booking)}
          formData={formData}
          value={cancel}
          setFormData={setFormData}
          Icon={<MdCancel size={30} />}
          className="text-red-500 bg-red-100"
          title="Cancel Booking"
          text="Are you sure you want to cancel this booking ? this action cannot be undone."
          reason={providerCancelReasons}
          size="sm"
          handlerBookingSubmit={cancelBookingHandler}
          rightBtnColor="danger"
          rightBtnText="Cancel Booking"
        />
      )}
    </>
  );
};

export default UserCardBookings;
