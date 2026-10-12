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
import CustomDatePicker from "../../components/common/CustomDatePicker";
import { useAddressToReverseGeocode } from "../../hooks/useAuth";

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
    date: "",
    landmark: "",
    startTime: "",
    endTime: "",
    lat: "",
    lng: "",
  });
  const { addressToReverseGeocodeMutation } = useAddressToReverseGeocode();

  const { createBookingMutation } = useBookingCreate();

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
      bookingDate: formData.date,
      bookingSlot: {
        startTime: formData.startTime,
        endTime: formData.endTime,
      },
    };
    createBookingMutation.mutate(payload, {
      onSuccess: (data) => {
        navigate("/user/provider-details/booking-details/payment", {
          state: {
            booking: data.booking,
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
      async (position) => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const data = await addressToReverseGeocodeMutation.mutateAsync({
            latitude,
            longitude,
          });
          setFormData((prev) => ({
            ...prev,
            lat: data.location.latitude,
            lng: data.location.longitude,

            state: data.location.state,
            district: data.location.district,
            city: data.location.city,
          }));
        } catch (err) {
          console.error(err);
          alert("Unable to fetch location.");
        }
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
    <div className="min-h-screen rounded-2xl bg-gray-50 px-3 py-5 sm:px-5 md:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Booking Details
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Enter your booking and service address details.
            </p>
          </div>

          <Button
            color="white"
            type="button"
            onClick={() => navigate(-1)}
          >
            <MdOutlineKeyboardArrowLeft size={22} />
            <span className="hidden sm:inline">Back</span>
          </Button>
        </div>

        <form onSubmit={formSubmit} className="space-y-5">
          {/* 1. Booking Information */}
          <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <IoMdTime size={24} />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Booking Information
                </h2>
                <p className="text-sm text-gray-500">
                  Select your service date and preferred time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Service
                </label>

                <input
                  type="text"
                  name="category"
                  id="category"
                  value={categoryName || ""}
                  readOnly
                  disabled
                  className="w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600"
                />
              </div>

              <div className="min-w-0">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Booking Date <span className="text-red-500">*</span>
                </label>

                <CustomDatePicker
                  filters={formData}
                  setFilters={setFormData}
                  placeHolder="Select booking date"
                />
              </div>

              <div className="min-w-0 md:col-span-2">
                <SlotTime
                  label="Preferred Time Slot"
                  required
                  startTime={formData.startTime}
                  endTime={formData.endTime}
                  date={formData.date}
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
              </div>
            </div>
          </section>

          {/* 2. Service Address */}
          <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <MdMyLocation size={25} />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Service Address
                </h2>
                <p className="text-sm text-gray-500">
                  Where should the service provider visit?
                </p>
              </div>
            </div>

            {/* Current Location */}
            <div className="mb-6 flex flex-col gap-4 rounded-xl border border-indigo-100 bg-indigo-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-indigo-600 shadow-sm">
                  <FaLocationArrow size={17} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Use your current location
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Automatically fill your location details using GPS.
                  </p>

                  {formData.lat && formData.lng && (
                    <p className="mt-2 text-xs font-medium text-green-700">
                      Location coordinates captured successfully.
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full shrink-0 sm:w-auto">
                <Button
                  color="blue"
                  type="button"
                  className="w-full sm:w-auto"
                  onClick={getCurrentLocation}
                >
                  <FaLocationArrow size={15} />
                  {formData.lat && formData.lng
                    ? "Update Location"
                    : "Use Current Location"}
                </Button>
              </div>
            </div>

            {/* Address Fields */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="min-w-0">
                <State
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>

              <div className="min-w-0">
                <District
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>

              <div className="min-w-0">
                <City
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>

              <div className="min-w-0">
                <Input
                  id="village"
                  name="village"
                  label="Village / Area"
                  value={formData.village}
                  onChange={handlerChange}
                  placeholder="Enter village or area"
                  required
                />
              </div>

              <div className="min-w-0 md:col-span-2">
                <Input
                  id="fullAddress"
                  name="fullAddress"
                  type="text"
                  value={formData.fullAddress}
                  onChange={handlerChange}
                  label="Full Address"
                  placeholder="House no., street, locality..."
                  required
                />
              </div>

              <div className="min-w-0 md:col-span-2">
                <Input
                  id="landmark"
                  name="landmark"
                  type="text"
                  value={formData.landmark}
                  onChange={handlerChange}
                  label="Landmark (Optional)"
                  placeholder="e.g. Near Hanuman Mandir"
                />
              </div>
            </div>
          </section>

          {/* 3. Additional Instructions */}
          <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 6h13M8 12h13M8 18h13" />
                  <path d="M3 6h.01M3 12h.01M3 18h.01" />
                </svg>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Additional Instructions
                </h2>
                <p className="text-sm text-gray-500">
                  Share any special instructions with your provider.
                </p>
              </div>
            </div>

            <label
              htmlFor="notes"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Notes <span className="font-normal text-gray-400">(Optional)</span>
            </label>

            <textarea
              rows={4}
              id="notes"
              value={formData.notes}
              onChange={handlerChange}
              name="notes"
              placeholder="Add details such as access instructions or specific requirements..."
              className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </section>

          {/* Booking Policy */}
          <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
            <IoMdTime
              size={24}
              className="mt-0.5 shrink-0 text-green-700"
            />

            <div>
              <h3 className="text-sm font-semibold text-green-900">
                Booking Policy
              </h3>
              <p className="mt-1 text-sm leading-6 text-green-800">
                You can reschedule or cancel up to 2 hours before the booking
                time.
              </p>
            </div>
          </div>

          {/* Submit */}
          <div className="flex md:justify-end gap-3 pb-4 sm:flex-row sm:justify-between">
           

            <div className="w-full sm:w-64">
              <Button
                type="submit"
                fullWidth
                disabled={createBookingMutation.isPending}
              >
                {createBookingMutation.isPending
                  ? "Creating booking..."
                  : "Continue to Payment"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

};

export default BookingDetail;
