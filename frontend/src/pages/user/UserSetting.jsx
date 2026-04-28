import React from 'react'
import { MdOutlineFileUpload } from 'react-icons/md'
import Input from '../../components/common/Input'
import StatusBadge from '../../components/common/StatusBadge'
import { IoIosCheckmark } from 'react-icons/io'
import Button from '../../components/common/Button'

const UserSetting = () => {
  return (
    <div>
        <div>
            <h1>Personal Information</h1>
            <p>Update your personal details</p>
        </div>
        <div className='relative'>
             <img
              src="/assets/profile.png"
              alt="profile"
              className="cursor-pointer  w-[4rem] h-[4rem] rounded-full"
            />
           <MdOutlineFileUpload />
        </div>
        <div>
            <div>
                <Input label='Full Name' type='text' id='name'/>
            <Input label='Email' type='email' value='pawandeepkumar7777@gmail.com' id='email' readOnly/>
            </div>
            <div>
                <Input label='Role' type='text'
                value="user"
                id='role' readOnly/>
            <div>
                <h3>Account Status</h3>
              <StatusBadge>Verified <IoIosCheckmark /></StatusBadge>
            </div>
            </div>
        </div>
        <Button>Save Changes</Button>
    </div>
  )
}

export default UserSetting