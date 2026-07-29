import React from "react";
import StatusBadge from "../../components/common/StatusBadge";
import Button from "../../components/common/Button";
import { IoEye } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";

const UserPaymentHistoryPageRow = ({paymentHistory}) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 items-center justify-items-center py-4 text-sm md:text-base text-gray-600">
    
      <h2 className="font-medium text-gray-900">{paymentHistory.providerId?.userId?.fullname}</h2>

      
      <p>{new Date(paymentHistory.createdAt).toLocaleDateString('en-IN',{
        day:'numeric',
        month:'long',
        year:'numeric'
      })}</p>

   
      {paymentHistory.paymentMethod === 'upi' ?<StatusBadge badge="UPI" className="text-[13px]"/>:<StatusBadge badge="COD" className="text-[13px]"/>}

      
      <div className="hidden md:block">
        <StatusBadge badge={paymentHistory.paymentStatus} />
      </div>

     
      <h3 className="font-semibold text-gray-900">₹{paymentHistory.amount}</h3>

      <Button color="blue" size="sm">
     <FaRegEye size={16}/> View
      </Button>
    </div>
  );
};

export default UserPaymentHistoryPageRow;