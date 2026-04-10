import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const Notification = () => {
  const [isOnline, setIsOnline] = useState(true);
  return (
    <div className="p-3 w-full md:w-[30%]">
      <div className="w-full shadow-[0_0_4px_rgba(0,0,0,0.30)] flex items-center justify-between gap-2 py-2   rounded-lg mb-3">
        <div className="relative">
          <img
            src="/assets/profile.png"
            alt="profile"
            className="w-[6rem] md:w-[4rem] flex-shrink-0 rounded-full object-cover cursor-pointer"
          />
          {isOnline ? (
            <div className="absolute h-[12px] w-[12px] rounded-full bg-[#16A34A] right-2 bottom-3 md:bottom-2"></div>
          ) : (
            <div className="absolute h-[12px] w-[12px] rounded-full border-3 bg-bg border-[#16A34A] p-1 right-2 bottom-3 md:bottom-2 "></div>
          )}
        </div>
        <div>
          <h1 className="text- font-semibold">Title</h1>
          <p className="text-sm">
            hello sir , I am Booking your services. when are you coming.
          </p>
        </div>
        <div className="mr-3">
          <p className="text-xs">12m</p>
          <BsThreeDots className="text-xl text-muted cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
