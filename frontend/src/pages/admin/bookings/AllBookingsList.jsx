import React, { useState } from "react";

import BookingStatsSection from "./components/BookingStatsSection";
import BookingsTable from "./components/BookingsTable";
import { cancelReasons } from "./data/cancelReasons";

import SuspendModal from "../modals/SuspendModal";
import RescheduleBooking from "../modals/RescheduleBooking";
import EditBookingModal from "../modals/EditBookingModal";
import RefundPaymentModal from "../modals/RefundPaymentModal";
import BookingHistoryModal from "../modals/BookingHistoryModal";
import PaymentDetailsModal from "../modals/PaymentDetailsModal";
import InvoiceDownloadModal from "../modals/InvoiceDownloadModal";

const AllBookingsList = () => {
  const [cancelBooking, setCancelBooking] = useState(null);
  const [rescheduleBooking, setRescheduleBooking] = useState(null);
  const [refundPayment, setRefundPayment] = useState(null);
  const [editBooking, setEditBooking] = useState(null);
  const [bookingHistory, setBookingHistory] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [invoiceDownload, setInvoiceDownload] = useState(null);

  return (
    <>
      <div>
        <BookingStatsSection />

        <BookingsTable
          onEditClick={setEditBooking}
          onRescheduleClick={setRescheduleBooking}
          onBookingHistoryClick={setBookingHistory}
          onPaymentDetailsClick={setPaymentDetails}
          onInvoiceClick={setInvoiceDownload}
          onCancelClick={setCancelBooking}
          onRefundClick={setRefundPayment}
        />
      </div>

      {cancelBooking && (
        <SuspendModal
          reason={cancelReasons}
          open={!!cancelBooking}
          close={() => setCancelBooking(null)}
          text="Are you sure you want to cancel this booking? This action cannot be undone."
          rightBtnText="Yes, Cancel Booking"
          title="Cancel Booking"
        />
      )}

      {rescheduleBooking && (
        <RescheduleBooking close={() => setRescheduleBooking(null)} />
      )}

      {editBooking && <EditBookingModal close={() => setEditBooking(null)} />}

      {refundPayment && (
        <RefundPaymentModal close={() => setRefundPayment(null)} />
      )}

      {bookingHistory && (
        <BookingHistoryModal close={() => setBookingHistory(null)} />
      )}

      {paymentDetails && (
        <PaymentDetailsModal close={() => setPaymentDetails(null)} />
      )}

      {invoiceDownload && (
        <InvoiceDownloadModal close={() => setInvoiceDownload(null)} />
      )}
    </>
  );
};

export default AllBookingsList;