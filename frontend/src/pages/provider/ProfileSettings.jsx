import React, { useState } from "react";
import { MdFileUpload } from "react-icons/md";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const ProfileSettings = () => {
    const [imageData, setImageData] = useState(
    "https://randomuser.me/api/portraits/women/11.jpg",
  );
  return (
    <div
        className="md:shadow-[0_5px_20px_rgba(0,0,0,0.06)]  bg-white
      md:border md:border-slate-200
      rounded-2xl "
      >
        <div className="mb-5">
          <h1 className="text-3xl font-bold text-text">Profile Information</h1>
          <p className="text-sm text-muted mt-1">
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
                className="w-9 h-9 rounded-full bg-white absolute right-0 bottom-0 flex items-center justify-center text-white"
              >
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white ">
                  <input
                    id="uploadPhoto"
                    name="uploadPhoto"
                    type="file"
                    onChange={(e) => setImageData(e.target.value)}
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
            <div>
              <Input type="text" label="Full Name" id="Full Name" fullWidth />
              <Input
                type="Email Address"
                label="Email Address"
                id="Email Address"
                fullWidth
              />
            </div>
            <div>
              <Input
                type="tel"
                label="Phone Number"
                id="phone number"
                fullWidth
              />
              <Input
                type="number"
                label="Experience"
                id="experience"
                fullWidth
              />
            </div>
            <div>
              <label
                htmlFor="bio"
                className="block mb-2 font-medium text-lg md:text-sm "
              >
                Bio
              </label>
              <textarea
                name="bio"
                id="bio"
                rows={3}
                className="w-full text-lg border border-gray-300 px-3 py-2 rounded-md
focus:ring focus:ring-blue-500 focus:outline-none bg-white"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Button fullWidth color="success">
            Save Changes
          </Button>
        </div>
      </div>
  )
}

export default ProfileSettings