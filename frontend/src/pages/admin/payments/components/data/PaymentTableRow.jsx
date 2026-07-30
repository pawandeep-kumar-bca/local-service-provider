import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineFileDownload, MdOutlineRemoveRedEye } from "react-icons/md";
import UserInfo from "../../../../../components/common/admin/UserInfo";
import ActionDropdown from "../../../../../components/common/admin/ActionDropdown";
import StatusBudge from "../../../../../components/common/StatusBadge";

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
        <h1 className="text-sm font-semibold text-blue-500">
          #{payment.paymentId}
        </h1>
      </div>

      {/* customer */}
      <UserInfo
        image={payment.userId?.profileImage?.url}
        name={payment.userId?.fullname}
        id={payment.userId?.userId}
      />

      {/* provider */}
      <UserInfo
        image={payment.providerId?.userId?.profileImage?.url}
        name={payment.providerId?.userId?.fullname}
        id={payment.providerId?.providerId}
      />

      {/* payment method */}
      <div className="flex items-center justify-center gap-2">
        <StatusBudge badge={payment.paymentMethod==='upi'?'UPI':'COD'} className="text-xs"/>
      
      </div>

      {/* amount */}
      <div>
        <p className="text-sm text-center font-semibold text-black/80">
          {payment.amount}
        </p>
      </div>

      {/* status */}
      <div className="flex items-center justify-center">
        <StatusBudge badge={payment.paymentStatus} />
        
      </div>

      {/* date time */}
      <div className="text-center">
        <h3 className="text-sm font-semibold text-black/80">
          {new Date(payment.createdAt).toLocaleDateString('en-IN',{
            day:'numeric',
            month:'long',
            year:'numeric'
          })}
        </h3>
        <p className="text-sm text-muted">{new Date(payment.createdAt).toLocaleTimeString('en-IN',{
            hour:'2-digit',
            minute:'2-digit',
            hour12:true
          }).toUpperCase()}</p>
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
