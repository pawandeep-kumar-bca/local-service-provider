import React from 'react'
import StatusBadge from '../../components/common/StatusBadge'
const BookingHistory = () => {
  return (
    <div>
      <div className='mt-3'>

        <div className='grid grid-cols-6 text-sm text-black/80 font-bold justify-items-center items-center'>
          <span>Booking ID</span>
          <span>Service</span>
          <span>Provider</span>
          <span>Date</span>
          <span>Amount</span>
          <span>Status</span>
        </div>
       <div className='mt-2'>
         <div className='grid grid-cols-6 justify-items-center items-center'>
        <span className='text-sm font-bold text-blue-500'>#BK3423</span>
         <span className='text-sm text-muted font-semibold'>Home Cleaning</span>
         <span className='text-sm text-muted font-semibold'>Jone Smith</span>
         <span className='text-sm text-muted font-semibold'>May 20, 2025</span>
         <span className='text-sm text-muted font-semibold'>₹ 505</span>
         <StatusBadge badge='completed'/>
        </div>
       </div>
      </div>
    </div>
  )
}

export default BookingHistory