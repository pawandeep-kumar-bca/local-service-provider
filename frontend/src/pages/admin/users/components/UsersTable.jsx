import React, { useState } from "react";
import SearchFilterBar from "../../../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../../../components/common/admin/TableWrapper";

import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";
import { useUsers } from "../../../../hooks/useAdmin";
import useDebounce from "../../../../hooks/useDebounce";

const UsersTable = ({
  onDeleteClick,
  onSuspendClick,
  onResetPasswordClick,
}) => {
  const [filters, setFilters] = useState({
    search: "",
    sort: "newest first",
    verificationStatus: "",
    accountStatus: "",
    date: "",
    page: 1,
    limit: 10,
  });
  const debouncedSearch = useDebounce(filters.search, 500);
  const { data } = useUsers({ ...filters, search: debouncedSearch });
  const users = data?.users || [];
  return (
    <TableWrapper>
      <SearchFilterBar
        placeholder="Search users by name,email or phone..."
        filters={filters}
        setFilters={setFilters}
        options={[
          {
            value: filters.verificationStatus,
            onChange: (value) => {
              setFilters((prev) => ({
                ...prev,
                verificationStatus: value,
              }));
            },
            label: "Verification Status",
            options: ["Verified", "Not Verified"],
          },
          {
            value: filters.accountStatus,
            onChange: (value) => {
              setFilters((prev) => ({
                ...prev,
                accountStatus: value,
              }));
            },
            label: "Account Status",
            options: ["Active", "Blocked"],
          },
          {
            label: "Sort By",
            value: filters.sort,
            onChange: (value) => {
              setFilters((prev) => ({
                ...prev,
                sort: value,
              }));
            },
            options: [
              "Newest First",
              "Oldest First",
              "Descending Order",
              "Ascending Order",
            ],
          },
        ]}
      />

      <div className="border border-slate-300 rounded-xl">
        <UserTableHeader />

        <div className="border-t border-gray-200 mb-2"></div>

        <div className="space-y-2 pb-3">
          {users.map((user) => (
            <UserTableRow
              key={user._id}
              user={user}
              onDeleteClick={onDeleteClick}
              onSuspendClick={onSuspendClick}
              onResetPasswordClick={onResetPasswordClick}
            />
          ))}
        </div>
      </div>
    </TableWrapper>
  );
};

export default UsersTable;
