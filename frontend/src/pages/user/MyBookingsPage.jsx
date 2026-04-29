import { NavLink, Outlet } from "react-router-dom";


const MyBookingsPage = () => {
  
  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold ">My Bookings</h1>

      <div className="relative">
       <div className="mb-5 overflow-hidden sticky top-21 bg-white z-40 pb-5 md:pb-0 pt-3 md:pt-0">
          <ul className="flex gap-3 text-lg md:text-lg font-semibold md:p-4 overflow-x-auto">
            <NavLink to="/user/my-bookings" end className={({isActive})=>`border px-4 py-1 rounded ${isActive ?"bg-primary text-bg":"bg-bg text-text"}`}>All</NavLink>
            <NavLink to="/user/my-bookings/upcoming" className={({isActive})=>`border px-4 py-1 rounded ${isActive ?"bg-primary text-bg":"bg-bg text-text"}`}>Upcoming</NavLink>
            <NavLink to="/user/my-bookings/active" className={({isActive})=>`border px-4 py-1 rounded ${isActive ?"bg-primary text-bg":"bg-bg text-text"}`}>Active</NavLink>
            <NavLink to="/user/my-bookings/completed" className={({isActive})=>`border px-4 py-1 rounded ${isActive ?"bg-primary text-bg":"bg-bg text-text"}`}>Completed</NavLink>
            <NavLink to="/user/my-bookings/canceled" className={({isActive})=>`border px-4 py-1 rounded ${isActive ?"bg-primary text-bg":"bg-bg text-text"}`}>Canceled</NavLink>
          </ul>
        </div>
       
      <Outlet/>
      </div>
    </div>
  );
};

export default MyBookingsPage;
