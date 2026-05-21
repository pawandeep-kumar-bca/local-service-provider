import React from 'react'

const Overview = () => {
  return (
    <div>
      <h1 className='text-xl font-bold text-text '>Statistics</h1>

      <div className='flex justify-between mt-3 mb-4'>
        <div className='text-center'>
          <h3 className='text-sm font-semibold text-muted mb-1'>Total Bookings</h3>
          <span className='text-2xl font-semibold text-text'>12</span>
        </div>
        <div className='text-center'>
          <h3 className='text-sm text-muted font-semibold mb-1'>Completed</h3>
          <span className='text-2xl font-semibold text-text'>8</span>
        </div>
        <div className='text-center'>
          <h3 className='text-sm text-muted font-semibold mb-1'>Cancelled</h3>
          <span className='text-2xl font-semibold text-text'>2</span>
        </div>
        <div className='text-center'>
          <h3 className='text-sm text-muted font-semibold mb-1'>Total Spent</h3>
          <span className='text-2xl font-semibold text-text '>₹ 12,353</span>
        </div>
      </div>
    </div>
  )
}

export default Overview