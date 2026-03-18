const mongoose = require('mongoose')

const validateObjectId = (field) => {
  return (req, res, next) => {
    try {
      const id = req.params[field];

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: `Invalid ${field}` });
      }

      next();
    } catch (err) {
      console.error('validateObjectId error:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
};

module.exports = validateObjectId;