import { IoSearchOutline } from "react-icons/io5";
import Button from "../../components/common/Button";

const PaymentHistory = () => {
  return (
    <div>
      <div className=" shadow-[0_0_30px_rgba(0,0,0,0.40)]">
        <div className="flex md:flex-row flex-col md:justify-between md:items-center md:px-7 px-2 md:pt-9 py-3 bg-muted/20 border-b">
          <h1 className="text-2xl font-semibold 
          md:mb-3 mb-4 md:text-3xl">Payment History</h1>
          <div className="flex gap-2 border border-muted rounded-lg py-1  px-2 items-center mb-4">
            <IoSearchOutline className="text-xl"/>
            <input type="text" placeholder="Search" className="w-full outline-0 text-xl"/>
          </div>
        </div>
        <div className="grid md:grid-cols-7 grid-cols-5  gap-4 md:px-15 px-1 py-4 md:py-5">
          <Button color="success">All</Button>
          <Button color="white">Completed</Button>
          <Button color="white">Refunds</Button>
          <Button color="white">Pending</Button>
          <Button color="white">Failed</Button>
        </div>
        <div>
          <div className="py-3 bg-muted/20 border-b border-t border-muted">
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
          <div>
           <div className="grid md:grid-cols-6 grid-cols-4 text-sm md:text-lg font-semibold text-muted  justify-items-center  items-center md:py-3 py-2">
            <h2>Aman Gupta</h2>
            <p>21 May 2024</p>
            <p className="hidden md:flex">#TXM5030</p>
            <Button className="hidden md:flex">Completed</Button>
            <h3>₹ 200</h3>
            <Button color="blue">View</Button>
          </div>
          <div className="w-full h-[1px] bg-muted my-3"></div>
           </div>
          <div>
           <div className="grid md:grid-cols-6 grid-cols-4 text-sm md:text-lg font-semibold text-muted  justify-items-center  items-center md:py-3 py-2">
            <h2>Aman Gupta</h2>
            <p>21 May 2024</p>
            <p className="hidden md:flex">#TXM5030</p>
            <Button className="hidden md:flex">Completed</Button>
            <h3>₹ 200</h3>
            <Button color="blue">View</Button>
          </div>
          <div className="w-full h-[1px] bg-muted my-3"></div>
           </div>
          <div>
           <div className="grid md:grid-cols-6 grid-cols-4 text-sm md:text-lg font-semibold text-muted  justify-items-center  items-center md:py-3 py-2">
            <h2>Aman Gupta</h2>
            <p>21 May 2024</p>
            <p className="hidden md:flex">#TXM5030</p>
            <Button className="hidden md:flex">Completed</Button>
            <h3>₹ 200</h3>
            <Button color="blue">View</Button>
          </div>
          <div className="w-full h-[1px] bg-muted my-3"></div>
           </div>
          <div>
           <div className="grid md:grid-cols-6 grid-cols-4 text-sm md:text-lg font-semibold text-muted  justify-items-center  items-center md:py-3 py-2">
            <h2>Aman Gupta</h2>
            <p>21 May 2024</p>
            <p className="hidden md:flex">#TXM5030</p>
            <Button className="hidden md:flex">Completed</Button>
            <h3>₹ 200</h3>
            <Button color="blue">View</Button>
          </div>
          <div className="w-full h-[1px] bg-muted my-3"></div>
           </div>
          <div>
           <div className="grid md:grid-cols-6 grid-cols-4 text-sm md:text-lg font-semibold text-muted  justify-items-center  items-center md:py-3 py-2">
            <h2>Aman Gupta</h2>
            <p>21 May 2024</p>
            <p className="hidden md:flex">#TXM5030</p>
            <Button className="hidden md:flex">Completed</Button>
            <h3>₹ 200</h3>
            <Button color="blue">View</Button>
          </div>
          <div className="w-full h-[1px] bg-muted my-3"></div>
           </div>
          </div>
        </div>
          <div>
           <div className="grid md:grid-cols-6 grid-cols-4 text-sm md:text-lg font-semibold text-muted  justify-items-center  items-center md:py-3 py-2">
            <h2>Aman Gupta</h2>
            <p>21 May 2024</p>
            <p className="hidden md:flex">#TXM5030</p>
            <Button className="hidden md:flex">Completed</Button>
            <h3>₹ 200</h3>
            <Button color="blue">View</Button>
          </div>
          <div className="w-full h-[1px] bg-muted my-3"></div>
           </div>
          <div>
           <div className="grid md:grid-cols-6 grid-cols-4 text-sm md:text-lg font-semibold text-muted  justify-items-center  items-center md:py-3 py-2">
            <h2>Aman Gupta</h2>
            <p>21 May 2024</p>
            <p className="hidden md:flex">#TXM5030</p>
            <Button className="hidden md:flex">Completed</Button>
            <h3>₹ 200</h3>
            <Button color="blue">View</Button>
          </div>
          <div className="w-full h-[1px] bg-muted my-3"></div>
           </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
