import React from "react";
import SearchFilterBar from "../../../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../../../components/common/admin/TableWrapper";
import { users } from "../data/usersData";
import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";


const UsersTable = ({ onDeleteClick, onSuspendClick, onResetPasswordClick }) => {
  return (
    <TableWrapper>
      <SearchFilterBar
        placeholder="Search users by name,email or phone..."
        options={[
          {
            label: "Status",
            options: ["Verified", "Not Verified", "Active", "Blocked"],
          },
        ]}
      />

      <div className="border border-slate-300 rounded-xl">
        <UserTableHeader />

        <div className="border-t border-gray-200 mb-2"></div>

        <div className="space-y-2 pb-3">
          {users.map((user) => (
            <UserTableRow
              key={user.id}
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