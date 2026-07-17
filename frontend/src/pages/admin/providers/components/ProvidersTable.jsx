import React, { useState } from "react";
import SearchFilterBar from "../../../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../../../components/common/admin/TableWrapper";

import ProviderTableHeader from "./ProviderTableHeader";
import ProviderTableRow from "./ProviderTableRow";
import { useProviders } from "../../../../hooks/useAdmin";

const ProvidersTable = ({
  onServicePricingClick,
  onReviewClick,
  onVerifyClick,
  onResetPasswordClick,
  onSuspendClick,
  onDeleteClick,
}) => {
  const [filters,setFilters] = useState({
    search:"",
    status:'',
    verificationStatus:'',
    category:''

  });
  const { data } = useProviders(filters);
  

  
  const providers = data?.providers || [];
 
  
  return (
    <TableWrapper>
      <SearchFilterBar
        filters={filters}
        setFilters={setFilters}
        placeholder="Search providers by name,email,phone or category..."
        options={[
          {
            value:filters.category,
            onChange:(value)=>{
              setFilters((prev)=>({
                ...prev,
                category:value
              }))
            },
            label: "All Category",
            options: ["Plumbing", "Cleaning"],
          },
          {
            value:filters.status,
            onChange:(value)=>{
              setFilters((prev)=>({
                ...prev,
                status:value
              }))
            },
            label: "All Status",
            options:["Pending", "Approved", "Rejected"],
          },
          {
             value:filters.verificationStatus,
            onChange:(value)=>{
              setFilters((prev)=>({
                ...prev,
                verificationStatus:value
              }))
            },
            label: "Verification Status",
            options: ["Verified", "Not Verified"],
          },
        ]}
      />

      <div className="border border-slate-300 rounded-xl">
        <ProviderTableHeader />

        <div className="border-t border-gray-200 mb-2"></div>

        <div className="space-y-2 pb-3">
          {providers.map((provider) => (
            <ProviderTableRow
              key={provider._id}
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
