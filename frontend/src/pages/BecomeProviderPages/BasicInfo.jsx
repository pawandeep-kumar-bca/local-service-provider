import React from "react";
import Input from "../../components/common/Input";
import { FaLocationArrow } from "react-icons/fa6";
import Button from "../../components/common/Button";
import { useCategories } from "../../hooks/useCategories";
import { useStates } from "../../hooks/useStates";
import { useDistrict } from "../../hooks/useDistricts";
import { useCity } from "../../hooks/useCity";
import { useOutletContext } from "react-router-dom";
import { MdChevronRight, MdMyLocation } from "react-icons/md";

const BasicInfo = () => {
  const { data, isLoading } = useCategories();
  const { formData, setFormData, phoneNumber, nextMoveForm } =
    useOutletContext();

  const submitForm = (e) => {
    e.preventDefault();

    if (!formData.category) {
      return alert("Please select a service category.");
    }
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
              label="Phone Number"
              id="phoneNumber"
              placeholder="Enter phone number"
              type="tel"
              maxLength={10}
              pattern="[0-9]{10}"
              value={phoneNumber}
              onChange={handleChange}
              required
            />
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
          </div>

          <div className="flex flex-col md:flex-row md:gap-5">
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
            {/* Service Category */}
            <div className="flex flex-col w-full relative">
              <label
                htmlFor="category"
                className="block mb-2 font-medium text-lg md:text-sm"
              >
                Service Category <span className="text-red-500">*</span>
              </label>

              <select
                name="category"
                id="category"
                required
                value={formData.category?._id || ""}
                onChange={(e) => {
                  const selectedCategory = categories?.find(
                    (item) => item._id === e.target.value,
                  );

                  setFormData((prev) => ({
                    ...prev,
                    category: selectedCategory,
                  }));
                }}
                className="w-full text-sm  border border-gray-300 text-slate-700 px-4 py-3 rounded-xl focus:ring focus:ring-blue-500 focus:outline-none bg-white  appearance-none
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
          </div>
          <div className="flex flex-col md:flex-row md:gap-5 mb-4">
            {/* State */}

            <div className="flex flex-col w-full mt-4 md:mt-0">
              <label
                htmlFor="state"
                className="block mb-2 font-medium text-lg md:text-sm"
              >
                State <span className="text-red-500">*</span>
              </label>

              <select
                name="state"
                id="state"
                required
                value={formData.state?._id || ""}
                onChange={(e) => {
                  const selectedState = states?.find(
                    (item) => item._id === e.target.value,
                  );
                  setFormData((prev) => ({
                    ...prev,

                    state: selectedState,

                    district: null,

                    city: null,
                  }));
                }}
                className="w-full text-sm  border border-gray-300 text-slate-700 px-4 py-3 rounded-xl focus:ring focus:ring-blue-500 focus:outline-none bg-white  appearance-none
      "
              >
                <option value="" disabled className="bg-muted text-white">
                  Select State
                </option>

                {getStateIsLoading ? (
                  <option>Loading...</option>
                ) : (
                  states?.map((state) => (
                    <option key={state._id} value={state._id}>
                      {state.name.charAt(0).toUpperCase() +
                        state.name.slice(1)}
                    </option>
                  ))
                )}
              </select>
            </div>
            {/* district */}
            <div className="flex flex-col w-full mt-4 md:mt-0">
              <label
                htmlFor="district"
                className="block mb-2 font-medium text-lg md:text-sm"
              >
                District <span className="text-red-500">*</span>
              </label>

              <select
                name="district"
                id="district"
                required
                disabled={!formData.state}
                value={formData.district?._id || ""}
                onChange={(e) => {
                  const selectedDistrict = districts?.find(
                    (item) => item._id === e.target.value,
                  );
                  setFormData((prev) => ({
                    ...prev,

                    district: selectedDistrict,

                    city: null,
                  }));
                }}
                className="w-full text-sm  border border-gray-300 text-slate-700 px-4 py-3 rounded-xl focus:ring focus:ring-blue-500 focus:outline-none bg-white  appearance-none
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
          </div>
          <div className="flex flex-col md:flex-row md:gap-5">
            {/* City */}

            <div className="flex flex-col w-full mb-4 ">
              <label
                htmlFor="city"
                className="block mb-2 font-medium text-lg md:text-sm"
              >
                City <span className="text-red-500">*</span>
              </label>

              <select
                name="city"
                id="city"
                required
                disabled={!formData.district}
                value={formData.city?._id || ""}
                onChange={(e) => {
                  const selectedCity = cities?.find(
                    (item) => item._id === e.target.value,
                  );
                  setFormData((prev) => ({
                    ...prev,
                    city: selectedCity,
                  }));
                }}
                className="w-full text-sm  border border-gray-300 text-slate-700 px-4 py-3 rounded-xl focus:ring focus:ring-blue-500 focus:outline-none bg-white  appearance-none
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
            <Input
              label="Village"
              id="village"
              placeholder="Enter your village / area name"
              required
              value={formData.village}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-center bg-blue-50 p-6 md:p-4 rounded-lg mb-4">
            <div className="flex gap-4 items-center mb-4 md:mb-0">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center flex-shrink-0">
                <MdMyLocation size={26} />
              </div>

              <div>
                <h3 className="font-semibold text-text text-base md:text-sm">
                  Get Current Coordinates
                </h3>

                <p className="text-slate-500 text-sm md:text-xs mt-1">
                  Allow location access to capture your current latitude and
                  longitude for accurate service location.
                </p>
              </div>
            </div>

            <Button
              color="blue"
              type="button"
              onClick={getCurrentLocation}
              className="w-full md:w-auto"
            >
              <FaLocationArrow size={16} />
              {formData.lat ? "Coordinates Captured" : "Get Coordinates"}
            </Button>
          </div>
          <div className="flex flex-col md:flex-row md:gap-5">
            <Input
              label="Latitude"
              id="lat"
              placeholder="e.g.24.24423"
              required
              readOnly
              value={formData.lat}
            />
            <Input
              label="Longitude"
              id="lng"
              readOnly
              placeholder="e.g.86.24423"
              required
              value={formData.lng}
            />
          </div>

          <div className="flex justify-end items-center mx-auto mt-6">
            <Button className="w-full md:w-[20%]">
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