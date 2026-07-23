const providerModel = require("../models/provider.model");

const providerMiddleware = async (req, res, next) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const provider = await providerModel.findOne({ userId: req.user.id });

    if (!provider) {
      return res.status(403).json({
        message: "You are not registered as a provider",
      });
    }

    if (provider.status === "pending") {
      return res.status(403).json({
        message: "Your provider application is under review",
      });
    }

    if (provider.status === "rejected") {
      return res.status(403).json({
        message: "Your provider application was rejected",
      });
    }

    // status === "approved" from here on

    req.provider = provider;

    next();
  } catch (err) {
    console.error("providerMiddleware error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = providerMiddleware;