import React from 'react'
import StatusBadge from '../../../components/common/StatusBadge'
import Button from '../../../components/common/Button'
const PaymentHistory = () => {
  return (
    <div>
      <div className='mt-3'>

        <div className='grid grid-cols-6 text-sm text-black/80 font-bold justify-items-center items-center'>
          <span>Transition ID</span>
          <span>Amount</span>
          <span>Method</span>
          <span>Date</span>
          <span>Status</span>
          <span>Receipt</span>
        </div>
       <div className='mt-2'>
         <div className='grid grid-cols-6 justify-items-center items-center'>
        <span className='text-sm font-bold text-blue-500'>#TR3423</span>
        <span className='text-sm text-muted font-semibold'>₹ 505</span>
         <span className='text-sm text-muted font-semibold'>UPI</span>
         <span className='text-sm text-muted font-semibold'>May 20, 2025</span>
         
         <StatusBadge badge='success'/>
         <div>
          <Button className='text-blue-500 border-blue-500  bg-white ' color='white'>Download</Button>
         </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default PaymentHistory