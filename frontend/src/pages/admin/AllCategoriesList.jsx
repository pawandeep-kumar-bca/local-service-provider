import React, { useEffect, useRef, useState } from 'react'
import { BiCategory } from "react-icons/bi";
import { FaRegCircleCheck } from 'react-icons/fa6';
import { IoEyeOffOutline, IoSearch } from 'react-icons/io5';
import { MdOutlineEdit, MdOutlineLock, MdOutlineMiscellaneousServices, MdOutlinePauseCircle, MdOutlinePlumbing, MdOutlineRemoveRedEye } from 'react-icons/md';
import { HiMiniUsers, HiPlus } from "react-icons/hi2";
import Button from '../../components/common/Button'
import { IoMdArrowRoundUp } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CustomDatePicker from "../../components/common/CustomDatePicker";
const AllCategoriesList = () => {
  const statsData = [
      {
        id: 1,
        title: "Total Categories",
        value: "12,835",
        growth: "12%",
        icon: <BiCategory size={22} />,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-500",
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
        growthColor: "text-green-500",
      },
  
      {
        id: 3,
        title: "Hidden Categories",
        value: "89,543",
        growth: "18%",
        icon: <IoEyeOffOutline size={22} />,
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
        growthColor: "text-green-500",
      },
  
      {
        id: 4,
        title: "Total Services",
        value: "24,400",
        growth: "10%",
        icon: <MdOutlineMiscellaneousServices size={22} />,
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-500",
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
        growthColor: "text-green-500",
      },
    ];
    const [activeMenu, setActiveMenu] = useState(null);
  
    const menuRef = useRef(null);
  
    // close outside click
  const [value,setValue] = useState(false)
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setActiveMenu(null);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    // toggle menu
  
    const toggleMenu = () => {
      setActiveMenu((prev) => (prev === 1 ? null : 1));
    };
  return (
     <>
      <div>
       <div className='flex justify-between'>
         <div>
          <h1 className='text-2xl font-bold text-black/80'>Categories management</h1>
          <p className='text-sm text-muted'>Categories and manage all service categories.</p>
        </div>
        <div>
          <Button><HiPlus size={22}/>Add New Category</Button>
        </div>
       </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-2 mt-4 mb-6">
          {statsData.map((item) => (
            <div
              key={item.id}
              className={`
                        bg-white
                        border border-gray-200
                        rounded-2xl
                        p-5
                        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                        hover:-translate-y-1
                        hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]
                        transition-all duration-300
                        cursor-pointer
                      `}
            >
              <div className="flex items-center gap-3">
                {/* Icon */}
                <div
                  className={`
                            ${item.iconBg}
                            ${item.iconColor}
                            w-13 h-13
                            rounded-full
                            flex items-center justify-center
                            shrink-0
                          `}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h1 className="text-sm text-black/60 font-medium">
                    {item.title}
                  </h1>

                  <h2 className="text-2xl md:text-3xl font-bold text-black ">
                    {item.value}
                  </h2>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 mt-2 flex-wrap ">
                <span
                  className={`
                                ${item.growthColor}
                                flex items-center gap-1
                                font-semibold
                                text-sm
                              `}
                >
                  <IoMdArrowRoundUp size={18} />
                  {item.growth}
                </span>

                <p className="text-xs md:text-sm text-black/60 font-medium">
                  from last month
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="bg-white
                rounded-2xl
                border border-slate-300
                p-5
                shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
        >
          <div className="flex gap-3 mb-5">
            <div className="flex items-center gap-4 pl-4 pr-2 py-2 border border-slate-300 rounded-lg text-muted flex-1">
              <input
                type="search"
                placeholder="Search by categories..."
                className="outline-0 border-0 w-full "
              />
              <IoSearch size={18} />
            </div>
            <div className="flex gap-3 flex-2 ">
              <div className="flex-1 ">
                <select
                  defaultValue=""
                  name="status"
                  id="status"
                  className="rounded-lg px-4 w-full  py-2 outline-0 border border-slate-300 text-muted"
                >
                  <option disabled> All  Status</option>
                  <option value="active">Active</option>
                  <option value="hidden">hidden</option>
                </select>
              </div>
              <div className="flex-1">
                <select
                  defaultValue=""
                  name="sortby"
                  id="sortby"
                  className="rounded-lg px-4 w-full  py-2 outline-0 border border-slate-300 text-muted"
                >
                  <option disabled>Sort By</option>
                  <option value="newest first">Newest First</option>
                  <option value="oldest first">Oldest First</option>
                  <option value="descending order">Descending Order</option>
                  <option value="ascending order">Ascending Order</option>
                </select>
              </div>
              <div>
                <CustomDatePicker />
              </div>
            </div>
          </div>
          <div className="border border-slate-300 rounded-xl ">
            <div className="grid grid-cols-[2.3fr_1fr_1fr_1fr_1fr_1fr_1.2fr_1fr] items-center justify-items-center mt-3 text-sm font-bold text-black/80">
              <span>Category</span>
              <span>Slug</span>
              <span>Services</span>
              <span>Providers</span>
              <span>Status</span>
              <span>Homepage</span>
              <span>Created Date</span>
              <span>Action</span>
            </div>
            <div className="border-t border-gray-200 mt-3 mb-2"></div>
            <div className="relative">
              <div className="grid grid-cols-[2.3fr_1fr_1fr_1fr_1fr_1fr_1.2fr_1fr] items-center justify-items-center gap-3 mb-2">
                <div className="flex items-start gap-3">
                  <div
                    className="
                            w-12 h-12 min-w-12
                            rounded-lg
                            bg-blue-100 flex items-center justify-center  text-blue-500
                          "
                  >
                    <MdOutlinePlumbing size={24}/>
                  </div>

                  <div>
                    <h1 className="text-sm font-bold text-black/90">
                      Plumbing
                    </h1>

                    <p className="text-sm text-muted mt-1">All plumbing related services.</p>
                  </div>
                </div>
                <div>
                  
                  <p className="text-sm text-muted">plumbing</p>
                </div>
                <div>
                  <p className="text-sm text-black/80 font-semibold">10</p>
                </div>
                <div>
                  <p className="text-sm text-black/80 font-semibold">120</p>
                </div>
                <div>
                  <span className="py-1 px-3 text-red-500 border border-red-500 bg-red-100 rounded-lg text-sm">Hidden</span>
                </div>
                <div>
                  <button
              onClick={() => setValue((prev) => !prev)}
              className={`
      relative w-14 h-8 rounded-full
      transition-colors duration-300
      flex items-center
      cursor-pointer shrink-0
      ${value ? "bg-green-500" : "bg-slate-300"}
    `}
            >
              <span
                className={`
        absolute left-1
        w-6 h-6 rounded-full bg-white
        transition-transform duration-300
        shadow-sm
        ${value ? "translate-x-6" : "translate-x-0"}
      `}
              />
            </button>
                </div>
                <div>
                  <h3 className='text-sm font-semibold text-black/80'>May 12, 2024</h3>
                  <p className='text-sm text-muted mt-1'>10:20 AM</p>
                </div>
               
               
                
                <button
                  onClick={() => toggleMenu(1)}
                  className="
    
        w-10 h-10
        rounded-xl
        border border-slate-300
        flex items-center justify-center
        text-muted
        hover:bg-slate-100
        transition-all duration-300
        cursor-pointer
      "
                >
                  <BsThreeDotsVertical size={18} />
                </button>
                {activeMenu === 1 && (
                  <div
                    ref={menuRef}
                    className="
          absolute
          top-15
          right-12
          z-[999]
          min-w-[220px]
          bg-white
          border border-slate-200
          rounded-2xl
          p-2
          shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          animate-in
          fade-in
          zoom-in-95
          duration-200
        "
                  >
                    <button className="w-full flex items-center gap-3 cursor-pointer px-3 py-2 rounded-xl hover:bg-slate-100 transition-all duration-300">
                      <MdOutlineRemoveRedEye size={20} />
                      <p className="text-sm font-medium">View Category</p>
                    </button>

                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 text-blue-500 transition-all cursor-pointer duration-300">
                      <MdOutlineEdit size={20} />
                      <p className="text-sm font-medium">Edit Category</p>
                    </button>

                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 transition-all cursor-pointer duration-300">
                      <MdOutlineLock size={20} />
                      <p className="text-sm font-medium">Reset Category</p>
                    </button>

                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-yellow-50 text-yellow-500 transition-all cursor-pointer duration-300">
                      <MdOutlinePauseCircle size={20} />
                      <p className="text-sm font-medium">Suspend Category</p>
                    </button>

                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 text-red-500 transition-all cursor-pointer duration-300">
                      <RiDeleteBin6Line size={20} />
                      <p className="text-sm font-medium">Delete Category</p>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}

export default AllCategoriesList