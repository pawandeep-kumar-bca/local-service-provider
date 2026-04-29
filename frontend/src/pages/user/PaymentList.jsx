import React from "react";
import StatusBadge from "../../components/common/StatusBadge";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/common/Button";
import { payments } from "../../utils/payments";
const PaymentList = () => {
  const { status } = useParams();
  const navigate = useNavigate();
  

  const paymentFilters = !status
    ? payments
    : payments.filter((items) => items.status === status);
    
  return (
    <>
    { (paymentFilters.length >0) ?<div>
      {paymentFilters.map((item) => (
        <div key={item.id}>
          <div className="grid md:grid-cols-6 grid-cols-4 text-sm md:text-lg font-semibold text-muted justify-items-center items-center py-3">
            <h2>{item.name}</h2>
            <p>{item.date}</p>

            <p className="hidden md:flex">{item.transactionId}</p>

            <div className="hidden md:flex">
              <StatusBadge badge={item.status}>{item.status}</StatusBadge>
            </div>

            <h3>₹ {item.amount}</h3>

            <Button color="blue" onClick={() => navigate(`/user/payment-history/payment-info/${item.id}`)}>
              View
            </Button>
          </div>

          <div className="w-full h-[1px] bg-muted"></div>
        </div>
      ))}
    </div>: <div className="flex items-center justify-center p-10">
        <p className="text-lg font-semibold text-text">No payments found for this status.</p>
        </div>}
    </>
  );
};

export default PaymentList;
