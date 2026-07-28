import React from "react";
import StatusBadge from "../../components/common/StatusBadge";
import Button from "../../components/common/Button";
import { IoEye } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";

const UserPaymentHistoryPageRow = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 items-center justify-items-center py-4 text-sm md:text-base text-gray-600">
    
      <h2 className="font-medium text-gray-900">Rajiv Kumar</h2>

      
      <p>12 Jul 2025</p>

   
      <p className="hidden md:block">#DDHAGG</p>

      
      <div className="hidden md:block">
        <StatusBadge badge="completed" />
      </div>

     
      <h3 className="font-semibold text-gray-900">₹200</h3>

      <Button color="blue" size="sm">
     <FaRegEye size={16}/> View
      </Button>
    </div>
  );
};

export default UserPaymentHistoryPageRow;