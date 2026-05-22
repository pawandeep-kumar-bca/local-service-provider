import React, { useState } from "react";
import { MdFileUpload } from "react-icons/md";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const ProfileSettings = () => {
  const [imageData, setImageData] = useState(
    "https://randomuser.me/api/portraits/women/11.jpg",
  );
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-text">Profile Information</h1>
        <p className="md:text-sm text-muted text-lg mt-1">
          Update your personal details and profile information.
        </p>
      </div>
      <div>
        <div className="flex flex-col items-center ">
          <div className="relative inline-block">
            <img
              src={imageData}
              alt="profile"
              className="object-cover w-25 h-25 rounded-full"
            />

            <label
              htmlFor="uploadPhoto"
              className="w-9 h-9 cursor-pointer rounded-full bg-white absolute right-0 bottom-0 flex items-center justify-center text-white"
            >
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white ">
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
                <MdFileUpload size={24} />
              </div>
            </label>
          </div>
          <p className="text-sm text-muted mt-2">
            JPG,PNG or JPGE ,Max size 2MB
          </p>
        </div>
        <div className="mt-4">
          <div className="flex flex-col md:gap-3 md:flex-row">
            <Input type="text" label="Full Name" id="fullName" fullWidth />
            <Input
              type="Email Address"
              label="Email Address"
              id="emailAddress"
              fullWidth
            />
          </div>
          <div className="flex flex-col md:gap-3 md:flex-row">
            <Input
              type="tel"
              label="Phone Number"
              id="phone number"
              fullWidth
            />
            <Input type="number" label="Experience" id="experience" fullWidth />
          </div>
          <div className="flex flex-col md:gap-3 md:flex-row">
            <div className="flex-1">
              <label
                htmlFor="bio"
                className="block mb-2 font-medium text-lg md:text-sm "
              >
                Bio
              </label>
              <textarea
                name="bio"
                id="bio"
                rows={2}
                className="w-full text-lg border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-500 focus:outline-none bg-white"
              ></textarea>
            </div>
            <div className="mt-4 flex-1 flex items-end">
              <Button fullWidth color="success">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
