import React from "react";
import { SiPaytm } from "react-icons/si";
import { MdOutlineCreditCard } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { CiBank } from "react-icons/ci";


export const getPaymentMethodIcon = (method) => {
  switch (method) {
    case "UPI":
      return <SiPaytm size={24} className="text-blue-500" />;
    case "Credit Card":
      return <MdOutlineCreditCard size={24} className="text-blue-500" />;
    case "Wallet":
      return <IoWalletOutline size={24} className="text-blue-500" />;
    case "Net Banking":
      return <CiBank size={24} className="text-blue-500" />;
    default:
      return <SiPaytm size={24} className="text-blue-500" />;
  }
};