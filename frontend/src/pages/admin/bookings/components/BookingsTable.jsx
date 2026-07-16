import React from "react";
import SearchFilterBar from "../../../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../../../components/common/admin/TableWrapper";
import { bookings } from "../data/bookingsData";
import BookingTableHeader from "./BookingTableHeader";
import BookingTableRow from "./BookingTableRow";

const BookingsTable = ({
  onEditClick,
  onRescheduleClick,
  onBookingHistoryClick,
  onPaymentDetailsClick,
  onInvoiceClick,
  onCancelClick,
  onRefundClick,
}) => {
  return (
    <TableWrapper>
      <SearchFilterBar
        placeholder="Search by booking Id , provider , user or services..."
        filters={[
          {
            label: "Booking Status",
            options: ["Pending", "Completed", "Canceled"],
          },
          {
            label: "Payment Status",
            options: ["Paid", "Pending", "Failed"],
          },
        ]}
      />

      <div className="border border-slate-300 rounded-xl">
        <BookingTableHeader />

        <div className="border-t border-gray-200 mt-3 mb-2"></div>

        <div className="space-y-5 pb-3 pt-2">
          {bookings.map((booking) => (
            <BookingTableRow
              key={booking.id}
              booking={booking}
              onEditClick={onEditClick}
              onRescheduleClick={onRescheduleClick}
              onBookingHistoryClick={onBookingHistoryClick}
              onPaymentDetailsClick={onPaymentDetailsClick}
              onInvoiceClick={onInvoiceClick}
              onCancelClick={onCancelClick}
              onRefundClick={onRefundClick}
            />
          ))}
        </div>
      </div>
    </TableWrapper>
  );
};

export default BookingsTable;