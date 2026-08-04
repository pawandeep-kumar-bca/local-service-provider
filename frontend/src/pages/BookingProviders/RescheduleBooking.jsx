import React, { useState } from "react";
import { RiBillLine, RiErrorWarningLine } from "react-icons/ri";
import StatusBadge from "../../components/common/StatusBadge";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { CiCalendar, CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { FaCalendarCheck, FaRegCalendarCheck } from "react-icons/fa";
import ConfirmReschedule from "./ConfirmReschedule";
import { useNavigate, useParams } from "react-router-dom";
import {
  useRescheduleBooking,
  useUserOneBookingDetails,
} from "../../hooks/useBooking";
import Avatar from "../../components/common/Avatar";
import CustomDatePicker from "../../components/common/CustomDatePicker";
import SlotTime from "../../components/common/SlotTime";

const RescheduleBooking = () => {
  const [open, setOpen] = useState(null);
  const { bookingId } = useParams();
  const navigate = useNavigate()
  const { rescheduleBookingMutation } = useRescheduleBooking();
  const { data } = useUserOneBookingDetails(bookingId);

  const booking = data?.booking;

  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    notes: "",
  });

  const submitRescheduleBooking = async (e) => {
    e.preventDefault();
    const payload = {
      bookingId,
      bookingDate: formData.date,
      startTime: formData.startTime,
      endTime: formData.endTime,
      RescheduleNotes: formData.notes,
    };
    await rescheduleBookingMutation.mutateAsync(payload, {
      onSuccess: (data) => {
        setOpen(data);
      },
    });
  };

  return (
    <>
      <div className="md:shadow-[inset_0_0_4px_rgba(0,0,0,0.56)] md:p-4 rounded-xl">
        <div>
          <h1 className="text-2xl font-semibold">Reschedule Booking</h1>
          <p className="text-sm text-muted">
            Change your booking date and time
          </p>
        </div>
        <div className="flex items-center gap-2 border border-green-500 p-3 rounded-lg bg-green-50 my-4">
          <RiErrorWarningLine size={20} className="text-green-500" />
          <p className="text-green-500 text-sm">
            You are rescheduling an existing booking. Only date and time can be
            changed.
          </p>
        </div>
        <div>
          <div>
            <h1 className="text-xl font-semibold flex gap-2 items-center my-5">
              <FaRegCalendarCheck size={24} className="text-green-500" />
              Current Booking{" "}
              <span className="text-sm text-muted">(Will be changed)</span>
            </h1>
            <div className="bg-white shadow-[0_0_20px_rgba(255,255,255,0.9),0_8px_25px_rgba(0,0,0,0.12)] rounded-lg md:px-3 p-3 md:py-2 my-4 border border-muted md:flex md:justify-between md:gap-4">
              <div className="flex items-center gap-2 md:flex-1">
                <div className="w-14 h-14 flex-shrink-0">
                  <Avatar
                    image={booking?.providerSnapshot?.profileImage?.url}
                    name={booking?.providerSnapshot?.name}
                    className="bg-gray-200 text-red-500"
                  />
                </div>
                <div className="flex items-center justify-between w-full md:justify-start md:gap-7">
                  <div>
                    <h1 className="text-lg font-semibold">
                      {booking?.providerSnapshot?.name}{" "}
                    </h1>
                    <p className="text-sm font-semibold text-muted">
                      {booking?.serviceSnapshot?.categoryName}
                    </p>
                  </div>
                  <StatusBadge badge={booking?.bookingStatus} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row  gap-2 mt-3 md:flex-2 md:justify-between">
                <div className="flex justify-between md:flex-col md:items-center md:justify-start">
                  <div className="flex items-center gap-1">
                    <CiCalendarDate size={22} className="text-orange-500" />
                    <h1 className="text-semibold text-lg text-muted">Date</h1>
                  </div>
                  <h2 className="font-semibold">
                    {new Date(booking?.bookingDate).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      },
                    )}
                  </h2>
                </div>
                <div className="flex justify-between md:flex-col md:items-center md:justify-start">
                  <div className="flex items-center gap-1">
                    <IoMdTime size={22} className="text-cyan-500" />
                    <h1 className="text-semibold text-lg text-muted">Time</h1>
                  </div>
                  <h2 className="font-semibold">
                    {booking?.bookingSlot?.startTime} -{" "}
                    {booking?.bookingSlot?.endTime}
                  </h2>
                </div>
                <div className="flex justify-between md:justify-start md:flex-col md:items-center">
                  <div className="flex items-center gap-1">
                    <RiBillLine className="text-green-600" size={22} />

                    <h1 className="text-semibold text-lg text-muted">
                      Booking ID
                    </h1>
                  </div>
                  <h2 className="font-semibold">#{booking?.bookingId}</h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={submitRescheduleBooking}>
              <h1 className="text-xl font-semibold flex gap-2 items-center my-5">
                <FaCalendarCheck size={24} className="text-green-500" />
                Select New Date & Time
              </h1>
              <div className="flex md:gap-4 flex-col md:flex-row">
                <div className="flex-1 w-full">
                  <label className="font-medium text-lg md:text-sm mb-2 block">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <CustomDatePicker
                    filters={formData}
                    setFilters={setFormData}
                    placeHolder="E.g.- 13/07/2025"
                  />
                </div>
                <div className="flex flex-col relative flex-1">
                  <SlotTime
                    label=" Time Slot"
                    startTime={formData?.startTime}
                    endTime={formData?.endTime}
                    required
                    onStartTimeChange={(value) => {
                      setFormData((prev) => ({
                        ...prev,
                        startTime: value,
                      }));
                    }}
                    onEndTimeChange={(value) => {
                      setFormData((prev) => ({
                        ...prev,
                        endTime: value,
                      }));
                    }}
                  />
                </div>
              </div>

              <div className="mt-3 md:mt-0">
                <label
                  htmlFor="notes"
                  className="font-medium text-lg md:text-sm "
                >
                  Reason for Reschedule (Optional)
                </label>
                <textarea
                  rows={2}
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      notes: e.target.value,
                    }));
                  }}
                  placeholder="Additional instructions..."
                  className="border border-slate-300 rounded-lg px-4 py-2 outline-none w-full resize-none focus:ring focus:ring-blue-500 focus:outline-none mt-2"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-end  gap-3 md:gap-7 mt-5 md:mt-4">
                <Button color="gray" size="md" type="button" onClick={()=>navigate(-1)}>
                  Cancel
                </Button>
                <Button color="success">Confirm Reschedule</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {open && <ConfirmReschedule setOpen={setOpen} data={open} />}
    </>
  );
};

export default RescheduleBooking;
