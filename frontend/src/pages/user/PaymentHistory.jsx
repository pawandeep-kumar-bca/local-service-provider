import { IoSearchOutline } from "react-icons/io5";
import Button from "../../components/common/Button";

const PaymentHistory = () => {
  return (
    <div>
      <div className="p-4 shadow-[0_0_30px_rgba(0,0,0,0.40)]">
        <div className="flex md:flex-row flex-col md:justify-between md:items-center p-7">
          <h1 className="text-2xl font-semibold mt-3
          mb-3 md:text-3xl">Payment History</h1>
          <div className="flex gap-2 border border-muted rounded-lg py-1  px-2 items-center mb-4">
            <IoSearchOutline className="text-xl"/>
            <input type="text" placeholder="Search" className="w-full outline-0 text-xl"/>
          </div>
        </div>
        <div className="grid md:grid-cols-7 gap-4 ml-15">
          <Button color="success">All</Button>
          <Button color="white">Completed</Button>
          <Button color="white">Refunds</Button>
          <Button color="white">Pending</Button>
          <Button color="white">Failed</Button>
        </div>
        <div>
          <div className="py-3">
            <ul className="grid md:grid-cols-6 grid-cols-4 text-lg font-semibold   justify-items-center items-center ">
              <li>Provider</li>
              <li>Date</li>
              <li className="hidden md:flex">Payment ID</li>
              <li className="md:block hidden">Status</li>
              <li>Amount</li>
              <li>Action</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-6 grid-cols-4 text-sm font-semibold text-muted  justify-items-center  items-center">
            <h2>Aman Gupta</h2>
            <p>21 May 2024</p>
            <p className="hidden md:flex">#TXM5030</p>
            <Button className="hidden md:flex">Completed</Button>
            <h3>₹ 200</h3>
            <Button color="blue">View</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
