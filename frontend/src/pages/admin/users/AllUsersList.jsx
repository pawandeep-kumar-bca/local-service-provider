import React, { useState } from "react";

import UserStatsSection from "./components/UserStatsSection";
import UsersTable from "./components/UsersTable";
import DeleteModal from "../modals/DeleteModal";
import SuspendModal from "../modals/SuspendModal";
import ResetPasswordModal from "../modals/ResetPasswordModal";

const suspendReasons = [
  "Spam activity",
  "Fake account detected",
  "Multiple policy violations",
  "Abusive behavior",
  "Fraudulent transactions",
  "Suspicious login activity",
  "Posting inappropriate content",
  "Harassment or bullying",
  "Using fake information",
  "Chargeback or payment fraud",
  "Violation of platform rules",
  "Too many failed login attempts",
  "Account reported by multiple users",
  "Scam or misleading activity",
  "Unauthorized access attempt",
  "Temporary suspension for investigation",
  "Permanent suspension by admin",
];

const AllUsersList = () => {
  
  const [userToDelete, setUserToDelete] = useState(null);
  const [userToSuspend, setUserToSuspend] = useState(null);
  const [userToResetPassword, setUserToResetPassword] = useState(null);

  return (
    <>
      <div>
        <UserStatsSection />

        <UsersTable
          onDeleteClick={setUserToDelete}
          onSuspendClick={setUserToSuspend}
          onResetPasswordClick={setUserToResetPassword}
        />
      </div>

      {userToDelete && (
        <DeleteModal
          open={!!userToDelete}
          close={() => setUserToDelete(null)}
          text={`Are you sure you want delete ${userToDelete.name}? This action cannot be undone.`}
          title="User"
        />
      )}
 
      {userToSuspend && (
        <SuspendModal
          open={!!userToSuspend}
          close={() => setUserToSuspend(null)}
          title="Suspend User"
          text={`Are you sure you want suspend ${userToSuspend.name}? User will not be able to login or access the system.`}
          reason={suspendReasons}
          rightBtnText="Suspend User"
        />
      )}

      {userToResetPassword && (
        <ResetPasswordModal
          onClick={!!userToResetPassword}
          onClose={() => setUserToResetPassword(null)}
        />
      )}
    </>
  );
};

export default AllUsersList;