import React from 'react'
import { useDistrict } from '../../hooks/useDistricts';

const District = ({formData,setFormData}) => {
      const { data: getDistrict, isLoading: getDistrictIsLoading } = useDistrict(
        formData.state?._id,
      );
    
      const districts = getDistrict?.AllDistricts;
    
  return (
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
  )
}

export default District