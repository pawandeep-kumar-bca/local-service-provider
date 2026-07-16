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

const UserTableRow = ({ user, onDeleteClick, onSuspendClick, onResetPasswordClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        min-w-[1200px]
        grid
        grid-cols-[1.2fr_1.2fr_1fr_1fr_1fr_0.7fr_0.4fr]
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
      <UserInfo image={user.image} name={user.name} id={user.userId} />

      {/* email */}
      <div>
        <p className="text-sm text-muted">{user.email}</p>
      </div>

      {/* phone */}
      <div>
        <p className="text-sm text-muted">{user.phone}</p>
      </div>

      {/* status */}
      <div>
        <StatusBudge badge={user.status} />
      </div>

      {/* joined date */}
      <div>
        <p className="text-sm text-muted">{user.joinedDate}</p>
      </div>

      {/* bookings */}
      <div>
        <p className="text-sm text-muted">{user.bookings}</p>
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