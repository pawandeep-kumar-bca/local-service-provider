import React from "react";
import Button from "../../../components/common/Button";
import { MdOutlineChevronLeft, MdOutlineEmail, MdOutlineFileDownload, MdOutlinePhone, MdWorkOutline } from "react-icons/md";
import UserInfo from "../../../components/common/admin/UserInfo";
import { CiLocationOn } from "react-icons/ci";
const PaymentTransitionDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">Transaction Details</h1>
        <Button color="green">
          <MdOutlineChevronLeft size={24} />
          Back
        </Button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-black">#TXN1023</h1>
            <div className="rounded-lg bg-green-100 border border-green-200 flex items-center gap-2 px-3 py-1">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <h3 className="text-green-500 text-sm font-bold">Paid</h3>
            </div>
          </div>
          <p className="text-muted text-sm mt-2">May 12,2024 at 10:20 AM</p>
        </div>
        <Button color="purple">
          <MdOutlineFileDownload size={24} />
          View Invoice{" "}
        </Button>
      </div>

      <div className="flex gap-2">
        <div className="border border-gray-100 rounded-lg bg-white p-3 shadow-[0_0_5px_rgba(0,0,0,0.10)]">
          <h1>Transaction Information</h1>
          <div>
            <div>
                <h3>Transition ID</h3>
                <p>#TXN03423</p>
            </div>
            <div>
                <h3>Booking ID</h3>
                <p>#BKO03423</p>
            </div>
            <div>
                <h3>Service Category</h3>
                <p>Plumbing</p>
            </div>
            <div>
                <h3>Payment Method</h3>
                <p>UPI</p>
            </div>
            <div>
                <h3>Payment Gateway Id</h3>
                <p>PAYTM24234</p>
            </div>
            <div>
                <h3>Transition Date & Time</h3>
                <p>May 12,2024 at 10:20 PM</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-100 rounded-lg bg-white p-3 shadow-[0_0_5px_rgba(0,0,0,0.10)]">
          <h1>Customer Details</h1>
          <UserInfo image='https://randomuser.me/api/portraits/women/34.jpg' name="Ram" id="#USR0934"/>
          <div>
            <MdOutlinePhone size={20}/>
            <p>+91 75343 23452</p>
          </div>
          <div>
            <MdOutlineEmail size={20}/>
            <p>ram343@gmail.com</p>
          </div>
          <div>
            <CiLocationOn size={20}/>
            <p>Block A,Noida sector 2 </p>
          </div>
        </div>
        <div className="border border-gray-100 rounded-lg bg-white p-3 shadow-[0_0_5px_rgba(0,0,0,0.10)]">
          <h1>Provider Details</h1>
          <UserInfo image='https://randomuser.me/api/portraits/women/55.jpg' name="Manish" id="#PRO0934"/>
           <div>
            <MdOutlinePhone size={20}/>
            <p>+91 75343 23452</p>
          </div>
          <div>
            <MdOutlineEmail size={20}/>
            <p>ram343@gmail.com</p>
          </div>
          <div>
            <MdWorkOutline size={20}/>
            <p>5+ years of experience</p>
          </div>
        </div>
        <div className="border border-gray-100 rounded-lg bg-white p-3 shadow-[0_0_5px_rgba(0,0,0,0.10)]">
          <h1>Payment Breakdown</h1>
          <div>
            <h1>Service Amount</h1>
            <p>₹ 1,200</p>
          </div>
          <div>
            <h3>Platform Fee</h3>
            <p>₹ 100</p>
          </div>
          <div>
            <h3>Provider Earnings</h3>
            <p>₹ 1,100</p>
          </div>
          <div>
            <h3>Total Paid</h3>
            <p>₹ 1,200</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTransitionDetails;
