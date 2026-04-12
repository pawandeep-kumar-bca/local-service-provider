import React from "react";
import Button from "../../components/common/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdDateRange, MdEmail } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";

const PaymentInfo = () => {
  return (
    <div>
      <div>
        <FaArrowLeftLong />
        <h1>Transaction Details</h1>
      </div>
      <div>
        {/* detail card */}
        <div>
          {/* profile info */}
          <div>
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-12 rounded-full object-cover cursor-pointer"
            />
            <div>
                <h1>Aman Gupta</h1>
                <p>Customer</p>
            </div>
          </div>
          {/* Email detail */}
          <div>
            <div>
                <div>
                    <IoMdCall />
                    <h3>+91 768399493</h3>
                </div>
                <div>
                    <MdEmail />
                    <h3>aman@gmail.com</h3>
                </div>
            </div>
            <Button>Completed</Button>
          </div>

          {/* transaction Info */}

          <div>
            {/* transaction info */}
            <div>
                <h1>Transaction Info</h1>
                <div>
                    <div>
                        <h2>Payment Id</h2>
                        <h3>#34254</h3>
                    </div>
                    <div>
                        <h2>Date</h2>
                        <h3><MdDateRange /> 21 May 2024</h3>
                    </div>
                    <div>
                        <h2>Paid Amount</h2>
                        <h3>₹ 123</h3>
                    </div>
                    <div>
                        <h2>Payment Status</h2>
                        <Button>Completed</Button>
                    </div>
                </div>
            </div>
{/* payment summery */}
            <div>
                <h1>Payment Summery</h1>
                <div>
                    <div>
                        <h2>Service</h2>
                        <h3>Plumbing</h3>
                    </div>
                    <div>
                        <h2>Date</h2>
                        <h3><MdDateRange /> 21 May 2024</h3>
                    </div>
                    <div>
                        <h2>Time</h2>
                        <h3>03:34 AM</h3>
                    </div>
                    <div>
                        <h2>Payment Method</h2>
                        <h3>UPI</h3>
                    </div>
                    <div>
                        <h2>Admin Commission</h2>
                        <h3>₹ 100</h3>
                    </div>
                </div>
            </div>
          </div>
          <div>
            <div>
                <h2>Provider Earning</h2>
                <h3>₹ 500</h3>
            </div>
            <Button> <FaArrowAltCircleDown /> Download Invoice</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
