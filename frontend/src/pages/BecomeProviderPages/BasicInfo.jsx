
import React from "react";
import { useOutletContext } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa6";
import { MdChevronRight, MdMyLocation } from "react-icons/md";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";
import State from "../../components/common/State";
import District from "../../components/common/District";
import City from "../../components/common/City";

import { useCategories } from "../../hooks/useCategories";
import { useAddressToReverseGeocode } from "../../hooks/useAuth";

const BasicInfo = () => {
  const { data, isLoading } = useCategories();

  const {
    formData,
    setFormData,
    phoneNumber,
    nextMoveForm,
  } = useOutletContext();

  const { addressToReverseGeocodeMutation } =
    useAddressToReverseGeocode();

  const categories = data?.categories ?? [];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
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

          const response =
            await addressToReverseGeocodeMutation.mutateAsync({
              latitude,
              longitude,
            });

          const location = response?.location;

          if (!location) {
            alert("Location details could not be fetched.");
            return;
          }

          setFormData((previous) => ({
            ...previous,
            lat: location.latitude ?? latitude,
            lng: location.longitude ?? longitude,
            state: location.state ?? previous.state,
            district: location.district ?? previous.district,
            city: location.city ?? previous.city,
            locality: location.locality ?? previous.locality,
          }));
        } catch (error) {
          console.error("Location fetch error:", error);
          alert("Unable to fetch location. Please try again.");
        }
      },
      (error) => {
        console.error("Geolocation error:", error);

        if (error.code === error.PERMISSION_DENIED) {
          alert("Location permission denied. Please allow location access.");
        } else if (error.code === error.TIMEOUT) {
          alert("Location request timed out. Please try again.");
        } else {
          alert("Unable to get your current location.");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (formData.experience === "" || formData.experience == null) {
      return alert("Please enter your experience.");
    }

    if (
      !Number.isFinite(Number(formData.experience)) ||
      Number(formData.experience) < 0
    ) {
      return alert("Please enter valid experience.");
    }

    if (
      formData.price === "" ||
      formData.price == null ||
      !Number.isFinite(Number(formData.price)) ||
      Number(formData.price) <= 0
    ) {
      return alert("Please enter a valid service price.");
    }

    if (!formData.priceType) {
      return alert("Please select a price type.");
    }

    if (!formData.category?._id) {
      return alert("Please select a service category.");
    }

    if (!formData.state?._id) {
      return alert("Please select a state.");
    }

    if (!formData.district?._id) {
      return alert("Please select a district.");
    }

    if (!formData.city?._id) {
      return alert("Please select a city.");
    }

    if (!formData.locality?.trim()) {
      return alert("Please enter your locality.");
    }

    if (
      formData.lat === "" ||
      formData.lat == null ||
      formData.lng === "" ||
      formData.lng == null ||
      !Number.isFinite(Number(formData.lat)) ||
      !Number.isFinite(Number(formData.lng))
    ) {
      return alert("Please capture valid coordinates.");
    }

    nextMoveForm();
  };

  const sectionClass =
    "rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 md:p-6";

  const headingClass = "text-base font-semibold text-gray-800 md:text-lg";

  const descriptionClass = "mt-1 text-sm text-gray-500";

  const labelClass = "mb-2 block text-sm font-medium text-gray-700";

  const selectClass =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="w-full pb-8">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900 md:text-2xl">
          Basic Information
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Add your service details and the location where you provide services.
        </p>
      </div>

      <form onSubmit={submitForm} className="space-y-6">
        <section className={sectionClass}>
          <div className="mb-5">
            <h2 className={headingClass}>Personal Information</h2>
            <p className={descriptionClass}>
              Enter your contact number and professional experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Input
              label="Phone Number"
              id="phoneNumber"
              placeholder="Enter phone number"
              type="tel"
              maxLength={10}
              value={phoneNumber}
              readOnly
              required
            />

            <Input
              label="Experience (Years)"
              id="experience"
              name="experience"
              placeholder="e.g. 3"
              type="number"
              min={0}
              max={50}
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>
        </section>

        <section className={sectionClass}>
          <div className="mb-5">
            <h2 className={headingClass}>Service Details</h2>
            <p className={descriptionClass}>
              Select your service category and set your pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Input
              label="Price (₹)"
              id="price"
              name="price"
              placeholder="e.g. 500"
              type="number"
              min={1}
              value={formData.price}
              onChange={handleChange}
              required
            />

            <div>
              <label htmlFor="priceType" className={labelClass}>
                Price Type <span className="text-red-500">*</span>
              </label>

              <select
                name="priceType"
                id="priceType"
                required
                value={formData.priceType || ""}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="" disabled>
                  Select price type
                </option>
                <option value="hourly">Hourly</option>
                <option value="fixed">Fixed</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="category" className={labelClass}>
                Service Category <span className="text-red-500">*</span>
              </label>

              <select
                name="category"
                id="category"
                required
                value={formData.category?._id || ""}
                onChange={(event) => {
                  const selectedCategory = categories.find(
                    (category) => category._id === event.target.value
                  );

                  setFormData((previous) => ({
                    ...previous,
                    category: selectedCategory || null,
                  }));
                }}
                className={selectClass}
              >
                <option value="" disabled>
                  {isLoading ? "Loading categories..." : "Select category"}
                </option>

                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="mb-5">
            <h2 className={headingClass}>Location Information</h2>
            <p className={descriptionClass}>
              Set your service location to help customers find you nearby.
            </p>
          </div>

          <div className="mb-6 flex flex-col gap-4 rounded-xl border border-blue-100 bg-blue-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <MdMyLocation size={23} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Use Your Current Location
                </h3>

                <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                  Capture your coordinates and fill available address details.
                </p>

                {formData.lat !== "" &&
                  formData.lat != null &&
                  formData.lng !== "" &&
                  formData.lng != null && (
                    <p className="mt-2 text-xs font-medium text-green-700">
                      ✓ Coordinates captured
                    </p>
                  )}
              </div>
            </div>

            <Button
              color="blue"
              type="button"
              onClick={getCurrentLocation}
              disabled={addressToReverseGeocodeMutation.isPending}
              className="w-full shrink-0 sm:w-auto"
            >
              {addressToReverseGeocodeMutation.isPending ? (
                <>
                  <Loader size="small" />
                  <span>Fetching Location...</span>
                </>
              ) : (
                <>
                  <FaLocationArrow size={15} />
                  <span>Get Coordinates</span>
                </>
              )}
            </Button>
          </div>

          <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <State formData={formData} setFormData={setFormData} />
            <District formData={formData} setFormData={setFormData} />
          </div>

          <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <City formData={formData} setFormData={setFormData} />

            <Input
              label="Locality"
              id="locality"
              name="locality"
              placeholder="Enter locality, area or village"
              value={formData.locality || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="border-t border-gray-100 pt-5">
            <h3 className="mb-4 text-sm font-semibold text-gray-700">
              GPS Coordinates
            </h3>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Input
                label="Latitude"
                id="lat"
                type="number"
                readOnly
                required
                value={formData.lat ?? ""}
                placeholder="Get coordinates above"
              />

              <Input
                label="Longitude"
                id="lng"
                type="number"
                readOnly
                required
                value={formData.lng ?? ""}
                placeholder="Get coordinates above"
              />
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Use the button above to capture your location.
            </p>
          </div>
        </section>

        <div className="flex justify-end pt-2">
          <Button type="submit" className="w-full sm:w-auto sm:min-w-40">
            <span>Next</span>
            <MdChevronRight size={22} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
