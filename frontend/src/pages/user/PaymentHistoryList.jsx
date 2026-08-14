import React, { useState } from "react";
import UserPaymentHistoryPageRow from "./UserPaymentHistoryPageRow";
import UserPaymentHistoryPageHeader from "./UserPaymentHistoryPageHeader";
import { useUserPaymentHistory } from "../../hooks/usePayment";
import SearchFilterBar from "../../components/common/admin/SearchFilterBar";
import { IoSearch } from "react-icons/io5";
import useDebounce from "../../hooks/useDebounce";
import TableWrapper from "../../components/common/admin/TableWrapper";
import NoPaymentHistory from "./NoDataComponents/NoPaymentHistory";

const PaymentHistoryList = () => {
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
  });
  const debouncedSearch = useDebounce(filters.search, 500);
  const { data } = useUserPaymentHistory({
    ...filters,
    search: debouncedSearch,
  });
  const tabs = ["all", "pending", "success", "failed", "refund"];
  const base =
    "border border-slate-300 shrink-0 whitespace-nowrap rounded-lg mb-2 px-5 py-2 cursor-pointer";
  const active = "bg-primary text-bg";
  const notActive = "bg-gray-50 text-text";
  const allPaymentsHistory = data?.paymentHistory || [];
  return (
    <TableWrapper>
      <div className="flex md:flex-row flex-col-reverse md:justify-between items-center pb-5 gap-3">
        <div className="w-full min-w-0 overflow-hidden">
          <div className="flex gap-3 font-semibold overflow-x-auto scrollbar-hide pb-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    status: tab,
                  }))
                }
                className={`${base} ${filters.status === tab ? active : notActive} `}
              >
                {tab[0].toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full max-w-sm">
        <div className="w-full  flex items-center gap-4 pl-4 pr-2 py-2 border border-slate-300 rounded-lg text-muted">
          <input
            type="search"
            placeholder="Search by provider or category..."
            className="outline-0 border-0 w-full"
            value={filters.search}
            onChange={(e) => {
              setFilters((prev) => ({
                ...prev,
                search: e.target.value,
              }));
            }}
          />
          <IoSearch size={18} />
        </div>
        </div>
      </div>
     {allPaymentsHistory.length !==0? <div className="border border-slate-300 rounded-xl">
        <UserPaymentHistoryPageHeader />
        {allPaymentsHistory.map((paymentHistory) => (
          <UserPaymentHistoryPageRow
            key={paymentHistory._id}
            paymentHistory={paymentHistory}
          />
        ))}
      </div>:<NoPaymentHistory filters={filters}/>}
    </TableWrapper>
  );
};

export default PaymentHistoryList;
