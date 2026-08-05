const bookingsModel = require("../models/booking.model");
const providerModel = require("../models/provider.model");
const categoryModel = require("../models/category.model");
const UserModel = require("../models/User.model");
const stateModel = require("../models/State.model");
const districtModel = require("../models/district.model");
const cityModel = require("../models/city.model");

const { calculatePricing } = require("../utils/calculatePricing");
const { generateId } = require("../utils/generateId");

function convertSlotToDate(bookingDate, timeStr) {
  const date = new Date(bookingDate);

  const [time, meridian] = timeStr.trim().split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (meridian === "PM" && hours !== 12) hours += 12;
  if (meridian === "AM" && hours === 12) hours = 0;

  date.setHours(hours, minutes, 0, 0);

  return date;
}
async function userBookingCreate(req, res) {
  try {
    const {
      providerId,
      categoryId,
      bookingDate,
      bookingSlot,
      state,
      district,
      city,
      village,
      fullAddress,
      landmark,
      notes,
      lat,
      lng,
    } = req.body;

    const userId = req.user.id;

    // ---------- Basic input checks ----------
    if (!bookingSlot || !bookingSlot.startTime || !bookingSlot.endTime) {
      return res.status(400).json({
        message: "bookingSlot with startTime and endTime is required",
      });
    }

    if (lat === undefined || lng === undefined) {
      return res.status(400).json({
        message: "Latitude and Longitude are required",
      });
    }

    if (isNaN(lat) || isNaN(lng)) {
      return res.status(400).json({
        message: "Latitude and Longitude must be valid numbers",
      });
    }

    // ---------- Fetch user ----------
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ---------- Fetch provider (with linked user for name/phone) ----------
    const provider = await providerModel
      .findById(providerId)
      .populate("userId", "fullname phoneNumber profileImage");

    if (!provider) {
      return res.status(404).json({ message: "Provider not found" });
    }

    if (provider.status !== "approved") {
      return res.status(400).json({
        message: "This provider is not approved yet",
      });
    }

    if (!provider.availability) {
      return res.status(400).json({
        message: "Provider is currently not available",
      });
    }

    // ---------- Category checks ----------
    const categoryExist = await categoryModel.findById(categoryId);
    if (!categoryExist) {
      return res.status(400).json({ message: "Category does not exist" });
    }

    const providerOffersCategory = provider.categories.find(
      (catId) => catId.category.toString() === categoryId.toString(),
    );

    if (!providerOffersCategory) {
      return res.status(400).json({
        message: "This provider does not offer the selected category",
      });
    }

    const [stateData, districtData, cityData] = await Promise.all([
      stateModel.findById(state),
      districtModel.findById(district),
      cityModel.findById(city),
    ]);
    // ---------- Date check ----------
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const userDate = new Date(bookingDate);

    if (userDate < today) {
      return res.status(400).json({ message: "Invalid booking date" });
    }
    const bookingStartTime = convertSlotToDate(
      bookingDate,
      bookingSlot.startTime,
    );

    const bookingEndTime = convertSlotToDate(bookingDate, bookingSlot.endTime);
    // ---------- Slot clash check (only active statuses block a slot) ----------
    const blockingStatuses = ["pending", "accepted", "in_progress"];

    const alreadyBooking = await bookingsModel.findOne({
      "providerSnapshot.providerObjectId": providerId,
      "userSnapshot.userObjectId": userId,
      bookingDate: userDate,
      "bookingSlot.startTime": bookingStartTime,
      "bookingSlot.endTime": bookingEndTime,
      bookingStatus: { $in: blockingStatuses },
    });
    if (alreadyBooking) {
      return res.status(200).json({
        message: "You already have a booking for this slot with this provider",
        booking: alreadyBooking,
      });
    }

    const bookingSlotAlready = await bookingsModel.findOne({
      "providerSnapshot.providerObjectId": providerId,
      bookingDate: userDate,
      "bookingSlot.startTime": bookingStartTime,
      "bookingSlot.endTime": bookingEndTime,
      bookingStatus: { $in: blockingStatuses },
    });
    if (bookingSlotAlready) {
      return res.status(409).json({ message: "This slot is already booked" });
    }

    // ---------- Duration + pricing ----------
    if (bookingEndTime <= bookingStartTime) {
      return res.status(400).json({
        message: "End time must be after start time",
      });
    }

    const durationHours =
      (bookingEndTime - bookingStartTime) / (1000 * 60 * 60);
    let serviceCharge = 0;
    const checkHourly = provider.categories.some(
      (hor) => hor?.pricing?.priceType === "hourly",
    );

    if (checkHourly) {
      serviceCharge = Math.round(
        providerOffersCategory.pricing.price * durationHours,
      );
    } else {
      serviceCharge = providerOffersCategory.pricing.price;
    }
    const discount = 0;
    const pricing = calculatePricing(serviceCharge, discount);
    // ---------- Create booking ----------
    const bookingId = await generateId("LSP-BK-", "booking");
    const bookingNotes = notes?.trim();
    const bookingData = {
      bookingId,
      bookingDate,
      bookingSlot: {
        startTime: bookingStartTime,
        endTime: bookingEndTime,
      },
      durationHours,
      pricing,
      serviceSnapshot: {
        categoryObjectId: categoryExist._id,
        categoryName: categoryExist.name,
        slug: categoryExist.slug,
        price: providerOffersCategory.pricing.price,
        priceType: providerOffersCategory.pricing.priceType,
        serviceImage: categoryExist.icon.url,
        serviceBackground: categoryExist.backgroundColor,
      },
      providerSnapshot: {
        providerObjectId: provider._id,
        providerId: provider.providerId,
        name: provider.userId.fullname,
        phone: provider.userId.phoneNumber,
        rating: provider.rating,
        totalReview: provider.totalReview,
        availability: provider.availability,
        pricingType: provider.pricing?.priceType,
        profileImage: {
          url: provider.userId.profileImage?.url || "",
          fileId: provider.userId.profileImage?.fileId || "",
        },
      },
      userSnapshot: {
        userObjectId: user._id,
        userId: user.userId,
        name: user.fullname,
        phone: user.phoneNumber,
        email: user.email,
        profileImage: {
          url: user.profileImage?.url || "",
          fileId: user.profileImage?.fileId || "",
        },
      },
      statusHistory: [
        {
          status: "pending",
        },
      ],
      serviceLocation: {
        type: "Point",
        coordinates: [Number(lng), Number(lat)],
      },
      serviceAddress: {
        state,
        district,
        city,
        village,
        landmark,
        fullAddress,
      },
      serviceAddressSnapshot: {
        state: stateData.name,
        district: districtData.name,
        city: cityData.name,
        village,
        landmark,
        fullAddress,
      },
    };
    if (bookingNotes) {
      bookingData.notes = bookingNotes;
    }
    const booking = await bookingsModel.create(bookingData);

    return res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (err) {
    console.error("Booking error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
async function getUserAllBooking(req, res) {
  try {
    const { status } = req.query;
  

    const userId = req.user.id;
    const now = new Date();

    const filter = { "userSnapshot.userObjectId": userId };
    if (status && status !== "all") {
      if (status === "upcoming") {
        filter.bookingStatus = {
          $in: ["pending", "accepted"],
        };
        filter["bookingSlot.startTime"] = {
          $gt: now,
        };
      } else if (status === "in progress") {
        filter["bookingSlot.startTime"] = {
          $lte: now,
        };

        filter["bookingSlot.endTime"] = {
          $gte: now,
        };
      } else {
        filter.bookingStatus = status;
      }
    }
    const allBookings = await bookingsModel
      .find(filter)
      .select(
        "bookingId providerSnapshot serviceAddressSnapshot paymentStatus paymentMethod pricing bookingSlot durationHours bookingDate bookingStatus isReviewed serviceSnapshot serviceType rejectionReason rejectionNote cancelReason cancelNote isRescheduled",
      );
    if (allBookings.length === 0) {
      return res
        .status(200)
        .json({ message: "user bookings not found", allBookings: [] });
    }
    return res
      .status(200)
      .json({ message: "user bookings fetch successfully", allBookings });
  } catch (err) {
    console.error("Get all user booking error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
async function getAllProviderBooking(req, res) {
  try {
    const providerId = req.provider._id;

    const allBookings = await bookingsModel
      .find({ "providerSnapshot.providerObjectId": providerId })
      .select(
        "bookingId bookingDate durationHours bookingSlot bookingStatus notes pricing paymentMethod serviceSnapshot serviceAddressSnapshot userSnapshot expiresAt serviceType rejectionReason rejectionNote cancelReason cancelNote",
      )
      .sort({ createdAt: -1 });

    if (allBookings.length === 0) {
      return res.status(200).json({
        status: true,
        message: "bookings not found",
        allBookings: [],
      });
    }
    return res.status(200).json({
      status: true,
      message: "All bookings fetch successfully",
      allBookings,
    });
  } catch (err) {
    console.error("Get all provider booking error", err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}
async function getUserOneBooking(req, res) {
  try {
    const bookingId = req.params.bookingId;
    const userId = req.user.id;
    const booking = await bookingsModel
      .findById(bookingId)
      .select(
        "bookingId providerSnapshot userSnapshot.userObjectId serviceSnapshot.categoryName serviceSnapShot bookingSlot bookingDate bookingStatus durationHours serviceAddressSnapshot paymentMethod pricing",
      )
      .lean();

    if (!booking) {
      return res.status(404).json({ message: "booking not found" });
    }

    if (booking.userSnapshot?.userObjectId.toString() !== userId) {
      return res.status(403).json({ message: "forbidden" });
    }
    return res
      .status(200)
      .json({ message: "user booking fetch successfully", booking });
  } catch (err) {
    console.error("user get one booking error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
async function rescheduleBooking(req, res) {
  try {
    const { bookingDate, startTime, endTime, rescheduleNotes } = req.body;
    const userId = req.user.id;
    const bookingId = req.params.bookingId;

    if (!bookingDate) {
      return res.status(400).json({
        message: "Booking date is required",
      });
    }

    if (!startTime || !endTime) {
      return res.status(400).json({
        message: "Booking Slot with start and end time",
      });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const userDate = new Date(bookingDate);

    if (userDate < today) {
      return res.status(400).json({ message: "Invalid booking date" });
    }
    const bookingStartTime = convertSlotToDate(bookingDate, startTime);
    const bookingEndTime = convertSlotToDate(bookingDate, endTime);

    if (bookingEndTime <= bookingStartTime) {
      return res.status(400).json({
        message: "End time must be after start time",
      });
    }
    const booking = await bookingsModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    if (booking.isRescheduled) {
      return res.status(400).json({
        message: "This booking has already been rescheduled once.",
      });
    }
    const provider = await providerModel.findById(
      booking.providerSnapshot.providerObjectId,
    );
    if (!provider) {
      return res.status(404).json({
        message: "provider not found",
      });
    }
    if (!provider.availability) {
      return res.status(400).json({
        message: "provider is not available",
      });
    }
    if (
      !booking.userSnapshot?.userObjectId ||
      booking.userSnapshot?.userObjectId.toString() !== userId.toString()
    ) {
      return res.status(403).json({
        message: "forbidden",
      });
    }
    const allowedStatus = ["pending", "accepted"];
    if (!allowedStatus.includes(booking.bookingStatus)) {
      return res.status(400).json({
        message: "Invalid booking status",
      });
    }
    const slotFull = await bookingsModel.findOne({
      _id: { $ne: bookingId },
      bookingStatus: {
        $in: ["pending", "accepted", "in_progress"],
      },
      "providerSnapshot.providerObjectId":
        booking.providerSnapshot.providerObjectId,
      bookingDate: userDate,
      "bookingSlot.startTime": bookingStartTime,
      "bookingSlot.endTime": bookingEndTime,
    });
    if (slotFull) {
      return res.status(400).json({
        message: "this slot is already booked",
      });
    }

    if (
      booking.bookingDate.getTime() === userDate.getTime() &&
      booking.bookingSlot.startTime.getTime() === bookingStartTime.getTime() &&
      booking.bookingSlot.endTime.getTime() === bookingEndTime.getTime()
    ) {
      return res.status(400).json({
        message: "Please select a different date or time to reschedule.",
      });
    }
    const notes = rescheduleNotes?.trim();
    const durationHours =
      (bookingEndTime - bookingStartTime) / (1000 * 60 * 60);
    booking.bookingDate = userDate;
    booking.durationHours = durationHours;
    booking.bookingSlot.startTime = bookingStartTime;
    booking.bookingSlot.endTime = bookingEndTime;
    if (notes) {
      booking.rescheduledNotes = notes;
    }
    booking.isRescheduled = true;

    booking.statusHistory.push({
      status: "rescheduled",
      changedAt: new Date(),
    });
    await booking.save();
    return res.status(200).json({
      message: "Booking Reschedule successfully.",
      booking,
    });
  } catch (err) {
    console.error("Reschedule Booking Error:", err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}
async function providerAcceptBooking(req, res) {
  try {
    const providerId = req.provider._id;
    const bookingId = req.params.bookingId;

    const booking = await bookingsModel.findById(bookingId);
    console.log(booking);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    if (
      booking.providerSnapshot?.providerObjectId.toString() !==
      providerId.toString()
    ) {
      return res.status(403).json({ message: "forbidden" });
    }
    if (booking.bookingStatus !== "pending") {
      return res.status(400).json({ message: "Invalid booking status" });
    }
    const bookingSlotAlready = await bookingsModel.findOne({
      providerId,
      bookingSlot: booking.bookingSlot,
      bookingDate: booking.bookingDate,
      bookingStatus: "accepted",
      _id: { $ne: bookingId },
    });
    if (bookingSlotAlready) {
      return res.status(409).json({ message: "Booking slot already booked" });
    }
    const now = new Date();
    booking.bookingStatus = "accepted";
    booking.acceptedAt = now;
    booking.statusHistory.push({
      status: "accepted",
      changedAt: now,
    });
    await booking.save();

    return res
      .status(200)
      .json({ message: "Booking accepted successfully", booking });
  } catch (err) {
    console.error("booking accepted error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
async function providerRejectBooking(req, res) {
  try {
    const { reason, reasonNote } = req.body;
    const bookingId = req.params.bookingId;
    const providerId = req.provider._id;
    if (!reason) {
      return res.status(400).json({
        message: "Reject reason is required!",
      });
    }
    const note = reasonNote?.trim();
    if (!note || note.length < 10 || note.length > 100) {
      return res.status(400).json({
        message: "Reject notes must be between 10 and 100 characters.",
      });
    }
    const booking = await bookingsModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    if (
      !booking.providerSnapshot?.providerObjectId ||
      booking.providerSnapshot.providerObjectId.toString() !==
        providerId.toString()
    ) {
      return res.status(403).json({ message: "forbidden" });
    }
    if (booking.bookingStatus !== "pending") {
      return res.status(400).json({ message: "Invalid booking status" });
    }

    const now = new Date();
    booking.bookingStatus = "rejected";
    booking.rejectedAt = now;
    booking.rejectionReason = reason;
    booking.rejectionNote = note;
    booking.statusHistory.push({
      status: "rejected",
      changedAt: now,
    });
    await booking.save();

    return res
      .status(200)
      .json({ message: "Booking rejected successfully", booking });
  } catch (err) {
    console.error("booking Reject error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function providerStartBooking(req, res) {
  try {
    const bookingId = req.params.bookingId;
    const providerId = req.provider._id;

    const booking = await bookingsModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    if (
      !booking.providerSnapshot?.providerObjectId ||
      booking.providerSnapshot.providerObjectId.toString() !==
        providerId.toString()
    ) {
      return res.status(403).json({ message: "forbidden" });
    }
    if (booking.bookingStatus !== "accepted") {
      return res.status(400).json({ message: "Invalid booking status" });
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const bookingDate = new Date(booking.bookingDate);
    bookingDate.setHours(0, 0, 0, 0);

    if (today < bookingDate) {
      return res.status(400).json({
        message: "Booking date has not arrived yet",
      });
    }
    const now = new Date();
    booking.bookingStatus = "in_progress";
    booking.statusHistory.push({
      status: "in_progress",
      changedAt: now,
    });
    booking.inProgressAt = now;
    await booking.save();

    return res
      .status(200)
      .json({ message: "Booking start successfully", booking });
  } catch (err) {
    console.error("booking start error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
async function providerCancelBooking(req, res) {
  try {
    const { reason, reasonNote } = req.body;
    const providerId = req.provider._id;
    const bookingId = req.params.bookingId;
    if (!reason) {
      return res.status(400).json({
        message: "Cancel reason is required!",
      });
    }
    const note = reasonNotes?.trim();
    if (!note || note.length < 10 || note.length > 100) {
      return res.status(400).json({
        message: "Cancel notes must be between 10 and 100 characters.",
      });
    }
    const booking = await bookingsModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({
        message: "booking not found",
      });
    }

    if (
      !booking.providerSnapshot?.providerObjectId ||
      booking.providerSnapshot?.providerObjectId?.toString() !==
        providerId.toString()
    ) {
      return res.status(403).json({
        message: "This booking is not your.",
      });
    }
    if (booking.bookingStatus !== "accepted") {
      return res.status(400).json({
        message: "Booking cancelled is only accepted booking",
      });
    }
    const now = new Date();
    booking.bookingStatus = "cancelled";
    booking.cancelNote = reason;
    booking.cancelReason = note;
    booking.cancelledBy = "provider";
    booking.cancelledAt = now;
    booking.statusHistory.push({
      status: "cancelled",
      changedAt: now,
    });
    await booking.save();

    return res.status(200).json({
      success: true,
      message: "Booking cancelled successfully!",
      booking,
    });
  } catch (err) {
    console.error("provider cancel booking error", err);
    return res.status(500).json({
      message: "Internal server Error",
    });
  }
}
async function providerCompletedBooking(req, res) {
  try {
    const bookingId = req.params.bookingId;

    const providerId = req.provider._id;

    const booking = await bookingsModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    if (
      !booking?.providerSnapshot?.providerObjectId ||
      booking?.providerSnapshot?.providerObjectId?.toString() !==
        providerId.toString()
    ) {
      return res.status(403).json({ message: "forbidden" });
    }

    if (booking.bookingStatus !== "in_progress") {
      return res.status(400).json({ message: "Invalid booking status" });
    }
    const now = new Date();
    booking.bookingStatus = "completed";
    booking.completedAt = now;

    booking.statusHistory.push({
      status: "completed",
      changedAt: now,
    });
    await booking.save();

    return res
      .status(200)
      .json({ message: "Booking completed successfully", booking });
  } catch (err) {
    console.error("booking completed error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function userBookingCancel(req, res) {
  try {
    const { reason, reasonNotes } = req.body;

    const userId = req.user.id;
    const bookingId = req.params.bookingId;
    if (!reason) {
      return res.status(400).json({
        message: "Cancel reason is Required!",
      });
    }
    const note = reasonNotes?.trim();
    if (!note || note.length < 10 || note.length > 100) {
      return res.status(400).json({
        message: "Cancel notes must be between 10 and 100 characters.",
      });
    }
    const booking = await bookingsModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    if (
      !booking.userSnapshot.userObjectId ||
      booking.userSnapshot.userObjectId.toString() !== userId.toString()
    ) {
      return res.status(403).json({ message: "forbidden" });
    }
    if (
      booking.bookingStatus !== "pending" &&
      booking.bookingStatus !== "accepted"
    ) {
      return res.status(400).json({ message: "Invalid booking status" });
    }
    const now = new Date();
    booking.bookingStatus = "cancelled";
    booking.cancelledAt = now;
    booking.cancelReason = reason;
    booking.cancelNote = note;
    booking.cancelledBy = "user";
    booking.statusHistory.push({
      status: "cancelled",
      changedAt: now,
    });
    await booking.save();
    return res
      .status(200)
      .json({ message: "Booking cancelled successfully", booking });
  } catch (err) {
    console.error("Booking cancellation  error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  userBookingCreate,
  getUserAllBooking,
  getAllProviderBooking,
  getUserOneBooking,
  rescheduleBooking,
  providerAcceptBooking,
  providerRejectBooking,
  providerCancelBooking,
  providerStartBooking,
  providerCompletedBooking,
  userBookingCancel,
};
