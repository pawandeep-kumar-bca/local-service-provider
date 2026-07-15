import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlinePlumbing, MdOutlineEdit, MdOutlineMiscellaneousServices, MdOutlineRemoveRedEye } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import ActionDropdown from "../../../../components/common/admin/ActionDropdown";


const CategoryTableRow = ({ category, onDeleteClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        grid
        grid-cols-[2fr_1fr_1fr_1fr_1.2fr_0.5fr]
        items-center
        px-3
      "
    >
      {/* category */}
      <div className="flex items-center ml-3 gap-3">
        <div
          className="
            w-12 h-12 min-w-12
            rounded-lg
            bg-blue-100
            flex items-center justify-center
            text-blue-500
          "
        >
          <MdOutlinePlumbing size={24} />
        </div>

        <div>
          <h1 className="text-sm font-bold text-black/90">{category.title}</h1>
          <p className="text-sm text-muted mt-1">{category.description}</p>
        </div>
      </div>

      {/* slug */}
      <div className="text-center">
        <p className="text-sm text-muted">{category.slug}</p>
      </div>

      {/* providers */}
      <div className="text-center">
        <p className="text-sm font-semibold text-black/80">{category.providers}</p>
      </div>

      {/* status */}
      <div className="text-center">
        <span
          className={`
            py-1 px-3 rounded-lg text-sm border
            ${
              category.status === "Active"
                ? "text-green-500 bg-green-100 border-green-500"
                : "text-red-500 bg-red-100 border-red-500"
            }
          `}
        >
          {category.status}
        </span>
      </div>

      {/* date */}
      <div className="text-center">
        <h3 className="text-sm font-semibold text-black/80">{category.createdDate}</h3>
        <p className="text-sm text-muted mt-1">{category.createdTime}</p>
      </div>

      {/* actions */}
      <div className="flex justify-center">
        <ActionDropdown
          items={[
            {
              label: "View Category",
              icon: <MdOutlineRemoveRedEye size={20} />,
              onClick: () => navigate("/admin/categories/category-details"),
            },
            {
              label: "Edit Category",
              icon: <MdOutlineEdit size={20} />,
              onClick: () => navigate("/admin/categories/edit-category"),
            },
            {
              label: "Services",
              icon: <MdOutlineMiscellaneousServices size={20} />,
              onClick: () => navigate("/admin/categories/category-services"),
            },
            {
              label: "Providers",
              icon: <HiMiniUsers size={20} />,
              onClick: () => navigate("/admin/categories/category-providers"),
            },
            {
              label: "Change Status",
              variant: "green",
              icon: <CgArrowsExchangeAltV size={20} />,
              onClick: () => {},
            },
            {
              label: "Toggle HomePage",
              variant: "primary",
              icon: <IoHomeOutline size={20} />,
              onClick: () => {},
            },
            {
              label: "Delete Category",
              variant: "danger",
              icon: <RiDeleteBin6Line size={20} />,
              onClick: () => onDeleteClick(category),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CategoryTableRow;