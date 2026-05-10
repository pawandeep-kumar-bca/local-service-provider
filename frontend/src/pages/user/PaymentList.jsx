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
      {paymentFilters.length > 0 ? (
        <div>
          {paymentFilters.map((item,idx) => {
            const { id, name, date, transactionId, status, amount } = item;

            return (
              <div key={id}>
                <div className="grid md:grid-cols-6 grid-cols-4 text-sm md:text-lg font-semibold text-muted justify-items-center items-center py-3">
                  <h2>{name}</h2>
                  <p>{date}</p>

                  <p className="hidden md:flex">{transactionId}</p>

                  <div className="hidden md:flex">
                    <StatusBadge badge={status} className="font-normal">
                      {status}
                    </StatusBadge>
                  </div>

                  <h3>₹ {amount}</h3>

                  <Button
                    color="blue"
                    onClick={() =>
                      navigate(`/user/payment-history/payment-info/${id}`)
                    }
                  >
                    View
                  </Button>
                </div>

                {(idx !== paymentFilters.length-1)
                && <div className="w-full border-t border-gray-200"></div>}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <h2 className="text-2xl font-bold text-gray-700">
            No payments found for this status.
          </h2>
        </div>
      )}
    </>
  );
};

export default PaymentList;
