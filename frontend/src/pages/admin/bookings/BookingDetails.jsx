import React from 'react'
import StatusBadge from '../../../components/common/StatusBadge'
import UserInfo from '../../../components/common/admin/UserInfo'
import { MdOutlineEmail } from 'react-icons/md'
import { IoCallOutline } from 'react-icons/io5'
import { CiLocationOn } from "react-icons/ci";
const BookingDetails = () => {
  return (
    <div>
        <div>
            <h1 className='text-2xl font-bold text-black'>Booking Details</h1>
        </div>
        <div className='flex gap-7'>
            <div>
                <h2>Booking Information</h2>
               <div>
                 <div>
                    <span>Booking Id</span>
                    <span>#BK04443</span>
                </div>
                 <div>
                    <span>Service</span>
                    <span>Plumbing</span>
                </div>
                 <div>
                    <span>Date & Time</span>
                    <span>May 12 , 2023, 10:30 AM</span>
                </div>
                 <div>
                    <span>Status</span>
                    <StatusBadge badge='completed'/>
                </div>
                 <div>
                    <span>Payment Status</span>
                    <span>Paid</span>
                </div>
                 <div>
                    <span>Amount</span>
                    <span>₹ 1,200</span>
                </div>
               </div>
            </div>
            <div>
                <h2>Customer</h2>
               <UserInfo name="John" image="https://randomuser.me/api/portraits/men/30.jpg" id="#USE4943"/>
               <div>
                <span><IoCallOutline />+91 98453 24423</span>
               </div>
               <div>
                <span><MdOutlineEmail /> john.doe@example.com</span>
               </div>
               <div>
                <span>Address</span>
                <span><CiLocationOn />132,Green Park ,New delhi,india</span>
               </div>
            </div>
            <div>
                <h2>Provider</h2>
               <UserInfo name="John" image="https://randomuser.me/api/portraits/men/30.jpg" id="#USE4943"/>
               <div>
                <span><IoCallOutline />+91 98453 24423</span>
               </div>
               <div>
                <span><MdOutlineEmail />john.doe@example.com</span>
               </div>
               <div>
                <span>Address</span>
                <span><CiLocationOn />132,Green Park ,New delhi,india</span>
               </div>
            </div>
        </div>
    </div>
  )
}

export default BookingDetails