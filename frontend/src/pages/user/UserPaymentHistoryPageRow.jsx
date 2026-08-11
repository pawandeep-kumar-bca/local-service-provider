import React from "react";
import StatusBadge from "../../components/common/StatusBadge";
import Button from "../../components/common/Button";
import { IoEye } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import Avatar from "../../components/common/Avatar";
import { useNavigate } from "react-router-dom";

const UserPaymentHistoryPageRow = ({ paymentHistory }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_0.3fr] md:grid-cols-6 items-center px-3  py-4 text-sm md:text-base text-gray-600">
      <div className="flex items-center justify-start gap-2">
        <div className="hidden md:flex md:w-14 md:h-14 rounded-full shrink-0">
          <Avatar
            name={paymentHistory?.providerName}
            image={paymentHistory?.providerImage?.url}
            className="text-brownness text-2xl bg-gray-200"
          />
        </div>
        <div>
          <p className="font-semibold  text-brownness">
            {paymentHistory?.providerName}
          </p>
          <p className="text-sm text-brownness">
            {paymentHistory?.categoryName}
          </p>
        </div>
      </div>

      <div className="text-center text-brownness hidden md:block">
        <p className="text-sm font-semibold">
          {new Date(paymentHistory.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="text-sm">
          {new Date(paymentHistory.createdAt)
            .toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
            .toUpperCase()}
        </p>
      </div>

      <div className="hidden md:flex justify-center">
        {paymentHistory.paymentMethod === "upi" ? (
          <StatusBadge badge="UPI" className="text-[13px]" />
        ) : (
          <StatusBadge badge="COD" className="text-[13px]" />
        )}
      </div>
      <div className="flex justify-center">
        <StatusBadge badge={paymentHistory.paymentStatus} />
      </div>

      <h3 className="font-semibold text-brownness text-center">
        ₹{paymentHistory.amount}
      </h3>

      <div className="md:flex justify-center hidden ">
        <Button
          color="blue"
          size="sm"
          type="button"
          onClick={() => navigate(`payment-info/${paymentHistory._id}`)}
        >
          <FaRegEye size={16} /> View
        </Button>
      </div>
      <FaRegEye
        size={20}
        className="md:hidden flex justify-center text-primary"
        onClick={() => navigate(`payment-info/${paymentHistory._id}`)}
      />
    </div>
  );
};

export default UserPaymentHistoryPageRow;
