import React, { useState } from "react";

import ProviderStatsSection from "./components/ProviderStatsSection";
import ProvidersTable from "./components/ProvidersTable";
import { suspendReasons } from "./data/suspendReasons";

import ResetPasswordModal from "../modals/ResetPasswordModal";
import DeleteModal from "../modals/DeleteModal";
import SuspendModal from "../modals/SuspendModal";
import VerifyProviderModal from "../modals/VerifyProviderModal";
import ReviewProvider from "../modals/ReviewProvider";

const AllProvidersList = () => {
  
  const [resetPasswordProvider, setResetPasswordProvider] = useState(null);
  const [deleteProvider, setDeleteProvider] = useState(null);
  const [suspendProvider, setSuspendProvider] = useState(null);
  const [verifyProvider, setVerifyProvider] = useState(null);
  const [reviewProvider, setReviewProvider] = useState(null);

  
  const handleServicePricingClick = (provider) => {
    console.log("edit service & pricing for", provider.providerId);
  };

  return (
    <>
      <div>
        <ProviderStatsSection />

        <ProvidersTable
          onServicePricingClick={handleServicePricingClick}
          onReviewClick={setReviewProvider}
          onVerifyClick={setVerifyProvider}
          onResetPasswordClick={setResetPasswordProvider}
          onSuspendClick={setSuspendProvider}
          onDeleteClick={setDeleteProvider}
        />
      </div>

      {resetPasswordProvider && (
        <ResetPasswordModal onClose={() => setResetPasswordProvider(null)} />
      )}

      {deleteProvider && (
        <DeleteModal
          close={() => setDeleteProvider(null)}
          text={`Are you sure you want to delete ${deleteProvider.name}? This action cannot be undone.`}
          title="Provider"
          open={!!deleteProvider}
        />
      )}

      {suspendProvider && (
        <SuspendModal
          title="Suspend Provider"
          text={`Are you sure you want to suspend ${suspendProvider.name}? Provider will not able to login or access the system.`}
          rightBtnText="Suspend Provider"
          close={() => setSuspendProvider(null)}
          open={!!suspendProvider}
          reason={suspendReasons}
        />
      )}

      {verifyProvider && (
        <VerifyProviderModal close={() => setVerifyProvider(null)} />
      )}

      {reviewProvider && (
        <ReviewProvider close={() => setReviewProvider(null)} />
      )}
    </>
  );
};

export default AllProvidersList;