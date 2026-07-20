import React, { useState } from "react";
import Button from "../../components/common/Button";
import { MdMyLocation, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Input from "../../components/common/Input";
import { IoMdTime } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SlotTime from "../../components/common/SlotTime";
import State from "../../components/common/State";
import District from "../../components/common/District";
import City from "../../components/common/City";
import { FaLocationArrow } from "react-icons/fa";
import { useBookingCreate } from "../../hooks/useBooking";

const BookingDetail = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const { providerId } = useParams();
  const categoryId = state?.categoryId;
  const categoryName = state?.categoryName;

  const [formData, setFormData] = useState({
    categoryId: categoryId || null,
    providerId: providerId || null,
    state: null,
    district: null,
    city: null,
    village: "",
    notes: "",
    fullAddress: "",
    bookingDate: "",
    landmark: "",
    startTime: "",
    endTime: "",
    lat: "",
    lng: "",
  });


  const { bookingSummaryMutation } = useBookingCreate();
 

  const formSubmit = (e) => {
    e.preventDefault();

    if (!formData.state) {
      return alert("Please select a state.");
    }
    if (!formData.district) {
      return alert("Please select a district.");
    }
    if (!formData.city) {
      return alert("Please select a city.");
    }
    if (!formData.lat || !formData.lng) {
      return alert("Please select location.");
    }
    if (!formData.startTime || !formData.endTime) {
      return alert("Please select a slot time.");
    }

    const payload = {
      providerId: formData.providerId,
      categoryId: formData.categoryId,
      state: formData.state?._id,
      district: formData.district?._id,
      city: formData.city?._id,
      village: formData.village,
      landmark: formData.landmark,
      notes: formData.notes,
      fullAddress: formData.fullAddress,
      lat: formData.lat,
      lng: formData.lng,
      bookingDate: formData.bookingDate,
      bookingSlot: {
        startTime: formData.startTime,
        endTime: formData.endTime,
      },
    };

   bookingSummaryMutation.mutate(payload, {
  onSuccess: (data) => {
    navigate("/user/provider-details/booking-details/payment", {
      state: {
        summary: data,
        bookingPayload: payload,
      },
    });
  },
});
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setFormData((prev) => ({
          ...prev,
          lat: latitude,
          lng: longitude,
        }));
      },
      (error) => {
        console.log(error);
        alert("Unable to get your location.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  };

  const handlerChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="md:shadow-[inset_0_0_3px_rgba(0,0,0,0.4)] md:p-4 rounded-lg">
      <div className="flex items-center  justify-between mb-3 md:w-[90%] mx-auto">
        <h1 className="text-2xl font-semibold">Booking Details</h1>
        <Button color="white" type="button" onClick={() => navigate(-1)}>
          <MdOutlineKeyboardArrowLeft size={24} />
          Back
        </Button>
      </div>

      <div className="md:w-[80%] mx-auto mt-6 ">
        <form onSubmit={formSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-y-2 gap-x-7">
            <div>
              <label
                htmlFor="category"
                className="block mb-2 font-medium text-lg md:text-sm"
              >
                Service
              </label>
              <input
                type="text"
                name="category"
                id="category"
                defaultValue={categoryName}
                readOnly
                disabled
                className="w-full text-sm  border border-gray-300 text-slate-700 px-4 py-3 rounded-xl focus:ring focus:ring-blue-500 focus:outline-none bg-white  disabled:bg-gray-100 cursor-not-allowed"
              />
            </div>
            <Input
              id="bookingDate"
              name="bookingDate"
              type="date"
              label="Date"
              required
              value={formData.bookingDate}
              onChange={handlerChange}
            />
            <SlotTime
              label="Slot Time"
              required
              startTime={formData.startTime}
              endTime={formData.endTime}
              onStartTimeChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  startTime: value,
                }))
              }
              onEndTimeChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  endTime: value,
                }))
              }
            />
            <State formData={formData} setFormData={setFormData} />
            <District formData={formData} setFormData={setFormData} />
            <City formData={formData} setFormData={setFormData} />
            <Input
              id="village"
              name="village"
              label="Village"
              value={formData.village}
              onChange={handlerChange}
              placeholder="Enter your village / area name"
              required
            />
            <Input
              id="fullAddress"
              name="fullAddress"
              type="text"
              value={formData.fullAddress}
              onChange={handlerChange}
              label="Full Address"
              placeholder="e.g. House No 12, Malviya Nagar, Jaipur "
              required
            />
            <Input
              id="landmark"
              name="landmark"
              type="text"
              value={formData.landmark}
              onChange={handlerChange}
              label="Landmark"
              placeholder="e.g. Near Hanuman Mandir "
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-center bg-blue-50 p-6 md:p-4 rounded-lg mb-4">
            <div className="flex gap-4 items-center mb-4 md:mb-0">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center flex-shrink-0">
                <MdMyLocation size={26} />
              </div>

              <div>
                <h3 className="font-semibold text-text text-base md:text-sm">
                  Use your current location
                </h3>

                <p className="text-slate-500 text-sm md:text-xs mt-1">
                  Auto-fill your location details using GPS
                </p>
              </div>
            </div>

            <Button
              color="blue"
              type="button"
              className="w-full md:w-auto"
              onClick={getCurrentLocation}
            >
              <FaLocationArrow size={16} />
              {formData.lat ? "Location Captured" : "Use Current Location"}
            </Button>
          </div>
          <div>
            <label
              htmlFor="notes"
              className="block font-medium text-lg md:text-sm mb-2"
            >
              Notes (Optional)
            </label>
            <textarea
              rows={4}
              id="notes"
              value={formData.notes}
              onChange={handlerChange}
              name="notes"
              placeholder="Additional instructions..."
              className="w-full text-sm  border border-gray-300 text-slate-700 px-4 py-3 rounded-xl focus:ring focus:ring-blue-500 focus:outline-none bg-white"
            />
          </div>
          <div className="border border-green-300 rounded-xl bg-green-50 flex items-start p-4 gap-3 mt-4">
            <IoMdTime size={28} className="text-green-700" />
            <p>
              Your can reschedule or cancel up to 2 hours before the booking
              time.
            </p>
          </div>
          <div className="mt-4 mb-5 flex md:w-[30%] mx-auto">
           
            <Button
              type="submit"
              fullWidth
              disabled={bookingSummaryMutation.isLoading}
            >
              {bookingSummaryMutation.isLoading
                ? "Creating booking..."
                : "Continue to Payment"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingDetail;