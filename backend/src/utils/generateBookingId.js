const Counter = require("../models/counter.model");

const generateBookingId = async () => {
  const counter = await Counter.findByIdAndUpdate(
    "booking",
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );

  const now = new Date();

  const year = now.getFullYear().toString().slice(-2);
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const serial = String(counter.seq).padStart(4, "0");

  return `LSC${year}${month}${day}${serial}`;
};

module.exports = generateBookingId;