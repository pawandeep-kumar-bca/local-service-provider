import React from 'react'
import { IoMdNotifications } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

const NavBar = () => {
  return (
    <div className='w-[80%] bg-red-100 h-[5.3rem] '>
     <div>
        <IoSearch />
        <input type="text"  placeholder='enter your name'/>
       
     </div>
     <div>
        <IoMdNotifications />
         <img
          src="/assets/profile.png"
          alt="profile"
          className="object-cover w-[5rem] h-[5rem] rounded-full"
        />
     </div>
    </div>
  )
}

export default NavBar