import React from "react";
import SearchFilterBar from "../../../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../../../components/common/admin/TableWrapper";
import { providers } from "../data/providersData";
import ProviderTableHeader from "./ProviderTableHeader";
import ProviderTableRow from "./ProviderTableRow";


const ProvidersTable = ({
  onServicePricingClick,
  onReviewClick,
  onVerifyClick,
  onResetPasswordClick,
  onSuspendClick,
  onDeleteClick,
}) => {
  return (
    <TableWrapper>
      <SearchFilterBar
        placeholder="Search providers by name,email or phone..."
        filters={[
          {
            label: "All Category",
            options: ["Plumbing", "Cleaning"],
          },
          {
            label: "All Status",
            options: ["Active", "Pending", "Blocked"],
          },
          {
            label: "Verification",
            options: ["Verified", "Pending"],
          },
        ]}
      />

      <div className="border border-slate-300 rounded-xl">
        <ProviderTableHeader />

        <div className="border-t border-gray-200 mb-2"></div>

        <div className="space-y-2 pb-3">
          {providers.map((provider) => (
            <ProviderTableRow
              key={provider.id}
              provider={provider}
              onServicePricingClick={onServicePricingClick}
              onReviewClick={onReviewClick}
              onVerifyClick={onVerifyClick}
              onResetPasswordClick={onResetPasswordClick}
              onSuspendClick={onSuspendClick}
              onDeleteClick={onDeleteClick}
            />
          ))}
        </div>
      </div>
    </TableWrapper>
  );
};

export default ProvidersTable;