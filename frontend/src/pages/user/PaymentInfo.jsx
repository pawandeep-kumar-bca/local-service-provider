import React from "react";
import Button from "../../components/common/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdClose, MdDateRange, MdEmail } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { IoChevronBackSharp, IoClose } from "react-icons/io5";
import StatusBadge from "../../components/common/StatusBadge";
import { useNavigate, useParams } from "react-router-dom";
import { payments } from "../../utils/payments";
const PaymentInfo = () => {
    const navigate = useNavigate()
    const backHandler= ()=>{
        if(window.history.length>1){
            navigate(-1)
        }else{
            navigate('/payment-history')
        }
    }
    const {id} =useParams()

    const payment = payments.find((item) => item.id === Number(id));
    if(!payment){
      return <div className="mt-5 ml-5">
        <Button color="primary" onClick={()=>navigate("/user/payment-history")}><IoChevronBackSharp className='text-xl' />Back</Button>
        <div className="flex item-center justify-center w-full p-10">
        <p className="text-lg font-semibold text-text">Payment Not Found</p>
      </div>
      </div>
    }
   const {
  name,
  phone,
  email,
  service,
  date,
  time,
  transactionId,
  status,
  amount,
  paymentMethod,
  adminCommission,
  providerEarning
} = payment;
  return (
    <div className="w-full md:flex md:justify-center md:mt-6 md:items-center">
      <div className="md:w-[60%]">
        <div className="flex items-center gap-7 md:bg-bg bg-primary py-6 px-3 md:justify-center md:hidden rounded-b">
          <FaArrowLeftLong className="text-2xl md:text-text cursor-pointer  text-bg" onClick={backHandler}/>
          <h1 className="text-2xl text-bg font-semibold md:text-text">
            Transaction Details
          </h1>
        </div>
        <div className="p-2">
          <div className="shadow-[0_0_30px_rgba(0,0,0,0.30)] p-3 md:px-3 rounded-lg md:bg-bg md:relative md:py-9 relative">
            <MdClose size={30} onClick={backHandler} className="absolute hidden md:flex right-4 top-4 cursor-pointer"/>
            <h1 className="text-2xl text-bg font-semibold md:text-text hidden md:block text-center">
              Transaction Details
            </h1>
            <IoClose className="absolute right-5 hidden top-3 text-2xl cursor-pointer" />
            {/* detail card */}
            <div>
              {/* profile info */}
              <div className="flex gap-2 items-center">
                <img
                  src="/assets/profile.png"
                  alt="profile"
                  className="w-[5rem] h-[5rem] rounded-full object-cover"
                />
                <div>
                  <h1 className="text-xl font-semibold">{name}</h1>
                  <p className="text-lg text-muted">{service}</p>
                </div>
              </div>
              {/* Email detail */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="flex items-center gap-2">
                    <IoMdCall className="text-xl text-muted" />
                    <h3>{phone}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdEmail className="text-xl text-muted" />
                    <h3>{email}</h3>
                  </div>
                </div>
                <StatusBadge badge={status} className="font-normal">{status}</StatusBadge>
              </div>

              {/* transaction Info */}

              <div className="md:flex md:justify-between md:gap-10">
                {/* transaction info */}
                <div className="mt-3 md:w-[50%]">
                  <h1 className="text-2xl font-semibold md:text-xl">
                    Transaction Info
                  </h1>
                  <div className="text-text px-3 pt-3 flex flex-col gap-2 md:gap-3 text-lg md:text-sm">
                    <div className="flex justify-between items-center  font-semibold">
                      <h2>Payment Id</h2>
                      <h3>{transactionId}</h3>
                    </div>
                    <div className="flex justify-between items-center  font-semibold">
                      <h2>Date</h2>
                      <h3 className="flex items-center gap-2">
                        <MdDateRange className="text-xl text-muted" /> {date}
                      </h3>
                    </div>
                    <div className="flex justify-between items-center font-semibold">
                      <h2>Paid Amount</h2>
                      <h3>₹{amount}</h3>
                    </div>
                    <div className="flex justify-between items-center  font-semibold">
                      <h2>Payment Status</h2>
                      <StatusBadge badge={status} className="font-normal">{status}</StatusBadge>
                    </div>
                  </div>
                </div>
                {/* payment summery */}
                <div className="mt-3 md:w-[50%]">
                  <h1 className="text-2xl font-semibold md:text-xl ">
                    Payment Summery
                  </h1>
                  <div className="text-text px-3 py-3 flex md:gap-3 flex-col gap-2 text-lg md:text-sm">
                    <div className="flex justify-between items-center  font-semibold">
                      <h2>Service</h2>
                      <h3>{service}</h3>
                    </div>
                    <div className="flex justify-between items-center font-semibold">
                      <h2>Date</h2>
                      <h3 className="flex items-center gap-2">
                        <MdDateRange className="text-xl text-muted" /> {date}
                      </h3>
                    </div>
                    <div className="flex justify-between items-center font-semibold">
                      <h2>Time</h2>
                      <h3>{time}</h3>
                    </div>
                    <div className="flex justify-between items-center  font-semibold">
                      <h2>Payment Method</h2>
                      <h3>{paymentMethod}</h3>
                    </div>
                    <div className="flex justify-between items-center  font-semibold">
                      <h2>Admin Commission</h2>
                      <h3>₹ {adminCommission}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[95%] mx-auto gap-3 my-3">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <h2>Provider Earning</h2>
                  <h3>₹ {providerEarning}</h3>
                </div>
                <Button>
                  {" "}
                  <FaArrowAltCircleDown className="text-xl text-bg" /> Download
                  Invoice
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
