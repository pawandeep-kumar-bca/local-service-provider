
import React from "react";
import Input from "../../components/common/Input";
import { FaLocationArrow } from "react-icons/fa6";
import Button from "../../components/common/Button";
import { useCategories } from "../../hooks/useCategories";
import { useOutletContext } from "react-router-dom";
import { MdChevronRight, MdMyLocation } from "react-icons/md";
import State from "../../components/common/State";
import District from "../../components/common/District";
import City from "../../components/common/City";
import { useAddressToReverseGeocode } from "../../hooks/useAuth";
import Loader from "../../components/common/Loader";

const BasicInfo = () => {
  const { data, isLoading } = useCategories();

  const { formData, setFormData, phoneNumber, nextMoveForm } =
    useOutletContext();

  const { addressToReverseGeocodeMutation } =
    useAddressToReverseGeocode();

  const categories = data?.categories ?? [];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
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

          const location = response.location;

          setFormData((prev) => ({
            ...prev,
            lat: location.latitude,
            lng: location.longitude,
            state: location.state,
            district: location.district,
            city: location.city,
            locality: location.locality,
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

    if (
      formData.lat === "" ||
      formData.lat == null ||
      formData.lng === "" ||
      formData.lng == null
    ) {
      return alert("Please capture your current coordinates.");
    }

    if (!formData.locality?.trim()) {
      return alert("Please enter your locality.");
    }

    nextMoveForm();
  };

  const sectionHeading =
    "text-base md:text-lg font-semibold text-gray-800";

  const sectionDescription = "text-sm text-gray-500 mt-1";

  const sectionClass =
    "rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 md:p-6";

  const labelClass =
    "block mb-2 font-medium text-sm text-gray-700";

  const selectClass =
    "w-full text-sm border border-gray-300 text-slate-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white";

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
          Basic Information
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Add your service details and the location where you provide services.
        </p>
      </div>

      <form onSubmit={submitForm} className="space-y-6">
        {/* Basic Information */}
        <section className={sectionClass}>
          <div className="mb-5">
            <h2 className={sectionHeading}>Personal Information</h2>
            <p className={sectionDescription}>
              Enter your contact number and professional experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              label="Phone Number"
              id="phoneNumber"
              placeholder="Enter phone number"
              type="tel"
              maxLength={10}
              pattern="[0-9]{10}"
              value={phoneNumber}
              readOnly
              required
            />

            <Input
              label="Experience (Years)"
              id="experience"
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

        {/* Service Details */}
        <section className={sectionClass}>
          <div className="mb-5">
            <h2 className={sectionHeading}>Service Details</h2>
            <p className={sectionDescription}>
              Select your service category and set your pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              label="Price"
              id="price"
              placeholder="e.g. 500"
              type="number"
              min={0}
              value={formData.price}
              onChange={handleChange}
              required
            />

            <div className="w-full">
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

            <div className="w-full md:col-span-2">
              <label htmlFor="category" className={labelClass}>
                Service Category <span className="text-red-500">*</span>
              </label>

              <select
                name="category"
                id="category"
                required
                value={formData.category?._id || ""}
                onChange={(e) => {
                  const selectedCategory = categories.find(
                    (item) => item._id === e.target.value
                  );

                  setFormData((prev) => ({
                    ...prev,
                    category: selectedCategory || "",
                  }));
                }}
                className={selectClass}
              >
                <option value="" disabled>
                  Select service category
                </option>

                {isLoading ? (
                  <option value="" disabled>
                    Loading categories...
                  </option>
                ) : (
                  categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name.charAt(0).toUpperCase() +
                        category.name.slice(1)}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
        </section>

        {/* Location Information */}
        <section className={sectionClass}>
          <div className="mb-5">
            <h2 className={sectionHeading}>Location Information</h2>
            <p className={sectionDescription}>
              Set your service location to help customers find you nearby.
            </p>
          </div>

          {/* Get Coordinates - At the top of location section */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-blue-100 bg-blue-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <MdMyLocation size={23} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Use Your Current Location
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Capture your coordinates and automatically fill in the
                  available address details.
                </p>

                {formData.lat != null &&
                  formData.lat !== "" &&
                  formData.lng != null &&
                  formData.lng !== "" && (
                    <p className="text-xs text-green-700 font-medium mt-2">
                      ✓ Coordinates captured successfully
                    </p>
                  )}
              </div>
            </div>

            <Button
              color="blue"
              type="button"
              onClick={getCurrentLocation}
              disabled={addressToReverseGeocodeMutation.isPending}
              className="w-full sm:w-auto shrink-0"
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

          {/* State and District */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <State formData={formData} setFormData={setFormData} />

            <District
              formData={formData}
              setFormData={setFormData}
            />
          </div>

          {/* City and Locality */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <City formData={formData} setFormData={setFormData} />

            <Input
              label="Locality"
              id="locality"
              placeholder="Enter locality, area or village"
              value={formData.locality || ""}
              onChange={handleChange}
              required
            />
          </div>

          {/* Coordinates */}
          <div className="border-t border-gray-100 pt-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">
              GPS Coordinates
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input
                label="Latitude"
                id="lat"
                placeholder="e.g. 24.24423"
                type="number"
                readOnly
                required
                value={formData.lat ?? ""}
              />

              <Input
                label="Longitude"
                id="lng"
                placeholder="e.g. 86.24423"
                type="number"
                readOnly
                required
                value={formData.lng ?? ""}
              />
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Use the button above to capture your location. You can review
              the coordinates here.
            </p>
          </div>
        </section>

        {/* Form Actions */}
        <div className="flex justify-end pt-2">
          <Button className="w-full sm:w-auto sm:min-w-40">
            <span>Next</span>
            <MdChevronRight size={22} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
