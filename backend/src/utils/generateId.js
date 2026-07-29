const counterModel = require("../models/counter.model");

async function generateId(prefix, counterName) {
  const counter = await counterModel.findOneAndUpdate(
    { name: counterName },
    { $inc: { sequence: 1 } },
    { new: true, upsert: true },
  );

  return `${prefix}${String(counter.sequence).padStart(4, "0")}`;
}
module.exports = { generateId };
