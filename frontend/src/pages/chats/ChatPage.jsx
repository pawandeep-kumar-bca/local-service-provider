import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { GrAttachment } from "react-icons/gr";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosSearch, IoMdCall } from "react-icons/io";

const ChatPage = () => {
  return (
    <div className="w-full md:flex gap-2 md:p-3">
      <div className="md:w-[30%] shadow-[0_4px_10px_rgba(0,0,0,0.30)]">
        <div className="w-full sticky top-0 bg-bg pt-3 px-3 shadow-[0_4px_10px_rgba(0,0,0,0.30)] pb-1 z-90">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Chats</h1>
            <BsThreeDots className="text-2xl font-semibold cursor-pointer" />
          </div>
          <div className="w-full h-[1px] bg-muted mt-3 mb-3"></div>
          <div className="flex items-center gap-1 border border-muted rounded-lg p-2 mb-4">
            <IoIosSearch className="text-2xl" />
            <input
              type="text"
              placeholder="Search"
              className="text-lg w-full outline-0"
            />
          </div>
        </div>

        <div className="p-3">
          <div className="flex gap-1 shadow-[0_0_30px_rgba(0,0,0,0.20)] py-1 px-2 rounded-lg  mb-2">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-[5rem] h-[5rem] rounded-full object-cover"
            />
            <div className="flex items-center justify-between w-full">
              <div>
                <h1 className="text-lg font-semibold">Aman gupta</h1>
                <p>Electrician</p>
                <p>See you them!</p>
              </div>
              <h4 className="text-lg font-semibold">4:19 PM</h4>
            </div>
          </div>
          <div className="flex gap-1 shadow-[0_0_30px_rgba(0,0,0,0.20)] py-1 px-2 rounded-lg  mb-2">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-[5rem] h-[5rem] rounded-full object-cover"
            />
            <div className="flex items-center justify-between w-full">
              <div>
                <h1 className="text-lg font-semibold">Aman gupta</h1>
                <p>Electrician</p>
                <p>See you them!</p>
              </div>
              <h4 className="text-lg font-semibold">4:19 PM</h4>
            </div>
          </div>
          <div className="flex gap-1 shadow-[0_0_30px_rgba(0,0,0,0.20)] py-1 px-2 rounded-lg  mb-2">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-[5rem] h-[5rem] rounded-full object-cover"
            />
            <div className="flex items-center justify-between w-full">
              <div>
                <h1 className="text-lg font-semibold">Aman gupta</h1>
                <p>Electrician</p>
                <p>See you them!</p>
              </div>
              <h4 className="text-lg font-semibold">4:19 PM</h4>
            </div>
          </div>
          <div className="flex gap-1 shadow-[0_0_30px_rgba(0,0,0,0.20)] py-1 px-2 rounded-lg  mb-2">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-[5rem] h-[5rem] rounded-full object-cover"
            />
            <div className="flex items-center justify-between w-full">
              <div>
                <h1 className="text-lg font-semibold">Aman gupta</h1>
                <p>Electrician</p>
                <p>See you them!</p>
              </div>
              <h4 className="text-lg font-semibold">4:19 PM</h4>
            </div>
          </div>
          <div className="flex gap-1 shadow-[0_0_30px_rgba(0,0,0,0.20)] py-1 px-2 rounded-lg  mb-2">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-[5rem] h-[5rem] rounded-full object-cover"
            />
            <div className="flex items-center justify-between w-full">
              <div>
                <h1 className="text-lg font-semibold">Aman gupta</h1>
                <p>Electrician</p>
                <p>See you them!</p>
              </div>
              <h4 className="text-lg font-semibold">4:19 PM</h4>
            </div>
          </div>
          <div className="flex gap-1 shadow-[0_0_30px_rgba(0,0,0,0.20)] py-1 px-2 rounded-lg  mb-2">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-[5rem] h-[5rem] rounded-full object-cover"
            />
            <div className="flex items-center justify-between w-full">
              <div>
                <h1 className="text-lg font-semibold">Aman gupta</h1>
                <p>Electrician</p>
                <p>See you them!</p>
              </div>
              <h4 className="text-lg font-semibold">4:19 PM</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[70%] shadow-[0_4px_10px_rgba(0,0,0,0.30)] relative ">
        <div className="flex gap-1 shadow-[0_0_30px_rgba(0,0,0,0.20)] py-1 px-2 rounded-lg  mb-2">
          <img
            src="/assets/profile.png"
            alt="profile"
            className="w-[5rem] h-[5rem] rounded-full object-cover"
          />
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-lg font-semibold">Aman gupta</h1>
              <p>Electrician</p>
            </div>
            <div className="flex gap-3">
              <IoMdCall className="text-xl text-muted cursor-pointer" />
              <HiDotsVertical className="text-xl text-muted cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="absolute left-0 bottom-40 ml-3 bg-primary/20 py-1 px-3 rounded">
          Ram
        </div>
        <div className="absolute right-0 bottom-30 mr-3 bg-muted/20 py-1 px-3 rounded">
          Ram
        </div>

        <div className="absolute bottom-0 flex w-full py-4  px-14">
          <div className="flex items-center gap-4 w-full   shadow-[0_0_30px_rgba(0,0,0,0.20)] p-2 rounded-lg ">
            <GrAttachment className="text-lg text-muted cursor-pointer" />
            <div className="flex w-full items-center">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full outline-0"
              />
              <FiSend className="w-[3.4rem] h-[2.3rem] bg-success rounded-lg text-bg p-2 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
