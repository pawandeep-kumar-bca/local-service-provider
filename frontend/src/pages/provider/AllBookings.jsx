import React from 'react'
import { FaRegCalendarMinus } from "react-icons/fa";
import { IoIosChatboxes, IoMdCall } from "react-icons/io";
import { MdLocationPin, MdOutlinePlumbing } from "react-icons/md";
import Button from "../../components/common/Button";
import { NavLink } from "react-router-dom";

const AllBookings = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-3 md:p-3">
      {/* left side */}
      <div className="md:w-[50%] shadow-[inset_0_0_3px_rgba(0,0,0,0.3)] rounded pt-4 px-3">
        <div className="mb-5 overflow-hidden">
          <ul className="flex gap-3 text-lg md:justify-between md:text-lg font-semibold md:p-4 overflow-x-auto">
            <NavLink className="border px-2 py-1 rounded">Incoming</NavLink>
            <NavLink className="border px-2 py-1 rounded">Upcoming</NavLink>
            <NavLink className="border px-2 py-1 rounded">Accepted</NavLink>
            <NavLink className="border px-2 py-1 rounded">Completed</NavLink>
            <NavLink className="border px-2 py-1 rounded">Pending</NavLink>
          </ul>
        </div>
        <div className="shadow-[inset_0_0_3px_rgba(0,0,0,0.3)] md:p-4">
          <div className="shadow-[0_0_30px_rgba(0,0,0,0.38)] rounded flex items-center mb-3">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-[5rem] h-[5rem] rounded-full object-cover 
            "
            />
            <div className="flex items-center justify-between w-full px-2 py-3">
              <div>
                <h1 className="text-lg font-semibold">Ashish verma</h1>
                <div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1">
                      <MdOutlinePlumbing className="text-lg" />
                      <p>Plumbing</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <MdLocationPin className="text-lg" /> Delhi
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegCalendarMinus className="text-lg" />
                    <p className="text-sm">May 20 ,2023 - 11:30 PM</p>
                  </div>
                </div>
              </div>
              <h1 className="text-lg font-bold mr-3"> ₹ 250</h1>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="md:w-[50%] shadow-[0_0_30px_rgba(0,0,0,0.38)] rounded p-3 pb-8">
        <div>
          <div className="flex gap-1 items-center">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-[5rem] md:w-[4.5rem] md:h-[4.5rem] h-[5rem] rounded-full object-cover 
            "
            />
            <div>
              <h2 className="text-xl font-semibold">Ahish sharma</h2>
              <p className="text-muted md:text-sm ">Plumbing Service</p>
            </div>
          </div>
          <div className="flex gap-3 ml-3 mt-2">
            <Button color="white" className="text-success">
              <IoMdCall className="text-2xl md:text-xl" /> Call
            </Button>
            <Button color="white" className="text-primary">
              <IoIosChatboxes className="text-2xl md:text-xl" /> Chat
            </Button>
          </div>
        </div>
        <div className="mt-7 md:mt-5">
          <h1 className="text-xl font-semibold mb-3">Booking Info:</h1>
          <div>
            <div className="flex gap-3 items-center">
              <h3 className="text-lg">ID:#1234 </h3>
              <Button color="white" className="text-primary">
                Incoming
              </Button>
            </div>
            <div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-2 items-center">
                  <FaRegCalendarMinus className="text-2xl text-success md:text-xl" />
                  <p className="text-lg font-light md:font-semibold md:text-sm">
                    May 20 ,2023 - 11:30 PM
                  </p>
                </div>
                <h1 className="text-2xl md:text-xl font-semibold">₹ 240</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 md:mt-5">
          <h1 className="text-xl font-semibold mb-3">Update Booking Status</h1>
          <div className="flex gap-5 w-full justify-center">
            <Button fullWidth>Accept</Button>
            <Button color="white" className="text-danger text-center" fullWidth>
              Reject
            </Button>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default AllBookings