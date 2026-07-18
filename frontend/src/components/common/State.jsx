import React from 'react'
import { useStates } from '../../hooks/useStates';

const State = () => {
     const { data: getState, isLoading: getStateIsLoading } = useStates();
      const states = getState?.allStates;
  return (
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
                // value={formData.state?._id || ""}
                // onChange={(e) => {
                //   const selectedState = states?.find(
                //     (item) => item._id === e.target.value,
                //   );
                //   setFormData((prev) => ({
                //     ...prev,

                //     state: selectedState,

                //     district: null,

                //     city: null,
                //   }));
                // }}
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
  )
}

export default State