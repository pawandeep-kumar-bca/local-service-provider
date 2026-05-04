import { IoSearchOutline } from "react-icons/io5";

import { NavLink, Outlet, useLocation } from "react-router-dom";



const PaymentHistory = () => {
  
  const location = useLocation();
  const isLocation = location.pathname.includes("payment-info");
  
  return (
    <div>
     
      <div className="shadow-[inset_0_0_3px_rgba(0,0,0,0.3)] rounded-lg">
        {!isLocation && (
          <>
            <div className="flex md:flex-row flex-col md:justify-between md:items-center md:px-7 px-2 md:pt-9 py-3 bg-slate-100 border-b">
              <h1
                className="text-2xl font-semibold 
          md:mb-3 mb-4 md:text-3xl"
              >
                Payment History
              </h1>
              <div className="flex gap-2 border border-muted rounded-lg py-1  px-2 items-center mb-4">
                <IoSearchOutline className="text-xl" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full outline-0 text-xl"
                />
              </div>
            </div>
            <div className="flex sticky top-21 bg-white overflow-x-auto no-scrollbar gap-4 md:px-3 px-2 text-lg font-semibold py-4 md:py-5 whitespace-nowrap whitespace-nowrap">
              <NavLink
                to="/user/payment-history"
                end
                className={({ isActive }) =>
                  `border px-4 py-1 rounded shrink-0 ${
                    isActive ? "bg-primary text-white" : "bg-white"
                  }`
                }
              >
                All
              </NavLink>

              <NavLink
                to="/user/payment-history/completed"
                className={({ isActive }) =>
                  `border px-4 py-1 rounded shrink-0 ${
                    isActive ? "bg-primary text-white" : "bg-white"
                  }`
                }
              >
                Completed
              </NavLink>

              <NavLink
                to="/user/payment-history/refund"
                className={({ isActive }) =>
                  `border px-4 py-1 rounded shrink-0 ${
                    isActive ? "bg-primary text-white" : "bg-white"
                  }`
                }
              >
                Refund
              </NavLink>

              <NavLink
                to="/user/payment-history/pending"
                className={({ isActive }) =>
                  `border px-4 py-1 rounded shrink-0 ${
                    isActive ? "bg-primary text-white" : "bg-white"
                  }`
                }
              >
                Pending
              </NavLink>

              <NavLink
                to="/user/payment-history/failed"
                className={({ isActive }) =>
                  `border px-4 py-1 rounded shrink-0 ${
                    isActive ? "bg-primary text-white" : "bg-white"
                  }`
                }
              >
                Failed
              </NavLink>
            </div>
            <div>
              <div className="py-3 bg-slate-100 border-b border-t border-muted">
                <ul className="grid md:grid-cols-6 grid-cols-4 text-lg md:text-xl font-semibold   justify-items-center items-center ">
                  <li>Provider</li>
                  <li>Date</li>
                  <li className="hidden md:flex">Payment ID</li>
                  <li className="md:block hidden">Status</li>
                  <li>Amount</li>
                  <li>Action</li>
                </ul>
              </div>
             
            </div>
          </>
        )}
        
      </div>
      <Outlet />
    </div>
  );
};

export default PaymentHistory;
