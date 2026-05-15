import React from 'react'
import { IoSearch } from 'react-icons/io5';
import StatusBadge from '../../components/common/StatusBadge';
import { FaStar } from 'react-icons/fa';

const AllProvidersList = () => {
  
  const statsData = [
      {
        id: 1,
        title: "Total Providers",
        value: "12,835",
        growth: "12%",
        icon: <FaUser size={24} />,
        iconBg: "bg-sky-100",
        iconColor: "text-sky-500",
        growthColor: "text-green-500",
       
      },
  
      {
        id: 2,
        title: "Active Providers",
        value: "12,345",
        growth: "5%",
        icon: <FaUserFriends size={24} />,
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-500",
        growthColor: "text-green-500",
        
      },
  
      {
        id: 3,
        title: "Blocked Providers",
        value: "89,543",
        growth: "18%",
        icon: <FaBook size={24} />,
        iconBg: "bg-pink-200",
        iconColor: "text-pink-600",
        growthColor: "text-green-500",
        
      },
  
      {
        id: 4,
        title: "Pending Approval",
        value: "24,400",
        growth: "10%",
        icon: <TfiWallet size={24} />,
        iconBg: "bg-green-200",
        iconColor: "text-green-500",
        growthColor: "text-green-500",
      
      }, {
        id: 4,
        title: "Top Rated Providers",
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
                <input type="search" placeholder='Search providers by name,email,or phone' className='outline-0 border-0 p-1' />
                <IoSearch size={24}/>
               </div>
               <div className='flex ga-3 flex-1'>
                <div>
                  <label htmlFor="service category" className='text-lg font-semibold text-black/80'>Service Category</label>
                  <select defaultValue='' name="service category" id="service category" className='border border-muted rounded-lg px-2 py-1'>
                    <option disabled>All Category</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="cleaning">Cleaning</option>
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
                  <label htmlFor="verification" className='text-lg font-semibold text-black/80'>Verification</label>
                  <select defaultValue='' name="verified" id="verified" className='border border-muted rounded-lg px-2 py-1'>
                    <option disabled>All</option>
                    <option value="verified">Verified</option>
                    <option value="pending">Pending</option>
                    
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
                <span className='text-black/80 text-lg'>Provider</span>
                <span className='text-black/80 text-lg'>Service Category</span>
                <span className='text-black/80 text-lg'>Email</span>
                <span className='text-black/80 text-lg'>Phone</span>
                
                <span className='text-black/80 text-lg'>Status</span>
                <span className='text-black/80 text-lg'>Verification</span>
                <span className='text-black/80 text-lg'>Rating</span>
                <span className='text-black/80 text-lg'>Jobs Completed</span>
                <span className='text-black/80 text-lg'>Joined Date</span>
                
                <span className='text-black/80 text-lg'>Actions</span>
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
                        #PRV0934
                      </p>
                    </div>
                </div>
                 <div>
                  <StatusBadge category='plumbing'/>
                </div>
                <div>
                  <p className='text-sm text-muted'>john.doe@example.com</p>
                </div>
                <div>
                  <p className='text-sm text-muted'>+91 99843 43243</p>
                </div>
                <div>
                  <StatusBadge badge='active'/>
                </div>
                <div>
                  <StatusBudge badge='verified' />
                </div>
                <div className='flex items-center gap-3'>
                  <p className='text-sm  text-black/80 font-semibold'>4.8</p>
                  <FaStar className='text-yellow-500'/>
                </div>
                <div>
                  <p className='text-sm text-muted'>May 12 , 2024</p>
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
    </div>  )
}

export default AllProvidersList