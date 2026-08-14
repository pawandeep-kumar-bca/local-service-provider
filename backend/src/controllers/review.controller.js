const reviewModel = require("../models/review.model");
const providerModel = require("../models/provider.model");
const bookingModel = require("../models/booking.model");
const { uploadFile, deleteFile } = require("../config/imagekit");
const categoryModel = require("../models/category.model");
const { mongoose } = require("mongoose");
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

    if (booking.userSnapshot.userObjectId.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    if (booking.bookingStatus !== "completed") {
      return res.status(400).json({ message: "Booking not completed" });
    }
    const reviewAlreadyExists = await reviewModel.findOne({ bookingId });
    if (reviewAlreadyExists) {
      return res.status(400).json({ message: "Review already submitted" });
    }
    const providerId = booking.providerSnapshot?.providerObjectId;
    if (!providerId) {
      return res.status(400).json({
        message: "Provider not found in booking",
      });
    }
    const categoryId = booking.serviceSnapshot?.categoryObjectId;
    if (!categoryId) {
      return res.status(400).json({
        message: "category not found in booking",
      });
    }
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
      serviceSnapshot: {
        categoryObjectId: booking?.serviceSnapshot?.categoryObjectId,
        categoryName: booking?.serviceSnapshot?.categoryName,
        priceType: booking?.serviceSnapshot?.priceType,
        price: booking?.serviceSnapshot?.price,
        serviceImage: booking?.serviceSnapshot?.serviceImage,
        serviceBackground: booking?.serviceSnapshot?.serviceBackground,
      },
    });
    const [reviewStats, reviewCategory] = await Promise.all([
      reviewModel.aggregate([
        {
          $match: { providerId },
        },
        {
          $group: {
            _id: "$providerId",
            averageRating: { $avg: "$rating" },
            totalReviews: { $sum: 1 },
          },
        },
      ]),

      reviewModel.aggregate([
        {
          $match: {
            "serviceSnapshot.categoryObjectId": categoryId,
          },
        },
        {
          $group: {
            _id: "$serviceSnapshot.categoryObjectId",
            averageRating: { $avg: "$rating" },
            totalReviews: { $sum: 1 },
          },
        },
      ]),
    ]);
    await bookingModel.findByIdAndUpdate(bookingId, {
      isReviewed: true,
    });
    const providerStats = reviewStats[0] || {
      averageRating: 0,
      totalReviews: 0,
    };

    const categoryStats = reviewCategory[0] || {
      averageRating: 0,
      totalReviews: 0,
    };
    await providerModel.findByIdAndUpdate(providerId, {
      rating: Number(providerStats.averageRating.toFixed(1)),
      totalReview: providerStats.totalReviews,
    });
    await categoryModel.findByIdAndUpdate(categoryId, {
      average_rating: Number(categoryStats.averageRating.toFixed(1)),
      total_reviews: categoryStats.totalReviews,
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
async function getAllReviewOfUser(req, res) {
  try {
    const userId = req.user.id;

    const allReviews = await reviewModel
      .find({ userId })
      .select("bookingId providerId comment rating createdAt images")
      .populate({
        path: "providerId",
        select: "userId",
        populate: {
          path: "userId",
          select: "fullname profileImage",
        },
      })
      .populate({
        path: "bookingId",
        select: "serviceSnapshot.categoryObjectId",
        populate: {
          path: "serviceSnapshot.categoryObjectId",
          select: "name",
        },
      })
      .sort({ createdAt: -1 });
    if (allReviews.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No reviews found",
        allReviews: [],
      });
    }
    return res.status(200).json({
      success: true,
      message: "All reviews fetched successfully",
      allReviews,
      totalReviews: allReviews.length,
    });
  } catch (err) {
    console.error("get all review of user error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
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
async function getProviderReviews(req, res) {
  try {
    const { categoryId } = req.query;
    const providerId = req.params.providerId;
    if (!categoryId) {
      return res.status(400).json({
        message: "Category Id is required",
      });
    }
    const provider = await providerModel.findById(providerId);
    if (!provider) {
      return res.status(404).json({
        message: "Provider Not Found",
      });
    }
    const [reviews, reviewSummary] = await Promise.all([
      reviewModel
        .find({
          providerId,
          "serviceSnapshot.categoryObjectId": categoryId,
        })
        .populate("userId", "fullname profileImage")
        .sort({ createdAt: -1 })
        .limit(2),

      reviewModel.aggregate([
        {
          $match: {
            providerId: new mongoose.Types.ObjectId(providerId),
            "serviceSnapshot.categoryObjectId": new mongoose.Types.ObjectId(
              categoryId,
            ),
          },
        },
        {
          $group: {
            _id: null,
            averageRating: {
              $avg: "$rating",
            },
            totalReviews: {
              $sum: 1,
            },
            fiveStar: {
              $sum: {
                $cond: [{ $eq: ["$rating", 5] }, 1, 0],
              },
            },
            fourStar: {
              $sum: {
                $cond: [
                  {
                    $eq: ["$rating", 4],
                  },
                  1,
                  0,
                ],
              },
            },
            threeStar: {
              $sum: {
                $cond: [
                  {
                    $eq: ["$rating", 3],
                  },
                  1,
                  0,
                ],
              },
            },
            twoStar: {
              $sum: {
                $cond: [
                  {
                    $eq: ["$rating", 2],
                  },
                  1,
                  0,
                ],
              },
            },
            oneStar: {
              $sum: {
                $cond: [{ $eq: ["$rating", 1] }, 1, 0],
              },
            },
          },
        },
      ]),
    ]);

    const summary = reviewSummary[0] || {
      averageRating: 0,
      totalReviews: 0,
      fiveStar: 0,
      fourStar: 0,
      threeStar: 0,
      twoStar: 0,
      oneStar: 0,
    };
    if (summary.totalReviews > 0) {
      summary.fiveStarPercentage = Number(
        (summary.fiveStar / summary.totalReviews) * 100,
      ).toFixed(0);
      summary.fourStarPercentage = Number(
        (summary.fourStar / summary.totalReviews) * 100,
      ).toFixed(0);
      summary.threeStarPercentage = Number(
        (summary.threeStar / summary.totalReviews) * 100,
      ).toFixed(0);
      summary.twoStarPercentage = Number(
        (summary.twoStar / summary.totalReviews) * 100,
      ).toFixed(0);
      summary.oneStarPercentage = Number(
        (summary.oneStar / summary.totalReviews) * 100,
      ).toFixed(0);
    }
    return res.status(200).json({
      message: "Provider reviews fetch successfully",
      reviews,
      summary,
    });
  } catch (err) {
    console.error("Get provider reviews for user Error:", err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}
async function deleteReview(req, res) {
  try {
    const reviewId = req.params.reviewId;
    const userId = req.user.id;


    if (!reviewId) {
      return res.status(400).json({ message: "Invalid review Id" });
    }
    const review = await reviewModel.findOne({
      _id: reviewId,
      userId: userId,
    });

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    if (review.images?.length > 0) {
      for (const image of review.images) {
        if (image.fieldId) {
          await deleteFile(image.fieldId);
        }
      }
    }
    await reviewModel.deleteOne({
      _id:reviewId
    })
    return res
      .status(200)
      .json({ message: "review deleted successfully"});
  } catch (err) {
    console.error("Delete review error:", err);
    return res.status(500).json({ message: "internal server error" });
  }
}
async function editReview(req, res) {
  try {
    const { rating, comment, existingImages } = req.body;
    const { reviewId } = req.params;
    const userId = req.user.id;
    const hasNewImages = req.files?.ReviewImage?.length > 0;
    const hasExistingImagesUpdate = existingImages !== undefined;
    if (!reviewId) {
      return res.status(400).json({
        success: false,
        message: "Review Id is required",
      });
    }

    const review = await reviewModel.findOne({
      _id: reviewId,
      userId,
    });

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    // Rating
    if (rating !== undefined) {
      const numericRating = Number(rating);

      if (numericRating < 1 || numericRating > 5) {
        return res.status(400).json({
          success: false,
          message: "Rating must be between 1 and 5",
        });
      }

      review.rating = numericRating;
    }

    // Comment
    if (comment !== undefined) {
      const trimmedComment = comment.trim();

      if (trimmedComment.length < 10) {
        return res.status(400).json({
          success: false,
          message: "Comment must be at least 10 characters",
        });
      }

      review.comment = trimmedComment;
    }
    if (hasNewImages || hasExistingImagesUpdate) {
      let keepImageIds = [];

      if (hasExistingImagesUpdate) {
        try {
          keepImageIds = JSON.parse(existingImages);
        } catch {
          return res.status(400).json({
            success: false,
            message: "Invalid existingImages format",
          });
        }
      } else {
        // If only new images are being added,
        // keep all existing images.
        keepImageIds = review.images.map((image) => image.fieldId);
      }

      const newImageCount = req.files?.ReviewImage?.length || 0;

      if (keepImageIds.length + newImageCount > 5) {
        return res.status(400).json({
          success: false,
          message: "Maximum 5 images are allowed",
        });
      }

      // Delete removed images
      const removedImages = review.images.filter(
        (image) => !keepImageIds.includes(image.fieldId),
      );

      for (const image of removedImages) {
        await deleteFile(image.fieldId);
      }

      // Keep remaining images
      review.images = review.images.filter((image) =>
        keepImageIds.includes(image.fieldId),
      );

      // Upload new images
      if (newImageCount > 0) {
        const newImages = await Promise.all(
          req.files.ReviewImage.map((image) =>
            uploadFile(
              image,
              `review-${Date.now()}-${image.originalname}`,
              "ReviewImages",
            ),
          ),
        );

        review.images.push(
          ...newImages.map((image) => ({
            url: image.url,
            fieldId: image.fieldId,
          })),
        );
      }
    }

    await review.save();

    return res.status(200).json({
      success: true,
      message: "Review updated successfully",
      review,
    });
  } catch (err) {
    console.log("Edit review error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
module.exports = {
  reviewCreate,
  providerReview,
  getProviderReviews,
  deleteReview,
  getAllReviewOfUser,
  editReview,
};
