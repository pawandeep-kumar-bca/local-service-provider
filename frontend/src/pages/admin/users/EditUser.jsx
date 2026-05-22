import { useState } from "react";
import { MdFileUpload } from "react-icons/md";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import { FaAngleLeft } from "react-icons/fa";
const EditUser = () => {
  const [imageData, setImageData] = useState(
    "https://randomuser.me/api/portraits/women/11.jpg",
  );
  return (
    <div>
      <button
        className="flex items-center  cursor-pointer text-2xl text-text font-bold"
        type="button"
      >
        <FaAngleLeft />
        Back to Users
      </button>
      <div className="shadow-[0_0_20px_rgba(0,0,0,0.10)] p-5 rounded-xl mt-7">
        <h1 className="text-xl font-bold text-text mb-7">Edit User</h1>

        <div className="flex gap-3">
          <div className="flex flex-col items-center flex-1">
            <img
              src={imageData}
              alt="profile"
              className="object-cover w-25 h-25 rounded-full"
            />

            <label
              htmlFor="uploadPhoto"
              className=" cursor-pointer border-[2px] border-blue-400 font-bold text-sm rounded-lg text-blue-500 mt-5 inline-block  px-3 py-1"
            >
              <span>Change Photo</span>
              <input
                id="uploadPhoto"
                name="uploadPhoto"
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (file) {
                    setImageData(URL.createObjectURL(file));
                  }
                }}
                className="hidden"
              />
            </label>
            <p className="text-sm text-muted mt-2">
              JPG,PNG or JPGE ,Max size 2MB
            </p>
          </div>

          <div className="flex-2">
            <div className="flex gap-10">
              <Input type="text" label="Full Name" id="fullName" fullWidth />
              <Input
                type="email"
                label="Email Address"
                id="emailAddress"
                fullWidth
              />
            </div>
            <div className="flex gap-10">
              <Input
                type="tel"
                label="Phone Number"
                id="phoneNumber"
                fullWidth
              />
              <Input type="text" label="Address" id="address" fullWidth />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              {/* Status */}
              <div className="flex-1">
                <label
                  htmlFor="status"
                  className="block mb-2 font-medium text-lg md:text-sm text-text"
                >
                  Status
                </label>

                <select
                  name="status"
                  id="status"
                  defaultValue="active"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg 
      text-gray-700 font-medium bg-white 
      focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="suspended">Suspended</option>
                  <option value="blocked">Blocked</option>
                </select>
              </div>

              {/* Verification */}
              <div className="flex-1">
                <label
                  htmlFor="verified"
                  className="block mb-2 font-medium text-lg md:text-sm text-text"
                >
                  Verification Status
                </label>

                <select
                  name="verified"
                  id="verified"
                  defaultValue="verified"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg 
      text-gray-700 font-medium bg-white 
      focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="verified">Verified</option>
                  <option value="pending">Pending Verification</option>
                  <option value="not_verified">Not Verified</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <Button color="white">Cancel</Button>
          <Button color="success">Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
