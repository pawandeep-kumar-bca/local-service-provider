import React, { useState } from "react";

import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useAddressToReverseGeocode } from "../../../../../hooks/useAuth";
const Location = () => {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem("location") || "{}"),
  );

  const { addressToReverseGeocodeMutation } = useAddressToReverseGeocode();
  const selectCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        await addressToReverseGeocodeMutation.mutateAsync(
          { latitude, longitude },
          {
            onSuccess: (data) => {
              const locationData = {
                latitude,
                longitude,
                state: data.location.state.name,
                district: data.location.district.name,
                city: data.location.city.name,
                locality: data.location.locality,
              };

              localStorage.setItem("location", JSON.stringify(locationData));

              setAddress(locationData);
              setOpen(false);
            },
          },
        );
      },
      (error) => {
        console.error(error);
        switch (error.code) {
          case error.POSITION_UNAVAILABLE:
            alert("Location unavailable");
            break;
          case error.PERMISSION_DENIED:
            alert("Permission Denied");
            break;

          

          case error.TIMEOUT:
            alert("Location timeout");
            break;

          default:
            alert(error.message);
        }
      },
    );
  };

  return (
    <>
      <div
        className="cursor-pointer relative"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-1">
          <CiLocationArrow1 className="text-sm md:text-lg" />
          <h1 className="text-xs md:text-sm font-bold">
            {address?.district ||
              address?.state_district ||
              address?.state ||
              "Your Location"}
          </h1>
        </div>

        <div className="flex items-end gap-2">
          <p className="text-xs md:text-sm text-gray-600">
            {address?.city ||
              address?.town ||
              address?.village ||
              "Click to select"}
          </p>
          <IoIosArrowDown className="text-sm md:text-lg font-bold text-black" />
        </div>
      </div>
      {open && (
        <button
          type="button"
          className="absolute -bottom-7 right-15 py-2 px-3 rounded-xl bg-blue-500 text-white font-semibold cursor-pointer"
          onClick={selectCurrentLocation}
        >
          Select Current Location
        </button>
      )}
    </>
  );
};

export default Location;
