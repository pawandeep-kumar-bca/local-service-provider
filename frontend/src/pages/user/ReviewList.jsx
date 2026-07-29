import React from 'react'
import ReviewCard from './ReviewCard'
import { useGetAllUserReviews } from '../../hooks/useReview'

const ReviewList = () => {
const {data} = useGetAllUserReviews()

const allReviews = data?.allReviews||[]

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {allReviews.map((review)=>(
            <ReviewCard key={review._id} review={review}/>
        ))}
    </div>
  )
}

export default ReviewList