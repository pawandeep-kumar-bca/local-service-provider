const bookingsModel = require("../models/booking.model");
const providerModel = require("../models/provider.model");
const categoryModel = require("../models/category.model");
const generateBookingId = require("../utils/generateBookingId");
const UserModel = require("../models/User.model");
// Converts "10:30 AM" / "02:00 PM" style strings into total minutes since midnight
function parseTimeToMinutes(timeStr) {
  const [time, meridian] = timeStr.trim().split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (meridian === "PM" && hours !== 12) hours += 12;
  if (meridian === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
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

    const providerOffersCategory = provider.categories.some(
      (catId) => catId.toString() === categoryId.toString(),
    );
    if (!providerOffersCategory) {
      return res.status(400).json({
        message: "This provider does not offer the selected category",
      });
    }

    // ---------- Date check ----------
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const userDate = new Date(bookingDate);
    if (userDate < today) {
      return res.status(400).json({ message: "Invalid booking date" });
    }

    // ---------- Slot clash check (only active statuses block a slot) ----------
    const blockingStatuses = ["pending", "accepted", "in_progress"];

    const alreadyBooking = await bookingsModel.findOne({
      providerId,
      userId,
      bookingDate,
      "bookingSlot.startTime": bookingSlot.startTime,
      "bookingSlot.endTime": bookingSlot.endTime,
      bookingStatus: { $in: blockingStatuses },
    });
    if (alreadyBooking) {
      return res.status(200).json({
        message: "You already have a booking for this slot with this provider",
        booking: alreadyBooking,
      });
    }

    const bookingSlotAlready = await bookingsModel.findOne({
      providerId,
      bookingDate,
      "bookingSlot.startTime": bookingSlot.startTime,
      "bookingSlot.endTime": bookingSlot.endTime,
      bookingStatus: { $in: blockingStatuses },
    });
    if (bookingSlotAlready) {
      return res.status(409).json({ message: "This slot is already booked" });
    }

    // ---------- Duration + pricing ----------
    const startMinutes = parseTimeToMinutes(bookingSlot.startTime);
    const endMinutes = parseTimeToMinutes(bookingSlot.endTime);

    if (endMinutes <= startMinutes) {
      return res.status(400).json({
        message: "End time must be after start time",
      });
    }

    const durationHours = (endMinutes - startMinutes) / 60;

    let serviceCharge = 0;
    if (provider.pricing.priceType === "hourly") {
      serviceCharge = provider.pricing.price * durationHours;
    } else {
      serviceCharge = provider.pricing.price;
    }

    const platformFee = (serviceCharge * 2) / 100;
    const discount = 0;
    const totalAmount = serviceCharge + platformFee - discount;

    // ---------- Create booking ----------
    const bookingId = await generateBookingId();

    const booking = await bookingsModel.create({
      bookingId,
      providerId,
      categoryId,
      userId,
      bookingDate,
      bookingSlot,
      notes,
      pricing: {
        serviceCharge,
        platformFee,
        discount,
        totalAmount,
      },
      providerSnapshot: {
        providerId: provider._id,
        name: provider.userId.fullname,
        phone: provider.userId.phoneNumber,
        category: categoryExist.name,
        profileImage: { 
          url: provider.userId.profileImage?.url || "",
          fileId: provider.userId.profileImage?.fileId || "",
        },
      },
      userSnapshot: {
        userId: user._id,
        name: user.fullname,
        phone: user.phoneNumber,
        profileImage: {
          url:user.profileImage?.url || "",
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
    });

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
    const userId = req.user.id;

    const allBookings = await bookingsModel
      .find({ userId })
      .populate(
        "providerId",
        "providerName phoneNumber price city profileImage status rating totalReview availability",
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
async function getUserOneBooking(req, res) {
  try {
    const bookingId = req.params.id;
    const userId = req.user.id;
    const booking = await bookingsModel
      .findById(bookingId)
      .populate(
        "providerId",
        "providerName phoneNumber price city profileImage status rating totalReview availability",
      )
      .populate("serviceId", "name")
      .lean();
    if (!booking) {
      return res.status(404).json({ message: "booking not found" });
    }
    if (booking.userId.toString() !== userId) {
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

async function providerAcceptBooking(req, res) {
  try {
    const userId = req.user.id;
    const bookingId = req.params.id;
    const provider = await providerModel.findOne({
      userId: userId,
    });
    if (!provider) {
      return res.status(404).json({ message: "Provider not found" });
    }
    const providerId = provider._id;

    const booking = await bookingsModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    if (booking.providerId.toString() !== providerId.toString()) {
      return res.status(403).json({ message: "forbidden" });
    }
    if (booking.bookingStatus !== "Pending") {
      return res.status(400).json({ message: "Invalid booking status" });
    }
    const bookingSlotAlready = await bookingsModel.findOne({
      providerId,
      bookingSlot: booking.bookingSlot,
      bookingDate: booking.bookingDate,
      bookingStatus: "Accepted",
      _id: { $ne: bookingId },
    });
    if (bookingSlotAlready) {
      return res.status(409).json({ message: "Booking slot already booked" });
    }
    booking.bookingStatus = "Accepted";
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
    const userId = req.user.id;
    const bookingId = req.params.id;
    const provider = await providerModel.findOne({
      userId: userId,
    });
    if (!provider) {
      return res.status(404).json({ message: "Provider not found" });
    }
    const providerId = provider._id;

    const booking = await bookingsModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    if (booking.providerId.toString() !== providerId.toString()) {
      return res.status(403).json({ message: "forbidden" });
    }
    if (booking.bookingStatus !== "Pending") {
      return res.status(400).json({ message: "Invalid booking status" });
    }
    booking.bookingStatus = "Rejected";
    await booking.save();

    return res
      .status(200)
      .json({ message: "Booking Reject successfully", booking });
  } catch (err) {
    console.error("booking Reject error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function providerStartBooking(req, res) {
  try {
    const userId = req.user.id;
    const bookingId = req.params.id;
    const provider = await providerModel.findOne({
      userId: userId,
    });
    if (!provider) {
      return res.status(404).json({ message: "Provider not found" });
    }
    const providerId = provider._id;

    const booking = await bookingsModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    if (booking.providerId.toString() !== providerId.toString()) {
      return res.status(403).json({ message: "forbidden" });
    }
    if (booking.bookingStatus !== "Accepted") {
      return res.status(400).json({ message: "Invalid booking status" });
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const bookingDate = new Date(booking.bookingDate);
    bookingDate.setHours(0, 0, 0, 0);

    if (bookingDate.getTime() !== today.getTime()) {
      return res.status(400).json({
        message: "Booking date is not today",
      });
    }
    booking.bookingStatus = "Started";
    await booking.save();

    return res
      .status(200)
      .json({ message: "Booking start successfully", booking });
  } catch (err) {
    console.error("booking start error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function providerCompletedBooking(req, res) {
  try {
    const userId = req.user.id;
    const bookingId = req.params.id;
    const provider = await providerModel.findOne({
      userId: userId,
    });
    if (!provider) {
      return res.status(404).json({ message: "Provider not found" });
    }
    const providerId = provider._id;

    const booking = await bookingsModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    if (booking.providerId.toString() !== providerId.toString()) {
      return res.status(403).json({ message: "forbidden" });
    }
    if (booking.bookingStatus !== "Start") {
      return res.status(400).json({ message: "Invalid booking status" });
    }

    booking.bookingStatus = "Completed";
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
    const userId = req.user.id;
    const bookingId = req.params.id;

    const booking = await bookingsModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    if (booking.userId.toString() !== userId.toString()) {
      return res.status(403).json({ message: "forbidden" });
    }
    if (
      booking.bookingStatus !== "Pending" &&
      booking.bookingStatus !== "Accepted"
    ) {
      return res.status(400).json({ message: "Invalid booking status" });
    }

    booking.bookingStatus = "Cancelled";
    await booking.save();

    return res
      .status(200)
      .json({ message: "Booking cancelled successfully", booking });
  } catch (err) {
    console.error("booking completed error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  userBookingCreate,
  getUserAllBooking,
  getUserOneBooking,
  providerAcceptBooking,
  providerRejectBooking,
  providerStartBooking,
  providerCompletedBooking,
  userBookingCancel,
};
