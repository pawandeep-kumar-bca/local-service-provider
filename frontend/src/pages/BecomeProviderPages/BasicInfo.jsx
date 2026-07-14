import React from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useCategories } from "../../hooks/useCategories";
import { useStates } from "../../hooks/useStates";
import { useDistrict } from "../../hooks/useDistricts";
import { useCity } from "../../hooks/useCity";
import { useOutletContext } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";

const BasicInfo = () => {
 

  const { data, isLoading } = useCategories();
  const { formData, setFormData, nextMoveForm } = useOutletContext();
  const submitForm = (e) => {
    e.preventDefault();
    if (formData.lat === null || formData.lng === null) {
      return alert("Please select location.");
    }

    nextMoveForm();
  };

  const categories = data?.categories;

  const { data: getState, isLoading: getStateIsLoading } = useStates();
  const states = getState?.allStates;
  const { data: getDistrict, isLoading: getDistrictIsLoading } = useDistrict(
    formData.state?._id,
  );

  const districts = getDistrict?.AllDistricts;
  

  const { data: getCities, isLoading: getCitiesIsLoading } = useCity(
    formData.district?._id,
  );
  const cities = getCities?.allCities;

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
 
 
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]: value,
    }));
  };
  return (
    <div>
      <h1 className="text-xl font-semibold text-text mt-2 mb-5">
        Basic Information
      </h1>
      <div>
        <form onSubmit={submitForm}>
          <div className="flex flex-col md:flex-row md:gap-5">
            <Input 
              label="Provider Name"
              id="providerName"
              placeholder="Enter your name"
              type="text"
              value={formData.providerName}
              onChange={handleChange}
              required
            />
            <Input
              label="Phone Number"
              id="phoneNumber"
              placeholder="Enter phone number"
              type="tel"
              maxLength={10}
              pattern="[0-9]{10}"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col md:flex-row md:gap-5">
            <Input
              label="Experience (Years)"
              id="experience"
              placeholder="e.g.3"
              type="number"
              min={0}
              max={50}
              value={formData.experience}
              onChange={handleChange}
              required
            />
            <Input
              label="Price (Per Hour)"
              id="price"
              placeholder="e.g. 500"
              type="number"
              min={100}
              step={10}
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col md:flex-row md:gap-5 items-center mb-3">
            {/* Service Category */}
            <div className="flex flex-col w-full relative">
              <label
                htmlFor="serviceCategory"
                className="block mb-2 font-medium text-lg md:text-sm text-text"
              >
                Service Category <span className="text-red-500">*</span>
              </label>

              <select
                name="category"
                id="category"
                value={formData.category?._id || ""}
                onChange={(e) => {
                  const selectedCategory = categories.find(
                    (item) => item._id === e.target.value,
                  );

                  setFormData((prev) => ({
                    ...prev,
                    category: selectedCategory,
                  }));
                }}
                className=" border px-3 py-3 text-base rounded-lg w-full bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none appearance-none transition-all duration-300 text-text
      "
              >
                <option value="" disabled className="bg-muted text-white">
                  Select Service
                </option>

                {isLoading ? (
                  <option>Loading...</option>
                ) : (
                  categories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {" "}
                      {category.name.charAt(0).toUpperCase() +
                        category.name.slice(1)}
                    </option>
                  ))
                )}
              </select>
            </div>
            {/* State */}

            <div className="flex flex-col w-full relative">
              <label
                htmlFor="state"
                className="block mb-2 font-medium text-lg md:text-sm text-text"
              >
                State <span className="text-red-500">*</span>
              </label>

              <select
                name="state"
                id="state"
                value={formData.state?._id || ''}
                onChange={(e) => {
                  const selectedState = states.find((item)=>item._id === e.target.value) 
                  setFormData((prev) => ({
                    ...prev,

                    state: selectedState,

                    district: null,

                    city: null,
                  }));
                }}
                className=" border px-3 py-3 text-base rounded-lg w-full bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none appearance-none transition-all duration-300 text-text
      "
              >
                <option value="" disabled className="bg-muted text-white">
                  Select City
                </option>

                {getStateIsLoading ? (
                  <option>Loading...</option>
                ) : (
                  states?.map((state) => (
                    <option key={state._id} value={state._id}>
                      {state.name.charAt(0).toUpperCase() + state.name.slice(1)}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-5 items-center">
            {/* district */}
            <div className="flex flex-col w-full relative">
              <label
                htmlFor="district"
                className="block mb-2 font-medium text-lg md:text-sm text-text"
              >
                District <span className="text-red-500">*</span>
              </label>

              <select
                name="district"
                id="district"
                disabled={!formData.state}
                value={formData.district?._id || ''}
                onChange={(e) => {
                  const selectedDistrict = districts.find((item)=>item._id ===  e.target.value)
                  setFormData((prev) => ({
                    ...prev,

                    district:selectedDistrict,

                    city: null,
                  }));
                }}
                className=" border px-3 py-3 text-base rounded-lg w-full bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none appearance-none transition-all duration-300 text-text
      "
              >
                <option value="" disabled className="bg-muted text-white">
                  Select District
                </option>

                {getDistrictIsLoading ? (
                  <option>Loading...</option>
                ) : (
                  districts?.map((dis) => (
                    <option key={dis._id} value={dis._id}>
                      {dis.name.charAt(0).toUpperCase() + dis.name.slice(1)}
                    </option>
                  ))
                )}
              </select>
            </div>
            {/* City */}

            <div className="flex flex-col w-full relative">
              <label
                htmlFor="city"
                className="block mb-2 font-medium text-lg md:text-sm text-text"
              >
                City <span className="text-red-500">*</span>
              </label>

              <select
                name="city"
                id="city"
                disabled={!formData.district}
                value={formData.city?._id ||''}
                onChange={(e)=>{
                  const selectedCity = cities.find((item)=>item._id === e.target.value)
                  setFormData((prev)=>({
                    ...prev,
                    city:selectedCity
                  }))
                }}
                className=" border px-3 py-3 text-base rounded-lg w-full bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none appearance-none transition-all duration-300 text-text
      "
              >
                <option value="" disabled className="bg-muted text-white">
                  Select City
                </option>
                {getCitiesIsLoading ? (
                  <option>Loading...</option>
                ) : (
                  cities?.map((city) => (
                    <option key={city._id} value={city._id}>
                      {city.name.charAt(0).toUpperCase() + city.name.slice(1)}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
          <div className="mt-3 ">
            <div>
              <label
                htmlFor="Village"
                className="block mb-2 font-medium text-lg md:text-sm text-text"
              >
                Village <span className="text-red-500">*</span>
              </label>

              <div
                className=" relative border rounded-lg bg-white transition-all duration-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30
    "
              >
                <input
                  type="text"
                  id="village"
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  placeholder="Select your Village on map"
                  className=" w-full px-3 py-3 pr-36 rounded-lg outline-none border-0 bg-transparent
      "
                />

                <div className="absolute right-1 top-1">
                  <Button
                    color="blue"
                    type="button"
                    onClick={getCurrentLocation}
                  >
                    {formData.lat ? "Location Selected ✅" : "Get Location"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center md:w-[80%] mx-auto mt-3">
            <Button onClick={nextMoveForm}>
              Next
              <MdChevronRight size={25} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicInfo;
