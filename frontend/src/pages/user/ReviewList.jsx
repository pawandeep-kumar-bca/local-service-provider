import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewList = () => {

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ReviewCard/>
    </div>
  )
}

export default ReviewList