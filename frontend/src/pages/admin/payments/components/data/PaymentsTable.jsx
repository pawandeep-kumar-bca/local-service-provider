import React from "react";
import SearchFilterBar from "../../../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../../../components/common/admin/TableWrapper";
import { payments } from "../data/paymentsData";
import PaymentTableHeader from "./PaymentTableHeader";
import PaymentTableRow from "./PaymentTableRow";

// Poori table: search/filter bar + header + saari rows.
const PaymentsTable = ({ onDownloadInvoiceClick }) => {
  return (
    <TableWrapper>
      <SearchFilterBar
        placeholder="Search transactions..."
        filters={[
          {
            label: "Payment Status",
            options: ["Paid", "Pending", "Refunded", "Failed"],
          },
          {
            label: "Payment Method",
            options: ["UPI", "Credit Card", "Wallet", "Net Banking"],
          },
          {
            label: "Service Categories",
            options: ["Plumbing", "Cleaning"],
          },
        ]}
      />

      <div className="border border-slate-300 rounded-xl">
        <PaymentTableHeader />

        <div className="border-t border-gray-200 mt-3 mb-2"></div>

        <div className="space-y-2 pb-3">
          {payments.map((payment) => (
            <PaymentTableRow
              key={payment.id}
              payment={payment}
              onDownloadInvoiceClick={onDownloadInvoiceClick}
            />
          ))}
        </div>
      </div>
    </TableWrapper>
  );
};

export default PaymentsTable;