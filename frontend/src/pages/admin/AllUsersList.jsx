import React from 'react'
import { IoSearch } from 'react-icons/io5';
import StatusBudge from '../../components/common/StatusBadge'
import { BsThreeDotsVertical } from 'react-icons/bs';
const AllUsersList = () => {
  const role = 'provider'
  const statsData = [
      {
        id: 1,
        title: "Total Users",
        value: "12,835",
        growth: "12%",
        icon: <FaUser size={24} />,
        iconBg: "bg-sky-100",
        iconColor: "text-sky-500",
        growthColor: "text-green-500",
       
      },
  
      {
        id: 2,
        title: "Active Users",
        value: "12,345",
        growth: "5%",
        icon: <FaUserFriends size={24} />,
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-500",
        growthColor: "text-green-500",
        
      },
  
      {
        id: 3,
        title: "Blocked Users",
        value: "89,543",
        growth: "18%",
        icon: <FaBook size={24} />,
        iconBg: "bg-pink-200",
        iconColor: "text-pink-600",
        growthColor: "text-green-500",
        
      },
  
      {
        id: 4,
        title: "New Users(this month)",
        value: "24,400",
        growth: "10%",
        icon: <TfiWallet size={24} />,
        iconBg: "bg-green-200",
        iconColor: "text-green-500",
        growthColor: "text-green-500",
      
      }, {
        id: 4,
        title: "Verified Users",
        value: "24,400",
        growth: "10%",
        icon: <TfiWallet size={24} />,
        iconBg: "bg-green-200",
        iconColor: "text-green-500",
        growthColor: "text-green-500",
      
      }
    ];
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mt-4 mb-6">
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
                  <div className="flex items-center gap-4">
      
                    {/* Icon */}
                    <div
                      className={`
                        ${item.iconBg}
                        ${item.iconColor}
                        w-14 h-14
                        rounded-2xl
                        flex items-center justify-center
                        shrink-0
                      `}
                    >
                      {item.icon}
                    </div>
      
                    {/* Content */}
                    <div className="flex-1">
                      <h1 className="text-sm text-black/80 font-medium">
                        {item.title}
                      </h1>
      
                      <h2 className="text-2xl md:text-3xl font-bold text-black mt-1">
                        {item.value}
                      </h2>
      
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
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
                  </div>
                </div>
              ))}
            </div>

          <div className='bg-white
            rounded-[28px]
            border border-slate-200
            p-5
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]'>
            <div className='flex gap-3 mb-4'>
               <div className='flex items-center gap-2 px-2 py-1 rounded-lg'>
                <input type="search" className='outline-0 border-0 p-1' />
                <IoSearch size={24}/>
               </div>
               <div className='flex ga-3 flex-1'>
                <div>
                  <label htmlFor="roles" className='text-lg font-semibold text-black/80'>Role</label>
                  <select defaultValue='' name="role" id="role" className='border border-muted rounded-lg px-2 py-1'>
                    <option disabled>All Roles</option>
                    <option value="user">User</option>
                    <option value="provider">Provider</option>
                  </select>
                </div>
                 <div>
                  <label htmlFor="status" className='text-lg font-semibold text-black/80'>Status</label>
                  <select defaultValue='' name="status" id="status" className='border border-muted rounded-lg px-2 py-1'>
                    <option disabled>Status</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="blocked">Blocked</option>
                  </select>
                </div>
                 <div>
                  <label htmlFor="verified" className='text-lg font-semibold text-black/80'>Verified</label>
                  <select defaultValue='' name="verified" id="verified" className='border border-muted rounded-lg px-2 py-1'>
                    <option disabled>All</option>
                    <option value="verified">Verified</option>
                    <option value="not verified">Not verified</option>
                    
                  </select>
                </div>
                <div>
                  <label htmlFor="joined date" className='text-lg font-semibold text-black/80'>Joined Date</label>
                  <input type="date" id='joined date' className='border border-muted rounded-lg px-2 py-1'/>
                 
                </div>
               </div>
            </div>
            <div className='border border-muted rounded-xl'>
              <div className='grid grid-cols-8 '>
                <span className='text-black/80 text-lg'>User</span>
                <span className='text-black/80 text-lg'>Email</span>
                <span className='text-black/80 text-lg'>Phone</span>
                <span className='text-black/80 text-lg'>Role</span>
                <span className='text-black/80 text-lg'>Status</span>
                <span className='text-black/80 text-lg'>Joined Date</span>
                <span className='text-black/80 text-lg'>Bookings</span>
                <span className='text-black/80 text-lg'>Action</span>
              </div>
              <div className='grid grid-cols-8 '>
                <div>
                  <img
                      src='https://randomuser.me/api/portraits/women/45.jpg'
                      alt="profile"
                      className="
                        w-12 h-12 min-w-12
                        rounded-full
                        object-cover
                        ring-2 ring-primary/10
                      "
                    />
                    <div>
                      <h1 className="text-base font-bold text-black/90">
                        John Doe
                      </h1>

                      <p className="text-sm text-muted">
                        #USR0934
                      </p>
                    </div>
                </div>
                <div>
                  <p className='text-sm text-muted'>john.doe@example.com</p>
                </div>
                <div>
                  <p className='text-sm text-muted'>+91 99843 43243</p>
                </div>
                <div>
                  {role === 'provider' ?<span className='px-2 py-1 rounded-lg bg-blue-100 text-blue-500'>Provider</span>:<span className='px-2 py-1 rounded-lg bg-purple-100 text-purple-500'>Provider</span>}
                </div>
                <div>
                  <StatusBudge badge='active'/>
                </div>
                <div>
                  <p className='text-sm text-muted'>May 12 , 2024</p>
                </div>
                <div>
                  <p className='text-sm text-muted'>12</p>
                </div>
                <button
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
              </div>
            </div>

          </div>
    </div>
  )
}

export default AllUsersList