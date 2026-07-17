import React from "react";
import Button from "../../components/common/Button";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Input from "../../components/common/Input";
import { IoMdTime } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BookingDetail = () => {
    const navigate = useNavigate()
     const timeSlots = [
    "12:00 AM - 1:00 AM",
    "1:00 AM - 2:00 AM",
    "2:00 AM - 3:00 AM",
    "3:00 AM - 4:00 AM",
    "4:00 AM - 5:00 AM",
    "5:00 AM - 6:00 AM",
    "6:00 AM - 7:00 AM",
    "7:00 AM - 8:00 AM",
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
    "8:00 PM - 9:00 PM",
    "9:00 PM - 10:00 PM",
    "10:00 PM - 11:00 PM",
    "11:00 PM - 12:00 AM",
  ];
  return (
    <div className="md:shadow-[inset_0_0_3px_rgba(0,0,0,0.4)] md:p-4 rounded-lg">
      <div className="flex items-center  justify-between mb-3 md:w-[90%] mx-auto">
        <h1 className="text-2xl font-semibold">Booking Details</h1>
        <Button color="white">
          <MdOutlineKeyboardArrowLeft size={24} />
          Back
        </Button>
      </div>

      <div className="md:w-[80%] mx-auto mt-6 ">
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex-1 md:mb-3">
            <h3 className="font-medium text-lg md:text-sm mb-2">Service</h3>
            <h4 className="border rounded-md py-2 px-3 text-lg bg-muted/20">
              Home Cleaning
            </h4>
          </div>
          <div className="flex-1">
            <Input id="date" type="date" label="Date" required />
          </div>
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex flex-col relative flex-1">
            <label
              htmlFor="time"
              className="font-medium text-lg md:text-sm mb-2"
            >
              Time Slot <span className="text-red-500">*</span>
            </label>
            <IoMdTime className="absolute right-3 bottom-7 text-xl" />
            <select
              name="time"
              id="time"
              className="border px-3 py-2 text-lg rounded-lg w-full bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none appearance-none transition-all duration-300 cursor-pointer"
            >
              <option value="">Select Time Slot</option>
              {timeSlots.map((time, idx) => (
                <option value={time} key={idx}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <Input
              id="address"
              type="text"
              label="Enter your full Address"
              required
            />
          </div>
        </div>

       <div>
        <label htmlFor="notes" className="font-medium text-lg md:text-sm ">Notes (Optional)</label>
         <textarea
          rows={4}
          id="notes"
          name="notes"
          placeholder="Additional instructions..."
          className="border rounded-lg p-3 w-full resize-none focus:ring focus:ring-blue-500 focus:outline-none mt-2"
        />
       </div>
        <div className="border border-green-300 rounded-xl bg-green-50 flex items-start p-4 gap-3 mt-4">
          <IoMdTime size={28} className="text-green-700" />
          <p>
            Your can reschedule or cancel up to 2 hours before the booking time.
          </p>
        </div>
        <div className="mt-4 mb-5 flex md:w-[30%] mx-auto">
          <Button fullWidth onClick={()=>navigate('/user/provider-details/booking-details/payment')}>Continue to Payment</Button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
