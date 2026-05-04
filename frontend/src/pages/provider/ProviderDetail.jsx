import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Button from "../../components/common/Button";
const ProviderDetail = () => {
  return (
    <div>
      <div className="flex w-full justify-between flex-col md:flex-row  md:items-center">
        <div className="flex gap-3 items-center">
          <img
            src="/assets/profile.png"
            alt="profile"
            className="object-cover w-[5rem] h-[5rem] rounded-full"
          />

          <div className="w-full flex flex-col gap-1 ">
            <h1 className="md:text-2xl font-semibold">Aman Gupta</h1>

            <div className="flex items-center gap-2 text-yellow-500">
              <div className="flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className="text-muted text-sm">400 Reviews</h2>
            </div>
            <div className="flex items-center gap-2">
              <IoShieldCheckmarkOutline className="text-success " />
              <h3>Available Now</h3>
            </div>
          </div>
        </div>
        <div className="shadow-[inset_0_0_3px_rgba(0,0,0,0.3)] py-2 px-3 rounded flex md:flex-col justify-between items-center gap-6 mt-4">
          <h3 className="flex items-center text-xl font-bold mb-2">
            <MdOutlineCurrencyRupee /> 250/hr
          </h3>
          <Button fullWidth>Book Now</Button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-muted my-2"></div>
      <div>
        <h1>About Me</h1>
        <h1>
          Hi, I am Aman gupta . I have 5+ years of experience in home services.
          I am professional and reliable.
        </h1>
      </div>
      <div>
        <div>
          <h2>Select Service</h2>
          <div>
            <div>
              <input type="radio" name="Home Cleaning" id="Home_Cleaning" />
              <label htmlFor="Home_Cleaning">Home Cleaning</label>
            </div>
            <h3 className="flex items-center text-xl font-bold">
              <MdOutlineCurrencyRupee /> 250/hr
            </h3>
          </div>
        </div>


        <div>
          <h3>Reviews <span>(400)</span></h3>
          <div>
            4
            <div className="flex text-yellow-500 gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            <div>

            </div>
          </div>
          <div>
            <div>
              5 <FaStar />
              <input type="range" />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default ProviderDetail;
