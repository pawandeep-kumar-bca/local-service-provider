import React from 'react'
import { useCity } from '../../hooks/useCity';

const City = ({formData,setFormData}) => {
      const { data: getCities, isLoading: getCitiesIsLoading } = useCity(
        formData.district?._id,
      );
      const cities = getCities?.allCities;
    
  return (
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
  )
}

export default City