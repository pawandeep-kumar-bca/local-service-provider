import React, { useState } from "react";
import { IoEyeOff ,IoEyeOutline} from "react-icons/io5";
const Input = ({
  label,
  id,
  type = "text",
  error,
  className="",
  required = false,
  fullWidth = true,
  placeholder='',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className={`${fullWidth ? "w-full" : "w-auto"} mb-4`}>
      
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 font-medium text-lg md:text-sm "
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Input Wrapper */}
      <div className="relative">
        <input
          id={id}
          name={id}
          placeholder={placeholder}
          type={isPassword && showPassword ? "text" : type}
          className={`w-full text-sm  border border-gray-300 text-slate-700 px-4 py-3 rounded-xl focus:ring focus:ring-blue-500 focus:outline-none bg-white ${className}`}
          {...props}
        />

        {/* Show/Hide Password */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-4  text-lg text-gray-500"
          >
            {showPassword ? <IoEyeOff/>:<IoEyeOutline/> }
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-end mr-1 text-xs font-medium mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;