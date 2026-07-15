const providerModel = require("../models/provider.model");

const providerMiddleware = async (req, res, next) => {
  const provider = await providerModel.findOne({
    userId: req.user.id,
    status: "Approved",
  });

  if (!provider) {
    return res.status(403).json({
      message: "Provider access denied",
    });
  }

  req.provider = provider;

  next();
};

module.exports = providerMiddleware;