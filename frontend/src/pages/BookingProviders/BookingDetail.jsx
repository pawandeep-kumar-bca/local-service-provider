import React, { useState } from "react";
import Button from "../../components/common/Button";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Input from "../../components/common/Input";
import { IoMdTime } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SlotTime from "../../components/common/SlotTime";
import State from "../../components/common/State";
import District from "../../components/common/District";

const BookingDetail = () => {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
      state:'',
      district:"",
      city:''
    })
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
        <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex-1 md:mb-3">
            <h3 className="font-medium text-lg md:text-sm mb-2">Service</h3>
            <h4 className="border rounded-md py-2 px-3 text-lg bg-muted/20">
              Home Cleaning
            </h4>
          </div>
          <Input id="date" type="date" label="Date" required />
         <SlotTime label="Slot Time" required />
          <div>
            <Input
              id="address"
              type="text"
              label="Enter your full Address"
              required
            />
          </div>
          <State formData={formData} setFormData={setFormData}/>
          <District formData={formData} setFormData={setFormData}/>
        </div>
         </form>
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
