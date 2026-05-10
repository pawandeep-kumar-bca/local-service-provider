import { BsThreeDots } from "react-icons/bs";
import StatusBudge from "../../components/common/StatusBadge";
import { MdCancel } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
const Notification = ({ setOpenNotification }) => {
  const base =
    "whitespace-nowrap border shrink-0 transition-all duration-300 px-4 md:text-sm py-1 rounded-xl ";
  const active = "bg-primary text-white";
  const notActive = "border-muted border text-black";
  return (
    <div
  className="
    w-full
    h-screen

    md:max-w-md
    md:max-h-[82vh]
    md:h-auto
    md:overflow-y-auto

    md:fixed
    md:right-8
    md:top-20

    md:rounded-2xl

    bg-white

    z-50

    border border-gray-100

    md:shadow-[0_20px_60px_rgba(0,0,0,0.18)]

    backdrop-blur-xl

    transition-all
    duration-300
  "
>
      <div className="md:py-4 md:px-3 py-3 px-1 sticky top-0 z-20 bg-white flex md:gap-4 gap-1 relative">
        <button
          onClick={() => setOpenNotification(false)}
          type="button"
          className="absolute md:right-3 right-2 md:top-2 top-3 bg-gray-50 hover:bg-gray-200 rounded-full md:p-2 p-1 transaction-all duration-200 cursor-pointer"
        >
          <IoCloseOutline size={24} />
        </button>
        <NavLink
          to="/user/notification"
          className={({ isActive }) =>
            `${base} ${isActive ? `${active}` : `${notActive}`}`
          }
        >
          All
        </NavLink>
        <NavLink
          to="/user/notification/unread"
          className={({ isActive }) =>
            `${base} ${isActive ? `${active}` : `${notActive}`}`
          }
        >
          Unread
        </NavLink>
        <NavLink
          to="/user/notification/booking"
          className={({ isActive }) =>
            `${base} ${isActive ? `${active}` : `${notActive}`}`
          }
        >
          Booking
        </NavLink>
        <NavLink
          to="/user/notification/message"
          className={({ isActive }) =>
            `${base} ${isActive ? `${active}` : `${notActive}`}`
          }
        >
          Message
        </NavLink>
      </div>
      <div className="w-full border-t border-gray-200 "></div>
      <div>
        <div className="w-full  flex items-center justify-between gap-3 p-3  rounded-md hover:bg-gray-50 cursor-pointer transition-all duration-300">
          <div className="flex gap-3">
            <div
              className=" w-16 h-16 min-w-16 rounded-full bg-red-100 flex items-center justify-center shadow-sm
  "
            >
              <MdCancel size={38} className="text-red-500" />
            </div>

            <div>
              <h1 className=" font-semibold text-lg">Booking Confirmed</h1>
              <h2 className="text-sm font-semibold">Rohit Sharma (Plumber)</h2>
              <p className="text-sm">has confirmed your booking.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs">12m ago</p>
            <BsThreeDots className="text-xl text-muted cursor-pointer" />
          </div>
        </div>
        <div className="w-full border-t border-gray-200 "></div>
        <div className="w-full  flex items-center justify-between gap-3 p-3  rounded-lg hover:bg-gray-200 cursor-pointer transition-all duration-300">
          <div className="flex gap-3">
            <div
              className=" w-16 h-16 min-w-16 rounded-full bg-red-100 flex items-center justify-center shadow-sm
  "
            >
              <MdCancel size={38} className="text-red-500" />
            </div>

            <div>
              <h1 className=" font-semibold text-lg">Booking Confirmed</h1>
              <h2 className="text-sm font-semibold">Rohit Sharma (Plumber)</h2>
              <p className="text-sm">has confirmed your booking.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 min-w-fit">
            <p className="text-xs">12m ago</p>
            <BsThreeDots className="text-xl text-muted cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
