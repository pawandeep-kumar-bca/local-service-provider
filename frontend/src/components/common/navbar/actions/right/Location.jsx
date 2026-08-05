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
              localStorage.setItem("location", JSON.stringify(data.address));
              setAddress(data.address);
              setOpen(false);
            },
          },
        );
      },
      (error) => {
        console.error(error);
        alert("Location access denied.");
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
          <CiLocationArrow1 className="text-lg" />
          <h1 className="text-sm font-bold">
            {address?.state_district || address?.state}
          </h1>
        </div>

        <div className="flex items-end gap-2">
          <p className="text-sm text-gray-600">
            {address?.city || address?.town || address?.village}
          </p>
          <IoIosArrowDown className="text-lg font-bold text-black" />
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
