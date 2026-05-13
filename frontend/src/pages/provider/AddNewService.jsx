import React, { useState } from "react";
import { MdOutlineCarpenter, MdTipsAndUpdates } from "react-icons/md";
import { MdOutlinePlumbing } from "react-icons/md";
import { MdOutlineElectricalServices } from "react-icons/md";
import { MdPestControl } from "react-icons/md";
import { GoDash } from "react-icons/go";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";

import { TbPaintFilled } from "react-icons/tb";
import { TbAirConditioning } from "react-icons/tb";
import Button from "../../components/common/Button";
import { IoIosArrowBack } from "react-icons/io";
import Input from "../../components/common/Input";
const AddNewService = () => {
  const services = [
    {
      name: "AC Repair",
      icon: TbAirConditioning,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "Appliance Repair",
      icon: MdMiscellaneousServices,
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    {
      name: "Carpenter",
      icon: MdOutlineCarpenter,
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
    },
    {
      name: "Plumbing",
      icon: MdOutlinePlumbing,
      bgColor: "bg-cyan-100",
      textColor: "text-cyan-600",
    },
    {
      name: "Electrical",
      icon: MdOutlineElectricalServices,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      name: "Pest Control",
      icon: MdPestControl,
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      name: "Painting",
      icon: TbPaintFilled,
      bgColor: "bg-pink-100",
      textColor: "text-pink-600",
    },
    {
      name: "Cleaning",
      icon: MdCleaningServices,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
  ];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const startTimes = [
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
  ];
  const endTimes = [
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
  ];
  const [status, setStatus] = useState(false);
  return (
    <div>
      <div className="md:shadow-[0_0_20px_rgba(0,0,0,0.10)] md:p-4 rounded-xl">
        <div className="mb-4 flex justify-between">
          <div>
            <h1 className="text-xl md:text-2xl  font-bold text-text">
              Select Service
            </h1>
            <p className="text-sm md:text-base text-muted mt-1 w-[95%] md:w-[100%]">
              Choose a service from the list provided by admin.
            </p>
          </div>
          <div>
            <Button>
              <IoIosArrowBack />
              Back
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {services.map((items, index) => {
            const { name, icon: Icon, bgColor, textColor } = items;
            return (
              <label
                key={index}
                htmlFor={name}
                className="relative cursor-pointer"
              >
                <input
                  type="radio"
                  name="service"
                  id={name}
                  value={name}
                  className=" hidden peer "
                />

                <div
                  className="border rounded-xl border-gray-200 peer-checked:bg-green-50 peer-checked:border-green-400  hover:border-green-500 hover:bg-green-50 text-center transition-all peer-checked:scale-[1.02] duration-300 p-4 flex  flex-col justify-center items-center gap-2 peer-checked:ring-1 peer-checked:ring-green-200 "
                >
                  <div
                    className={`md:w-16 md:h-16 h-14 w-14 ${bgColor} ${textColor} rounded-full flex justify-center items-center`}
                  >
                    <Icon size={28} />
                  </div>
                  <h1 className="md:text-lg text-sm font-semibold text-text">
                    {name}
                  </h1>
                </div>
              </label>
            );
          })}
        </div>
        <div className="mt-4">
          {/* Heading */}
          <div className="mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-text">
              Pricing & Duration
            </h1>

            <p className="text-sm md:text-base text-muted mt-1">
              Set your pricing and estimated duration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            {/* Price */}
            <Input
              label="Price (₹)"
              type="number"
              id="price"
              placeholder="Enter service price"
              required
            />

            {/* Price Type */}
            <div>
              <label
                htmlFor="priceType"
                className="block mb-2 font-medium text-lg md:text-sm"
              >
                Price Type <span className="text-red-500">*</span>
              </label>

              <select
                name="priceType"
                id="priceType"
                defaultValue=""
                className="w-full text-lg border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-500  text-muted focus:outline-none bg-white"
              >
                <option disabled value="">
                  Select Price Type
                </option>

                <option value="Fixed Price">Fixed Price</option>
                <option value="Starting From">Starting From</option>
                <option value="Hourly">Hourly</option>
              </select>
            </div>
          </div>

          {/* Duration + Tip */}
          <div className="flex flex-col lg:flex-row gap-5 mt-3 md:mt-0">
            {/* Duration */}
            <div className="w-full lg:w-1/2">
              <label
                htmlFor="duration"
                className="block mb-2 font-medium text-lg md:text-sm"
              >
                Duration <span className="text-red-500">*</span>
              </label>

              <select
                name="duration"
                id="duration"
                defaultValue=""
                className="w-full text-lg border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-500  text-muted focus:outline-none bg-white"
              >
                <option disabled value="">
                  Select Duration
                </option>

                <option>30 Min</option>
                <option>1 Hour</option>
                <option>1-2 Hours</option>
                <option>2-3 Hours</option>
                <option>Half Day</option>
                <option>Full Day</option>
              </select>
            </div>

            {/* Tip Box */}
            <div className="w-full lg:w-1/2 flex items-start gap-3 p-4 rounded-2xl bg-green-50 border border-green-100">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <MdTipsAndUpdates className="text-xl text-green-600" />
              </div>

              <div>
                <h2 className="font-semibold text-green-600">Tip</h2>

                <p className="text-xs text-green-400 font-semibold mt-1">
                  Set accurate pricing and duration to help customers make
                  faster booking decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-text">
              Availability & Status
            </h1>

            <p className="text-sm md:text-base text-muted mt-1">
              Set your availability and service status.
            </p>
          </div>

          <div>
            <div className="flex flex-col md:flex-row">
              <div className="flex-1">
                <label className="block mb-2 font-medium text-lg md:text-sm">
                  Service Status
                </label>
                <div className="flex gap-2 items-center">
                  <button
                    type="button"
                    onClick={() => setStatus((prev) => !prev)}
                    className={`w-12 h-6 rounded-full relative transition-all duration-300 shrink-0 cursor-pointer ${
                      status ? "bg-green-400" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300 ${
                        status ? "right-0.5" : "left-0.5"
                      }`}
                    />
                  </button>
                  <div>
                    <h4 className="tex-lg font-bold">Active</h4>
                    <p className="text-sm text-muted font-semibold">
                      Your Service will be visible to customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 mt-3 md:mt-0">
                <label className="block mb-2 font-medium text-lg md:text-sm">
                  Working Days
                </label>
                <div className="flex flex-wrap gap-2">
                  {days.map((day, index) => {
                    return (
                      <label
                        htmlFor={day}
                        key={index}
                        className="cursor-pointer"
                      >
                        <input
                         defaultChecked={index === 0}
                          type="checkbox"
                          name="days"
                          id={day}
                          value={day}
                          className="peer hidden"
                        />

                        <div
                          className="w-16 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-semibold peer-checked:bg-green-100 peer-checked:text-green-600 peer-checked:border peer-checked:border-green-300 hover:bg-green-50 transition-all duration-300"
                        >
                          {day}
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-4  flex-col md:flex-row">
              <div className="flex-1 ">
                <label
                  htmlFor="time"
                  className="block mb-2 font-medium text-lg md:text-sm"
                >
                  Available Time
                </label>

                <div className="flex items-center gap-1">
                  <select
                    name="time"
                    id="start-time"
                    defaultValue=""
                    className="w-full text-lg border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-500  text-muted focus:outline-none bg-white"
                  >
                    <option disabled value="">
                      Start Time
                    </option>
                    {startTimes.map((time, idx) => (
                      <option key={idx} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <GoDash />

                  <select
                    name="time"
                    id="end-time"
                    defaultValue=""
                    className=" w-full text-lg border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-500 text-muted focus:outline-none bg-white"
                  >
                    <option disabled value="">
                      End Time
                    </option>
                    {endTimes.map((time, idx) => (
                      <option key={idx} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex-1">
                <Input
                  label="Service Area"
                  id="service area"
                  name="service area"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-end gap-3 my-5">
          <Button className="w-full md:w-fit md:px-10">Save Service</Button>

          <Button color="white" className="w-full md:w-fit md:px-10">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddNewService;
