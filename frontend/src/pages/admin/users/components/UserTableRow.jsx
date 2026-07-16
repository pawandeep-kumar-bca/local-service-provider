import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineEdit,
  MdOutlineLock,
  MdOutlinePauseCircle,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiBook } from "react-icons/fi";
import { BsCash } from "react-icons/bs";
import UserInfo from "../../../../components/common/admin/UserInfo";
import ActionDropdown from "../../../../components/common/admin/ActionDropdown";
import StatusBudge from "../../../../components/common/StatusBadge";

const UserTableRow = ({
  user,
  onDeleteClick,
  onSuspendClick,
  onResetPasswordClick,
}) => {
  const navigate = useNavigate();
  

  return (
    <div
      className="
        min-w-[1200px]
        grid
        grid-cols-[1.2fr_1.2fr_1fr_1fr_1fr_1fr_0.7fr_0.4fr]
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
      {/* user info */}
      <UserInfo
        image={user.profileImage?.url}
        name={user.fullname}
        id="#USR4532"
      />

      {/* email */}
      <div>
        <p className="text-sm text-muted">{user.email}</p>
      </div>

      {/* phone */}
      <div>
        <p className="text-sm text-muted">{user.phoneNumber}</p>
      </div>

      {/* status */}
      <div>
        <StatusBudge badge={user.isVerified ? "verified" : "not verified"} />
      </div>
      <div>
        <StatusBudge badge={user.isBlocked ? "block" : "active"} />
      </div>

      {/* joined date */}
      <div className="text-center">
        <h3 className="text-sm font-semibold text-black/80">
          {new Date(user.createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </h3>
        <p className="text-sm text-muted mt-1">
          {new Date(user.createdAt).toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </p>
      </div>

      {/* bookings */}
      <div>
        <p className="text-sm text-muted">{user.totalBookings}</p>
      </div>

      {/* actions */}
      <ActionDropdown
        items={[
          {
            label: "View Profile",
            icon: <MdOutlineRemoveRedEye size={20} />,
            onClick: () => navigate("/admin/users/view-user-profile"),
          },
          {
            label: "Booking History",
            icon: <FiBook size={20} />,
            variant: "green",
            onClick: () => navigate("/admin/users/booking-history"),
          },
          {
            label: "Payment History",
            icon: <BsCash size={20} />,
            onClick: () => navigate("/admin/users/payment-history"),
          },
          {
            label: "Edit User",
            icon: <MdOutlineEdit size={20} />,
            variant: "primary",
            onClick: () => navigate("/admin/users/edit-user"),
          },
          {
            label: "Reset Password",
            icon: <MdOutlineLock size={20} />,
            onClick: () => onResetPasswordClick(user),
          },
          {
            label: "Suspend User",
            icon: <MdOutlinePauseCircle size={20} />,
            variant: "warning",
            onClick: () => onSuspendClick(user),
          },
          {
            label: "Delete User",
            icon: <RiDeleteBin6Line size={20} />,
            variant: "danger",
            onClick: () => onDeleteClick(user),
          },
        ]}
      />
    </div>
  );
};

export default UserTableRow;
