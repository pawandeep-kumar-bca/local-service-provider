import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineEdit,
  MdOutlinePlumbing,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { FaRegCalendarPlus } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import UserInfo from "../../../../components/common/admin/UserInfo";
import ActionDropdown from "../../../../components/common/admin/ActionDropdown";
import StatusBudge from "../../../../components/common/StatusBadge";


const BookingTableRow = ({
  booking,
  onEditClick,
  onRescheduleClick,
  onBookingHistoryClick,
  onPaymentDetailsClick,
  onInvoiceClick,
  onCancelClick,
  onRefundClick,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        grid
        grid-cols-[0.8fr_1.5fr_1.5fr_1.2fr_1fr_0.7fr_0.8fr_1fr_0.5fr]
        items-center
        px-3
      "
    >
      {/* booking id */}
      <div>
        <h1 className="text-sm font-semibold text-blue-500">{booking.bookingId}</h1>
      </div>

      {/* customer */}
      <UserInfo image={booking.customer.image} name={booking.customer.name} id={booking.customer.id} />

      {/* provider */}
      <UserInfo image={booking.provider.image} name={booking.provider.name} id={booking.provider.id} />

      {/* service */}
      <div className="flex items-center gap-2 ">
        <div
          className="
            w-10 h-10 min-w-10
            rounded-lg
            bg-blue-100
            flex items-center justify-center
            text-blue-500
          "
        >
          <MdOutlinePlumbing size={24} />
        </div>

        <div>
          <h1 className="text-sm font-bold text-black/90">{booking.service}</h1>
          <p className="text-sm mt-1 text-muted">{booking.service}</p>
        </div>
      </div>

      {/* date */}
      <div>
        <h3 className="text-sm font-semibold text-black/80">{booking.date}</h3>
        <p className="text-sm mt-1 text-muted">{booking.time}</p>
      </div>

      {/* amount */}
      <div>
        <p className="text-sm font-semibold text-black/80">{booking.amount}</p>
      </div>

      {/* payment */}
      <div className="flex justify-center">
        <span
          className={`
            py-1 px-3 rounded-lg text-sm border
            ${
              booking.payment === "Paid"
                ? "text-green-500 bg-green-100 border-green-500"
                : "text-yellow-500 bg-yellow-100 border-yellow-500"
            }
          `}
        >
          {booking.payment}
        </span>
      </div>

      {/* booking status */}
      <div className="flex justify-center">
        <StatusBudge badge={booking.status} />
      </div>

      {/* action dropdown */}
      <div className="flex justify-center">
        <ActionDropdown
          items={[
            {
              label: "View Booking",
              icon: <MdOutlineRemoveRedEye size={20} />,
              onClick: () => navigate("/admin/bookings/booking-details"),
            },
            {
              label: "Edit Booking",
              icon: <MdOutlineEdit size={20} />,
              onClick: () => onEditClick(booking),
            },
            {
              label: "Reschedule Booking",
              icon: <FaRegCalendarPlus size={20} />,
              onClick: () => onRescheduleClick(booking),
            },
            {
              label: "Booking History",
              icon: <FaHistory size={20} />,
              onClick: () => onBookingHistoryClick(booking),
            },
            {
              label: "Payment Details",
              icon: <TbListDetails size={20} />,
              onClick: () => onPaymentDetailsClick(booking),
            },
            {
              label: "Invoice",
              icon: <LiaFileInvoiceSolid size={20} />,
              onClick: () => onInvoiceClick(booking),
            },
            {
              label: "Cancel Booking",
              icon: <FaHistory size={20} />,
              variant: "danger",
              onClick: () => onCancelClick(booking),
            },
            {
              label: "Refund Payment",
              icon: <FaHistory size={20} />,
              variant: "primary",
              onClick: () => onRefundClick(booking),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default BookingTableRow;