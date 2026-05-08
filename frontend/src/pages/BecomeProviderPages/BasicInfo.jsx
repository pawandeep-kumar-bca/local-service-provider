import React, { useState } from "react";
import Input from "../../components/common/Input";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const BasicInfo = () => {
  const [cityOpen, setCityOpen] = useState(false);
const [serviceOpen, setServiceOpen] = useState(false);
 
  return (
    <div>
      <h1 className="text-xl font-semibold text-text mt-2 mb-5">
        Basic Information
      </h1>
      <div>
        <div className="flex flex-col md:flex-row md:gap-5">
          <Input
            label="Provider Name"
            id="providerName"
            placeholder="Enter your name"
            type="text"
            required
          />
          <Input
            label="Phone Number"
            id="phoneName"
            placeholder="Enter phone number"
            type="tel"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row md:gap-5">
          <Input
            label="Experience (Years)"
            id="experience"
            placeholder="e.g.3"
            type="number"
            required
            min="0"
          />
          <Input
            label="Price (Per Hour)"
            id="price"
            placeholder="e.g. 500"
            type="number"
            required
            min="0"
          />
        </div>

        <div className="flex flex-col md:flex-row md:gap-5 items-center">
          {/* City */}
          
<div className="flex flex-col w-full relative">
            <label
              htmlFor="serviceCategory"
              className="block mb-2 font-medium text-lg md:text-sm text-text"
            >
            City <span className="text-red-500">*</span>
            </label>

            <select
              name="serviceCategory"
              id="serviceCategory"
              defaultValue=""
              className=" border px-3 py-3 text-base rounded-lg w-full bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none appearance-none transition-all duration-300 text-text
      "
             onClick={() => setCityOpen((prev) => !prev)}>
              <option value="" disabled className="bg-muted text-white">
                Select City
              </option>

              <option value="sultanganj">Sultanganj</option>

              <option value="bhagalpur">Bhagalpur</option>

              <option value="mungar">Mungar</option>
            </select>

            {/* custom arrow */}
            
            {cityOpen ? <IoIosArrowDown className="absolute right-2 top-[42px] text-muted pointer-events-none" size={22}/>:<IoIosArrowUp className="absolute right-2 top-[42px]  text-muted pointer-events-none" size={22}/>}
          </div>

          {/* Service Category */}
          <div className="flex flex-col w-full relative">
            <label
              htmlFor="serviceCategory"
              className="block mb-2 font-medium text-lg md:text-sm text-text"
            >
              Service Category <span className="text-red-500">*</span>
            </label>

            <select
              name="serviceCategory"
              id="serviceCategory"
              defaultValue=""
              className=" border px-3 py-3 text-base rounded-lg w-full bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none appearance-none transition-all duration-300 text-text
      "
            onClick={() => setServiceOpen((prev) => !prev)}>
              <option value="" disabled className="bg-muted text-white">
                Select Service
              </option>

              <option value="mistry">Mistry</option>

              <option value="painter">Painter</option>

              <option value="electrician">Electrician</option>
            </select>

            {/* custom arrow */}
            {serviceOpen ? <IoIosArrowDown className="absolute right-2 top-[42px] text-muted pointer-events-none" size={22}/>:<IoIosArrowUp className="absolute right-2 top-[42px]  text-muted pointer-events-none" size={22}/>}
          </div>
        </div>
        <div className="mt-3">
          <Input
            label="Your Location"
            id="location"
            placeholder="Select your location on map"
            type="text"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
