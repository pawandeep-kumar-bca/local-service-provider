import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineFileDownload, MdOutlineRemoveRedEye } from "react-icons/md";
import UserInfo from "../../../../components/common/admin/UserInfo";
import ActionDropdown from "../../../../components/common/admin/ActionDropdown";
import { getPaymentMethodIcon } from "../data/paymentMethodIcons.jsx";


const PaymentTableRow = ({ payment, onDownloadInvoiceClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        grid grid-cols-[1fr_1.5fr_1.5fr_1.1fr_1fr_1fr_1.2fr_0.5fr] items-center px-3
      "
    >
      {/* transaction id */}
      <div>
        <h1 className="text-sm font-semibold text-blue-500">{payment.transactionId}</h1>
      </div>

      {/* customer */}
      <UserInfo image={payment.customer.image} name={payment.customer.name} id={payment.customer.id} />

      {/* provider */}
      <UserInfo image={payment.provider.image} name={payment.provider.name} id={payment.provider.id} />

      {/* payment method */}
      <div className="flex items-center justify-center gap-2">
        {getPaymentMethodIcon(payment.paymentMethod)}
        <p>{payment.paymentMethod}</p>
      </div>

      {/* amount */}
      <div>
        <p className="text-sm text-center font-semibold text-black/80">{payment.amount}</p>
      </div>

      {/* status */}
      <div className="flex items-center justify-center">
        <span
          className={`
            py-1 px-3 rounded-lg text-sm flex items-center gap-2 border
            ${
              payment.status === "Paid"
                ? "text-green-500 bg-green-100 border-green-500"
                : "text-yellow-500 bg-yellow-100 border-yellow-500"
            }
          `}
        >
          <div
            className={`
              w-2 h-2 rounded-full
              ${payment.status === "Paid" ? "bg-green-500" : "bg-yellow-500"}
            `}
          />
          <p>{payment.status}</p>
        </span>
      </div>

      {/* date time */}
      <div className="text-center">
        <h3 className="text-sm font-semibold text-black/80">{payment.date}</h3>
        <p className="text-sm text-muted">{payment.time}</p>
      </div>

      {/* action dropdown */}
      <ActionDropdown
        items={[
          {
            label: "View Transaction",
            icon: <MdOutlineRemoveRedEye size={20} />,
            onClick: () => navigate("/admin/payments/payment-details"),
          },
          {
            label: "Download Invoice",
            icon: <MdOutlineFileDownload size={20} />,
            variant: "primary",
            onClick: () => onDownloadInvoiceClick(payment),
          },
        ]}
      />
    </div>
  );
};

export default PaymentTableRow;