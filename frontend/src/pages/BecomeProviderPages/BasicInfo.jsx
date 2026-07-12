import React, {  useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useCreateProviders } from "../../hooks/useProvider";
import { useCategories } from "../../hooks/useCategories";
import { useStates } from "../../hooks/useStates";
import { useDistrict } from "../../hooks/useDistricts";
import { useCity } from "../../hooks/useCity";
import { useNavigate } from "react-router-dom";

const BasicInfo = () => {
  const navigate = useNavigate();
  const { createProviderMutation } = useCreateProviders();

  const { data, isLoading } = useCategories();
  const [form, setForm] = useState({
    providerName: "",
    phoneNumber: "",
    experience: "",
    price: "",
    state: "",
    district: "",
    city: "",
    village: "",
    category: "",
    lat: null,
    lng: null,
  });
  const submitForm = (e) => {
    e.preventDefault();
    if (form.lat === null || form.lng === null) {
      return alert("Please select location.");
    }
   createProviderMutation.mutate(
  {
    ...form,
  },
  {
    onSuccess: () => {
      setForm({
        providerName: "",
        phoneNumber: "",
        experience: "",
        price: "",
        state: "",
        district: "",
        city: "",
        village: "",
        category: "",
        lat: null,
        lng: null,
      });

      navigate("/user/become-provider/upload-documents");
    },

    onError: (error) => {
      console.log(error);
    },
  }
);
  };

  const categories = data?.categories;

  const { data: getState, isLoading: getStateIsLoading } = useStates();
  const states = getState?.allStates;
  const { data: getDistrict, isLoading: getDistrictIsLoading } = useDistrict(
    form.state,
  );

  const districts = getDistrict?.AllDistricts;
  //   console.log(district?.districtId);

  const { data: getCities, isLoading: getCitiesIsLoading } = useCity(
    form.district,
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

        setForm((prev) => ({
          ...prev,

          lat: latitude,

          lng: longitude,
        }));

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
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

    setForm((prev) => ({
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
              value={form.providerName}
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
              value={form.phoneNumber}
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
              value={form.experience}
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
              value={form.price}
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
                value={form.category}
                onChange={handleChange}
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
                value={form.state}
                onChange={(e) => {
                  setForm((prev) => ({
                    ...prev,

                    state: e.target.value,

                    district: "",

                    city: "",
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
                disabled={!form.state}
                value={form.district}
                onChange={(e) => {
                  setForm((prev) => ({
                    ...prev,

                    district: e.target.value,

                    city: "",
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
                disabled={!form.district}
                value={form.city}
                onChange={handleChange}
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
                className="
      relative
      border
      rounded-lg
      bg-white
      transition-all duration-300
      focus-within:border-primary
      focus-within:ring-2
      focus-within:ring-primary/30
    "
              >
                <input
                  type="text"
                  id="village"
                  name="village"
                  value={form.village}
                  onChange={handleChange}
                  placeholder="Select your Village on map"
                  className="
        w-full
        px-3
        py-3
        pr-36
        rounded-lg
        outline-none
        border-0
        bg-transparent
      "
                />

                <div className="absolute right-1 top-1">
                  <Button
                    color="blue"
                    type="button"
                    onClick={getCurrentLocation}
                  >
                   {form.lat ? "Location Selected ✅" : "Get Location"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicInfo;
