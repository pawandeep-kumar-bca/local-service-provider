import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineEdit, MdOutlineLock, MdOutlinePauseCircle, MdOutlineRemoveRedEye, MdOutlineVerifiedUser } from "react-icons/md";
import { RiDeleteBin6Line, RiHistoryLine, RiPriceTag2Line } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { SiFuturelearn } from "react-icons/si";
import UserInfo from "../../../../components/common/admin/UserInfo";
import ActionDropdown from "../../../../components/common/admin/ActionDropdown";
import StatusBudge from "../../../../components/common/StatusBadge";


const ProviderTableRow = ({
  provider,
  onServicePricingClick,
  onReviewClick,
  onVerifyClick,
  onResetPasswordClick,
  onSuspendClick,
  onDeleteClick,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        grid
        grid-cols-[1.6fr_1.2fr_1.5fr_1.2fr_1fr_1fr_1fr_1.2fr_.4fr]
        items-center
        px-4
        py-4
        rounded-2xl
        border border-transparent
        hover:border-gray-200
        hover:bg-gray-50
        hover:shadow-sm
        transition-all duration-200
      "
    >
      {/* provider info */}
      <UserInfo image={provider.image} name={provider.name} id={provider.providerId} />

      {/* category */}
      <div>
        <StatusBudge category={provider.category} />
      </div>

      {/* email */}
      <div>
        <p className="text-sm text-muted">{provider.email}</p>
      </div>

      {/* phone */}
      <div>
        <p className="text-sm text-muted">{provider.phone}</p>
      </div>

      {/* status */}
      <div>
        <StatusBudge badge={provider.status} />
      </div>

      {/* verification */}
      <div>
        <StatusBudge badge={provider.verification} showIcon />
      </div>

      {/* completed jobs */}
      <div className="text-center">
        <p className="text-sm text-muted">{provider.completedJobs}</p>
      </div>

      {/* joined date */}
      <div className="text-center">
        <p className="text-sm text-muted">{provider.joinedDate}</p>
      </div>

      {/* action dropdown */}
      <ActionDropdown
        items={[
          {
            label: "View Profile",
            icon: <MdOutlineRemoveRedEye size={20} />,
            onClick: () => navigate("/admin/providers/view-provider-profile"),
          },
          {
            label: "Edit Provider",
            icon: <MdOutlineEdit size={20} />,
            onClick: () => navigate("/admin/providers/edit-provider-profile"),
          },
          {
            label: "Service & Pricing",
            icon: <RiPriceTag2Line size={20} />,
            onClick: () => onServicePricingClick(provider),
          },
          {
            label: "Job History",
            icon: <RiHistoryLine size={20} />,
            onClick: () => navigate("/admin/providers/job-completed"),
          },
          {
            label: "Earnings & Payouts",
            icon: <SiFuturelearn size={20} />,
            onClick: () => navigate("/admin/providers/earings-&-payouts"),
          },
          {
            label: "Reviews & Ratings",
            icon: <FaRegStar size={20} />,
            variant: "warning",
            onClick: () => onReviewClick(provider),
          },
          {
            label: "Verify Provider",
            icon: <MdOutlineVerifiedUser size={20} />,
            variant: "green",
            onClick: () => onVerifyClick(provider),
          },
          {
            label: "Reset Password",
            icon: <MdOutlineLock size={20} />,
            onClick: () => onResetPasswordClick(provider),
          },
          {
            label: "Suspend Provider",
            icon: <MdOutlinePauseCircle size={20} />,
            variant: "warning",
            onClick: () => onSuspendClick(provider),
          },
          {
            label: "Delete Provider",
            icon: <RiDeleteBin6Line size={20} />,
            variant: "danger",
            onClick: () => onDeleteClick(provider),
          },
        ]}
      />
    </div>
  );
};

export default ProviderTableRow;