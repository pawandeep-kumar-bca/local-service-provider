import React, { useState } from "react";

import { BiCategory } from "react-icons/bi";

import { FaRegCircleCheck } from "react-icons/fa6";

import { IoEyeOffOutline, IoHomeOutline } from "react-icons/io5";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import {
  MdOutlineEdit,
  MdOutlineLock,
  MdOutlineMiscellaneousServices,
  MdOutlinePauseCircle,
  MdOutlinePlumbing,
  MdOutlineRemoveRedEye,
} from "react-icons/md";

import { HiMiniUsers, HiPlus } from "react-icons/hi2";

import { RiDeleteBin6Line } from "react-icons/ri";

import Button from "../../../components/common/Button";

import StatsCard from "../../../components/common/admin/StatsCard";
import SearchFilterBar from "../../../components/common/admin/SearchFilterBar";
import TableWrapper from "../../../components/common/admin/TableWrapper";
import ActionDropdown from "../../../components/common/admin/ActionDropdown";
import ToggleSwitch from "../../../components/common/ToggleSwitch";
import PageHeader from "../../../components/common/admin/PageHeader";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../modals/DeleteModal";

const AllCategoriesList = () => {
  // stats data
  const statsData = [
    {
      id: 1,
      title: "Total Categories",
      value: "12,835",
      growth: "12%",
      icon: <BiCategory size={22} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      growthIcon: <IoMdArrowRoundUp size={20} />,
      growthColor: "text-green-500",
    },

    {
      id: 2,
      title: "Active Categories",
      value: "12,345",
      growth: "5%",
      icon: <FaRegCircleCheck size={22} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      growthIcon: <IoMdArrowRoundUp size={20} />,
      growthColor: "text-green-500",
    },

    {
      id: 3,
      title: "Hidden Categories",
      value: "89,543",
      growth: "18%",
      icon: <IoEyeOffOutline size={22} />,
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
      growthIcon: <IoMdArrowRoundDown size={20} />,
      growthColor: "text-red-500",
    },

    {
      id: 4,
      title: "Total Services",
      value: "24,400",
      growth: "10%",
      icon: <MdOutlineMiscellaneousServices size={22} />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500",
      growthIcon: <IoMdArrowRoundUp size={20} />,
      growthColor: "text-green-500",
    },

    {
      id: 5,
      title: "Total Providers",
      value: "24,400",
      growth: "10%",
      icon: <HiMiniUsers size={24} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      growthIcon: <IoMdArrowRoundUp size={20} />,
      growthColor: "text-green-500",
    },
  ];

  // categories data

  const categories = [
    {
      id: 1,

      title: "Plumbing",

      description: "All plumbing related services.",

      slug: "plumbing",

      services: 10,

      providers: 120,

      status: "Hidden",

      homepage: true,

      createdDate: "May 12, 2024",

      createdTime: "10:20 AM",
    },

    {
      id: 2,

      title: "Cleaning",

      description: "All cleaning related services.",

      slug: "cleaning",

      services: 15,

      providers: 200,

      status: "Active",

      homepage: true,

      createdDate: "May 15, 2024",

      createdTime: "11:40 AM",
    },
  ];
 
  const navigate = useNavigate()

  const [isDelete ,setIsDelete] = useState(false)
  return (
    <>
      <div>
        {/* page header */}

        <PageHeader
          title="Categories Management"
          subtitle="Create and manage all service categories."
          button={
            <Button onClick={()=>navigate('/admin/categories/add-category')}>
              <HiPlus size={22} />
              Add New Category
            </Button>
          }
        />

        {/* stats cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-2 mt-4 mb-6">
          {statsData.map((item) => (
            <StatsCard
              key={item.id}
              title={item.title}
              value={item.value}
              growth={item.growth}
              icon={item.icon}
              iconBg={item.iconBg}
              iconColor={item.iconColor}
              growthColor={item.growthColor}
              growthIcon={item.growthIcon}
            />
          ))}
        </div>

        {/* table wrapper */}

        <TableWrapper>
          {/* filters */}

          <SearchFilterBar
            placeholder="Search by categories..."
            filters={[
              {
                label: "All Status",

                options: ["Active", "Hidden"],
              },

              {
                label: "Sort By",

                options: [
                  "Newest First",
                  "Oldest First",
                  "Descending Order",
                  "Ascending Order",
                ],
              },
            ]}
          />

          {/* table */}

          <div className="border border-slate-300 rounded-xl">
            {/* heading */}

            <div
              className="
                grid
                grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1.2fr_0.5fr]
                items-center
                mt-3
                text-sm
                font-bold
                text-black/80
                px-3
              "
            >
              <span className="pl-15">Category</span>

              <span className="text-center">Slug</span>

              <span className="text-center">Services</span>

              <span className="text-center">Providers</span>

              <span className="text-center">Status</span>

              <span className="text-center">Homepage</span>

              <span className="text-center">Created Date</span>

              <span className="text-center">Action</span>
            </div>

            <div className="border-t border-gray-200 mt-3 mb-2"></div>

            {/* rows */}

            <div className="space-y-2 pb-3">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="
                    grid
                    grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1.2fr_0.5fr]
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
                      <h1 className="text-sm font-bold text-black/90">
                        {category.title}
                      </h1>

                      <p className="text-sm text-muted mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* slug */}

                  <div className="text-center">
                    <p className="text-sm text-muted">{category.slug}</p>
                  </div>

                  {/* services */}

                  <div className="text-center">
                    <p className="text-sm font-semibold text-black/80">
                      {category.services}
                    </p>
                  </div>

                  {/* providers */}

                  <div className="text-center">
                    <p className="text-sm font-semibold text-black/80">
                      {category.providers}
                    </p>
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

                  {/* homepage toggle */}

                  <div className="flex justify-center">
                    <ToggleSwitch enabled={category.homepage} />
                  </div>

                  {/* date */}

                  <div className="text-center">
                    <h3 className="text-sm font-semibold text-black/80">
                      {category.createdDate}
                    </h3>

                    <p className="text-sm text-muted mt-1">
                      {category.createdTime}
                    </p>
                  </div>

                  {/* actions */}
                  <div className="flex justify-center">
                    <ActionDropdown
                      items={[
                        {
                          label: "View Category",
                          icon: <MdOutlineRemoveRedEye size={20} />,
                          onClick: () => {
                            navigate('/admin/categories/category-details')
                          },
                        },

                        {
                          label: "Edit Category",
                          icon: <MdOutlineEdit size={20} />,
                          onClick: () => {navigate(
                            '/admin/categories/edit-category'
                          )},
                        },

                       

                        {
                          label: "Services",
                          icon: <MdOutlineMiscellaneousServices size={20} />,
                          onClick: () => {navigate('/admin/categories/category-services')},
                        },

                        {
                          label: "Providers",
                          icon: <HiMiniUsers size={20} />,
                          onClick: () => {navigate('/admin/categories/category-providers')},
                        },
                        {
                          label: "Change Status",
                          variant:'green',
                          icon: <CgArrowsExchangeAltV size={20} />,
                          onClick: () => {},
                        },
                        {
                          label: "Toggle HomePage",
                          variant:'primary',
                          icon: <IoHomeOutline  size={20} />,
                          onClick: () => {},
                        },
                        {
                          label: "Delete Category",
                          variant:'danger',
                          icon: <RiDeleteBin6Line size={20} />,
                          onClick: () => {setIsDelete(true)},
                        },
                      ]}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TableWrapper>
      </div>

      
        {isDelete  && (
        <DeleteModal
          open={isDelete}
          close={() => setIsDelete(false)}
          text=" Are you sure you want delete Plumbing category? This action cannot be undone."
          title="Category"
        />
      )}
      
    </>
  );
};

export default AllCategoriesList;
