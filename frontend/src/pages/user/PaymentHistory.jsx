import { IoSearchOutline } from "react-icons/io5";
import Button from "../../components/common/Button";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import StatusBadge from "../../components/common/StatusBadge";


const PaymentHistory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLocation = location.pathname.includes("payment-info");
  const payments = [
    {
      id: 1,
      name: "Aman Gupta",
      date: "21 May 2024",
      transactionId: "#TXM5030",
      status: "completed",
      amount: 200,
    },
    {
      id: 2,
      name: "Rohit Sharma",
      date: "18 May 2024",
      transactionId: "#TXM5031",
      status: "pending",
      amount: 450,
    },
    {
      id: 3,
      name: "Priya Singh",
      date: "15 May 2024",
      transactionId: "#TXM5032",
      status: "failed",
      amount: 300,
    },
    {
      id: 4,
      name: "Ankit Verma",
      date: "10 May 2024",
      transactionId: "#TXM5033",
      status: "completed",
      amount: 150,
    },
    {
      id: 5,
      name: "Neha Sharma",
      date: "08 May 2024",
      transactionId: "#TXM5034",
      status: "pending",
      amount: 600,
    },
    {
      id: 6,
      name: "Vikas Yadav",
      date: "05 May 2024",
      transactionId: "#TXM5035",
      status: "completed",
      amount: 120,
    },
    {
      id: 7,
      name: "Sneha Kapoor",
      date: "03 May 2024",
      transactionId: "#TXM5036",
      status: "failed",
      amount: 350,
    },
    {
      id: 8,
      name: "Rahul Mehta",
      date: "01 May 2024",
      transactionId: "#TXM5037",
      status: "completed",
      amount: 500,
    },
    {
      id: 9,
      name: "Pooja Verma",
      date: "29 Apr 2024",
      transactionId: "#TXM5038",
      status: "pending",
      amount: 220,
    },
    {
      id: 10,
      name: "Karan Malhotra",
      date: "27 Apr 2024",
      transactionId: "#TXM5039",
      status: "completed",
      amount: 800,
    },

    {
      id: 11,
      name: "Simran Kaur",
      date: "25 Apr 2024",
      transactionId: "#TXM5040",
      status: "failed",
      amount: 410,
    },
    {
      id: 12,
      name: "Arjun Patel",
      date: "22 Apr 2024",
      transactionId: "#TXM5041",
      status: "completed",
      amount: 275,
    },
    {
      id: 13,
      name: "Nikhil Jain",
      date: "20 Apr 2024",
      transactionId: "#TXM5042",
      status: "pending",
      amount: 330,
    },
    {
      id: 14,
      name: "Meena Iyer",
      date: "18 Apr 2024",
      transactionId: "#TXM5043",
      status: "completed",
      amount: 190,
    },
    {
      id: 15,
      name: "Saurabh Mishra",
      date: "16 Apr 2024",
      transactionId: "#TXM5044",
      status: "failed",
      amount: 520,
    },
    {
      id: 16,
      name: "Kavita Singh",
      date: "14 Apr 2024",
      transactionId: "#TXM5045",
      status: "inactive",
      amount: 260,
    },
    {
      id: 17,
      name: "Deepak Kumar",
      date: "12 Apr 2024",
      transactionId: "#TXM5046",
      status: "pending",
      amount: 145,
    },
    {
      id: 18,
      name: "Riya Sharma",
      date: "10 Apr 2024",
      transactionId: "#TXM5047",
      status: "active",
      amount: 700,
    },
    {
      id: 19,
      name: "Manish Gupta",
      date: "08 Apr 2024",
      transactionId: "#TXM5048",
      status: "failed",
      amount: 390,
    },
    {
      id: 20,
      name: "Alok Singh",
      date: "05 Apr 2024",
      transactionId: "#TXM5049",
      status: "completed",
      amount: 180,
    },
  ];
  return (
    <div>
     
      <div className="shadow-[inset_0_0_3px_rgba(0,0,0,0.3)]">
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
                to="/payments/all"
                className={({ isActive }) =>
                  `border px-4 py-1 rounded shrink-0 ${
                    isActive ? "bg-primary text-white" : "bg-white"
                  }`
                }
              >
                All
              </NavLink>

              <NavLink
                to="/payments/completed"
                className={({ isActive }) =>
                  `border px-4 py-1 rounded shrink-0 ${
                    isActive ? "bg-primary text-white" : "bg-white"
                  }`
                }
              >
                Completed
              </NavLink>

              <NavLink
                to="/payments/refunds"
                className={({ isActive }) =>
                  `border px-4 py-1 rounded shrink-0 ${
                    isActive ? "bg-primary text-white" : "bg-white"
                  }`
                }
              >
                Refunds
              </NavLink>

              <NavLink
                to="/payments/pending"
                className={({ isActive }) =>
                  `border px-4 py-1 rounded shrink-0 ${
                    isActive ? "bg-primary text-white" : "bg-white"
                  }`
                }
              >
                Pending
              </NavLink>

              <NavLink
                to="/payments/failed"
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
              <div>
                {payments.map((item) => (
                  <div key={item.id}>
                    <div className="grid md:grid-cols-6 grid-cols-4 text-sm md:text-lg font-semibold text-muted justify-items-center items-center py-3">
                      <h2>{item.name}</h2>
                      <p>{item.date}</p>

                      <p className="hidden md:flex">{item.transactionId}</p>

                      <div className="hidden md:flex">
                        <StatusBadge badge={item.status}>
                          {item.status}
                        </StatusBadge>
                      </div>

                      <h3>₹ {item.amount}</h3>

                      <Button
                        color="blue"
                        onClick={() => navigate(`payment-info`)}
                      >
                        View
                      </Button>
                    </div>

                    <div className="w-full h-[1px] bg-muted"></div>
                  </div>
                ))}
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
