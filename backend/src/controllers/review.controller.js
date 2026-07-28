const reviewModel = require("../models/review.model");
const providerModel = require("../models/provider.model");
const bookingModel = require("../models/booking.model");
const { uploadFile } = require("../config/imagekit");

async function reviewCreate(req, res) {
  try {
    const { rating, comment, bookingId } = req.body;
    const userId = req.user.id;

    if (!rating || rating < 1 || rating > 5) {
      return res
        .status(400)
        .json({ message: "Rating must be between 1 and 5" });
    }
    const trimmedComment = comment?.trim();

    if (trimmedComment && trimmedComment.length < 10) {
      return res.status(400).json({
        message: "Comment must be at least 10 characters",
      });
    }
    const booking = await bookingModel.findById(bookingId);

    if (!booking) {
      return res
        .status(404)
        .json({ message: "Booking not found", booking: [] });
    }

    if (booking.userId.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    if (booking.bookingStatus !== "completed") {
      return res.status(400).json({ message: "Booking not completed" });
    }
    const reviewAlreadyExists = await reviewModel.findOne({ bookingId });
    if (reviewAlreadyExists) {
      return res.status(400).json({ message: "Review already submitted" });
    }
    const providerId = booking.providerSnapshot?.providerId;
    
    const reviewImages = req.files?.ReviewImage
      ? await Promise.all(
          req.files.ReviewImage.map((image) =>
            uploadFile(
              image,
              `review-${Date.now()}-${image.originalname}`,
              "ReviewImages",
            ),
          ),
        )
      : [];
    const review = await reviewModel.create({
      userId,
      bookingId,
      providerId,
      rating,
      comment: trimmedComment,
      images: reviewImages,
    });
    const reviewStats = await reviewModel.aggregate([
      {
        $match: {
          providerId: providerId,
        },
      },
      {
        $group: {
          _id: "$providerId",
          averageRating: {
            $avg: "$rating",
          },
          totalReviews: {
            $sum: 1,
          },
        },
      },
    ]);
    await bookingModel.findByIdAndUpdate(bookingId, {
      isReviewed: true,
    });
    const stats = reviewStats[0] || {
      averageRating: 0,
      totalReviews: 0,
    };
    await providerModel.findByIdAndUpdate(providerId, {
      rating: stats.averageRating,
      totalReview: stats.totalReviews,
    });
    return res.status(201).json({
      success: true,
      message: "Review created successfully",
      review,
    });
  } catch (err) {
    console.error("Review create error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
async function getAllReviewOfUser(req,res){
  try{
    const userId = req.user.id

    const allReviews = await reviewModel.find({userId}).select('bookingId providerId comment rating createdAt images').populate({
      path:'providerId',
      select:'userId',
      populate:{
        path:'userId',
        select:'fullname'
      }
    }).populate({
      path:'bookingId',
      select:'categoryId',
      populate:{
        path:'categoryId',
        select:'name'
      }
    }).sort({createdAt:-1})
    if(allReviews.length === 0){
      return res.status(200).json({
        success:true,
        message:'No reviews found',
        allReviews:[]
      })
    }
    return res.status(200).json({
      success:true,
      message:"All reviews fetched successfully",
      allReviews,
      totalReviews:allReviews.length
    })
  }catch(err){
    console.error('get all review of user error:',err);
    return res.status(500).json({
      success:false,
      message:'Internal server error'
    })
    
  }
}
async function providerReview(req, res) {
  try {
    const providerId = req.params.providerId;

    if (!providerId) {
      return res.status(400).json({ message: "providerId is missing" });
    }
    const reviews = await reviewModel
      .find({ providerId: providerId })
      .populate("userId", "name");

    if (reviews.length === 0) {
      return res.status(200).json({
        message: "reviews not found",
        reviews: [],
      });
    }
    return res.status(200).json({
      message: "provider review fetch successfully",
      providerId,
      totalReview: reviews.length,
      reviews,
    });
  } catch (err) {
    console.error("provider review error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function deleteReview(req, res) {
  try {
    const reviewId = req.params.id;
    const userId = req.user.id;

    if (!reviewId) {
      return res.status(400).json({ message: "Invalid review Id" });
    }
    const deletedReview = await reviewModel.findOneAndDelete({
      _id: reviewId,
      userId: userId,
    });

    if (!deletedReview) {
      return res
        .status(404)
        .json({ message: "Review not found or unauthorized" });
    }

    return res
      .status(200)
      .json({ message: "review deleted successfully", deletedReview });
  } catch (err) {
    console.error("Delete review error:", err);
    return res.status(500).json({ message: "internal server error" });
  }
}

module.exports = {
  reviewCreate,
  providerReview,
  deleteReview,
  getAllReviewOfUser
};
